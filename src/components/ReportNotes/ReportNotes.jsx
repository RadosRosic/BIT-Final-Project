import React from "react";
import "./ReportNotes.scss";

const ReportNotes = ({ notes, setNotes }) => {
  return (
    <>
      <p>Notes</p>
      <textarea
        rows="10"
        cols="50"
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
