import React from "react";
import "./CandidateProgress.scss";

const CandidateProgress = () => {
  return (
    <>
      <div id="candidate-progress">
        <div>
          <p>Candidate:</p>
          <p className="wizard-selected-item">Variable goes here</p>
        </div>
        <div>
          <p>Company:</p>
          <p className="wizard-selected-item">Variable goes here</p>
        </div>
      </div>
    </>
  );
};

export default CandidateProgress;
