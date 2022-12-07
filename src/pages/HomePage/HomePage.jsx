import React,{useContext} from "react";
import { applicationContext } from "../../context";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search"
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  const {candidates}= useContext(applicationContext)
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
      <Modal/>
    </div>
  );
};

export default HomePage;
