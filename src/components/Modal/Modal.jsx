import React, { useContext, useEffect } from "react";
import "./Modal.scss";
import { applicationContext } from "../../context";
import Button from "../Button/Button";

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

  const { reports } = useContext(applicationContext);
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
            name="X"
            classes="modal-close"
            method={setDataModal}
            methodArgument={null}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
