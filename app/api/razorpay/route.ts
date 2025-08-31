import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const isMock = process.env.RAZORPAY_MOCK === "1";
let razorpay: any = null;

export async function POST(request: Request) {
  const body = await request.json();
  const { amount, courseTitle } = body;

  const options = {
    amount: amount * 100, // in paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
    notes: { course: courseTitle },
  };

  try {
    if (isMock) {
      // return a fake order object for local testing
      const fakeOrder = {
        id: `order_mock_${Date.now()}`,
        amount: options.amount,
        currency: options.currency,
        receipt: options.receipt,
        notes: options.notes,
      };
      return NextResponse.json({ order: fakeOrder });
    }

    // Ensure Razorpay is initialized with server-side keys
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      console.error("Razorpay keys missing: set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET or enable mock mode.");
      return NextResponse.json({ error: "Razorpay server keys missing" }, { status: 500 });
    }

    if (!razorpay) {
      razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    }

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ order });
  } catch (error) {
  const err: any = error;
  console.error("Razorpay Error:", err);
  if (err && err.stack) console.error(err.stack);
  const message = err?.message || (typeof err === "string" ? err : JSON.stringify(err)) || "Failed to create Razorpay order";
  return NextResponse.json({ error: message }, { status: 500 });
  }
}
