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
      <Hero backgroundImage="walters-hero-image.jpg">
        <h1>Walters Art Gallery</h1>
        <h4>Search. View. Collect.</h4>
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
