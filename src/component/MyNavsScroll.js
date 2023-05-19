import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import logo from '../assets/images/4-removebg-preview.png'
import { TbHomeEco } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { GiHeartWings } from "react-icons/gi";
import { BiLogInCircle } from "react-icons/bi";
import '../styles/MyNavsScroll.css'

function MyNavsScroll() {
  return (
    <div >
      <Navbar collapseOnSelect fixed='top' bg='light' className='navbar'>
        <Container>
            <Navbar.Brand>
                <img src={logo} alt='logo' className='logoimg'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-nav-bar'/>
            <Navbar.Collapse id-controls='responsive-nav-bar'>
                <Nav className='ms-auto '>
                    <Link to="home" className="mlink mfont" spy={true} offset={-100} duration={100}><TbHomeEco className='icon'/>Home</Link>
                    <Link to="about" className="mlink mfont" spy={true} offset={-100} duration={100}><FaRegComment className='icon'/>About</Link>
                    <Link to="contactus" className="mlink mfont" spy={true} offset={-100} duration={100}><MdConnectWithoutContact className='icon'/>ContactUs</Link>
                    <Link to="topartist" className="mlink mfont" spy={true} offset={-100} duration={100}><BsPersonHearts className='icon'/>TopArtist</Link>
                    <Link to="topartwork" className="mlink mfont" spy={true} offset={-100} duration={100}><GiHeartWings className='icon'/>TopArtwork</Link>
                    <Link to="login" className="mlink mfont" spy={true} offset={-100} duration={100}><BiLogInCircle className='icon'/>Login</Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavsScroll
