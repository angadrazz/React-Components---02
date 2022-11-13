import React from 'react'
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import '../style/index.css';

import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';


function ProductCard() {
  return (
    <div>
      <Card  style={{ width: '100%',borderRadius:'1rem' }}>
         <Card.Img variant="top" src={p2}  style={{height:'200px',padding:'1rem 2rem'}}/>
           <Card.Body>
             <Card.Text className='product-name'>Dennis Lingo Men's Slim Fit Casual Shirt </Card.Text>
             <Card.Text className='product-price'> &#8377; 499</Card.Text>
             <hr/>
             <div className='d-flex justify-content-between'>
                <Button className='product-btn' variant="primary">Buy </Button>
                <Button className='product-btn' variant="primary">Cart</Button>
             </div>
           </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard