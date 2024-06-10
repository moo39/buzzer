import React from 'react';
import '../Css/HomePage.css';
import { Container, Form } from 'react-bootstrap';
import food from '../Images/Group 283894.svg';
import Image from 'next/image';
import NavBaar from './Navbar';
import search from '../Images/search.svg';


const Landing = () => {
    return (
        <div className='landing fluid-image'>
            <NavBaar />
            <Container style={{ height: "80%" }} className='d-flex align-items-center'>
                <div className='landing-content'>
                    <Image src={food} alt='...' />

                    <div className='landing-paragraph'>
                        Welcome to our exquisite salon, where beauty meets expertise.
                        Step into a world of luxury and indulgence,
                        where we are dedicated to enhancing your natural beauty and leaving you feeling radiant.
                    </div>
                    <Form className="d-flex align-items-center">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className="searchHome me-2"
                        />
                        <Image src={search} alt='...' className='search-icon' />
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Landing;


/* <div className='title'>
    <h1 className='title-heading'>Food Mood</h1>
    <div className='vector'>
        <img src={vector} alt='...' />
    </div>
    <div className='curve'>
        <p>can</p>
        <p>change</p>
    </div>
</div> */