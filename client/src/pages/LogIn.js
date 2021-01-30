import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    }).then((res) => console.log(res));
  };

  return (
    <Container fluid>
      <h1 className="text-center">Login</h1>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <Button type="submit" onClick={login}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
