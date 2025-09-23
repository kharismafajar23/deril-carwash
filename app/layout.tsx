import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import ResponsifNav from "@/components/Navbar/ResponsifNav";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demangan Carwash",
  description:
    "Jasa cuci kendaraan terbaik untuk Anda. Kendaraan jadi kinclong, tanpa bikin kantong kosong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <ResponsifNav></ResponsifNav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
