import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Login() {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    // console.log("result: ",result)
    localStorage.setItem("user-info", JSON.stringify(result));
    // useEffect(()=>{

    // },[])
    let user = JSON.parse(localStorage.getItem("user-info"));
    // navigate("/add");
    if (user.error === "Email or password is not matched") {
      alert(user.error);
    } else {
      navigate("/productList");
    }
  }
  return (
    <div className="col-md-4 m-auto text-center">
      <div className="mt-5 shadow p-5">
        <h1 className="mb-5">Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
        <br />
        <button onClick={Login} className="btn btn-primary">
          Login
        </button>
        <div className="mt-3">
          <p>
            Not a member? <a href="/signup">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
