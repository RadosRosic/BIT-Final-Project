import React from "react";
import "./SelectComponent.scss";

const SelectComponent = ({ text, array }) => {
  return (
    <>
      <label>
        {text}
        <select name={text}>
          {array?.map((e, i) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </label>
    </>
  );
};

export default SelectComponent;
