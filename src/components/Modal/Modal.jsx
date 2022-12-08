import React,{ useContext} from 'react'
import "./Modal.scss"
import { applicationContext } from '../../context'

const Modal = () => {
  const {reports} = useContext(applicationContext)
  
  return (
    <>
      Modal
    </>
  )
}

export default Modal