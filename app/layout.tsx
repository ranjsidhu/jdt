import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import { Layout } from "@/components";
import "./globals.css";

const ABZ = ABeeZee({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jamesdarcytuition.com"),
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
      <body className={ABZ.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
