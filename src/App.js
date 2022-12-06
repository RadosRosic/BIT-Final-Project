import React, { useState, useEffect } from "react";

// import "./App.scss"

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [token, setToken] = useState("");

  console.log(token);

  function getToken() {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "dev@dev.com",
        password: "developer",
      }),
    })
      .then((res) => res.json())
      .then((res) => setToken(res.accessToken));
  }

  useEffect(() => getToken(), []);

  function fetchCandidates() {
    fetch("http://localhost:3333/api/candidates", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setCandidates(res));
  }
  // setTimeout(() => {
  //   fetchCandidates();
  //   fetchReports();
  // }, 3000);

  function fetchReports() {
    fetch("http://localhost:3333/api/reports", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => setReports(res));
  }

  return <div>
    
  </div>;
};

export default App;
