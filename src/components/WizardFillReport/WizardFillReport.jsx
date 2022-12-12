import React, { useContext } from "react";
import { wizardContext } from "../../context";
import DatePicker from "../DatePicker/DatePicker";
import ReportNotes from "../ReportNotes/ReportNotes";
import SelectComponent from "../SelectComponent/SelectComponent";
import "./WizardFillReport.scss";

const WizardFillReport = () => {
  const {
    startDate,
    setStartDate,
    interviewPhase,
    setInterviewPhase,
    interviewStatus,
    setInterviewStatus,
    notes,
    setNotes,
  } = useContext(wizardContext);

  return (
    <div id="wizard-report-step-3" className="glass-effect">
      <div className="wizard-select-outer-wrapper">
        <div className="wizard-select-inner-wrapper">
          <DatePicker startDate={startDate} setStartDate={setStartDate} />
        </div>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            selectedItem={interviewPhase}
            setSelectedItem={setInterviewPhase}
            array={["CV", "HR", "Tech", "Final"]}
          />
        </div>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            selectedItem={interviewStatus}
            setSelectedItem={setInterviewStatus}
            array={["passed", "declined"]}
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
