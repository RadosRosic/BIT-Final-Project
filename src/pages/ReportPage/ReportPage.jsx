import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { applicationContext } from "../../context";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";
import Wizard from "../../components/Wizard/Wizard";
import "./ReportPage.scss";
import CreateCandidate from "../CreateCandidate/CreateCandidate";
import CreateCompanyPage from "../CreateCompanyPage/CreateCompanyPage";
import EditCandidatePage from "../EditCandidatePage/EditCandidatePage";

const ReportPage = () => {
  const { candidates, token, setToken } = useContext(applicationContext);
  const [search, setSearch] = useState("");
  const [wizardStep, setWizardStep] = useState(1);

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
        <Header />
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
            />
            <Route
              path="/create-candidate"
              element={
                <CreateCandidate candidates={candidates} token={token} />
              }
            />
            <Route
              path="create-company"
              element={<CreateCompanyPage token={token} />}
            />
            <Route
              path="/edit-candidate/:id"
              element={<EditCandidatePage token={token} />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default ReportPage;
