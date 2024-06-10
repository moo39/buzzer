import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Images/Group 26.svg';
import pana from '../Images/pana.svg';
import '../Css/Login3page.css';
import Image from 'next/image';

const SignUp1 = ({ setCurrentpage }) => {
    const handleNextClick = () => {
        setCurrentpage(2)
    };
    return (
        <Container>
            <Row className='mt-5'>
                <Col className='col-12 col-md-6 col-lg'>
                    <Image src={logo} alt='...' className='section-logo' />
                    <div className=''>
                        <div className='first mt-5'>
                            <span>Register As Cafe/Restaurant</span>
                            <p>Register Now!</p>
                            <input type='text' placeholder='Type' />
                            <input type='text' placeholder='Full Name' className='mt-2' />
                            <input type='email' placeholder='Email' className='mt-2' />
                            <input type='text' placeholder='Phone Number' className='mt-2' />
                            <input type='password' placeholder='Password' className='mt-2' />
                        </div>

                        <div className='second mt-3'>
                            <button onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </Col>

                <Col className='col-12 col-md-6 col-lg'>
                    <Image src={pana} width={600} alt='...' className='section-image' />
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp1;