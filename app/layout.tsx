import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap", // ✅ important for offline & slow networks
});

export const metadata: Metadata = {
  title: "fullstack (MERN) developer",
  description: "Where service meets quality",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
