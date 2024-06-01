import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import React from "react";

interface LayoutDashboardProps {
  children: React.ReactNode;
  params: any;
}

export default function DashboardLayout({
  children,
  params,
}: LayoutDashboardProps) {
  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider>{children}</SubscriptionModalProvider>
    </main>
  );
}
