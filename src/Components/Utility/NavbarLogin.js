import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/logo.png';
import login from '../../Images/login.png'
import cart from '../../Images/cart.png'


export default function NavbarLogin() {
  return <>
    
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm" >
      <Container className='align-item-center text-white'>
        <Navbar.Brand href="#home">
            <a href='/'>
              <img src={logo} className='logo' alt='logo'/>  
            </a>
        </Navbar.Brand>
        <input placeholder='ابحث...' className="me-2 w-100 text-center form-control" type='search' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login" className="nav-text d-flex mt-3 justify-content-center">
                
            <img src={login} className="login-img" alt="sfvs" />
                <h6 style={{ color: "white" }}>الدخول</h6>
                
            </Nav.Link>
            <Nav.Link href="/cart" className="nav-text d-flex mt-3 justify-content-center">
               
            <img src={cart} className="login-img" alt="sfvs" />
                <h6 style={{ color: "white" }} >العربه</h6>
                
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  
}
