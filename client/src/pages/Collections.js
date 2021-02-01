import React, { useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import ControlledCarousel from "../components/Carousel";
// import Directory from "../components/Directory";
// import CarouselDiv from "../components/CarouselDiv";

function Collections() {
  const [user, setUser] = useState("");

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/collections",
    }).then((res) => setUser(res.data));
  };

  return (
    <div>
      <Container style={{ marginTop: 25 }}>
        <Row>
          <Col size="md-12">
            <h3>My Collections</h3>
          </Col>
        </Row>
        <Row>
          {/* Display username of whoever is logged in */}
          <Col size="md-12">{user ? <h2>{user.username}</h2> : null}</Col>
        </Row>
        {/* <Row>
          <Col size="md-12">
            <CarouselDiv>
              <ControlledCarousel />
            </CarouselDiv>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Collections;
