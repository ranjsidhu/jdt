"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <div className="app-container">{children}</div>
    </AntdRegistry>
  );
}
