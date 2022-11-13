import React, { Component } from 'react'
import {Navbar,Nav,Container,Modal,Button,Row,Col,Form} from 'react-bootstrap';
import '../style/index.css';
import {NavLink,Redirect,useHistory} from 'react-router-dom';
import { withRouter } from 'react-router'


class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show:false,
      phoneNumber:'',
      username:'',
      authSuccess:false
    }
  }


  handleSubmit=()=>{
    if(this.state.phoneNumber.length===10){
      this.setState({show:false});
      this.props.history.push({
        pathname: `/cart`,
        state: this.state.username
      });
      this.setState({ 
        phoneNumber:'',
        username:'',
        authSuccess:true
      })
    }else{
      alert("Mobile Number should be of 10 digits.");
    }
  }

  handleLogout=()=>{
    if(this.state.authSuccess){
      this.setState({authSuccess:false});
      this.props.history.push({
        pathname: `/`,
      });
    }
  }


  render() {

  const NotAuthRoutes=[
    {name:"Home",url:'/'},
    {name:"Shop",url:'/shop'},
  ]

  const AuthRoutes=[
    {name:"Cart",url:'/cart'},
    {name:"Wish List",url:'/wish-list'},
    {name:"Profile",url:'/profile'},
  ]

  const navStyle={
     textDecoration:'none'
  }

    return (
      <>
        <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className='my-2'>
            <NavLink to='/'  style={navStyle}>
               <Navbar.Brand href="#home" >Fashiop</Navbar.Brand>
            </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {
                NotAuthRoutes.map((item)=>(
                <NavLink style={navStyle} to={`${item.url}`}>
                  <Nav.Link href={`#${item.name}`}>{item.name}</Nav.Link>
                </NavLink>
                ))
              }
              {
                this.state.authSuccess ===true ?
                <>
                  {
                    AuthRoutes.map((item)=>(
                        <NavLink style={navStyle} to={`${item.url}`}>
                          <Nav.Link href={`#${item.name}`}>{item.name}</Nav.Link>
                        </NavLink>
                    ))
                  }
                  <Button style={{borderRadius:'1.25rem'}} 
                      onClick={()=>this.handleLogout()}
                  >Logout</Button>
                </>
                :
                <Button style={{borderRadius:'1.25rem'}} 
                    onClick={()=>this.setState({show:true})}
                >Register/Login</Button>
              }
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>


        <Modal show={this.state.show} onHide={()=>this.setState({show:false})} centered>
          <div>
            <Row>
              <Col lg={5} xs={12} className='bg-primary text-white p-4'>
                <h4>Login</h4>
                <div style={{margin:'5rem 0rem'}}>
                    <p>Get access to your</p>
                    <p>Orders, Wishlist and </p>
                    <p>Recommendations</p>
                </div>
              </Col>
              <Col lg={7} xs={12}>
                 <Modal.Body>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" value={this.state.phoneNumber} 
                      onChange={(e)=>this.setState({phoneNumber:e.target.value})}  placeholder='Enter Mobile Number'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" value={this.state.username} 
                      onChange={(e)=>this.setState({username:e.target.value})}  placeholder='Enter User Name'/>
                    </Form.Group>
                    <p className='text-muted my-3'>By continuing, you agree to Fashiop's Terms of Use and Privacy Policy.</p>
                    <Button variant="primary" className='w-100' onClick={()=>this.handleSubmit()}>
                      Login
                    </Button>
                  </div>
                  <hr/>
                  <div>
                    <Button variant="outline-warning" className='w-100' onClick={()=>this.setState({show:false})}>
                      Close
                    </Button>
                  </div>
                 </Modal.Body>
              </Col>
            </Row>
          </div>
        </Modal>
      </>
    )
  }
}

export default withRouter(NavbarComponent);