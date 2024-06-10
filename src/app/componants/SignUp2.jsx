import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Images/Group 26.svg';
import pana from '../Images/Frame 4.svg';
import photo from '../Images/svgexport.svg';
import add from '../Images/Group 2.svg';
import '../Css/Login3page.css';
import Image from 'next/image';
import Link from 'next/link';

const SignUp2 = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col className='col-12 col-md-6 col-lg'>
                    <Image src={logo} alt='...' className='section-logo' />
                    <div className=''>
                        <div className='first mt-5'>
                            <span>Register As Cafe/Restaurant</span>
                            <p>Register Now!</p>
                            <input type='text' placeholder='Address' />
                            <input type='text' placeholder='City' className='mt-2' />
                                <div className='add-image'>
                                    <p>Attach Your Display Picture</p>
                                    <div className='d-flex gap-3'>
                                        <div className='attach'>
                                            <Image src={add} alt='...'/>
                                        </div>
                                        <div className='attach'>
                                            <Image src={photo} alt='...'/>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className='second mt-5'>
                            <button>Submit</button>                             
                            <p className='signup-p'>Already have an account? <Link href={'/auth/login'}><span>Login Here</span></Link></p>
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

export default SignUp2;