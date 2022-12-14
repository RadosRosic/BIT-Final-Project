import React, { useContext } from "react";
import { wizardContext } from "../../../context";
import DatePicker from "../../DatePicker/DatePicker";
import ReportNotes from "../WizardReportNotes/WizardReportNotes";
import SelectComponent from "../../SelectComponent/SelectComponent";
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
        <label>Calendar:
        <div className="wizard-select-inner-wrapper">
          <DatePicker startDate={startDate} setStartDate={setStartDate} />
        </div>
        </label>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            text="Phase: "
            selectedItem={interviewPhase}
            setSelectedItem={setInterviewPhase}
            array={["CV", "HR", "Tech", "Final"]}
          />
        </div>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            text="Status: "
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
