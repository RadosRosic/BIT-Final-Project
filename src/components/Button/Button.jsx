import React from "react";
import "./Button.scss";
const Button = ({ name, method, methodArgument, classes }) => {
  return (
    <>
      <button onClick={() => method(methodArgument)} className={classes}>
        {name}
      </button>
    </>
  );
};
export default Button;
