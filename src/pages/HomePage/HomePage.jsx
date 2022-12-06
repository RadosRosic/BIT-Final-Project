import React from "react";
import "./HomePage.scss";

const HomePage = ({ candidates }) => {
  return (
    <div>
      HomePage
      {candidates.map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
