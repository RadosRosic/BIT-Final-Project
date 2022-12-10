import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import SelectComponent from "../SelectComponent/SelectComponent";
import ReportNotes from "../ReportNotes/ReportNotes";
import "./WizardFillReport.scss";

const WizardFillReport = () => {
  return (
    <div id="wizard-report-step-3" className="glass-effect">
      <div className="wizard-select-outer-wrapper">
        <div className="wizard-select-inner-wrapper">
          <p>Interview Date:</p>
          <DatePicker />
        </div>
        <div className="wizard-select-inner-wrapper">
          <p>Phase</p>
          <SelectComponent array={["CV", "HR", "Tech", "Final"]} />
        </div>
        <div className="wizard-select-inner-wrapper">
          <p>Phase</p>
          <SelectComponent array={["passed", "declined"]} />
        </div>
      </div>
      <div className="wizard-report-notes-wrapper">
        <ReportNotes />
      </div>
    </div>
  );
};

export default WizardFillReport;
