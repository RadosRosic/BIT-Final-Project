import React, { useContext } from "react";
import WizardCandidates from "../WizardCandidates/WizardCandidates";
import WizardCompanies from "../WizardCompanies/WizardCompanies";
import { applicationContext } from "../../context";

const WizardSelectSection = ({
  wizardStep,
  selectCandidate,
  selectedCandidate,
  highlighted,
}) => {
  const { candidates } = useContext(applicationContext);

  return (
    <div id="wizard-select-section">
      {wizardStep === 1 &&
        candidates.map((e) => (
          <WizardCandidates
            name={e.name}
            email={e.email}
            id={e.id}
            selectCandidate={selectCandidate}
            selected={selectedCandidate.id == e.id ? highlighted : ""}
            key={e.id}
          />
        ))}
      {wizardStep === 2 && <WizardCompanies />}
    </div>
  );
};

export default WizardSelectSection;
