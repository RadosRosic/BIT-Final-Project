import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { applicationContext, WizardProvider } from "../../context";
import CandidateProgress from "./WizardCandidateProgress/CandidateProgress";
import WizardButtons from "./WizardButtons/WizardButtons";
import WizardSelectSection from "./WizardSelectSection/WizardSelectSection";
import WizardProgress from "./WizardProgress/WizardProgress";
import "./Wizard.scss";

const Wizard = ({
  wizardStep,
  setWizardStep,
  reportBody,
  setReportBody,
  search,
  setSearch,
}) => {
  const { token, setValidData } = useContext(applicationContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [interviewPhase, setInterviewPhase] = useState("");
  const [interviewStatus, setInterviewStatus] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();
  const submitReport = () => {
    fetch(`http://localhost:3333/api/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...reportBody,
        interviewDate: startDate,
        note: notes,
        phase: interviewPhase,
        status: interviewStatus,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setValidData(false);
        setWizardStep(1);
        setReportBody({});
        navigate("/reports");
      });
  };

  return (
    <>
      <WizardProvider
        value={{
          reportBody,
          setReportBody,
          selectedCandidate,
          setSelectedCandidate,
          selectedCompany,
          setSelectedCompany,
          startDate,
          setStartDate,
          interviewPhase,
          setInterviewPhase,
          interviewStatus,
          setInterviewStatus,
          notes,
          setNotes,
          wizardStep,
          setWizardStep,
          submitReport,
          search,
          setSearch,
        }}
      >
        <div
          id="wizard"
          onClick={() => {
            setSelectedCandidate("");
            setSelectedCompany("");
          }}
        >
          <div id="wizard-info-section" className="glass-effect-bright">
            <WizardProgress />
            <CandidateProgress />
          </div>
          <div className="wizard-main-section">
            <WizardSelectSection />
            <WizardButtons />
          </div>
        </div>
      </WizardProvider>
    </>
  );
};

export default Wizard;
