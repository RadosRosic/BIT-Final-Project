import React, { useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { applicationContext } from "../../context";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";
import Wizard from "../Wizard/Wizard";
import "./ReportPage.scss";
import CreateCandidate from "../CreateCandidate/CreateCandidate";

const ReportPage = () => {
  const { candidates, token, setToken } = useContext(applicationContext);
  const [search, setSearch] = useState("");
  const [wizardStep, setWizardStep] = useState(1);

  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  const [reportBody, setReportBody] = useState({
    candidateId: 0,
    candidateName: "",
    companyId: 0,
    companyName: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });

  return (
    <>
      <div id="admin-panel">
        <Header signOut={signOut} />
        {/* <Search onChange={setSearch} /> */}
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
            />
            <Route
              path="create-candidate"
              element={
                <CreateCandidate candidates={candidates} token={token} />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default ReportPage;
