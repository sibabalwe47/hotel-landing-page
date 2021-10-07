import react from "react";

const Overlay = ({ children, position }) => {
  return <div className={`overlay ${position && position}`}>{children}</div>;
};

export default Overlay;
