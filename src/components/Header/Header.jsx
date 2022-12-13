import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../Button/Button";
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
  const signIn = () => {
    navigate("/login");
  };

  return (
    <header className="main-header">
      <h1>M N N R</h1>
      <div id="header-btns">
        <Button
          method={token ? signOut : signIn}
          name={token ? "Sign Out" : "Sign In"}
        />
        {token && (
          <nav className="navigation-wrapper">
            <Link to="/candidates">
              <button>Candidates</button>
            </Link>
            <Link to="/reports">
              <button>Reports</button>
            </Link>
            <Link to="/reports/create-report">
              <button>Create Report</button>
            </Link>
            <Link to="/reports/create-candidate">
              <button>Create Candidate</button>
            </Link>
            <Link to="/reports/create-company">
              <button>Create Company</button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
