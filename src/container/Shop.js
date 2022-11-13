import React from 'react'
import {Card,Button,Container,Row,Col,ListGroup ,Tab} from 'react-bootstrap';
import ProductCard from "../components/ProductCard";

import P1 from '../images/p1.jpg';
import P2 from '../images/p2.jpg';
import P3 from '../images/p3.jpg';

const productData=[
    {gander:'male', image:P1},{gender:'female',image:P2},{gender:'kids',image:P3},
    {gander:'male', image:P1},{gender:'female',image:P2},{gender:'kids',image:P3},
]

function ShopPage() {

  return (
    <div style={{padding:'2rem 0rem'}}>
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
                                   <Button className='product-btn py-2' variant="success">View More</Button>
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
                                   <Button className='product-btn py-2' variant="success">View More</Button>
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
                                   <Button className='product-btn py-2' variant="success">View More</Button>
                                </div>
                            </Tab.Pane>
                          </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
    </div>
  )
}

export default ShopPage;