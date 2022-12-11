import React, { useContext } from "react";
import Button from "../Button/Button";
import { applicationContext } from "../../context";
import "./Header.scss";
import { Link, Navigate } from "react-router-dom";

const Header = ({ signOut }) => {
  const { token } = useContext(applicationContext);

  return (
    <div>
      <h1>Bla Bla</h1>
      {token && <Button name="Sign Out" method={signOut} />}
      {token && (
        <Link to="/reports">
          <button>Reports</button>
        </Link>
      )}
      {token && (
        <Link to="/reports/create-report">
          <button>Create Report</button>
        </Link>
      )}
      {token && (
        <Link to="/reports/create-candidate">
          <button>Create Candidate</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
