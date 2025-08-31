import { NextResponse } from "next/server";
import crypto from "crypto";

// Stripe-like HMAC verification for Razorpay webhooks
export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    console.error("RAZORPAY_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const bodyText = await request.text();
  const signature = request.headers.get("x-razorpay-signature") || "";

  // compute expected signature (HMAC SHA256 of raw body)
  const expected = crypto.createHmac("sha256", secret).update(bodyText).digest("hex");

  let valid = false;
  // try hex buffer compare first; fall back to utf8 comparison if needed
  try {
    const expectedBuf = Buffer.from(expected, "hex");
    const sigBuf = Buffer.from(signature, "hex");
    if (expectedBuf.length === sigBuf.length && crypto.timingSafeEqual(expectedBuf, sigBuf)) valid = true;
  } catch {
    try {
      const expectedUtf = Buffer.from(expected, "utf8");
      const sigUtf = Buffer.from(signature, "utf8");
      if (expectedUtf.length === sigUtf.length && crypto.timingSafeEqual(expectedUtf, sigUtf)) valid = true;
    } catch {
      valid = false;
    }
  }

  if (!valid) {
    console.warn("Invalid Razorpay webhook signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let payload: unknown = null;
  try {
    payload = JSON.parse(bodyText) as unknown;
  } catch (err) {
    console.error("Failed to parse webhook JSON", err);
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }

  const payloadObj = payload as Record<string, unknown>;
  const event = (payloadObj["event"] as string | undefined) || undefined;
  console.log("Razorpay webhook received:", event);
  // Minimal handling: log and return 200. Extend this to update DB/order status.
  try {
    if (event === "payment.captured") {
      // example: extract payment info (narrow payload locally)
      const p = payloadObj["payload"] as Record<string, unknown> | undefined;
      const payment = (p?.["payment"] as Record<string, unknown> | undefined)?.["entity"] as Record<string, unknown> | undefined;
      console.log("Payment captured:", payment?.["id"], payment?.["amount"], payment?.["notes"]);
      // TODO: update order status in DB, send confirmation email, etc.
    } else if (event === "payment.failed") {
      const p = payloadObj["payload"] as Record<string, unknown> | undefined;
      const payment = (p?.["payment"] as Record<string, unknown> | undefined)?.["entity"] as Record<string, unknown> | undefined;
      console.log("Payment failed:", payment?.["id"], payment?.["error_code"] || payment?.["status"]);
    } else {
      // eslint-disable-next-line no-console
      console.log("Unhandled razorpay event:", event);
    }
  } catch (err) {
    console.error("Error processing webhook:", err);
  }

  return NextResponse.json({ ok: true });
}
