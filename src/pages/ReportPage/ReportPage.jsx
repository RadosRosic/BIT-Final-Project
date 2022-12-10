import React, { useState, useContext } from "react";
import { applicationContext } from "../../context";
import "./ReportPage.scss";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";
import Wizard from "../Wizard/Wizard";
import CreateCandidate from "../CreateCandidate/CreateCandidate";


const ReportPage = (token) => {
  const {candidates} = useContext(applicationContext);
  const [search, setSearch] = useState("");
  const [wizardStep, setWizardStep] = useState(1);
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <Header signOut={signOut} />
      <Search onChange={setSearch} />
      <main id="admin-page-wrapper">
        <ReportsList token={token} search={search} />
        {/* Display one or the other  */}
        <Wizard wizardStep={wizardStep} setWizardStep={setWizardStep} />
        <CreateCandidate candidates = {candidates} token = {token}/>
      </main>
    </>
  );
};

export default ReportPage;
