import { ReactNode, MouseEvent } from "react";

interface IProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
}

type IVariants = {
  primary: string;
  secondary: string;
  outline: string;
};

const variants: IVariants = {
  primary:
    "bg-blue-500 hover:bg-blue-700 transition duration-3 text-white font-bold py-2 px-6 text-sm rounded",
  secondary:
    "bg-gray-500 hover:bg-gray-700 transition duration-3 text-white font-bold py-2 px-4 text-sm rounded",
  outline:
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
};

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: // variant = variants.primary,
IProps) => {
  return (
    <button type={type} onClick={onClick} className={variants[variant]}>
      {children}
    </button>
  );
};
