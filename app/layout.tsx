import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Darcy Tuition",
  description: "James Darcy Tuition - Maths, English, Science, 11+",
  openGraph: {
    title: "James Darcy Tuition",
    description: "James Darcy Tuition - Maths, English, Science, 11+",
    images: [{ url: "/opengraph-image.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
