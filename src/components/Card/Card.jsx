import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ el }) => {
  return (
    <Link to={`/details/${el.id}`}>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <p>{el.name}</p>
        <p>{el.email}</p>
      </div>
    </Link>
  );
};

export default Card;
