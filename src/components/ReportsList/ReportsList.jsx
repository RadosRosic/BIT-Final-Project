import React, { useState, useContext } from "react";
import { applicationContext } from "../../context";
import ListDetail from "../ListDetail/ListDetail";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./ReportsList.scss";
import Modal from "../Modal/Modal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";

const ReportsList = ({ search }) => {
  const { token, reports, setValidData } = useContext(applicationContext);
  const formatDate = (interviewDate) => {
    const interviewDateUnformatted = new Date(interviewDate);
    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    const interviewDateFormatted = interviewDateUnformatted.toLocaleDateString(
      "en-US",
      dateOptions
    );
    return interviewDateFormatted;
  };

  const [dataModal, setDataModal] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [reportForDelition, setReportForDelition] = useState(0);

  const handleDataModal = (id) => {
    setDataModal(reports.find((e) => e.id == id));
  };

  const filterAll = reports.filter((e) =>
    e.candidateName
      ?.toLowerCase()
      .concat(" ", e.companyName.toLowerCase())
      .includes(search)
  );

  return (
    <>
      <ul id="reports-list">
        <li>
          <h4>Company</h4>
          <h4>Candidate</h4>
          <h4>Date</h4>
          <h4>Status</h4>
          <h4 className="hidden-th">
            <span className="reports-list_button-group">
              {/* znamo da ovo ne treba tako ali je bilo trenutno resenje */}
              <span>
                <VisibilityIcon />
              </span>
              <span>
                <DeleteForeverIcon />
              </span>
            </span>
          </h4>
        </li>
        {filterAll.map((e) => (
          <li key={e.id} id={e.id} className="glass-effect-grey">
            <ListDetail title="Company" value={e.companyName} />
            <ListDetail title="Candidate" value={e.candidateName} />
            <ListDetail title="Date" value={formatDate(e.interviewDate)} />
            <ListDetail title="Status" value={e.status} />
            <span className="reports-list_button-group">
              <span
                onClick={() => {
                  handleDataModal(e.id);
                }}
              >
                <VisibilityIcon />
              </span>
              <span
                onClick={() => {
                  setDeleteModalVisible(true);
                  setReportForDelition(e.id);
                }}
              >
                <DeleteForeverIcon />
              </span>
            </span>
          </li>
        ))}
      </ul>
      {dataModal && <Modal data={dataModal} setDataModal={setDataModal} />}
      {deleteModalVisible && (
        <ConfirmDeleteModal
          setDeleteModalVisible={setDeleteModalVisible}
          reportForDelition={reportForDelition}
          setReportForDelition={setReportForDelition}
        />
      )}
    </>
  );
};

export default ReportsList;
