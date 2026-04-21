import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "PHD Tennis",
  description: "College tennis recruiting platform for recruits and coaches."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
