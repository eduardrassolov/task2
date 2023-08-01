import { ReactNode, MouseEvent } from "react";

interface IProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick }: IProps) => {
  return (
    <button
      className="px-4 mx-4 my-2 py-2 bg-slate-300 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
