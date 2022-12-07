import React from "react";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search"

const HomePage = ({ candidates }) => {
  console.log(candidates);

  return (
    <div>
      HomePage
      <div className="subHeader">
        <h2>Candidates</h2>
        <Search />
      </div>
      <div className="cards">
        {candidates.map((e, i) => {
          return <Card candidates={candidates} el={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
