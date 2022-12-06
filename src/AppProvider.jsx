import React, { useState, useEffect } from "react";

const AppProvider = ({ token }) => {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);

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

  function fetchReports() {
    fetch("http://localhost:3333/api/reports", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setReports(res));
  }

  useEffect(() => {
    fetchReports();
    console.log(reports);
  }, []);

  // useEffect(() => {
  //   fetchCandidates();
  //   console.log(candidates);
  // }, []);

  return <div></div>;
};

export default AppProvider;
