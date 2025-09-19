"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOnWebnairPage = pathname === "/webnair";

  return (
    <>
      {!isOnWebnairPage && <Navbar />}
      {children}
      {!isOnWebnairPage && <Footer />}
    </>
  );
}
