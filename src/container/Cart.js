import React, { Component } from 'react';
import {Container,Table,Row,Col,Button} from 'react-bootstrap';
import p1 from '../images/p1.jpg';

const productData=[
    {},{},{},{},
    {},{},{},{},
]


export default class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username:''
        }
    }

    componentDidMount(){
        this.setState({username:this.props.location.state})
    }
    
  render() {

    console.log("This.props",this.state);

    return (
    <div>
        <Container className='my-4'>
        <div className='p-4 text-center'>
            <h3>Welcome ! <span className='text-danger'>{this.state.username}</span></h3>
            <p className='product-price'>Your cart product are ready for booking</p>
        </div>
        <div>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    productData.map(()=>(
                    <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                                <img src={p1} style={{width:'100px',height:'100px'}}></img>
                                <div className='p-4'>
                                    <p className='product-name'>Dennis Lingo Men's Slim Fit Casual Shirt</p>
                                </div>
                            </div>
                        </td>
                        <td>1</td>
                        <td>&#8377; 499</td>
                    </tr>
                    ))
                  }
                </tbody>
            </Table>
            <hr className='my-4'/>
            <Row  className='my-4'>
                <Col lg={6} xs={12}></Col>
                <Col lg={6} xs={12}>
                    <div style={{float:'right'}}>
                        <h5>Total</h5>
                        <h5>&#8377; 499</h5>
                       <Button className='my-4'>Purchase Now</Button>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
    </div>
    )
  }
}
