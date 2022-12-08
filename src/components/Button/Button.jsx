import React from "react";
import "./Button.scss";

const Button = ({ name, method, classes }) => {
  return (
    <>
      <button onClick={method} className={classes}>
        {name}
      </button>
    </>
  );
};

export default Button;
