import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Games",
  description: "JS Games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} fixed w-full text-white`}>
        <Navbar />
        <div style={{ background: "#1A1A1A", height: "100vh" }}>{children}</div>
      </body>
    </html>
  );
}
