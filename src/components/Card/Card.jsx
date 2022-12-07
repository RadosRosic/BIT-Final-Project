import React from "react";
import "./Card.scss";

const Card = ({ name, email }) => {
  return (
      
    <div className="card">
    
      <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <p>{name}</p>
      <p>{email}</p>
    </div>

  );
};

export default Card;
