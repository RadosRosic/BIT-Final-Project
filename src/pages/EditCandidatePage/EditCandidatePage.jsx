import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import { applicationContext } from "../../context";

const EditCandidatePage = ({ candidate, token }) => {
  const { personId } = useParams();
  const { setValidData, candidates } = useContext(applicationContext);
  const currentCandidate = candidates.find((can) => can.id == personId);
  const [name, setName] = useState(currentCandidate.name);
  const [birthday, setBirthday] = useState(new Date(currentCandidate.birthday));
  const [email, setEmail] = useState(currentCandidate.email);
  const [education, setEducation] = useState(currentCandidate.education);
  const [avatar, setAvatar] = useState(currentCandidate.avatar);
  const [isAdding, setIsAdding] = useState(false);

  function submitForm(e) {
    e.preventDefault();

    const candidateEdit = { name, birthday, email, education, avatar };

    setIsAdding(true);
    console.log(token);
    fetch(`http://localhost:3333/api/candidates/${currentCandidate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(candidateEdit),
    })
      .then((res) => res.json())
      .then(() => setValidData(false));
  }

  console.log(token);

  return (
    <form className="create-candidate" onSubmit={submitForm}>
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
      <button
        onClick={() => {
          console.log("dsdds");
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default EditCandidatePage;
