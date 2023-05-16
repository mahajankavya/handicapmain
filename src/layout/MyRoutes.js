import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

//Import pages
import MyNavBar from './MyNavBar'
import Home from '../pages/Home'
import About from '../pages/AboutUs'
import Customer from '../pages/Customer'
import Login from '../pages/Login'
import TopArtist from '../pages/TopArtist'
import TopArtwork from '../pages/TopArtwork'

//import icons


function MyRoutes() {
    return (
        <div>

            <MyNavBar />
            <Container fluid>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/customer' element={<Customer />} />
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
