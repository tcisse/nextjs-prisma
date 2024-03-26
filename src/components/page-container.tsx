import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto w-full md:max-w-7xl">{children}</div>;
}
