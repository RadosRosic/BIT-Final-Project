import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = ({ token, setToken, fetchCandidates }) => {
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
      });
  };

  return (
    <>
      <div>
        <input type="text" onChange={(event) => setEmail(event.target.value)} />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          onClick={() => {
            attemptLogIn();
            console.log(token);
          }}
        >
          Sign in
        </button>

        <Link to="/home">
          <button onClick={() => fetchCandidates()}>
            Continue without logging in
          </button>
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
