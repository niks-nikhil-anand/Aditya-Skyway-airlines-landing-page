import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./landing.css";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const accentFont = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Skyway | Private Aviation, Personally Considered",
  description: "Explore private jet and helicopter charter possibilities with Aditya Skyway. Plan a personalised itinerary for business, leisure and special occasions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
