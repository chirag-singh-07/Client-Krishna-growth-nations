"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { X, Mail, User, CheckCircle, Phone } from "lucide-react";
import { handleSendCourseEmail } from "@/utils/sendEmail";

interface ModalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: string;
    title: string;
    price: number;
  };
}

export default function ModalDialog({
  isOpen,
  onClose,
  course,
}: ModalDialogProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [checkBtn, setCheckBtn] = useState(false); // <-- New state
  // const courseId = localStorage.getItem("courseId");
  // console.log("Course ID from localStorage:", courseId);
  const [razorpayReady, setRazorpayReady] = useState(false);
  useEffect(() => {
    const checkRazorpay = setInterval(() => {
      if (typeof window !== "undefined" && window.Razorpay) {
        setRazorpayReady(true);
        clearInterval(checkRazorpay);
      }
    }, 300);
    return () => clearInterval(checkRazorpay);
  }, []);

  const handleInputChange = (
    field: "name" | "email" | "phone",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContinue = () => {
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim()
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      setStep(2);
    }
  };

  const handleConfirm = async () => {
    setCheckBtn(true);
    if (!razorpayReady) {
      alert("Payment system is still loading. Please wait a moment.");
      return;
    }
    // support a local mock mode for testing without real payments
    const isMock = process.env.NEXT_PUBLIC_RAZORPAY_MOCK === "1";
    if (isMock) {
      // simulate network/processing delay
      handleClose();
      setTimeout(() => {
        // mimic a successful payment flow
        handleSendCourseEmail();
        window.location.href = `/payment-success`;
      }, 700);
      return;
    }
    handleClose(); // Close modal on success
    try {
      // Step 1: Create order from your backend
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: course.price,
          courseTitle: course.title,
        }),
      });

      let data: unknown = null;
      try {
        data = await res.json();
      } catch {
        // non-json response
        const text = await res.text();
        throw new Error(
          `Razorpay API returned non-JSON: ${res.status} ${text}`
        );
      }

      if (!res.ok) {
        const d = data as unknown as { error?: string; message?: string };
        const msg = d?.error || d?.message || JSON.stringify(d);
        throw new Error(`Razorpay API error: ${res.status} ${msg}`);
      }
      const storedUser = localStorage.getItem("userData");
      const userData = storedUser
        ? JSON.parse(storedUser)
        : { name: "Johan", email: "johan@gmail.com" };

      type RazorpayOrder = {
        order?: { amount?: number; id?: string };
        error?: string;
        message?: string;
      };
      const d = data as unknown as RazorpayOrder;

      // Step 2: Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: d.order?.amount ?? course.price * 100,
        currency: "INR",
        name: "Growth Nation", // ✅ Your brand name
        description: course.title, // ✅ Course name on checkout
        image: "/logo.png", // ✅ Your logo (keep in /public folder)
        order_id: d.order?.id,
        // redirect: true, // ✅ forces redirect instead of popup (fix for in-app browsers)
        handler: function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          // alert("✅ Payment successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          handleSendCourseEmail();
          window.location.href = `/payment-success`;
        },
        prefill: {
          name: userData?.name as string,
          email: userData?.email as string,
          contact: (userData?.phone as string) || undefined,
        },
        notes: {
          course: course.title, // ✅ metadata (optional)
          customer_email: userData?.email,
        },
        theme: {
          color: "#6366f1", // ✅ brand color
        },
        modal: {
          ondismiss: function () {
            window.location.href = `/payment-failed`;
          },
        },
      };

      const win = window as unknown as {
        Razorpay?: { new (opts: unknown): { open: () => void } };
      };
      const Razor = win.Razorpay;
      if (!Razor) {
        throw new Error("Razorpay SDK not available");
      }
      const razor = new Razor(options as unknown);
      razor.open();
      //   const razor = new Razor(options as unknown);

      //   // force system browser redirect
      //   if (options.redirect) {
      //     // Razorpay hosted checkout URL
      //     const paymentUrl = `https://api.razorpay.com/v1/checkout/embedded?order_id=${options.order_id}&key_id=${options.key}`;
      //     window.location.href = paymentUrl; // ✅ always system browser
      //   } else {
      //     razor.open();
      //   }
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Something went wrong. Try again.");
      window.location.href = `/payment-failed`;
    } finally {
      setCheckBtn(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 transform transition-all animate-in zoom-in-95 duration-300">
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-[1px]">
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 rounded-full hover:bg-gray-100/80 hover:scale-110 z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="relative p-8">
          {step === 1 ? (
            <>
              {/* Step 1: Form */}
              <div className="mb-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                  Confirm Your Email
                </h2>
                <p className="text-gray-600 text-lg">
                  We’ll send your course access link to this email
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white hover:border-gray-300 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your phone number"
                      maxLength={15}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleContinue}
                disabled={
                  !formData.name.trim() ||
                  !formData.email.trim() ||
                  !formData.phone.trim()
                }
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform cursor-pointer"
              >
                Continue to Next Step
              </button>
            </>
          ) : (
            <>
              {/* Step 2: Confirmation */}
              <div className="mb-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                  Almost there!
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Please confirm your email address
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100/50 shadow-inner space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Your email address:
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <p className="font-bold text-xl text-gray-900 break-all">
                        {formData.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Phone number:
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <p className="font-bold text-xl text-gray-900 break-all">
                        {formData.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 hover:scale-[1.02] active:scale-[0.98] transform cursor-pointer"
                >
                  ← Go Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform cursor-pointer"
                  disabled={checkBtn}
                >
                  {checkBtn ? "Processing...." : "Yes, Continue →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
