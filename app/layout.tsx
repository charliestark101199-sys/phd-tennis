import type { Metadata } from "next";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
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
        <ClerkProvider>
          <header className="mx-auto flex w-full max-w-5xl items-center justify-end gap-3 px-6 pt-4">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          <Navbar />
          <main className="mx-auto w-full max-w-5xl px-6 py-8">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
