import React, { useState, useContext } from "react";
import WizardProgress from "../../components/WizardProgress/WizardProgress";
import CandidateProgress from "../../components/CandidateProgress/CandidateProgress";
import Button from "../../components/Button/Button";

import { applicationContext } from "../../context";
import WizardSelectSection from "../../components/WizardSelectSection/WizardSelectSection";
import "./Wizard.scss";

const Wizard = ({ wizardStep, setWizardStep }) => {
  const { candidates, token, setValidData } = useContext(applicationContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [reportBody, setReportBody] = useState({
    candidateId: 0,
    candidateName: "",
    companyId: 0,
    companyName: "",
    phase: "",
    status: "",
    note: "",
  });
  const highlighted = "highlighted";

  const selectCandidate = (id) => {
    setSelectedCandidate(candidates.find((e) => e.id == id));
  };

  const wizardNextStep = () => {
    setReportBody({
      ...reportBody,
      candidateId: selectedCandidate.id,
      candidateName: selectedCandidate.name,
    });
    setWizardStep(wizardStep + 1);
  };

  const wizardPreviousStep = () => {
    setWizardStep(wizardStep - 1);
  };

  const makeReport = () => {
    fetch(`http://localhost:3333/api/reports/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: {
        ...reportBody,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setValidData(false);
      });
  };

  const doNothing = () => {
    return; // empty function used in next button method, see below
  };

  return (
    <>
      <div id="wizard" onClick={() => setSelectedCandidate(0)}>
        <div id="wizard-info-section">
          <WizardProgress wizardStep={wizardStep} />
          <CandidateProgress />
        </div>
        <div className="wizard-main-section">
          <WizardSelectSection
            wizardStep={wizardStep}
            selectCandidate={selectCandidate}
            selectedCandidate={selectedCandidate}
            highlighted={highlighted}
          />
          <div className="wizard-buttons-wrapper">
            {wizardStep > 1 && (
              <div className="back-btn-wrapper">
                <Button
                  name="Back"
                  method={wizardPreviousStep}
                  classes={`back-btn`}
                />
              </div>
            )}
            <div
              className="next-btn-wrapper"
              onClick={(event) => event.stopPropagation()}
            >
              <Button
                name="Next"
                method={selectedCandidate ? wizardNextStep : doNothing}
                classes={`next-btn ${selectedCandidate ? "" : "disabled"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wizard;
