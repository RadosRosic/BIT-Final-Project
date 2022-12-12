import React from "react";
import "./Button.scss";
const Button = ({ name, method, methodArgument, classes, disabled=false}) => {
  return (
    <>
      <button disabled={disabled} onClick={(e) => {
        e.stopPropagation()      
        method(methodArgument)}} className={classes}>
        {name}
      </button>
    </>
  );
};
export default Button;
