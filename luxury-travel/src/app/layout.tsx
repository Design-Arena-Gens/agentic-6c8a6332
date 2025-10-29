import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Éclat Journeys | Luxury Travel Experiences",
  description:
    "Curated luxury travel experiences, bespoke itineraries, and exclusive offers from the world’s most sought-after destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} bg-midnight text-ivory font-[var(--font-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
