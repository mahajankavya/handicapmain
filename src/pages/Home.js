import React from 'react'
import '../styles/Home.css'

import { Carousel, Container } from 'react-bootstrap'

//images imports
// import logo from '../assets/images/4-removebg-preview.png'
// import hi1 from '../assets/images/home1.jpeg'
// import hi2 from '../assets/images/home2.jpeg'
// import hi3 from '../assets/images/home3.jpeg'

function Home() {
  return (
    <div>
      <div className='section '>
        <Container className='homepage'>
          {/* <img src={logo}/> */}
        </Container>
        {/* <li>
        <img src={bgimg} className='bgimg'/>
        </li> */}
         {/* <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block homebg"
          src={hi1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block homebg"
          src={hi2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block homebg"
          src={hi3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
        
      </div>
    </div>
  )
}

export default Home
