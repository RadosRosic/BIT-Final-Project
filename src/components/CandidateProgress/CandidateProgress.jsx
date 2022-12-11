import React from "react";
import "./CandidateProgress.scss";

const CandidateProgress = ({ reportBody, wizardStep }) => {
  return (
    <>
      <div id="candidate-progress">
        <div className={wizardStep < 2 ? "hidden" : undefined}>
          <p>Candidate:</p>
          <p className="wizard-selected-item">{reportBody.candidateName}</p>
        </div>
        <div className={wizardStep < 3 ? "hidden" : undefined}>
          <p>Company:</p>
          <p className="wizard-selected-item">{reportBody.companyName}</p>
        </div>
      </div>
    </>
  );
};

export default CandidateProgress;
