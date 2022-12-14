import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ApplicationProvider } from "./context.js";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ReportPage from "./pages/ReportPage/ReportPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Footer from "./components/Footer/Footer"

import "./App.scss";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [validData, setValidData] = useState(false);
  const [activeCandidate, setActiveCandidate] = useState(null)
  
  
  const fetchCandidates = () => {
    fetch("http://localhost:3333/api/candidates")
    .then((res) => res.json())
    .then((data) => {
      setCandidates(data);
      setValidData(true);
    });
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
  
  
  //flag u dependency Array-u [validData] 
  useEffect(() => {
    if (!validData) {
      fetchReports();
      fetchCompanies();
      fetchCandidates();
    }
  }, [validData]);

  return (
    <>
      <ApplicationProvider
        value={{
          candidates,
          reports,
          setValidData,
          token,
          companies,
          setActiveCandidate,
          activeCandidate,
          setToken,
          setValidData,
          validData,
          fetchCandidates
        }}
      >
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <ProtectedRoute token={!token} route="/reports">
                <LoginPage setToken={setToken} />
              </ProtectedRoute>
            }
          />

          <Route path="/candidates" element={<HomePage />} />
          <Route
            path="/reports/*"
            element={
              <ProtectedRoute token={token} route="/login">
                <ReportPage setReports={setReports} token={token} />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/details/:personId" element={<DetailsPage />} />
        </Routes>
      </ApplicationProvider>
      <Footer/>
    </>
  );
};

export default App;
