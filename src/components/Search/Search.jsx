import React from "react";
import "./Search.scss";

const Search = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Search"></input>
    </div>
  );
};

export default Search;
