import React from "react";
import "./ReportNotes.scss";

const ReportNotes = ({ notes, setNotes }) => {
  return (
    <>
      <textarea
        rows="14"
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
