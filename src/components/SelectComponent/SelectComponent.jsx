import React from "react";
import "./SelectComponent.scss";

const SelectComponent = ({
  text,
  array,
  selectedItem,
  setSelectedItem,
  dummyValue,
}) => {
  return (
    <>
      <label>{text}</label>
      <br />
      <select
        name={text}
        required
        value={selectedItem}
        onChange={(event) => setSelectedItem(event.target.value)}
      >
        <option value="" disabled hidden>
          {dummyValue}
        </option>
        {array.map((el, i) => {
          return (
            <option value={el} key={i} default>
              {el}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectComponent;
