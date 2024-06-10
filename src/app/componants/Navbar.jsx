import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../Images/home-logo.svg';
import person from '../Images/person.svg';
import alarm from '../Images/alarm.svg';
import menu from '../Images/menu.svg';
import '../Css/HomePage.css';
import Image from 'next/image';

const NavBaar = () => {
    return (
        <div>
            <Navbar expand="lg" bg="transparent" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand href="#home">
                        <Image src={logo} alt='...' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                            <Nav className="mx-auto gap-3" navbarScroll >
                                <Nav.Link className='active' href="#home">Home</Nav.Link>
                                <Nav.Link href="#products">Products</Nav.Link>
                                <Nav.Link href="#about-us">About Us</Nav.Link>
                                <Nav.Link href="#contact-us">Contact US</Nav.Link>
                            </Nav>
                        <div className='d-flex gap-2'>
                            <Image src={person} alt='...'/>
                            <Image src={alarm} alt='...'/>
                            <Image src={menu} alt='...'/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBaar;
