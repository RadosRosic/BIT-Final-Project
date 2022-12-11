import React, { useState, useEffect, useContext } from "react";
import "./DetailsPage.scss";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Table from "../../components/Table/Table";
import { applicationContext } from "../../context";
import Header from "../../components/Header/Header";


const DetailsPage = () => {
  const [candidate, setCandidate] = useState({});
  const { reports } = useContext(applicationContext);
  let { personId } = useParams();
  const [dataModal, setDataModal] = useState(null);


  const candidateReports = reports.filter((e) => personId === e.candidateId);

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
<Header/>
      <div className="mainInfo">
        <div>
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="can"
          />
        </div>
        <div>
          <p>Name: {candidate.name}</p>
          <p>Email: {candidate.email}</p>
        </div>
        <div>
          <p>
            Date of birth:
            <Moment format="DD/MM/YYYY">{candidate.birthday}</Moment>
          </p>
          <p>Education: {candidate.education}</p>
        </div>
      </div>
      <div>
        <Table
          setDataModal={setDataModal}
          candidateReports={candidateReports}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
