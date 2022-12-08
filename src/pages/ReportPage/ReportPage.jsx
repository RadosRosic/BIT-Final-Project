import React from "react";
import "./ReportPage.scss";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";



const ReportPage = () => {
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
     <Header signOut = {signOut}/>
      <Search />
      <main>
        <ReportsList/>
      </main>
    </>
  );
};

export default ReportPage;
