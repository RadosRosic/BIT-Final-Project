import React from "react";
import Button from "../Button/Button";

const WizardButtons = ({
  selectedCandidate,
  selectedCompany,
  startDate,
  interviewPhase,
  interviewStatus,
  wizardNextStep,
  wizardPreviousStep,
  wizardStep,
  doNothing,
  submitReport,
  notes,
}) => {
  const hidden = "hidden";

  return (
    <div className="wizard-buttons-wrapper">
      <div className={`back-btn-wrapper ${wizardStep > 1 ? "" : hidden}`}>
        <Button name="Back" method={wizardPreviousStep} classes={`back-btn`} />
      </div>

      <div
        className="next-btn-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        {wizardStep < 3 && (
          <Button
            name="Next"
            method={
              selectedCandidate || selectedCompany ? wizardNextStep : doNothing
            }
            classes={`next-btn ${
              selectedCandidate || selectedCompany ? "" : "disabled"
            }`}
          />
        )}
        {wizardStep === 3 && (
          <Button
            name="Submit"
            method={
              interviewPhase && interviewStatus && startDate && notes
                ? submitReport
                : doNothing
            }
            classes={`next-btn ${
              interviewPhase && interviewStatus && startDate && notes
                ? ""
                : "disabled"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default WizardButtons;
