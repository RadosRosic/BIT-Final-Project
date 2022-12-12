import React, { useContext } from "react";
import { wizardContext } from "../../../context";
import Button from "../../Button/Button";

const WizardButtons = () => {
  const {
    notes,
    interviewPhase,
    interviewStatus,
    startDate,
    selectedCandidate,
    selectedCompany,
    setWizardStep,
    wizardNextStep,
    wizardStep,
    submitReport,
  } = useContext(wizardContext);

  const allSelected = interviewPhase && interviewStatus && startDate && notes;
  const candidateOrCompanySelected = selectedCandidate || selectedCompany;
  const hidden = "hidden";
  const wizardPreviousStep = () => {
    setWizardStep(wizardStep - 1);
  };

  return (
    <div className="wizard-buttons-wrapper">
      <div className={`back-btn-wrapper ${wizardStep > 1 ? "" : hidden}`}>
        <Button name="Back" method={wizardPreviousStep} classes={`back-btn`} />
      </div>

      <div className="next-btn-wrapper">
        {wizardStep < 3 && (
          <Button
            name="Next"
            disabled={candidateOrCompanySelected ? false : true}
            method={wizardNextStep}
            classes={`next-btn ${candidateOrCompanySelected ? "" : "disabled"}`}
          />
        )}
        {wizardStep === 3 && (
          <Button
            name="Submit"
            disabled={allSelected ? false : true}
            method={submitReport}
            classes={`next-btn ${allSelected ? "" : "disabled"}`}
          />
        )}
      </div>
    </div>
  );
};

export default WizardButtons;
