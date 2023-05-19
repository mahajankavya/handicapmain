import React from 'react'
// import '../styles/ContactUs.css'
import '../styles/Contactus.css'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Slide } from 'react-awesome-reveal'
import contimg from '../assets/images/contactimg.png'

const ContactUs = () => {
    return (
        <div >
            <div className='Contactussection'>
            <Container className='Contact_Container'>
                <Row>
                    <Col sm={12} mg={6} lg={7}>
                        <Slide direction='left'>
                            <Image src={contimg} className='Contact_Image' />
                        </Slide>
                        <Row>
                            <Col>
                                <Slide direction='right'>
                                    <div className='Address_Container'>
                                        <h3>Address</h3>
                                        <h4>Near to Chandani Chouk shani road Savad,
                                            Tal-Raver ,Dist-Jalgoan.
                                        </h4>
                                    </div>
                                </Slide>
                            </Col>

                            <Col>
                                <Slide direction='right'>

                                    <div className='Address_Container' >
                                        <h3>located citys</h3>
                                        <h4>&#8226; Jalgaon</h4>
                                        <h4>&#8226; Mumbai</h4>
                                        <h4>&#8226; Pune</h4>
                                        <h4>&#8226; Nashik</h4>
                                        <h4>&#8226; Indore</h4>


                                    </div>
                                </Slide>
                            </Col>
                            <Col>
                                <Slide direction='right'>
                                    <div className='Address_Container' >
                                        <h3>Contact Info</h3>
                                        <div>
                                            <h4>mahajanashwii22@gmail.com</h4>
                                            <h4>7020328206</h4>
                                        </div>

                                    </div>
                                </Slide>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} mg={6} lg={5} className='Form_decoration'>
                        <Slide direction='left'>

                            <div className='Contact_Form'>
                                
                                <h4>Have an inquiry or same feedback for us ?
                                    fill out the form below to contact our term.</h4>
                                <div>
                                    <Form.Label className='Farm_Label'>First Name</Form.Label>
                                    <Form.Control type='text' className="input" />
                                    <Form.Label className='Farm_Label'>Last Name</Form.Label>
                                    <Form.Control type='text' className="input" />
                                    <Form.Label className='Farm_Label'>Email</Form.Label>
                                    <Form.Control type='email' className="input" />
                                    <Form.Label className='Farm_Label'>Massage</Form.Label>
                                    <Form.Control className='input' as="textarea" rows={3} placeholder="Add your massage" />
                                    <button class="button-57" role="button"><span class="text">Get in Touch</span><span>Send Massage</span></button>

                                </div>

                            </div>
                        </Slide>

                    </Col>
                </Row>

            </Container>
            </div>

            
        </div>
    )
}

export default ContactUs
