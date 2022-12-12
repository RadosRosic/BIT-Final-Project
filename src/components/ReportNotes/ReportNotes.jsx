import React from "react";
import "./ReportNotes.scss";

const ReportNotes = ({ notes, setNotes }) => {
  return (
    <>
      <textarea
        rows="20"
        cols="60"
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
