import React, { useState, useContext } from "react";
import { applicationContext } from "../../context";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";


const HomePage = () => {
  
  const {token} = useContext(applicationContext);
  const { candidates } = useContext(applicationContext);
  const [search, setSearch] = useState("");


  const filterCandidates = candidates.filter((e) =>
    e.name.toLowerCase().startsWith(search)
  );

  return (
    <div>
      <Header />
      <div className="header-page">
        <div className="sub-header">
          <h2>Candidates</h2>
          <Search onChange={setSearch} />
        </div>
        <div className="cards">
          {filterCandidates.map(
            (candidate, i) => {
              return <Card candidate={candidate} key={i} token={token}/>;
            }
            //   filterCandidates.map((candidate, i) => {
            //   return <Card {...candidate} key={i} />;
            // }
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
