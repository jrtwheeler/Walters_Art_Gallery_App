import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ControlledCarousel from "../components/Carousel";
import Directory from "../components/Directory";
import CarouselDiv from "../components/CarouselDiv";

function Landing() {
  return (
    <div>
      <Hero backgroundImage="walters-hero-image.jpg">
        <h1>Walters Art Gallery</h1>
        <h4>Search. View. Collect.</h4>
      </Hero>
      <Container style={{ marginTop: 25 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <CarouselDiv>
              <ControlledCarousel />
            </CarouselDiv>
          </Col>
        </Row>
        <Directory />
      </Container>
    </div>
  );
}

export default Landing;
