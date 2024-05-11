import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "James Darcy Tuition",
  description: "James Darcy Tuition - Maths, English, Science, 11+",
};

export default function Home() {
  return (
    <main className="main">
      <div className="homepage-container">
        <p>Coming soon...</p>
      </div>
    </main>
  );
}
