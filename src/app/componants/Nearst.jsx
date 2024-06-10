import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../Css/HomePage.css';
import ystar from '../Images/Y-star.svg';
import gstar from '../Images/G-star.svg';
import decoration from '../Images/text-decor.svg';
import location from '../Images/location.svg';
import nearstSearch from '../Images/nearst-search.svg';
import r1 from '../Images/Rectangle 1.svg';
import r2 from '../Images/R2.svg';
import r3 from '../Images/R3.svg';
import r4 from '../Images/R4.svg';
import Image from 'next/image';

const Nearst = () => {
    return (
        <div>
            <Container className='nearest'>
                <div className='text-center mb-5'>
                    <h3>Nearest Restaurants</h3>
                    <Image src={decoration} alt='decoration' />
                </div>
                
                <Row>
                    <Col lg={12} md={12} xs={12} sm={12} className='d-flex mb-5'>
                        <Image src={nearstSearch} alt='...' className='searchIconMap' />
                        <Form.Control
                            type="text"
                            placeholder='Search'
                            className='nearest-search'
                        />
                        <Button className='nearest-btn'>Search</Button>
                    </Col>
                    <div class="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                        width="600" height="250" style={{ border: "0", }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='...'></iframe>
                </div>
                    <Col className='cardResturant'>
                        <Image src={r1} alt='...' className='card-image' />
                        <div className='m-3'>
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={gstar} alt='...' className='m-1' />
                        </div>
                        <h5>The Skye</h5>
                        <p>Restaurant</p>
                        <div className='location'>
                            <Image src={location} alt='...' />
                            <span>Main Market Riyadh, KSA</span>
                        </div>
                    </Col>

                    <Col className='cardResturant'>
                        <Image src={r2} alt='...' className='card-image' />
                        <div className='m-3'>
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={gstar} alt='...' className='m-1' />
                        </div>
                        <h5>The Skye</h5>
                        <p>Restaurant</p>
                        <div className='location'>
                            <Image src={location} alt='...' />
                            <span>Main Market Riyadh, KSA</span>
                        </div>
                    </Col>

                    <Col className='cardResturant'>
                        <Image src={r3} alt='...' className='card-image' />
                        <div className='m-3'>
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={gstar} alt='...' className='m-1' />
                        </div>
                        <h5>The Skye</h5>
                        <p>Restaurant</p>
                        <div className='location'>
                            <Image src={location} alt='...' />
                            <span>Main Market Riyadh, KSA</span>
                        </div>
                    </Col>

                    <Col className='cardResturant'>
                        <Image src={r4} alt='...' className='card-image' />
                        <div className='m-3'>
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={ystar} alt='...' className='m-1' />
                            <Image src={gstar} alt='...' className='m-1' />
                        </div>
                        <h5>The Skye</h5>
                        <p>Restaurant</p>
                        <div className='location'>
                            <Image src={location} alt='...' />
                            <span>Main Market Riyadh, KSA</span>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Nearst;