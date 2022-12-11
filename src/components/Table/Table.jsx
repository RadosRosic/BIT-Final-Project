import React, { useState } from 'react';
import Moment from 'react-moment';
import './Table.scss';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

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
              name='&#128065;'
              method={handleDataModal}
              methodArgument={e}
              classes='little-button-more'
            />
          </td>
        </tr>
      </>
    ));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {dataModal && <Modal data={dataModal} setDataModal={setDataModal} />}
    </>
  );
};

export default Table;
