import React, { useContext } from "react";
import { applicationContext, wizardContext } from "../../../context";
import "./WizardCompanies.scss";

const WizardCompanies = ({ highlighted }) => {
  const { companies, reports } = useContext(applicationContext);
  const { selectedCompany, setSelectedCompany, reportBody } =
    useContext(wizardContext);
  const selectCompany = (id) => {
    setSelectedCompany(companies.find((company) => company.id == id));
  };

  const unwantedCompanies = reports
    .filter(
      (report) =>
        report.candidateId === reportBody.candidateId &&
        report.phase === "Final" &&
        report.status === "passed"
    )
    .map((rep) => rep.companyId);

  const filteredCompanies = companies.filter((company) => {
    return unwantedCompanies.indexOf(company.id) === -1;
  });

  return (
    <ul id="wizard-companies-list">
      {filteredCompanies.map((company) => (
        <li
          className={`glass-effect ${
            selectedCompany.id == company.id ? highlighted : ""
          }`}
          id={company.id}
          key={company.id}
          onClick={(event) => {
            event.stopPropagation();
            selectCompany(event.currentTarget.id);
          }}
        >
          <p>{company.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default WizardCompanies;
