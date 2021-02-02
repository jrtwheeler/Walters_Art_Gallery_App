import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Card from "../components/Card";
// import API from "../utils/API"; - will need for get user API

// class Collections extends Component {
//   state = {
//     username: "",
//     favorites: [],
//   };

//   // componentDidMount() {
//   //   getUser();
//   // }

//   // get user who's logged in and display their collection
//   render() {
//     return (
//       <div>
//         <Container style={{ marginTop: 25 }}>
//           <Row>
//             <Col size="md-12">
//               <h3>My Collections</h3>
//             </Col>
//           </Row>
//           <Row>
//             {/* Display username of whoever is logged in */}
//             <Col size="md-12">
//               <h1>Welcome</h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="md-12">
//               <Card />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Collections;

function Collections() {
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
          <Col size="md-12">
            <h1>Welcome</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collections;
