import React, { useContext } from "react";
import Button from "../Button/Button";
import { applicationContext } from "../../context";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { token, setToken } = useContext(applicationContext);
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <header className="main-header">
      <h1>M N N R</h1>
      {token && (
        <div id="header-btns">
          <button onClick={signOut}>Sign Out</button>
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
