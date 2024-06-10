import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import decoration from '../Images/text-decor.svg';
import r1 from '../Images/Rectangle 1.svg';
import r2 from '../Images/R2.svg';
import r3 from '../Images/R3.svg';
import r4 from '../Images/R4.svg';
import ystar from '../Images/Y-star.svg';
import gstar from '../Images/G-star.svg';
import location from '../Images/location.svg';
import '../Css/HomePage.css';
import Image from 'next/image';

const Restaurant = () => {
    return (
        <div>
            <Container className='mt-4 text-center'>
                <Row className='resturant'>
                    <div className='text-center mb-5'>
                        <h3>Our Restaurants</h3>
                        <Image src={decoration} alt='decoration' />
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
                <button className='view-res'>
                    <span>View All</span>
                </button>
            </Container>
        </div>
    );
};

export default Restaurant;