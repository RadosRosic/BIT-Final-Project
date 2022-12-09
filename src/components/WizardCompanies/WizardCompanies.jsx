import React, { useContext } from "react";
import { applicationContext } from "../../context";
import "./WizardCompanies.scss";

const WizardCompanies = () => {
  const { companies } = useContext(applicationContext);
  return (
    <div>
      <ul>
        {companies.map((e) => (
          <li>{e.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WizardCompanies;
