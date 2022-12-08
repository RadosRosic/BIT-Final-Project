import React,{useContext, useState} from "react";
import { applicationContext } from "../../context";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  
  const {filterThrughCandidates} = useContext(applicationContext)
  const {candidates} = useContext(applicationContext)
  const [search, setSearch] = useState("")


 

const filterCandidates = candidates.filter((e) => e.name.toLowerCase().startsWith(search))




  return (
    <div>
    
      <div className="subHeader">
        <h2>Candidates</h2>
        <Search onChange={setSearch}  />
      </div>
      <div className="cards">
        {filterCandidates.map((candidate, i) => {
          return <Card {...candidate} key={i} />;
        })}
      </div>
      <Modal />
    </div>
  );
};

export default HomePage;
