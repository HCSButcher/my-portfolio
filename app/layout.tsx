import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "fullstack (MERN) developer",
  description: "Where service meets quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} ${JetBrainsMono.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
