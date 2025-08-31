"use client";
import { useEffect, useState } from "react";

export default function MockBanner() {
  // avoid any window access during SSR or first render to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // env var is inlined at build time; we keep it as a fallback
  const envMock = process.env.NEXT_PUBLIC_RAZORPAY_MOCK === "1";

  // check runtime window flag only after mount
  const isMockRuntime = mounted && typeof window !== "undefined" && !!(window as any).__RZP_MOCK__;

  if (!envMock && !isMockRuntime) return null;

  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 60 }}>
      <div className="px-4 py-2 bg-yellow-300 text-black rounded-lg shadow-lg border border-yellow-400">
        MOCK MODE: Razorpay disabled — no real payments
      </div>
    </div>
  );
}
