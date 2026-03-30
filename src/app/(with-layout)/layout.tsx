import React from "react";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";


export default function WithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      {/*<AnimatedRoutes>{children}</AnimatedRoutes>*/}
      {children}
      <Footer />
    </>
  );
}