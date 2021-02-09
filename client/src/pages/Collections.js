import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import FavoriteCard from "../components/FavoriteCard";

function Collections(props) {
  return (
    <div>
      <Container style={{ marginTop: 25 }}>
        <Row>
          <Col size="md-12">
            <h3>My Collections</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <FavoriteCard user={props.user} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collections;
