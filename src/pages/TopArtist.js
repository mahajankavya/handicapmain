import React from 'react'
import "../styles/TopArtists.css"
import { Slide } from 'react-awesome-reveal'
import { Col, Container, Image, Row } from 'react-bootstrap'
import artist1 from '../assets/images/artist1.png'
import artist2 from '../assets/images/artist2.jpeg'
import artist3 from '../assets/images/artist3.jpeg'

const TopArtist = () => {
  return (
    <div className='TopArtistsection '>
      <Container id='guide' className='Guid_Container'>
      <Slide direction='left'>
          {/* <h6>Guide</h6> */}
        </Slide>
        <Row>
          <Col>
            <Slide direction='right'>
              <div className="Gride_Card">
                <Image src={artist1} className='Guide_Image' />
                <div className="card_content">
                  <span className="card_title">Rent Term in India</span>
                  <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                  <p className="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
                </div>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide direction='left'>
              <div className="Gride_Card">
                <Image src={artist2} className='Guide_Image' />
                <div className="card_content">
                  <span className="card_title">Fine in India</span>
                  <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                  <p className="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>

                </div>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide direction='right'>
              <div className="Gride_Card">
                <Image src={artist3} className='Guide_Image' />
                <div className="card_content">
                  <span className="card_title">Parking Areas</span>
                  <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                  <p className="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>

                </div>
              </div>
            </Slide>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default TopArtist
