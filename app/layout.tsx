import type { Metadata } from "next";
import { Rethink_Sans } from 'next/font/google'
import Providers from "@/context/Providers";

// If loading a variable font, you don't need to specify the font weight
const inter = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
})
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS API Template",
  description: "This Next.js template is designed to help you quickly set up a full-stack application with server-side functionality powered by MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}