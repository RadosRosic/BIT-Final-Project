import React, { useContext } from "react";
import { applicationContext } from "../../context";
import "./WizardCompanies.scss";

const WizardCompanies = ({ selectCompany, selectedCompany, highlighted }) => {
  const { companies } = useContext(applicationContext);
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
          <h2>{e.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default WizardCompanies;
