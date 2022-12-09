import React, {useState} from "react";
import "./ReportPage.scss";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import ReportsList from "../../components/ReportsList/ReportsList";
import Header from "../../components/Header/Header";



const ReportPage = (token) => {
  const [search, setSearch] = useState("");
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
     <Header signOut = {signOut}/>
      <Search onChange = {setSearch}/>
      <main>
        <ReportsList token={token} search = {search}/>
      </main>
    </>
  );
};

export default ReportPage;
