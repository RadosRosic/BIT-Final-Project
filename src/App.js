import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
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

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  return (
    <>
      <Routes>
        <Route
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
        <Route
          path="/reports"
          element={token ? <ReportPage /> : <ErrorPage />}
        />
      </Routes>
    </>
  );
};

export default App;
