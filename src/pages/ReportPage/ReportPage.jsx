import React from "react";
import "./ReportPage.scss";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";


const ReportPage = (token) => {
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
     <Header signOut = {signOut}/>
      <Search />
      <main>
        <ReportsList token={token}/>
      </main>
    </>
  );
};

export default ReportPage;
