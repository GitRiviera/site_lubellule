import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const SPNavbar = () => (
  <Navbar expand="lg" bg="light">
    <Navbar.Brand href="#home">Lulu Couture</Navbar.Brand>
    <Nav>
      <Nav.Link> Accueil </Nav.Link>
      <Nav.Link> A propos </Nav.Link>
      <Nav.Link> Projets </Nav.Link>
      <Nav.Link> Contact</Nav.Link>
    </Nav>
  </Navbar>
)


export default SPNavbar;
