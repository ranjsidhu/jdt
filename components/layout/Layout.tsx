"use client";

import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container">
      <div className="navbar"></div>
      {children}
    </div>
  );
}
