"use client";

import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PaymentFailedPage() {
  const handleRetryPayment = () => {
    // Handle retry payment logic
    console.log("Retrying payment...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 text-center space-y-6">
          {/* Animated Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-red-50 rounded-full p-6 border-4 border-red-100">
                <AlertCircle className="w-16 h-16 text-red-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-600 tracking-tight">
              Payment Failed
            </h1>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <p className="text-gray-600 text-lg leading-relaxed">
              Oops! Something went wrong while processing your payment.
            </p>
            <p className="text-sm text-gray-500">
              Please check your payment details and try again, or contact
              support if the problem persists.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={handleRetryPayment}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Retry Payment
            </Button>

            <Link href="/">
              <Button
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 bg-transparent"
                size="lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          {/* Support Link */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Need help?{" "}
              <button className="text-red-600 hover:text-red-700 underline font-medium transition-colors">
                Contact Support
              </button>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-50 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
