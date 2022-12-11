import React, { useState, useContext } from "react";
import { applicationContext, WizardProvider } from "../../context";
import CandidateProgress from "../../components/CandidateProgress/CandidateProgress";
import WizardButtons from "../../components/WizardButtons/WizardButtons";
import WizardSelectSection from "../../components/WizardSelectSection/WizardSelectSection";
import WizardProgress from "../../components/WizardProgress/WizardProgress";
import "./Wizard.scss";

const Wizard = ({ wizardStep, setWizardStep, reportBody, setReportBody }) => {
  const { token, setValidData } = useContext(applicationContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [interviewPhase, setInterviewPhase] = useState("");
  const [interviewStatus, setInterviewStatus] = useState("");
  const [notes, setNotes] = useState("");

  const wizardNextStep = () => {
    setReportBody({
      ...reportBody,
      candidateId: selectedCandidate.id || reportBody["candidateId"],
      candidateName: selectedCandidate.name || reportBody["candidateName"],
      companyId: selectedCompany.id || reportBody["companyId"],
      companyName: selectedCompany.name || reportBody["companyName"],
    });
    setWizardStep(wizardStep < 3 && wizardStep + 1);
    setSelectedCandidate(0);
    setSelectedCompany(0);
  };

  const submitReport = () => {
    console.log(token, reportBody);
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
      });
  };

  return (
    <>
      <WizardProvider
        value={{
          reportBody,
          setReportBody,
          wizardStep,
          setWizardStep,
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
          wizardNextStep,
          submitReport,
        }}
      >
        <div
          id="wizard"
          onClick={() => {
            setSelectedCandidate(0);
            setSelectedCompany(0);
          }}
        >
          <div id="wizard-info-section">
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
