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
  try {
    // try hex buffer compare first
    const expectedBuf = Buffer.from(expected, "hex");
    const sigBuf = Buffer.from(signature, "hex");
    if (expectedBuf.length === sigBuf.length && crypto.timingSafeEqual(expectedBuf, sigBuf)) {
      valid = true;
    }
  } catch (e) {
    // fallback: compare raw utf8 strings in timing-safe manner
    try {
      const expectedUtf = Buffer.from(expected, "utf8");
      const sigUtf = Buffer.from(signature, "utf8");
      if (expectedUtf.length === sigUtf.length && crypto.timingSafeEqual(expectedUtf, sigUtf)) valid = true;
    } catch (e2) {
      valid = false;
    }
  }

  if (!valid) {
    console.warn("Invalid Razorpay webhook signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let payload: any = null;
  try {
    payload = JSON.parse(bodyText);
  } catch (e) {
    console.error("Failed to parse webhook JSON", e);
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }

  const event = payload.event;
  console.log("Razorpay webhook received:", event);
  // Minimal handling: log and return 200. Extend this to update DB/order status.
  try {
    if (event === "payment.captured") {
      // example: extract payment info
      const payment = payload.payload?.payment?.entity;
      console.log("Payment captured:", payment?.id, payment?.amount, payment?.notes);
      // TODO: update order status in DB, send confirmation email, etc.
    } else if (event === "payment.failed") {
      const payment = payload.payload?.payment?.entity;
      console.log("Payment failed:", payment?.id, payment?.error_code || payment?.status);
    } else {
      console.log("Unhandled razorpay event:", event);
    }
  } catch (e) {
    console.error("Error processing webhook:", e);
  }

  return NextResponse.json({ ok: true });
}
