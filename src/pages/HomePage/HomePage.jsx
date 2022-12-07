import React,{useContext, useState} from "react";
import { applicationContext } from "../../context";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search"
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  const {candidates}= useContext(applicationContext)

  const [filterCandidates, setFilterCandidates] = useState(candidates)

  console.log(candidates);

const filterThrughCandidates = (searchValue) => {
    if(!searchValue) {
      setFilterCandidates(candidates); 
} else {
  setFilterCandidates(candidates.filter(e => e.name.toLowerCase().startsWith(searchValue)))
}



}


  return (
    <div>
    
      <div className="subHeader">
        <h2>Candidates</h2>
        <Search onChange={filterThrughCandidates} />
      </div>
      <div className="cards">
        {filterCandidates.map((candidate, i) => {
          return <Card {...candidate} key={i} />;
        })}
      </div>
      <Modal/>
    </div>
  );
};

export default HomePage;
