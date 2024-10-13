/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ id, name, type, title, className, ...props }) => {
  let classes = "control " + (className ?? "");

  return (
    <p className={classes}>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type={type} {...props} required></input>
    </p>
  );
};

export default Input;
