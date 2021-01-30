import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const signup = () => {
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/signup",
    }).then((res) => console.log(res));
  };
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
    <div>
      <div>
        <h1 className="text-center">Sign Up</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={signup}>Submit</button>
      </div>

      <div>
        <h1 className="text-center">Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export default SignUp;
