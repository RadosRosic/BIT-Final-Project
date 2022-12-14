import React, { useContext } from "react";
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

  const interviewPhasesArr = ["CV", "HR", "Tech", "Final"];

  // console.log(
  //   reports.filter((r) => {
  //     return (
  //       r.candidateId === reportBody.candidateId &&
  //       r.companyId === reportBody.companyId
  //     );
  //   })
  // );

  return (
    <div id="wizard-report-step-3" className="glass-effect">
      <div className="wizard-select-outer-wrapper">
        <div className="wizard-select-inner-wrapper">
          <DatePicker startDate={startDate} setStartDate={setStartDate} />
        </div>
        <div className="wizard-select-inner-wrapper">
          <SelectComponent
            text="Phase: "
            selectedItem={interviewPhase}
            setSelectedItem={setInterviewPhase}
            array={interviewPhasesArr}
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
