import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "./LoginPage.scss";

const LoginPage = ({ token }) => {
  const [candidates, setCandidates] = useState([]);

  function fetchCandidates() {
    fetch("http://localhost:3333/api/candidates", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCandidates(res);
      });
  }

  return (
    <>
      Proceed without login
      <Link to="/home">
        <button
          onClick={() => {
            fetchCandidates();
            console.log(candidates);
          }}
        >
          Click
        </button>
        <Routes>
          <Route path="/home" element={<HomePage candidates={candidates}/>} />
        </Routes>
      </Link>
    </>
  );
};

export default LoginPage;
