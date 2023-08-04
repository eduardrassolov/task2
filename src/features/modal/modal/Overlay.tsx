import { memo } from "react";

const Overlay = memo(() => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-[3px] flex justify-center items-center transition duration-300"></div>
  );
});

export default Overlay;
