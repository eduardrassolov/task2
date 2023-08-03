import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return <p className="text-4xl text-center font-semibold">{children}</p>;
}
