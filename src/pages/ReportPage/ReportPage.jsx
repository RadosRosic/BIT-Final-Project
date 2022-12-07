import React from "react";
import "./ReportPage.scss";

const ReportPage = () => {
  

  return (
    <div>
      ReportPage
      <p>Logged in!</p>
      <button onClick={() => localStorage.removeItem("token")}>Log Out</button>
    </div>
  );
};

export default ReportPage;
