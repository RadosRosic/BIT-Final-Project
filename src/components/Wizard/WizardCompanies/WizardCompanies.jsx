import React, { useContext } from "react";
import { applicationContext, wizardContext } from "../../../context";
import "./WizardCompanies.scss";

const WizardCompanies = ({ highlighted }) => {
  const { companies } = useContext(applicationContext);
  const { selectedCompany, setSelectedCompany } = useContext(wizardContext);
  const selectCompany = (id) => {
    setSelectedCompany(companies.find((company) => company.id == id));
  };
  return (
    <ul id="wizard-companies-list">
      {companies.map((company) => (
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
          <h2>{company.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default WizardCompanies;
