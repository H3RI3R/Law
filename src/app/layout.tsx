import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aprajita Legal - Advocates & Solicitors | Strategic Legal Solutions",
  description:
    "From complex disputes to everyday legal matters, Aprajita Legal delivers strategic solutions with a client-first approach. 30+ years of combined expertise.",
  keywords: [
    "Aprajita Legal",
    "Advocates & Solicitors",
    "Legal Partner",
    "Criminal Lawyer",
    "Civil Litigation",
    "Legal Consultation",
  ],
  openGraph: {
    title: "Aprajita Legal - Your Legal Partner In Every Situation",
    description:
      "Strategic solutions with a client-first approach. Over 12,000 criminal matters represented.",
    url: "https://aprajitalegal.com",
    siteName: "Aprajita Legal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden relative bg-[#FAF6F0]">
        {children}
      </body>
    </html>
  );
}
