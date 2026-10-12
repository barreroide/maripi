import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-display",
});
const hand = Caveat({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-hand" });

export const metadata: Metadata = {
  title: "Para Marisol",
  description: "Una carta escrita con calma y desde el corazón.",
};
export const viewport: Viewport = { themeColor: "#fff6f6", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
