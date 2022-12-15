import React, { useContext, useState } from "react";
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

  const [active, setActive] = useState(false);
  const bigMac = "bigMac";

  return (
    <header className="main-header">
      <h1>M N N R</h1>

      <div id="header-btns">
        <Button
          method={token ? signOut : signIn}
          name={token ? "Sign Out" : "Sign In"}
        />
        {token && (
          <>
            <nav className={`navigation-wrapper ${active ? bigMac : ""}`}>
              <Link to="/candidates">
                <button>Candidates</button>
              </Link>
              <Link to="/reports">
                <button>Reports</button>
              </Link>
              <span className="create span-btn">
                Create
                <div className="create-buttons-invisible">
                  <Link to="/reports/create-report">
                    <button>Create Report</button>
                  </Link>
                  <Link to="/reports/create-candidate">
                    <button>Create Candidate</button>
                  </Link>
                  <Link to="/reports/create-company">
                    <button>Create Company</button>
                  </Link>
                </div>
              </span>
            </nav>
            <div
              className={`hamburger ${active ? bigMac : ""}`}
              onClick={() => {
                setActive(!active);
              }}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
