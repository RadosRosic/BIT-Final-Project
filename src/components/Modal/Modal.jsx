import React, { useEffect } from "react";
import "./Modal.scss";
import Button from "../Button/Button";
import Moment from "react-moment";

const Modal = ({ data, setDataModal }) => {
  function handleEsc(event) {
    if (event.keyCode === 27) {
      setDataModal(null);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => {
          setDataModal(null);
        }}
      >
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Button
            name="🞭"
            classes="modal-close"
            method={setDataModal}
            methodArgument={null}
          />
          <h2 className="candidate-name">{data.candidateName}</h2>
          <div className="modal-info">
            <div>
              <p>Company |</p>
              <h3>{data.companyName}</h3>
            </div>
            <div>
              <p>Interview date |</p>
              <h3>
                <Moment format="DD/MM/YYYY">{data.interviewDate}</Moment>
              </h3>
            </div>
            <div>
              <p>Phase |</p>
              <h3>{data.phase}</h3>
            </div>
            <div>
              <p>Status |</p>
              <h3>{data.status}</h3>
            </div>
            <div></div>
          </div>
          <div className="report-notes">
            <p>Notes | </p>
            <p className="report-notes-content">{data.note}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
