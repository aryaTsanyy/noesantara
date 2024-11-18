/** @format */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/figtree/Figtree-Regular.otf",
  variable: "--font-figtree",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Noesantara - Platform Smart City Ibu Kota Nusantara",
  description: "Menuju Kota Cerdas Masa Depan Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}
