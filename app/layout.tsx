import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digimanila.com"),
  title: {
    default: "DigiManila | AI Marketing Expert and Consultant",
    template: "%s | DigiManila",
  },
  description:
    "Premium AI marketing consulting in Kathmandu for strategy, content, automation, SEO, paid ads, lead generation, and brand growth.",
  openGraph: {
    title: "DigiManila | AI Marketing Expert and Consultant",
    description:
      "AI-powered marketing strategy and consulting for smarter business growth.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiManila | AI Marketing Expert and Consultant",
    description:
      "AI-powered marketing strategy and consulting for smarter business growth.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
