import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

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
    <Container fluid>
      <h1 className="text-center">Sign Up</h1>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <Button type="submit" onClick={signup}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default SignUp;
