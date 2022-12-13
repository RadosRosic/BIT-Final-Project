import React from "react";
import "./WizardReportNotes.scss";

const ReportNotes = ({ notes, setNotes }) => {
  return (
    <>
      <textarea
        rows="10"
        cols="80"
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
