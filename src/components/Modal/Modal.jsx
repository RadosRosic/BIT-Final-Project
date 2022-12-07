import React,{ useContext} from 'react'
import "./Modal.scss"
import { applicationContext } from '../../context'

const Modal = () => {
  const {reports} = useContext(applicationContext)
  console.log(reports);
  return (
    <div></div>
  )
}

export default Modal