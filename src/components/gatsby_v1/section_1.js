import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Interior11 from '../images/interior-11.jpg'
/*
From theme.css, get font sizes, boldness, positioning
*/

const Section1 = () => (

 <Container id="hero-section" className="p-0 vh-100">
  <Row className="h-100 align-items-center justify-content-center justify-content-lg-start py-10">
    <Col className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 z-index-1">
    <div className="p-4 p-sm-5 border border-dark  overflow-hidden ">
      <div className="overflow-hidden">
        <h4 className="fs-1 fs-sm-2">
          <span className="d-block overflow-hidden">
            <span
              className="d-inline-block"
            >
              la couture du quotidien,
            </span>
          </span>
          <span className="d-block overflow-hidden">
            <span
              className="d-inline-block"
            >
              pour consommer moins
            </span>
          </span>
          <span className="d-block overflow-hidden">
            <span
              className="d-inline-block"
            >
              et créer sa propre garde-robe
            </span>
          </span>
        </h4>
      </div>
      <div className="overflow-hidden">
        <p
          className="mt-4 mb-1 font-weight-bold text-dark"
        >
          Address:
          <br className="d-block d-md-none" />
          <span className="font-weight-normal">
            449, unknown street, Paris, France
          </span>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="font-weight-bold text-dark"
        >
          Contact:
          <a
            className="text-700 fs-0 text-serif font-weight-normal"
            href="tel:+12345678"
          >
            +12345678, +87654321
          </a>
        </p>
      </div>
      <div className="overflow-hidden">
          <a
            className="btn btn-dark btn-sm mt-4"
            href="#interior-projects"
          >
            voir les projets
          </a>
          </div>
      </div>
    </Col>
  </Row>
 </Container>

)

export default Section1;
