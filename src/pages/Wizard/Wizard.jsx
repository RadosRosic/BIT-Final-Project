import React, { useState, useContext } from "react";
import WizardProgress from "../../components/WizardProgress/WizardProgress";
import CandidateProgress from "../../components/CandidateProgress/CandidateProgress";
import { applicationContext } from "../../context";
import WizardSelectSection from "../../components/WizardSelectSection/WizardSelectSection";
import WizardButtons from "../../components/WizardButtons/WizardButtons";
import "./Wizard.scss";

const Wizard = ({ wizardStep, setWizardStep, reportBody, setReportBody }) => {
  const { candidates, companies } = useContext(applicationContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const selectCandidate = (id) => {
    setSelectedCandidate(candidates.find((e) => e.id == id));
  };

  const selectCompany = (id) => {
    setSelectedCompany(companies.find((e) => e.id == id));
  };

  const wizardNextStep = () => {
    setReportBody({
      ...reportBody,
      ["candidateId"]: reportBody["candidateId"] || selectedCandidate.id,
      ["candidateName"]: reportBody["candidateName"] || selectedCandidate.name,
      ["companyId"]: reportBody["companyId"] || selectedCompany.id,
      ["companyName"]: reportBody["companyName"] || selectedCompany.name,
    });
    setWizardStep(wizardStep + 1);
    setSelectedCandidate(0);
  };

  const wizardPreviousStep = () => {
    setWizardStep(wizardStep - 1);
  };

  // const makeReport = () => {
  //   fetch(`http://localhost:3333/api/reports/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token.token}`,
  //     },
  //     body: {
  //       ...reportBody,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setValidData(false);
  //     });
  // };

  const doNothing = () => {
    return; // empty function used in next button method, see Wizard Buttons
  };

  return (
    <>
      <div
        id="wizard"
        onClick={() => {
          setSelectedCandidate(0);
          setSelectedCompany(0);
        }}
      >
        <div id="wizard-info-section">
          <WizardProgress wizardStep={wizardStep} />
          <CandidateProgress />
        </div>
        <div className="wizard-main-section">
          <WizardSelectSection
            wizardStep={wizardStep}
            selectCandidate={selectCandidate}
            selectedCandidate={selectedCandidate}
            selectCompany={selectCompany}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
          />

          <WizardButtons
            wizardStep={wizardStep}
            wizardNextStep={wizardNextStep}
            wizardPreviousStep={wizardPreviousStep}
            selectedCandidate={selectedCandidate}
            doNothing={doNothing}
            selectedCompany={selectedCompany}
          />
        </div>
      </div>
    </>
  );
};

export default Wizard;
