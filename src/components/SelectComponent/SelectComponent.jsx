import React from "react";
import "./SelectComponent.scss";

const SelectComponent = ({ text, array, selectedItem, setSelectedItem }) => {
  return (
    <>
      <label>
        {text}</label><br />
        <select
          name={text}
          required
          value={selectedItem}
          onChange={(event) => setSelectedItem(event.target.value)}
        >
          {array.map((el, i) => {
            return (
              <option value={el} key={i}>
                {el}
              </option>
            );
          })}
        </select>
      
    </>
  );
};

export default SelectComponent;
