import React, { memo } from "react";

const Header = memo(function ({ children }: { children: React.ReactNode }) {
  return <p className="text-4xl text-center font-semibold mb-6 mt-3">{children}</p>;
});

export default Header;
