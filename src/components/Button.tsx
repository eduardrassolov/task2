import { ReactNode, MouseEvent } from "react";
import React from "react";

type ButtonStyles = {
  primary: string;
  secondary: string;
  actions: string;
}
const buttonStyles: ButtonStyles = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  actions: "hover:scale-[1.1]",
}
interface IButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "actions";
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type = "button", variant = "primary" }: IButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={buttonStyles[variant]}>
      {children}
    </button>
  );
};

