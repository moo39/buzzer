import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Images/Group 26.svg';
import pana from '../Images/pana1.svg';
import '../Css/Login3page.css';
import Image from 'next/image';

const Login2 = () => {
    return (
            <Container>
                <Row className='mt-5'>
                    <Col className='col-12 col-md-6 col-lg'>
                        <Image src={logo} alt='...' className='section-logo'/>
                        <div className='parent'>
                            <div className='first mt-5'>
                                <span>Login Code</span>
                                <p>Enter the authentication code we sent at*******896</p>
                                <input type='text' placeholder='+971 2356 5896' />
                                <input type='text' placeholder='Login Code' className='mt-3'/>
                            </div>

                            <div className='second '>
                                <button>Submit</button>
                            </div>
                        </div>
                    </Col>

                    <Col className='col-12 col-md-6 col-lg'>
                    <Image src={pana} width={600} alt='...' className='section-image'/>
                    </Col>
                </Row>
            </Container>
    );
};

export default Login2;