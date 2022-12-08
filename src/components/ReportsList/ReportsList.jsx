import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../Button/Button";
import ListDetail from "../ListDetail/ListDetail";
import "./ReportsList.scss";

const ReportsList = () => {
  const { reports } = useContext(applicationContext);

  const formatDate = (interviewDate) => {
    const interviewDateUnformatted = new Date(interviewDate);
    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    const interviewDateFormatted = interviewDateUnformatted.toLocaleDateString(
      "sr-RS",
      dateOptions
    );
    return interviewDateFormatted;
  };

  return (
    <>
      ReportsList
      <ul id="reports-list">
        {reports.map((e) => (
          <li key={e.id}>
            <ListDetail keys="Company" value={e.companyName} />
            <ListDetail keys="Candidate" value={e.candidateName} />
            <ListDetail keys="Candidate" value={formatDate(e.interviewDate)} />
            <ListDetail keys="Status" value={e.status} />
            <div>
              <Button name="open modal" />
              <Button name="delete reports" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReportsList;
