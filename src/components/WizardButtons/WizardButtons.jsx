import React from "react";
import Button from "../Button/Button";

const WizardButtons = ({
  selectedCandidate,
  selectedCompany,
  wizardNextStep,
  wizardPreviousStep,
  wizardStep,
  doNothing,
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
        <Button
          name="Next"
          method={
            selectedCandidate || selectedCompany ? wizardNextStep : doNothing
          }
          classes={`next-btn ${
            selectedCandidate || selectedCompany ? "" : "disabled"
          }`}
        />
      </div>
    </div>
  );
};

export default WizardButtons;
