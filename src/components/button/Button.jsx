import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="flex items-center bg-secondary p-4 rounded-xl text-white font-bold hover:border-secondary transition-all duration-500 absolute hover:bg-white hover:text-secondary hover:border" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
