import { ReactNode, MouseEvent } from "react";

type ButtonStyles = {
  primary: string;
  secondary: string;
}
const buttonStyles: ButtonStyles = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
}

interface IButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type = "button", variant = "primary" }: IButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={buttonStyles[variant]}>
      {children}
    </button>
  );
};

