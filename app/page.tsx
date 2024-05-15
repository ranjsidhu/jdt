import type { Metadata } from "next";
import Image from "next/image";
import Tree from "@/public/tree.jpg";
import Statement from "@/public/statement.jpg";
import "./page.css";

export const metadata: Metadata = {
  title: "James Darcy Tuition",
  description: "James Darcy Tuition - Maths, English, Science, 11+",
};

export default function Home() {
  return (
    <main className="main">
      <div className="homepage-container">
        <Image src={Tree} alt="Tree logo" className="coming-soon-tree" />
        <Image
          src={Statement}
          alt="Tree logo"
          className="coming-soon-statement"
        />
        <br />
        <p className="coming-soon-text">Coming soon...</p>
      </div>
    </main>
  );
}
