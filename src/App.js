import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ApplicationProvider } from "./context.js";
import HomePage from "./pages/HomePage/HomePage";
import ReportPage from "./pages/ReportPage/ReportPage";

const App = () => {
  const [token, setToken] = useState("");
  const [candidates, setCandidates] = useState([]);

  const fetchUsers = () => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginPage
              setToken={setToken}
              setCandidates={setCandidates}
              fetchUsers={fetchUsers}
            />
          }
        />
        <Route path="/home" element={<HomePage candidates={candidates} />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
    </>
  );
};

export default App;
