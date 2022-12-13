import React, { useContext } from "react";
import { applicationContext, wizardContext } from "../../context";
import "./WizardCandidates.scss";

const WizardCandidates = ({ highlighted }) => {
  const { candidates } = useContext(applicationContext);
  const { selectedCandidate, setSelectedCandidate } = useContext(wizardContext);

  const selectCandidate = (id) => {
    setSelectedCandidate(candidates.find((e) => e.id == id));
  };

  return (
    <>
      <div id="wizard-select-section">
        {candidates.map((e) => (
          <div
            className={`wizard-candidate glass-effect-grey ${
              selectedCandidate.id == e.id ? highlighted : ""
            }`}
            id={e.id}
            key={e.id}
            onClick={(event) => {
              event.stopPropagation();
              selectCandidate(event.currentTarget.id);
            }}
          >
            <div className="wizard-candidate-img-container">
              <img src={e.avatar} />
            </div>
            <div className="wizard-candidate-info-section">
              <h3>{e.name}</h3>
              <p>{e.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WizardCandidates;
