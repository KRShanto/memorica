import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Plus_Jakarta_Sans, Antic_Didone } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: "400",
  variable: "--font-jakarta",
  subsets: ["latin"],
});
const antic = Antic_Didone({
  weight: "400",
  variable: "--font-antic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Memorica`,
    default: "Memorica",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${antic.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
