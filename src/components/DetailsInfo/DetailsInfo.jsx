import React, { useState, useContext } from "react";
import { applicationContext } from "../../context";
import { useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import Moment from "react-moment";
import Table from "../../components/Table/Table";

const DetailsInfo = () => {
  const [dataModal, setDataModal] = useState(null);
  const { reports, candidates } = useContext(applicationContext);
  let { personId } = useParams();

  const candidateReports = reports.filter(
    // eslint-disable-next-line
    (report) => personId == report?.candidateId
  );
  
  // eslint-disable-next-line
  const currentCandidate = candidates.find((can) => can.id == personId);

  return (
    <>
      <div className="img-info-candidate glass-effect-bright">
        <div>
          <img src={currentCandidate?.avatar} alt="candidate" />
        </div>
        <div className="text-info-candidate">
          <div>
            <p>Name | </p>
            <h3>{currentCandidate?.name}</h3>
          </div>
          <div>
            <p>Email | </p>
            <h3>{currentCandidate?.email}</h3>
          </div>
          <div>
            <p>Date of birth | </p>
            <h3>
              <Moment format="DD/MM/YYYY">{currentCandidate?.birthday}</Moment>
            </h3>
          </div>
          <div>
            <p>Education | </p>
            <h3>{currentCandidate?.education}</h3>
          </div>
        </div>
      </div>
      <div className="table-area glass-effect-grey">
        <Table
          setDataModal={setDataModal}
          candidateReports={candidateReports}
        />
      </div>
      {dataModal && <Modal data={dataModal} setDataModal={setDataModal} />}
    </>
  );
};

export default DetailsInfo;
