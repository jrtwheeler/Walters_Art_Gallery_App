import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Container from "../components/Container";

function Login() {
  const history = useHistory();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    }).then((results) => {
      localStorage.clear();
      localStorage.setItem("username", JSON.stringify(loginUsername));
      // TODO: figure out history.push login success issue
      // console.log(results);
      // if (results.status === 200) {
      history.push("/collections");
      // }
      // else {
      //   alert("Wrong password")
      // }
    });
  };

  return (
    <Container style={{ marginTop: 25, color: "#0F2534" }}>
      <h3 className="text-center mb-4">Login</h3>
      <hr />

      <div className="w-50 container-fluid justify-content-center">
        <Form className="text-center">
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              className="text-center"
              type="username"
              placeholder="Enter your username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="text-center"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Button
              value="Log In"
              className="mt-3"
              style={{ backgroundColor: "#0F2534" }}
              type="submit"
              onClick={login}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
