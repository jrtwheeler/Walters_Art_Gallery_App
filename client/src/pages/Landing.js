import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ControlledCarousel from "../components/Carousel";
import Directory from "../components/Directory";

function Landing() {
  return (
    <div>
      <Hero backgroundImage="walters.jpg">
        <h1>Walters Art Gallery</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <ControlledCarousel />
        <Directory />
      </Container>
    </div>
  );
}

export default Landing;
