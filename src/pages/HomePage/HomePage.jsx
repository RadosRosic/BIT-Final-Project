import React, { useState, useContext } from "react";
import { applicationContext } from "../../context";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import DatePicker from "../../components/DatePicker/DatePicker";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import ReportNotes from "../../components/ReportNotes/ReportNotes";

const HomePage = () => {
  // Ovo je deo koda koji ide na reports page kada on bude gotov. Ovde smo samo testirali.
  // const phases = ["CV", "HR", "Technical", "Final"];
  // let text = "Phase";
  // let text2 = "Status";
  // const status =  ["passed", "declined"];

  const { candidates } = useContext(applicationContext);
  const [search, setSearch] = useState("");
  console.log(candidates);

  const filterCandidates = candidates.filter((e) =>
    e.name.toLowerCase().startsWith(search)
  );

  return (
    <div>
      <Header />

      {/* 
      Ovo je deo koda koji ide na reports page kada on bude gotov. Ovde smo samo testirali.
      
      <DatePicker/>
      <SelectComponent text = {text} array = {phases} />
      <SelectComponent text = {text2} array = {status} /> 
      <ReportNotes />*/}

      <div className="subHeader">
        <h2>Candidates</h2>
        <Search onChange={setSearch} />
      </div>
      <div className="cards">
        {filterCandidates.map(
          (e, i) => {
            return <Card el={e} key={i} />;
          }
          //   filterCandidates.map((candidate, i) => {
          //   return <Card {...candidate} key={i} />;
          // }
        )}
      </div>
    </div>
  );
};

export default HomePage;
