import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/' style={{textDecoration:"none",color:"grey"}}>Home</Link></Nav.Link>
            <Nav.Link href="#link">Employee List</Nav.Link>
            <Nav.Link href="#link">Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header