import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (email && password) {
        attemptLogIn();
      }
    }
  });

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
            <Button name="Sign In" method={attemptLogIn} />
            <Link to="/home">
              <Button name="Continue" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
