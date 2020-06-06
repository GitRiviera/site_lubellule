import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'



import Interior1 from '../images/interior-11.jpg'

const Jumbo = () => (
  <Jumbotron style={{"backgroundImage":`url(${Interior1})`}} >
    <Container fluid>
      <Image src={Interior1} fluid/>
    </Container>
  </Jumbotron>

)

export default Jumbo;
