import React from "react";
import "./WizardReportNotes.scss";

const ReportNotes = ({ notes, setNotes }) => {
  return (
    <>
      <p>Write a report:</p>

      <textarea
        placeholder="Notes..."
        value={notes}
        onChange={(event) => {
          setNotes(event.target.value);
        }}
      ></textarea>
     
    </>
  );
};

export default ReportNotes;
