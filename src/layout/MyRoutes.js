import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

//Import pages
import MyNavBar from './MyNavBar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import TopArtist from '../pages/TopArtist'
import TopArtwork from '../pages/TopArtwork'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'

//import icons


function MyRoutes() {
    return (
        <div>

            <MyNavBar />
            <Container fluid>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/Topartist' element={<TopArtist/>}/>
                    <Route path='/topartwork' element={<TopArtwork/>}/>
                  {/* <Route path='/register' element={<Register />} /> */}
                </Routes>
            </Container>


        </div>
    )
}

export default MyRoutes
