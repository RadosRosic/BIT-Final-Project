import React, { useState, useEffect, useContext } from "react";
import "./DetailsPage.scss";
import { useNavigate } from "react-router-dom";
import { applicationContext } from "../../context";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import EditCandidatePage from "../EditCandidatePage/EditCandidatePage";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const DetailsPage = () => {
  const { token } = useContext(applicationContext);
  const {activeCandidate} = useContext(applicationContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [isButtonEdit, setIsButtonEdit] = useState(false);
  return (
    <div>
      <Header />
        <div className="all-about-candidate">
       
          {token && (
            <Button
              name={isEditing ? <KeyboardBackspaceIcon fontSize="large"/> : <DriveFileRenameOutlineIcon fontSize="large"/>}
              method={setIsEditing}
              methodArgument={!isEditing}
              classes="medium-button"
            />
          )}
          {isEditing ? (
            <EditCandidatePage
              candidate={activeCandidate}
              token = {token}
            />
          ) : (
            <DetailsInfo candidate={activeCandidate} />
          )}
        </div>
        
    </div>
  );
};

export default DetailsPage;
