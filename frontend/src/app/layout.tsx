import type { Metadata } from "next";
import { Bree_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const breeSerif = Bree_Serif({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
});

const breeSerifHeading = Bree_Serif({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VetHealth Pharma",
  description: "Complete Veterinary Healthcare & Animal Nutrition Solutions. Providing medicines, vaccines, feed supplements, and veterinary solutions for livestock and pets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${breeSerif.variable} ${breeSerifHeading.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
