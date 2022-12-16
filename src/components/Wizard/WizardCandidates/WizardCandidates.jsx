import React, { useContext } from "react";
import { applicationContext, wizardContext } from "../../../context";
import "./WizardCandidates.scss";
import Search from "../../Search/Search";

const WizardCandidates = ({ highlighted }) => {
  const { candidates } = useContext(applicationContext);
  const { search, setSearch, selectedCandidate, setSelectedCandidate } =
    useContext(wizardContext);

  const selectCandidate = (id) => {
    // eslint-disable-next-line
    setSelectedCandidate(candidates.find((candidate) => candidate?.id == id));
  };

  const filterAll = candidates.filter((candidate) =>
    candidate.name?.toLowerCase().startsWith(search)
  );
  const searchThis = search ? filterAll : candidates;

  return (
    <>
      <Search onChange={setSearch} />
      <div id="wizard-select-section">
        {searchThis.map((candidate) => (
          <div
            className={`wizard-candidate glass-effect-grey ${
              // eslint-disable-next-line
              selectedCandidate?.id == candidate.id ? highlighted : ""
            }`}
            key={candidate.id}
            onClick={(event) => {
              event.stopPropagation();
              selectCandidate(candidate?.id);
            }}
          >
            <div className="wizard-candidate-img-container">
              <img src={candidate.avatar} alt={candidate.name} />
            </div>
            <div className="wizard-candidate-info-section">
              <h3>{candidate.name}</h3>
              <p>{candidate.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WizardCandidates;
