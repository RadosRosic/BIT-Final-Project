import React, { useContext } from "react";
import Button from "../Button/Button";
import { applicationContext } from "../../context";
import "./Header.scss";
import { Link, Navigate } from "react-router-dom";

const Header = ({ signOut }) => {
  const { token } = useContext(applicationContext);

  return (
    <header>
      <h1>Interview Tracker</h1>
      {token && (
        <div id="header-btns">
          <Button name="Sign Out" method={signOut} />
          <nav className="navigation-wrapper">
            <Link to="/reports">
              <button>Reports</button>
            </Link>
            <Link to="/reports/create-report">
              <button>Create Report</button>
            </Link>
            <Link to="/reports/create-candidate">
              <button>Create Candidate</button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
