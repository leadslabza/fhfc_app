import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { club } from "@/lib/content/club";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: club.name,
    template: `%s | ${club.shortName}`,
  },
  description: `${club.name}: community football in Forest Hills since ${club.founded}, for every age from Under 6 to Seniors.`,
  icons: { icon: "/brand/fhfc-crest.webp" },
};

export const viewport: Viewport = {
  themeColor: "#04110a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
