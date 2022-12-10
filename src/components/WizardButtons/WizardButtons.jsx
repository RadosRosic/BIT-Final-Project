import React from "react";
import Button from "../Button/Button";

const WizardButtons = ({
  selectedCandidate,
  wizardNextStep,
  wizardPreviousStep,
  wizardStep,
  doNothing,
}) => {
  return (
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
  );
};

export default WizardButtons;
