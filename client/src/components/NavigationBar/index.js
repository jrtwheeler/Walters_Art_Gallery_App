import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #0f2534;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: #bec9d1;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover {
      color: #bec9d1;
    }
  }
`;

// class NavigationBar extends Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <Styles>
//         <Navbar isLoggedIn={isLoggedIn} expand="lg">
//           <Navbar.Brand href="/">W.A.G.</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Item>
//                 <Nav.Link href="/collections">My Collections</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link href="/signup">Sign Up</Nav.Link>
//               </Nav.Item>
//               {button}
//               {/* <Nav.Item>
//                 <Nav.Link href="/login">Login</Nav.Link>
//               </Nav.Item>
//               {/* // Replaced with a button; add onClickEvent that logs user out and reroutes to landing */}
//               <Button variant="outline-dark text-light">Logout</Button> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Styles>
//     );
//   }
// }

function NavigationBar(props) {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">W.A.G.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/collections">My Collections</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav.Item>
            {/* // Replaced with a button; add onClickEvent that logs user out and reroutes to landing */}
            {/* <Button variant="outline-dark text-light">Logout</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
export default NavigationBar;
