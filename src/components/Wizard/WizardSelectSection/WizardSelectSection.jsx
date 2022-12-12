import React, { useContext } from "react";
import { wizardContext } from "../../../context";
import WizardCandidates from "../WizardCandidates/WizardCandidates";
import WizardCompanies from "../WizardCompanies/WizardCompanies";
import WizardFillReport from "../WizardFillReport/WizardFillReport";

const WizardSelectSection = () => {
  const highlighted = "highlighted";
  const { wizardStep } = useContext(wizardContext);
  return (
    <>
      {wizardStep === 1 && <WizardCandidates highlighted={highlighted} />}
      {wizardStep === 2 && <WizardCompanies highlighted={highlighted} />}
      {wizardStep === 3 && <WizardFillReport />}
    </>
  );
};

export default WizardSelectSection;
