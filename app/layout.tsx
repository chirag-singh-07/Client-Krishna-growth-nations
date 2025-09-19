import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ConditionalLayoutWrapper from "@/components/custom/ConditionalLayoutWrappe";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Growth Nation",
  description: "Best Platform for online learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Razorpay Checkout Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        {/* Sanitization script */}
        <Script id="sanitize-extension-attrs" strategy="beforeInteractive">
          {`(function(){
            try {
              var el = document && document.documentElement;
              if(!el) return;
              var blocked = ['crxlauncher','data-crxlauncher'];
              blocked.forEach(function(a){
                if(el.hasAttribute(a)) el.removeAttribute(a);
              });
            } catch(e) {
              console && console.debug && console.debug('sanitize attrs failed', e);
            }
          })();`}
        </Script>

        {/* Client-side wrapper handles Navbar/Footer logic */}
        <ConditionalLayoutWrapper>{children}</ConditionalLayoutWrapper>
      </body>
    </html>
  );
}
