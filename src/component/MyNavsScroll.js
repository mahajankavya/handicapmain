import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import logo from '../assets/images/4-removebg-preview.png'

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
                    <Link to="home" className="mlink mfont" spy={true} offset={-100} duration={100}>Home</Link>
                    <Link to="about" className="mlink mfont" spy={true} offset={-100} duration={100}>About</Link>
                    <Link to="customer" className="mlink mfont" spy={true} offset={-100} duration={100}>Contact Us</Link>
                    <Link to="login" className="mlink mfont" spy={true} offset={-100} duration={100}>Login</Link>
                    <Link to="topartist" className="mlink mfont" spy={true} offset={-100} duration={100}>TopArtist</Link>
                    <Link to="topartwork" className="mlink mfont" spy={true} offset={-100} duration={100}>TopArtwork</Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavsScroll
