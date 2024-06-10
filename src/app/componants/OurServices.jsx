import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import decoration from '../Images/text-decor.svg';
import speMenu from '../Images/spe-menu.svg';
import tasty from '../Images/testy-food.svg';
import wifi from '../Images/wifi.svg';
import offer from '../Images/offer.svg';
import Image from 'next/image';

const OurServices = () => {
    return (
        <div>
            <Container className='services' fluid>
                <Row>
                    <div className='text-center mb-5'>
                        <h3>Our Services</h3>
                        <Image src={decoration} alt='...' />
                    </div>
                    <Col className='card-services'>
                        <Image src={speMenu} alt='...'  style={{marginTop:"15px"}}/>
                        <p>Special Menu</p>
                    </Col>
                    <Col className='card-services'>
                        <Image src={tasty} alt='tasty'  style={{marginTop:"15px"}}/>
                        <p>Tasty Food</p>
                    </Col>
                    <Col className='card-services'>
                        <Image src={wifi} alt='...'  style={{marginTop:"15px"}}/>
                        <p>Free Wi-Fi</p>
                    </Col>
                    <Col className='card-services'>
                        <Image src={offer} alt='...' style={{marginTop:"15px"}}/>
                        <p>Special Offer</p>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default OurServices;