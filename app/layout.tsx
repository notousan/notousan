import type { Metadata } from "next";
import "./globals.css";
import MatrixRain from "./components/MatrixRain";
import Chatbot from "./components/Chatbot";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-green-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <MatrixRain />
        <main className="w-full min-h-screen">
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  );
}