import React, { useState } from "react";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";
import Wizard from "../Wizard/Wizard";
import "./ReportPage.scss";

const ReportPage = (token) => {
  const [search, setSearch] = useState("");
  const [wizardStep, setWizardStep] = useState(1);
  const signOut = () => {
    localStorage.removeItem("token");
  };
  const [reportBody, setReportBody] = useState({
    candidateId: 0,
    candidateName: "",
    companyId: 0,
    companyName: "",
    phase: "",
    status: "",
    note: "",
  });

  return (
    <>
      <Header signOut={signOut} />
      <Search onChange={setSearch} />
      <main id="admin-page-wrapper">
        <ReportsList token={token} search={search} />
        {/* Display one or the other  */}
        <Wizard
          wizardStep={wizardStep}
          setWizardStep={setWizardStep}
          reportBody={reportBody}
          setReportBody={setReportBody}
        />
      </main>
    </>
  );
};

export default ReportPage;
