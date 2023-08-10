import { Button } from "../../../components/Button";

type FooterProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Footer = ({ children, onClose }: FooterProps) => {
  return (
    <div className="flex justify-end">
      <div className="mx-2">{children}</div>
      <Button onClick={onClose} variant="secondary">
        Cancel
      </Button>
    </div>
  );
};

export default Footer;
