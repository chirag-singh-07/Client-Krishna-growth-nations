import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Script from "next/script";

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
  description: "Best Platform for online learning ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        {/* Sanitize attributes that some browser extensions inject (pre-hydration) */}
        <Script id="sanitize-extension-attrs" strategy="beforeInteractive">
          {`(function(){try{var el=document && document.documentElement; if(!el) return; var blocked=['crxlauncher','data-crxlauncher']; blocked.forEach(function(a){ if(el.hasAttribute(a)) el.removeAttribute(a); }); // remove any attribute added by extensions that match known names
            }catch(e){console && console.debug && console.debug('sanitize attrs failed', e);} })();`}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
