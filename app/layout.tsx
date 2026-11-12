import type { Metadata } from "next";
import { Suspense } from "react";
import { Cormorant_Garamond, DM_Sans, Manjari } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteHeaderWithPath } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const manjari = Manjari({
  variable: "--font-manjari",
  subsets: ["malayalam", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Traditional Kerala Astrology`,
    template: `%s | ${site.name}`,
  },
  description:
    "Gangothri Jyothishalayam — traditional Kerala astrology: Jathakam, Prasnam, Muhurtham, Porutham, Thamboola Prasnam and Ashtamangala Prasnam, with online consultations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} ${manjari.variable} h-full`}
    >
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-maroon-800 focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Suspense fallback={<SiteHeader pathname={null} />}>
          <SiteHeaderWithPath />
        </Suspense>
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
