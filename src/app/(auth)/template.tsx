import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return <div className="h-screen p-6 flex justify-center">{children}</div>;
}
