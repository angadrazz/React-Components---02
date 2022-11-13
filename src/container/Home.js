import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import ProductCard from "../components/ProductCard";
import {Card,Button,Container,Row,Col,ListGroup ,Tab} from 'react-bootstrap';
import '../style/index.css';
import {NavLink} from 'react-router-dom';

const productData=[
    {},{},{},{},
    {},{},{},{},
]

function HomePage() {
  return (
    <div>
        <HomeCarousel/>
        <section style={{padding:'5rem 0rem'}}>
            <Container>
                <div className='my-4'>
                    <h1 className='text-center home-title'>Featured Products</h1>
                    <p className='text-center home-sub-title'>Who are in extremely love with eco friendly system.</p>
                </div>
                <div>
                    <Tab.Container id="list-group-tabs-example" className='my-4' defaultActiveKey="#link1">
                          <ListGroup horizontal >
                            <ListGroup.Item className='text-center' action href="#link1">Men</ListGroup.Item>
                            <ListGroup.Item className='text-center' action href="#link2">Women</ListGroup.Item>
                            <ListGroup.Item className='text-center' action href="#link3">Kids</ListGroup.Item>
                          </ListGroup>
                          <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Row className='my-4'>
                                {
                                    productData.map(()=>(
                                        <Col lg={3} xs={12} className='mt-4'>
                                            <ProductCard/>                  
                                        </Col>
                                    ))
                                }
                                </Row>
                                <div className='text-center p-4'>
                                    <NavLink to='/shop'>
                                        <Button className='product-btn py-2' variant="success">View More</Button>
                                    </NavLink>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Row>
                                {
                                    productData.map(()=>(
                                        <Col lg={3} xs={12} className='mt-4'>
                                            <ProductCard/>                  
                                        </Col>
                                    ))
                                }
                                </Row>
                                <div className='text-center p-4'>
                                    <NavLink to='/shop'>
                                        <Button className='product-btn py-2' variant="success">View More</Button>
                                    </NavLink>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Row>
                                {
                                    productData.map(()=>(
                                        <Col lg={3} xs={12} className='mt-4'>
                                            <ProductCard/>                  
                                        </Col>
                                    ))
                                }
                                </Row>
                                <div className='text-center p-4'>
                                    <NavLink to='/shop'>
                                        <Button className='product-btn py-2' variant="success">View More</Button>
                                    </NavLink>
                                </div>
                            </Tab.Pane>
                          </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default HomePage;