import React from "react";
import "./ListDetail.scss";

const ListDetail = ({ value, title }) => {
  return (
    <div className="list-detail">
      <p>{value}</p>
      <p>{title}</p>
    </div>
  );
};

export default ListDetail;
