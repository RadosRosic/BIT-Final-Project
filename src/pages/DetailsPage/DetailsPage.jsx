import React, { useState, useEffect, useContext } from "react";
import "./DetailsPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { applicationContext } from "../../context";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import EditCandidatePage from "../EditCandidatePage/EditCandidatePage";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";

const DetailsPage = () => {
  const { token } = useContext(applicationContext);
  let { personId } = useParams();
  const {activeCandidate} = useContext(applicationContext);
  const {setActiveCandidate} = useContext(applicationContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  

  return (
    <div>
      <Header />
      <div className="all-about-candidate">
        <div className="table-area glass-effect-grey">
        <Button
              name="Back"
              method={navigate}
              methodArgument={"../home"}
              classes="little-button-more"
            />
          {token && (
            <Button
              name="&#128065;"
              method={setIsEditing}
              methodArgument={!isEditing}
              classes="little-button-more"
            />
          )}
          {isEditing ? (
            <EditCandidatePage
              candidate={activeCandidate}
              token = {token}
              // setFreshData= {setFreshData}
             
            />
          ) : (
            <DetailsInfo candidate={activeCandidate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
