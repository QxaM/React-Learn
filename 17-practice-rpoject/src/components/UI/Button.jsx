/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children, text, className, ...props }) => {
  let cssClasses = text ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
