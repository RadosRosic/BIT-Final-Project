import React, { useState } from 'react'
import './CreateCandidate.scss'
import DatePicker from '../../components/DatePicker/DatePicker.jsx'

const CreateCandidate = ({ token}) => {
//   const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState(new Date())
  const [email, setEmail] = useState('')
  const [education, setEducation] = useState('')
  const [avatar, setAvatar] = useState('')
  const [isAdding, setIsAdding] = useState(false)
    
//   const allCandidatesId = [];
//   candidates.map ((e, i) => {
//     allCandidatesId.push(e.id)
//   })

//   let potentialID = Math.floor(Math.random() * 100000000);

  

function submitForm(e) {

    e.preventDefault();

    const candidate = {name, birthday, email, education, avatar};

    setIsAdding(true);

    fetch("http://localhost:3333/api/candidates", {
        method: "POST",
        headers: {"Content-Type": "application/json",
        "Authorization": `Bearer ${token.token}`},
        body: JSON.stringify(candidate)
    })
    .then(() => {console.log(token)})


}


  return (
    <form className='create-candidate' onSubmit={submitForm}>
      <p>Create candidate:</p>
      <label> Name:</label>
      <input
        type='text'
        placeholder='First and Last name'
        required
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
      ></input>

      <label> Birthday:</label>
      <DatePicker startDate={birthday} setStartDate={setBirthday} />

      <label> Email:</label>
      <input
        type='email'
        placeholder='Email'
        required
        value={email}
        onChange={event => {
          setEmail(event.target.value)
        }}
      ></input>

      <label>Education:</label>
      <input
        type='text'
        placeholder='Education'
        required
        value={education}
        onChange={event => {
          setEducation(event.target.value)
        }}
      ></input>

      <label>Picture:</label>
      <input
        type='text'
        placeholder='Picture'
        required
        value={avatar}
        onChange={event => {
          setAvatar(event.target.value)
        }}
      ></input>

      {!isAdding && <button >Submit</button>}
      {isAdding && <button disabled >Submit</button>}
      
    </form>
  )
}

export default CreateCandidate
