import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route
            path="/"
            element={<ReportsList token={token} search={search} />}
          />
          <Route
            path="/create-report"
            element={
              <Wizard
                wizardStep={wizardStep}
                setWizardStep={setWizardStep}
                reportBody={reportBody}
                setReportBody={setReportBody}
              />
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
};

export default ReportPage;
