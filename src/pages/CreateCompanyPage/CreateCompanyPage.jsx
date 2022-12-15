import React, { useState } from "react";
import "./CreateCompanyPage.scss";

const CreateCompanyPage = ({ token }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  function submitCompanyForm(e) {
    e.preventDefault();

    const company = { name, email };

    setIsAdding(true);

    fetch("http://localhost:3333/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(company),
    })
  }

  return (
    <form className="create-company glass-effect-bright" onSubmit={submitCompanyForm}>
      <p>Create company:</p>
      <label>Company e-mail:</label>
      <input
        type="email"
        placeholder="E-mail"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <label>Company </label>
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>

      {!isAdding && <button>Submit</button>}
      {isAdding && <button disabled>Submit</button>}
    </form>
  );
};

export default CreateCompanyPage;
