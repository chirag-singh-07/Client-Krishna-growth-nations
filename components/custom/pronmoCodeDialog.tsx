"use client";

import type React from "react";
import { useState } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";

interface PromoCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  course: {
    id: string;
    title: string;
    price: number;
    PromoCodePrice?: number;
    promoCode?: string;
  };
}

export default function PromoCodeModal({
  isOpen,
  onClose,
  course,
  promoCode,
  setPromoCode,
}: PromoCodeModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleContinue = () => {
    if (promoCode.trim()) {
      setStep(2);
    }
  };
  const handleConfirm = async () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      const correctCode = course.promoCode || "GROWTH50"; // from props
      if (promoCode.toUpperCase() === correctCode) {
        setIsValid(true);
        localStorage.setItem("promoCode", promoCode.toUpperCase());

        // ✅ Close the modal automatically after success
        setTimeout(() => {
          handleClose();
        }, 800); // small delay so user sees "Applied ✅"
      } else {
        setError("❌ Invalid promo code. Please try again.");
        setIsValid(false);
      }
      setLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setStep(1);
    setIsValid(false);
    setError("");
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={22} />
        </button>

        {step === 1 ? (
          <>
            {/* Step 1: Enter Promo */}
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Unlock Your Course
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Enter your promo code to check eligibility
            </p>

            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none mb-6 text-lg"
              placeholder="Enter your promo code"
            />
            <button
              onClick={handleContinue}
              disabled={!promoCode.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform disabled:opacity-50"
            >
              Continue →
            </button>
          </>
        ) : (
          <>
            {/* Step 2: Confirm */}
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Confirm Promo Code
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Checking <span className="font-semibold">{promoCode}</span>
            </p>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-lg mb-4">
                <AlertTriangle size={18} /> {error}
              </div>
            )}

            {isValid && (
              <div className="bg-green-100 p-4 rounded-xl mb-6 flex items-center gap-2">
                <CheckCircle className="text-green-600" />
                <span>
                  Promo applied! Final price:{" "}
                  <span className="font-bold text-green-700">
                    ₹{course.price - 200}
                  </span>
                </span>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading || isValid}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl shadow-md hover:bg-green-700 transition-transform hover:scale-105 disabled:opacity-50"
              >
                {loading ? "Checking..." : isValid ? "Applied ✅" : "Apply"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
