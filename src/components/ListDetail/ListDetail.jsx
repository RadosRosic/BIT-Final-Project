import React from "react";
import "./ListDetail.scss";

const ListDetail = ({ value, keys }) => {
  return (
    <div>
      <p>{value}</p>
      <p>{keys}</p>
    </div>
  );
};

export default ListDetail;
