import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { ApplicationProvider } from "./context.js";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

const App = () => {
  const [token, setToken] = useState("");

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
      .then((res) => setToken(res?.accessToken));
  }

  useEffect(() => getToken(), []);

  return (
    <>
      <ApplicationProvider value={token}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ApplicationProvider>
    </>
  );
};

export default App;

// function fetchCandidates() {
//   fetch("http://localhost:3333/api/candidates", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => setCandidates(res));
// }

// function fetchReports() {
//   fetch("http://localhost:3333/api/reports", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => setReports(res));
// }

// useEffect(() => {
//   fetchReports();
//   console.log(reports);
// }, []);

// // useEffect(() => {
// //   fetchCandidates();
// //   console.log(candidates);
// // }, []);
