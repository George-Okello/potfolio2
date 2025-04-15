import type { Metadata } from "next";
import { Julius_Sans_One, Cantarell } from "next/font/google";
import "./globals.css";

const juliusSansOne = Julius_Sans_One({
  variable: "--font-julius-sans-one",
  subsets: ["latin"],
  weight: "400"
});

const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "George's Portfolio",
  description: "2025 portfolio revamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${juliusSansOne.variable} ${cantarell.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
