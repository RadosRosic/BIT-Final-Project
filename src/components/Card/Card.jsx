import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ el }) => {
  return (
    <Link to={`/details/${el.id}`} className="card glass-effect-bright">
      <>
        <img src={el.avatar} alt='can'/>
        <h3>{el.name}</h3>
        <p>{el.email}</p>
      </>
    </Link>
  );
};

export default Card;
