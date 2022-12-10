import React, { useState } from "react";
import Moment from "react-moment";
import "./Table.scss";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Table = ({ candidateReports }) => {
  const [dataModal, setDataModal] = useState(null);

  const handleDataModal = (data) => {
    setDataModal(data);
  };

  const renderTableData = () => {
    return candidateReports.map((e, i) => (
      <>
        <tr key={i}>
          <td>{e.companyName}</td>
          <td>
            <Moment format="DD/MM/YYYY">{e.interviewDate}</Moment>
          </td>
          <td>{e.status}</td>
          <td>
            <Button
              name="show Modal"
              method={handleDataModal}
              methodArgument={e}
            />
          </td>
        </tr>
      </>
    ));
  };

  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Interview Date</th>
              <th colSpan="2">Status</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        {dataModal && <Modal data={dataModal} setDataModal={setDataModal} />}
      </div>
    </>
  );
};

export default Table;
