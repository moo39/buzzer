import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import man from '../Images/Frame 51997.svg';
import man from'../Images/Frame51997.svg';
import decoration from '../Images/text-decor.svg';
import Image from 'next/image';

const Welcome = () => {
    return (
        <div>
            <Container fluid>
                <Row className='welcom-section'>
                    <Col xxl={6} lg={6} md={6} xs={12} sm={12} className='p-0'>
                        <Image src={man} alt='...' width={700} height={580} className='man-welcome'/>
                    </Col>
                    <Col xxl={6} lg={6} md={6} xs={12} sm={12}>
                        <div className='heading-text'>
                            <h3>
                                Welcome TO Our
                                Luxury Restaurant
                            </h3>
                            <Image src={decoration} alt='text-icon' className='decoration' />
                        </div>
                        <p>
                            Welcome to our exquisite salon, where beauty meets expertise.
                            Step into a world of luxury and indulgence, where we are
                            dedicated to enhancing your natural beauty and leaving
                            you feeling radiant.
                        </p>
                        <button className='view'>
                            <span>View All</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;