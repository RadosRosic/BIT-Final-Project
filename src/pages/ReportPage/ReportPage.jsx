import React, { useState } from "react";
import "./ReportPage.scss";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";
import Wizard from "../Wizard/Wizard";

const ReportPage = (token) => {
  const [search, setSearch] = useState("");
  const [wizardStep, setWizardStep] = useState(1);
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <Header signOut={signOut} />
      <Search />
      <main id="admin-page-wrapper">
        {/* <ReportsList token={token} /> */}
        <Wizard wizardStep={wizardStep} setWizardStep={setWizardStep} />
      </main>
    </>
  );
};

export default ReportPage;
