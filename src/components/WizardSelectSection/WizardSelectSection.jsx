import React, { useContext } from "react";
import WizardCandidates from "../WizardCandidates/WizardCandidates";
import WizardCompanies from "../WizardCompanies/WizardCompanies";

const WizardSelectSection = ({
  wizardStep,
  selectCandidate,
  selectedCandidate,
  selectedCompany,
  selectCompany,
}) => {
  const highlighted = "highlighted";
  return (
    <>
      {wizardStep === 1 && (
        <WizardCandidates
          selectCandidate={selectCandidate}
          selectedCandidate={selectedCandidate}
          highlighted={highlighted}
        />
      )}
      {wizardStep === 2 && (
        <WizardCompanies
          selectCompany={selectCompany}
          selectedCompany={selectedCompany}
          highlighted={highlighted}
        />
      )}
    </>
  );
};

export default WizardSelectSection;
