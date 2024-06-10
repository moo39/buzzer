import React from 'react';
import '../Css/HomePage.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../Images/Group 26.svg';
import phone from '../Images/phone.svg';
import mailbox from '../Images/mailbox.svg';
import Facebook from '../Images/facebook.svg';
import Twitter from '../Images/twiter.svg';
import Instagram from '../Images/insta.svg';
import Linkedin from '../Images/linkedin.svg';
import Youtube from '../Images/youtub.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="footer-logo">
                            <Image src={logo} alt="Logo" />

                        </div>
                        <p className="footer-quote">
                            These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme.
                        </p>
                        <h6>CONTACT INFO</h6>
                        <p>
                            <Image src={phone} alt='...' /> +91 1234567891
                        </p>
                        <p>
                            <Image src={mailbox} alt='...' /> munasbas007@gmail.com
                        </p>
                    </Col>
                    <Col md={2}>
                        <h6>ACCOUNT</h6>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h6>LEGALS</h6>
                        <ul className="footer-links">
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6>SUBSCRIBE</h6>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter Your Email" className="subscribe-input" />
                            </Form.Group>
                            <Button variant="outline-light" className="subscribe-button">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="footer-social">
                    <Col className="text-center">
                        <a href='#twitter'> <Image src={Twitter} alt='...' /></a>
                        <a href='#facebook'> <Image src={Facebook} alt='...' /></a>
                        <a href='#youtube'> <Image src={Youtube} alt='...' /></a>
                        <a href='#instagram'> <Image src={Instagram} alt='...' /></a>
                        <a href='#linkedin'> <Image src={Linkedin} alt='...' /></a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2023 For Salone. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;