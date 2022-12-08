import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../Button/Button";
import ListDetail from "../ListDetail/ListDetail";
import "./ReportsList.scss";

const ReportsList = ({ token }) => {
  const { reports, setValidData } = useContext(applicationContext);
  const formatDate = (interviewDate) => {
    const interviewDateUnformatted = new Date(interviewDate);
    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    const interviewDateFormatted = interviewDateUnformatted.toLocaleDateString(
      "sr-RS",
      dateOptions
    );
    return interviewDateFormatted;
  };

  const deleteReport = (id) => {
    fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setValidData(false);
      });
  };

  return (
    <>
      ReportsList
      <ul id="reports-list">
        {reports.map((e) => (
          <li key={e.id} id={e.id}>
            <ListDetail title="Company" value={e.companyName} />
            <ListDetail title="Candidate" value={e.candidateName} />
            <ListDetail title="Candidate" value={formatDate(e.interviewDate)} />
            <ListDetail title="Status" value={e.status} />
            <div className="reports-list_button-group">
              <Button name="open modal" />
              <Button
                name="delete report"
                method={deleteReport}
                methodArgument={e.id}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReportsList;
