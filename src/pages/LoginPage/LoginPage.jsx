import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogIn = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setToken(res.accessToken);
        localStorage.setItem("token", res.accessToken);
      });
  };

  return (
    <>
      <div id="log-in-wrapper">
        <div id="log-in-form">
          <h1>Welcome</h1>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div id="log-in-buttons">
            <button
              onClick={() => {
                attemptLogIn();
              }}
            >
              Sign in
            </button>
            <Link to="/home">
              <button>Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
