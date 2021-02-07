import React from "react";
import plan from '../images/plan-visit-01.png';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ControlledCarousel from "../components/Carousel";
import Directory from "../components/Directory";


function Landing() {
  return (
    <div>
      <Container style={{ marginTop: 25 }}>  
        <Row>
          <Col size="lg-6" >
            <div className="d-flex justify-content-center">
            <img src={plan} alt="Plan your visit" size="400px"/>
            </div>
          </Col>
          <Col size="lg-6">
              <ControlledCarousel />
          </Col>
        </Row>
        <Directory />
      </Container>
    </div>
  );
}

export default Landing;
