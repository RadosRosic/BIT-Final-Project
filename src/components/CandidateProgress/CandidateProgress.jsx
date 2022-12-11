import React, { useContext } from "react";
import { wizardContext } from "../../context";
import "./CandidateProgress.scss";

const CandidateProgress = () => {
  const { wizardStep, reportBody } = useContext(wizardContext);
  return (
    <>
      <div id="candidate-progress">
        <div className={wizardStep < 2 ? "hidden" : ""}>
          <p>Candidate:</p>
          <p className="wizard-selected-item">{reportBody.candidateName}</p>
        </div>
        <div className={wizardStep < 3 ? "hidden" : ""}>
          <p>Company:</p>
          <p className="wizard-selected-item">{reportBody.companyName}</p>
        </div>
      </div>
    </>
  );
};

export default CandidateProgress;
