import React from 'react'
import '../styles/TopArtwork.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ser1 from '../assets/images/Diamond Daze.jpeg';
import ser2 from '../assets/images/Sunset Road Painting.jpeg';
import ser3 from '../assets/images/Final Recap Doze Green.jpeg';
import ser4 from '../assets/images/pastel painting.jpeg';
import ser5 from '../assets/images/watercolor painting.jpeg';
import ser6 from '../assets/images/watercolor.jpeg';
import { Slide } from 'react-awesome-reveal'

const serviceinfo = [
  {
    SerName: 'Airport transfer',
    serImage: ser1,
    serDisc: 'With additional wait time and fight tracking is case of delays, our service is optimized to make every airport transfer a breeze.'
  },
  {
    SerName: 'intercity trips',
    serImage: ser2,
    serDisc: "Your stressfree solution for travelling between cities with chauffeurs all over the world."
  },
  {
    SerName: 'Wedding event',
    serImage: ser3,
    serDisc: "Our friendly, and attentive service combined with thorough attention to details ensure you can truly relax and enjoy your special day"
  },
  {
    SerName: 'Business Meeting',
    serImage: ser4,
    serDisc: "Focus on your meeting with your partners, forget about the road and the car which will distract your thoughts."
  },
  {
    SerName: 'Hourly Service',
    serImage: ser5,
    serDisc: "Focus on your meeting with your partners, forget about the road and the car which will distract your thoughts."
  },
  {
    SerName: 'Corporate Services',
    serImage: ser6,
    serDisc: "Focus on your meeting with your partners, forget about the road and the car which will distract your thoughts."
  },
]

const TopArtwork = () => {
  return (
    <div className='TopArtworksection'>
    <Container fluid className='Service_Container'>
        <Slide direction='right'>
          <h6>TopArtwork</h6>
        </Slide>


        <Row>
          {
            serviceinfo.map((item) => {
              return (
                <Col sm={12} mg={6} lg={6}>
                    <Card className='Service_Card'>
                      <Card.Img src={item.serImage} className='Card_Image' />
                      <div style={{ flexDirection: 'column' }}>
                        <Card.Body>
                          <Slide direction='left'>
                            <Card.Title className='Service_Name' >{item.SerName}</Card.Title>
                          </Slide>
                          <Slide direction='right'>
                            <Card.Text className='Service_Disc' >
                              {item.serDisc}
                            </Card.Text>
                          </Slide>
                        </Card.Body>
                        <Slide direction='left'>
                          <button className='Read_More_Button'>Read More</button>
                        </Slide>
                      </div>
                    </Card>
                 

                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
    
  )
}

export default TopArtwork
