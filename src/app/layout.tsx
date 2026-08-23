import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dead Rails Wiki 2026 | Train Fuel Calculator & Codes",
  description: "Official Roblox Dead Rails Wiki & Database. Calculate boiler fuel, optimize train armor, check DPS tier lists, and claim working codes.",
  metadataBase: new URL("https://deadrails.robloxwikihub.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070a0f] text-slate-100">{children}</body>
    </html>
  );
}
