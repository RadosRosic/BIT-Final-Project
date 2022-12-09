import React, { useState, useContext } from "react";
import WizardProgress from "../../components/WizardProgress/WizardProgress";
import CandidateProgress from "../../components/CandidateProgress/CandidateProgress";
import Button from "../../components/Button/Button";

import { applicationContext } from "../../context";
import WizardCandidates from "../../components/WizardCandidates/WizardCandidates";
import "./Wizard.scss";

const Wizard = () => {
  const { candidates, token, setValidData } = useContext(applicationContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [reportBody, setReportBody] = useState({
    candidateId: 0,
    candidateName: "",
    companyId: 0,
    companyName: "",
    phase: "",
    status: "",
    note: "",
  });

  const selectCandidate = (id) => {
    setSelectedCandidate(candidates.find((e) => e.id == id));
    console.log(selectedCandidate);
  };

  const addCandidateInfoToBody = () => {
    setReportBody({
      ...reportBody,
      candidateId: selectedCandidate.id,
      candidateName: selectedCandidate.name,
    });
    console.log(reportBody);
  };

  const makeReport = () => {
    fetch(`http://localhost:3333/api/reports/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: {
        ...reportBody,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setValidData(false);
      });
  };

  return (
    <>
      <div id="wizard">
        <div id="wizard-info-section">
          <WizardProgress />
          <CandidateProgress />
        </div>
        <div>
          <div id="wizard-select-section">
            {candidates.map((e) => (
              <WizardCandidates
                name={e.name}
                email={e.email}
                id={e.id}
                selectCandidate={selectCandidate}
              />
            ))}
          </div>
          <div>
            <Button name="Next" method={addCandidateInfoToBody} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wizard;
