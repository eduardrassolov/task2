import { ReactNode, MouseEvent } from "react";

interface IProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick }: IProps) => {
  return <button onClick={onClick}>{children}</button>;
};
