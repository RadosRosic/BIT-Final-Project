import React, { useContext } from "react";
import { applicationContext } from "../../context";
import "./WizardCandidates.scss";

const WizardCandidates = ({ name, email, id, selectCandidate, selected }) => {
  const { candidates } = useContext(applicationContext);

  return (
    <div
      className={`wizard-candidate glass-effect ${selected}`}
      id={id}
      onClick={(event) => {
        event.stopPropagation();
        selectCandidate(event.currentTarget.id);
      }}
    >
      <div className="wizard-candidate-img-container">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
      <section className="wizard-candidate-info-section">
        <h2>{name}</h2>
        <p>{email}</p>
      </section>
    </div>
  );
};

export default WizardCandidates;
