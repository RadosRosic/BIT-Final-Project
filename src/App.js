import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ApplicationProvider } from "./context.js";
import HomePage from "./pages/HomePage/HomePage";
import ReportPage from "./pages/ReportPage/ReportPage";
import ErrorPage from "./ErrorPage";

const App = () => {
  const [token, setToken] = useState("");
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = () => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  };

  useEffect(() => fetchCandidates(), []);

  return (
    <>
      <Routes>
      {/* <Route exact path="/">
        <Redirect to="/login" >
      </Route> */}
        <Route
        exact
          path="/login"
          element={
            <LoginPage
              token={token}
              setToken={setToken}
              setCandidates={setCandidates}
              fetchCandidates={fetchCandidates}
            />
          }
        />
        <Route path="/home" element={<HomePage candidates={candidates} />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/" element={<Navigate to="/login" replace/>}/>
      </Routes>
    </>
  );
};

export default App;
