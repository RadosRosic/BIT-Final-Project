import React, { useContext } from "react";
import { applicationContext, wizardContext } from "../../context";
import "./WizardCompanies.scss";

const WizardCompanies = ({ highlighted }) => {
  const { companies } = useContext(applicationContext);
  const { selectedCompany, setSelectedCompany } = useContext(wizardContext);
  const selectCompany = (id) => {
    setSelectedCompany(companies.find((e) => e.id == id));
  };
  return (
    <ul id="wizard-companies-list">
      {companies.map((e) => (
        <li
          className={`glass-effect ${
            selectedCompany.id == e.id ? highlighted : ""
          }`}
          id={e.id}
          key={e.id}
          onClick={(event) => {
            event.stopPropagation();
            selectCompany(event.currentTarget.id);
          }}
        >
          <p>{e.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default WizardCompanies;
