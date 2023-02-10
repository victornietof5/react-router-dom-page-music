import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';

export default function Footer() {
  return (
    <footer>
      <Navbar fixed="bottom" style={{ backgroundColor: '#202027' }}>
        <Container>
          <Nav className="">
            <Nav.Link className="text-white text-xl" href='#'>About Us</Nav.Link>
            <Nav.Link className="text-white text-xl" href='#'>Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="text-white text-xl" href='#'><img src={twitter} alt='' />Twitter</Nav.Link>
            <Nav.Link className="text-white text-xl" href='#'><img src={facebook} alt='' />Facebook</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  )
}
