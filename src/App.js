import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ApplicationProvider } from "./context.js";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ReportPage from "./pages/ReportPage/ReportPage";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtectedRoute.jsx";

import "./App.scss";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchCandidates = () => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  };

  const fetchReports = () => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  };

  const fetchCompanies = () => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  };

  useEffect(() => {
    fetchReports();
    fetchCompanies();
    fetchCandidates();
  }, []);

  return (
    <>
      <ApplicationProvider value={{ candidates, reports }}>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <ProtectedRoute token={!token} route="/reports">
                <LoginPage
                  token={token}
                  setToken={setToken}
                  setCandidates={setCandidates}
                  fetchCandidates={fetchCandidates}
                />
              </ProtectedRoute>
            }
          />

          <Route path="/home" element={<HomePage />} />
          <Route
            path="/reports"
            element={
              <ProtectedRoute token={token} route="/login">
                <ReportPage setReports={setReports} />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </ApplicationProvider>
    </>
  );
};

export default App;
