import React from "react";
import WizardCandidates from "../WizardCandidates/WizardCandidates";
import WizardCompanies from "../WizardCompanies/WizardCompanies";
import WizardFillReport from "../WizardFillReport/WizardFillReport";

const WizardSelectSection = ({
  wizardStep,
  selectCandidate,
  selectedCandidate,
  selectedCompany,
  selectCompany,
  startDate,
  setStartDate,
  interviewPhase,
  setInterviewPhase,
  interviewStatus,
  setInterviewStatus,
  notes,
  setNotes,
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
      {wizardStep === 3 && (
        <WizardFillReport
          startDate={startDate}
          setStartDate={setStartDate}
          interviewPhase={interviewPhase}
          setInterviewPhase={setInterviewPhase}
          interviewStatus={interviewStatus}
          setInterviewStatus={setInterviewStatus}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </>
  );
};

export default WizardSelectSection;
