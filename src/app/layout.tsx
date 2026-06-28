import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { DesktopNav } from "@/components/Navigation/DesktopNav";
import { MobileNav } from "@/components/Navigation/MobileNav";
import { FloatingContactBar } from "@/components/common/FloatingContactBar";
import { Footer } from "@/components/common/Footer";
import { Preloader } from "@/components/common/Preloader";
import { SmoothScroll } from "@/components/common/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanakadurga Borewells & Enterprises | Premium Borewell Services",
  description: "Professional borewell drilling, cleaning, and repair services with 15+ years of experience. Get a free quotation today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col transition-colors duration-300 selection:bg-brand-gold/30 selection:text-brand-navy overflow-x-hidden">
        <SmoothScroll>
          <Preloader />
          <DesktopNav />
          <MobileNav />
          <main className="flex-grow w-full relative overflow-hidden">
            {children}
          </main>
          <Footer />
          <FloatingContactBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
