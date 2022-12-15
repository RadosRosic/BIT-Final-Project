import React, { useContext, useState } from "react";
import { wizardContext, applicationContext } from "../../../context";
import DatePicker from "../../DatePicker/DatePicker";
import ReportNotes from "../WizardReportNotes/WizardReportNotes";
import SelectComponent from "../../SelectComponent/SelectComponent";
import "./WizardFillReport.scss";

const WizardFillReport = () => {
  const { reports } = useContext(applicationContext);

  const {
    startDate,
    setStartDate,
    interviewPhase,
    setInterviewPhase,
    interviewStatus,
    setInterviewStatus,
    notes,
    setNotes,
    reportBody,
  } = useContext(wizardContext);

  const intPhasesArr = ["CV", "HR", "Tech", "Final"];

  const passedPhases = reports
    .filter((r) => {
      return (
        r.candidateId === reportBody.candidateId &&
        r.companyId === reportBody.companyId &&
        r.status === "passed"
      );
    }) // get an arr of reports for the selected company and candidates that are marked with "passed"
    .map((report) => report.phase) // get their phases
    .concat(intPhasesArr) // merge with intPhasesArr
    .reduce((acc, el) => {
      return { ...acc, [el]: (acc[el] || 0) + 1 };
    }, {}); // use reduce to see what phases appear once and what phases appear twice (2 === phase completed successfully, 1 === phase yet to be completed)

  const remainingPhases = Object.entries(passedPhases)
    // make an array of key-value pairs of said object
    .filter((el) => el[1] === 1) // filter through key-value pairs based on second element being 1, i.e. phase yet to be completed
    .map((el) => el[0]) // get only remaining keys, coresponding to said phases
    .slice(0, 1); // slice the first element in order to get a single item to pass to select component (must pass an array)
  // lord give me strength...

  return (
    <div id="wizard-report-step-3" className="glass-effect">
      <div className="wizard-select-outer-wrapper">
        <label>
          Calendar:
          <div className="wizard-select-inner-wrapper">
            <DatePicker startDate={startDate} setStartDate={setStartDate} />
          </div>
        </label>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            text="Phase: "
            selectedItem={interviewPhase}
            setSelectedItem={setInterviewPhase}
            array={remainingPhases}
            dummyValue={"Phase"}
          />
        </div>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            text="Status: "
            selectedItem={interviewStatus}
            setSelectedItem={setInterviewStatus}
            array={["passed", "declined"]}
            dummyValue={"Status"}
          />
        </div>
      </div>
      <div className="wizard-report-notes-wrapper">
        <ReportNotes notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
};

export default WizardFillReport;
