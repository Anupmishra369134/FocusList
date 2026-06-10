import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const SignUpBtn = ({
  text = "Sign Up",
    onClick,
  fullWidth = false,
  icon = false,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-600",
  borderWidth = "border",
  borderColor = "border-gray-500",

}) => {
  return (
    <button
  onClick={onClick}
  className={`
    ${fullWidth ? "w-full py-3" : "py-2 px-4"}
    ${bgColor}
    ${textColor}
    ${hoverColor}
    ${borderColor}
    rounded-lg flex items-center justify-center gap-2
    focus:outline-none focus:ring-2
    transition-all duration-200
  `}
>
  {text}
  {icon && <FaArrowRightLong />}
</button>
    

  );
};

export default SignUpBtn;