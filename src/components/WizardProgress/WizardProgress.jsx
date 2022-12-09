import React from "react";
import "./WizardProgress.scss";

const WizardProgress = () => {
  return (
    <div id="wizard-progress">
      <div className="wizard-progress-wrapper  wizard-current-step">
        <span className="wizard-step">1</span>
        <p>Select Candidate</p>
      </div>
      <div className="wizard-progress-wrapper ">
        <span className="wizard-step">2</span>
        <p>Select Company</p>
      </div>
      <div className="wizard-progress-wrapper ">
        <span className="wizard-step">3</span>
        <p>Fill Report Details</p>
      </div>
    </div>
  );
};

export default WizardProgress;
