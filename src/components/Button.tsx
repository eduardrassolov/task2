import { ReactNode, MouseEvent } from "react";

interface IProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
}

type IVariants = {
  primary: string;
  secondary: string;
};

const variants: IVariants = {
  primary:
    "bg-blue-500 hover:bg-blue-700 transition duration-3 text-white font-bold py-2 px-6 text-sm rounded",
  secondary:
    "bg-gray-500 hover:bg-gray-700 transition duration-3 text-white font-bold py-2 px-4 text-sm rounded",
};

export const Button = ({
  children,
  onClick,
}: // variant = variants.primary,
IProps) => {
  return (
    <button onClick={onClick} className={variants.primary}>
      {children}
    </button>
  );
};
