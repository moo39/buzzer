import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import decoration from '../Images/text-decor.svg';
import lemon from '../Images/lemon.svg';
import cake from '../Images/cake.svg';
import node from '../Images/node.svg';
import strue from '../Images/strue.svg';
import Image from 'next/image';

const Gallary = () => {
    return (
        <div>
            <Container  className='gallery'>
                <div className='text-center mb-5'>
                    <h3>Gallery</h3>
                    <Image src={decoration} alt='...' className='decoration'/>
                </div>
                <Row className='text-center'>
                    <Col lg={3} md={6} sm={6} xs={12} className=' mb-4'>
                        <Image src={lemon} alt='...' />
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className=' mb-4'>
                        <Image src={cake} alt='...' />
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className=' mb-4'>
                        <Image src={node} alt='...' />
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className=' mb-4'>
                        <Image src={strue} alt='...' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallary;