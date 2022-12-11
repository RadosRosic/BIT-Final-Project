import React, { useState, useContext } from "react";
import WizardProgress from "../../components/WizardProgress/WizardProgress";
import CandidateProgress from "../../components/CandidateProgress/CandidateProgress";
import { applicationContext, WizardProvider } from "../../context";
import WizardSelectSection from "../../components/WizardSelectSection/WizardSelectSection";
import WizardButtons from "../../components/WizardButtons/WizardButtons";
import "./Wizard.scss";

const Wizard = ({ wizardStep, setWizardStep, reportBody, setReportBody }) => {
  const { candidates, companies, token, setValidData } =
    useContext(applicationContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [interviewPhase, setInterviewPhase] = useState("");
  const [interviewStatus, setInterviewStatus] = useState("");
  const [notes, setNotes] = useState("");

  const selectCandidate = (id) => {
    setSelectedCandidate(candidates.find((e) => e.id == id));
  };

  const selectCompany = (id) => {
    setSelectedCompany(companies.find((e) => e.id == id));
  };

  const wizardNextStep = () => {
    setReportBody({
      ...reportBody,
      candidateId: selectedCandidate.id || reportBody["candidateId"],
      candidateName: selectedCandidate.name || reportBody["candidateName"],
      companyId: selectedCompany.id || reportBody["companyId"],
      companyName: selectedCompany.name || reportBody["companyName"],
      interviewDate: startDate || reportBody["interviewDate"],
      note: notes || reportBody["note"],
      phase: interviewPhase || reportBody["phase"],
      status: interviewStatus || reportBody["status"],
    });
    setWizardStep(wizardStep < 3 && wizardStep + 1);
    setSelectedCandidate(0);
    setSelectedCompany(0);
  };

  const wizardPreviousStep = () => {
    setWizardStep(wizardStep - 1);
  };

  const submitReport = () => {
    wizardNextStep();
    console.log(token, reportBody);
    fetch(`http://localhost:3333/api/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reportBody),
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

  const doNothing = () => {
    return; // empty function used in next button method, see Wizard Buttons
  };

  return (
    <>
      <WizardProvider
        value={{
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
            <WizardProgress wizardStep={wizardStep} />
            <CandidateProgress
              wizardStep={wizardStep}
              reportBody={reportBody}
            />
          </div>
          <div className="wizard-main-section">
            <WizardSelectSection
              wizardStep={wizardStep}
              selectCandidate={selectCandidate}
              selectedCandidate={selectedCandidate}
              selectCompany={selectCompany}
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
              startDate={startDate}
              setStartDate={setStartDate}
              interviewPhase={interviewPhase}
              setInterviewPhase={setInterviewPhase}
              interviewStatus={interviewStatus}
              setInterviewStatus={setInterviewStatus}
              notes={notes}
              setNotes={setNotes}
            />
            <WizardButtons
              wizardStep={wizardStep}
              wizardNextStep={wizardNextStep}
              selectedCandidate={selectedCandidate}
              wizardPreviousStep={wizardPreviousStep}
              doNothing={doNothing}
              selectedCompany={selectedCompany}
              submitReport={submitReport}
              startDate={startDate}
              interviewPhase={interviewPhase}
              interviewStatus={interviewStatus}
              notes={notes}
            />
          </div>
        </div>
      </WizardProvider>
    </>
  );
};

export default Wizard;
