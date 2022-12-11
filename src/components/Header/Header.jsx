import React, { useContext } from "react";
import Button from "../Button/Button";
import { applicationContext } from "../../context";
import "./Header.scss";

const Header = ({ signOut }) => {
  const { token } = useContext(applicationContext);

  return (
    <div className="main-header">
      <h1>M N N R</h1>
      {token && <Button name="Reports" classes={"active"} />}
      {token && <Button name="Create Report" classes={""} />}
      {token && <Button name="Sign Out" method={signOut} />}
    </div>
  );
};

export default Header;
