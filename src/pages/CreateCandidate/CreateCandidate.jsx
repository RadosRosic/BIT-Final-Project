import React, { useState, useContext } from "react";
import { applicationContext } from "../../context";
import { useNavigate } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker.jsx";
import "./CreateCandidate.scss";

const CreateCandidate = ({ token }) => {
  const { setValidData } = useContext(applicationContext);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();

    const candidate = { name, birthday, email, education, avatar };

    setIsAdding(true);

    fetch("http://localhost:3333/api/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(candidate),
    })
      .then((res) => res.json)
      .then(() => setValidData(false));
    navigate("/candidates");
  }

  return (
    <form
      className="create-candidate glass-effect-bright"
      onSubmit={submitForm}
    >
      <p>Create candidate:</p>
      <label> Name:</label>
      <input
        type="text"
        placeholder="First and Last name"
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>

      <label> Birthday:</label>
      <DatePicker startDate={birthday} setStartDate={setBirthday} />

      <label> Email:</label>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>

      <label>Education:</label>
      <input
        type="text"
        placeholder="Education"
        required
        value={education}
        onChange={(event) => {
          setEducation(event.target.value);
        }}
      ></input>

      <label>Picture:</label>
      <input
        type="text"
        placeholder="Picture"
        required
        value={avatar}
        onChange={(event) => {
          setAvatar(event.target.value);
        }}
      ></input>

      {!isAdding && <button>Submit</button>}
      {isAdding && <button disabled>Submit</button>}
    </form>
  );
};

export default CreateCandidate;
