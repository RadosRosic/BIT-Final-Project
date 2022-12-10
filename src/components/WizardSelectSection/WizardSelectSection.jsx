import React, { useContext } from "react";
import WizardCandidates from "../WizardCandidates/WizardCandidates";
import WizardCompanies from "../WizardCompanies/WizardCompanies";

const WizardSelectSection = ({
  wizardStep,
  selectCandidate,
  selectedCandidate,
}) => {
  const highlighted = "highlighted";
  return (
    <div id="wizard-select-section">
      {wizardStep === 1 && (
        <WizardCandidates
          selectCandidate={selectCandidate}
          selectedCandidate={selectedCandidate}
          highlighted={highlighted}
        />
      )}
      {wizardStep === 2 && <WizardCompanies />}
    </div>
  );
};

export default WizardSelectSection;
