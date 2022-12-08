import React from "react";
import "./ReportPage.scss";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";

const ReportPage = () => {
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <header>
        Put Header Component here not HTML tags
        <Button name="Sign Out" method={signOut} />
        <Button name="Reports" classes={"active"} />
        <Button name="Create Report" classes={""} />
      </header>
      <Search />
      <main>
        <ReportsList />
      </main>
    </>
  );
};

export default ReportPage;
