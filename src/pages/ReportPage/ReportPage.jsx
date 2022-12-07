import React, { useEffect } from "react";

import "./ReportPage.scss";

const ReportPage = () => {
  const fetchCandidates = () => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div>
      ReportPage
      <p>Logged in!</p>
    </div>
  );
};

export default ReportPage;
