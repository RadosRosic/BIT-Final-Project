import React, {useContext} from "react";
import { applicationContext } from "../../context";
import { Link } from "react-router-dom";
import "./Card.scss";


const Card = ({ candidate }) => {

  const {setActiveCandidate} = useContext(applicationContext);


  return (
      <div onClick={() => setActiveCandidate(candidate) }>
    <Link to={`/details/${candidate.id}`} className="card glass-effect-bright">
        <img src={candidate.avatar} alt='can'/>
        <h3>{candidate.name}</h3>
        <p>{candidate.email}</p>
    </Link>
   
      </div>
  );
};

export default Card;
