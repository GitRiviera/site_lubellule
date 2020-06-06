import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Insta from '../images/icons/instagram.svg'
import Facebook from '../images/icons/facebook.svg'
import TikTok from '../images/icons/tiktok.svg'
import ArrowUp from '../images/icons/arrow-up.svg'



/*
TO DO :
  -add proper breakpoints in scss
  -back to top button
  -fonts

*/



export default function Footer(){
  return(
    <Container fluid>
      <Row className="upper-footer">
        <Col>
          <div className="d-flex justify-content-center  footer-title">
          Des suggestions ?
          </div>
          <div className="d-flex justify-content-center py-4 red-bd">
             contact@lulu-couture.fr
          </div>
          <div className="d-flex justify-content-center py-4 icons-container">

            <img src={Insta} alt="Instagram logo"/>
            <img src={Facebook} alt="Facebook logo"/>
            <img src={TikTok} alt="TikTok logo"/>
          </div>

        </Col>
      </Row>

      <Row className="lower-footer">
        <Col>
          <div className="d-flex justify-content-center red-bd">
            <div className="button-up">
            <img src={ArrowUp} alt=""/>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            CREE PAR UNBLURSTUDIO
          </div>

          <div className="d-flex justify-content-center ">
          contact@unblurstudio.com
          </div>
        </Col>
        </Row>
    </Container>
  )
}
