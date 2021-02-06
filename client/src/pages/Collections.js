import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
// import Card from "../components/Card"; - will need to display favorites
// import API from "../utils/API"; - will need for get user API

// PSUEDOCODE for a different approach to getting/rendering user info
class Collections extends Component {
  state = {
    username: "",
    favorites: [],
  };

  componentDidMount() {
    this.getUserArt();
  }

  getUserArt = () => {
    API.getUser()
    .then((res) => this.setState({ username: res.data[0].username, favorites: res.data[0].favorites }))
    .catch((err) => console.log(err)); 
  }

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

// function Collections() {
  render () {
    console.log(this.state)
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
 
    )}
}
export default Collections;
