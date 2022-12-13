import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./LoginPage.scss";

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassError, setWrongPassError] = useState("");

  const attemptLogIn = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        const a = res.json();
        if (!res.ok) {
          throw new Error("Wrong Password");
        } else {
          return a;
        }
      })
      .then((res) => {
        setToken(res.accessToken);
        localStorage.setItem("token", res.accessToken);
      })
      .catch((err) => {
        console.log(err);
        setWrongPassError("Wrong Password!");
      });
  };

  const attemptLogInOnEnter = (event) => {
    if (event.key === "Enter") {
      attemptLogIn();
    }
  };

  const navigate = useNavigate();
  const proceedAsGuest = () => {
    navigate("/home");
  };

  return (
    <>
      <div id="log-in-wrapper">
        <div id="log-in-form" className="glass-effect-bright">
          <h1>Welcome</h1>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown={attemptLogInOnEnter}
          />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={attemptLogInOnEnter}
          />
          <Button name="Sign In" method={attemptLogIn} classes="login-button" />
          <Button
            name="Continue"
            method={proceedAsGuest}
            classes="login-button"
          />
          <p className="wrong-password-field">{wrongPassError}</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
