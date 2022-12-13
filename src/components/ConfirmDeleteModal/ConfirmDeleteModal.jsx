import React, { useEffect, useContext } from "react";
import { applicationContext } from "../../context";
import "./ConfirmDeleteModal.scss";

const SmallModal = ({
  setDeleteModalVisible,
  reportForDelition,
  setReportForDelition,
}) => {
  const { token, setValidData } = useContext(applicationContext);

  const handleEsc = (event) => {
    if (event.key === "Escape") {
      setDeleteModalVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const deleteReport = (id) => {
    fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setValidData(false);
      });
  };

  return (
    <div
      className="delete-modal-bg"
      onClick={() => setDeleteModalVisible(false)}
    >
      <div className="delete-modal-content">
        <p>Delete forever?</p>
        <p>THIS CANNOT BE UNDONE!</p>
        <div>
          <button
            onClick={() => {
              deleteReport(reportForDelition);
              setReportForDelition(0);
              setDeleteModalVisible(false);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setReportForDelition(0);
              setDeleteModalVisible(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallModal;
