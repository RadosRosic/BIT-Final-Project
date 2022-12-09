import React from "react";
import "./WizardCandidates.scss";

const WizardCandidates = ({ name, email, id, selectCandidate }) => {
  return (
    <div
      className="wizard-candidate"
      id={id}
      onClick={(event) => {
        selectCandidate(event.currentTarget.id);
        event.currentTarget.classList.add("selected");
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
