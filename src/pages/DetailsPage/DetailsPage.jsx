import React, { useState, useEffect, useContext } from 'react';
import './DetailsPage.scss';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import Table from '../../components/Table/Table';
import { applicationContext } from '../../context';
import Header from '../../components/Header/Header';

const DetailsPage = () => {
  const [candidate, setCandidate] = useState({});
  const { reports } = useContext(applicationContext);
  let { personId } = useParams();
  const [dataModal, setDataModal] = useState(null);

  const candidateReports = reports.filter((e) => personId == e.candidateId);

  // Fechovali smo ponovo zato sto nam je Marina objasnila da se u Api-u za konkretnog usera mogu nalaziti opsirnije informacije u odnosu na onaj pocetni fetch koji ima sve usere.
  console.log(candidate);
  function fetchCandidate() {
    fetch(`http://localhost:3333/api/candidates/${personId}`)
      .then((res) => res.json())
      .then((data) => setCandidate(data));
  }
 
  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <div>
      <Header />
      <div className="all-about-candidate">
        <div className="img-info-candidate glass-effect-bright">
          <div>
            <img
              src={candidate.avatar}
              alt="candidate"
            />
          </div>
          <div className="text-info-candidate">
            <div>
              <p>Name | </p>
              <h3>{candidate.name}</h3>
            </div>
            <div>
              <p>Email | </p>
              <h3>{candidate.email}</h3>
            </div>
            <div>
              <p>Date of birth | </p>
              <h3>
                <Moment format="DD/MM/YYYY">{candidate.birthday}</Moment>
              </h3>
            </div>
            <div>
              <p>Education | </p>
              <h3>{candidate.education}</h3>
            </div>
          </div>
        </div>
        <div className='table-area glass-effect-grey'>
          <Table
            setDataModal={setDataModal}
            candidateReports={candidateReports}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
