import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

interface LayoutWorkspaceProps {
  children: React.ReactNode;
  params: any;
}

export default function DashboardLayout({
  children,
  params,
}: LayoutWorkspaceProps) {
  return (
    <main className="flex overflow-hidden h-screen w-screen">
      <Sidebar params={params} />
      <div className="dark:boder-Neutrals-12/70 border-l-[1px] w-full relative overflow-scroll no-scrollbar">
        {children}
      </div>
    </main>
  );
}
