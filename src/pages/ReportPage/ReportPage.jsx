import React, { useEffect } from "react";

import "./ReportPage.scss";

const ReportPage = () => {
  const fetchReports = () => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div>
      ReportPage
      <p>Logged in!</p>
    </div>
  );
};

export default ReportPage;
