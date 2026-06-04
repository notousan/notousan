import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MatrixRain from "./components/MatrixRain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolyo | The Matrix",
  description: "Neo'nun Portfolyosu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-black text-green-500`}>
        <MatrixRain />
        <main className="w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}