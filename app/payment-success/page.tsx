"use client";

import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PaymentSuccessPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main content container */}
      <div
        className={`max-w-lg w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        {/* Success Headline */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Payment Successful
          </h1>
          <p className="text-gray-600">Your enrollment has been confirmed</p>
        </div>

        {/* Main content */}
        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Course Access Details Sent
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Thank you for your purchase. We&apos;ve sent the course access
                  link to your email address.
                </p>
              </div>
            </div>
          </div>

          <div className="pl-8">
            <p className="text-sm text-gray-500 mb-2">
              Please check your inbox and spam folder. You can start learning
              immediately once you access the course materials.
            </p>
            <p className="text-sm text-gray-500">
              Your Affiliated Certificate with IIIT Bhubaneswar(Government
              University) will be available in next 48 hours.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          <div className="text-center">
            <Link
              href="/support"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              Need help? Contact Support
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            Order confirmation and receipt have been sent to your email
          </p>
        </div>
      </div>
    </div>
  );
}
