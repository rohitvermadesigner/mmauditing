import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Montserrat } from 'next/font/google';


export const metadata: Metadata = {
  title: "MM Auditing",
  description: "MM Auditing",
};

export const montserrat = Montserrat({
    subsets : ['latin'],
    weight : ['300','400','500','600','700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}