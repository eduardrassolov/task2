import React from "react";
import { Button } from "../../../components/Button";

type FooterProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Footer({ children, onClose }: FooterProps) {
  return (
    <div className="flex justify-end">
      <div className="mx-2">{children}</div>
      <Button onClick={onClose} variant="outline">
        Cancel
      </Button>
    </div>
  );
}
