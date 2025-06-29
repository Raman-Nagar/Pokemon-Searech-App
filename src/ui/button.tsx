import React from "react";

interface ButtonProps {
  btnText: string;
  handleClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  btnText,
  handleClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`text-2xl cursor-pointer disabled:cursor-default disabled:bg-gray-50 disabled:text-gray-600 ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
