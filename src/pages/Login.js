import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../styles/Login.css'

//import icons
import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLockAlt } from "react-icons/bi";


const Login = () => {

  const [Username, setUsername] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [Password, setPassword] = useState("")
  const [EmailId, setEmailId] = useState("")

  return (
    <div className='section'>
      <div className='wrapper'>
      <div className="inner">
        <Form>
          <Form.Group className='form-holder'>
            <span className="lnr lnr-user"></span>
            <Form.Label><FaRegUser /> Username : </Form.Label>
            <Form.Control type='Text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className='form-holder'>
            <span className="lnr lnr-phone-handset"></span>
            <Form.Label><BsTelephone /> Mobile Number : </Form.Label>
            <Form.Control type='Text' placeholder='Mobile Number' onChange={(e) => setMobileNumber(e.target.value)} />
          </Form.Group>

          <Form.Group className='form-holder'>
            <span className="lnr lnr-envelope"></span>
            <Form.Label><GrMailOption /> Email Id : </Form.Label>
            <Form.Control type='Text' placeholder='EmailID' onChange={(e) => setEmailId(e.target.value)} />
          </Form.Group>

          <Form.Group className='form-holder'>
            <span className="lnr lnr-lock"></span>
            <Form.Label><RiLockPasswordLine /> Password : </Form.Label>
            <Form.Control type='Text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button>Register</Button>

        </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
