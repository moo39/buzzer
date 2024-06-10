import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Images/Group 26.svg';
import cute from '../Images/cuate.svg';
import '../Css/Login3page.css';
import Image from 'next/image';
import Link from 'next/link';

const Login1 = ({setCurrentpage}) => {
    const handleNextClick = () => {
        setCurrentpage(2)
    };

    return (
        <Container>
                <Row className='mt-5'>
                    <Col className='col-12 col-md-6 col-lg'>
                        <Image src={logo} alt='...' className='section-logo'/>
                        <div className='parent'>
                            <div className='first mt-5'>
                                <span>Welcome!</span>
                                <p>Enter the authentication code we sent at*******896</p>
                                <input type='text' placeholder='Phone Number'/>
                            </div>

                            <div className='second '>
                                <button onClick={handleNextClick}>next</button>
                                <p>Don’t have an Account? <Link href={'/auth/register'}><span>Register</span></Link></p>
                            </div>
                        </div>
                    </Col>

                    <Col className='col-12 col-md-6 col-lg'>
                    <Image src={cute} width={600} alt='...' className='section-image'/>
                    </Col>
                </Row>
            </Container>
    )
}

export default Login1