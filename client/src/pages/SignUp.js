import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Container from "../components/Container";

function SignUp() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const signup = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/signup",
    }).then((res) => console.log(res));
  };

  return (
    <Container fluid style={{ marginTop: 25, color: "#0F2534" }}>
      <h3 className="text-center mb-4">Sign Up</h3>
      <hr />
      <p className="text-center mb-4">Create an account to start saving your own collections!</p>
      <div className="w-50 container-fluid justify-content-center">
        <Form className="text-center">
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              className="text-center"
              type="username"
              placeholder="Enter a username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="text-center"
              type="password"
              placeholder="Enter a password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <Button className="mt-3" style={{ backgroundColor: "#0F2534" }} type="submit" onClick={signup}>
              Submit
          </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default SignUp;
