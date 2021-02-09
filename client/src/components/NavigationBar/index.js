import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
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
class NavigationBar extends Component {
  state = {
    displayValue: "",
    route: "",
    error: "",
  };

  componentDidMount() {
    if (this.props.user === null) {
      this.setState({
        displayValue: "Login",
        route: "/login",
      });
    } else {
      this.setState({
        displayValue: "Logout",
        route: "/logout",
      });
    }
  }

  render() {
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
                <Nav.Link href={this.state.route}>
                  {this.state.displayValue}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
export default NavigationBar;
