import React, { useState } from 'react';
import Moment from 'react-moment';
import './Table.scss';
import Button from '../Button/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Table = ({ candidateReports, dataModal, setDataModal }) => {

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
              name={<VisibilityIcon/>}
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
      
    </>
  );
};

export default Table;
