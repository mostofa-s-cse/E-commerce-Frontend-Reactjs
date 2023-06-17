import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SignUp() {
    let item = { name, email, password };
    let result = await fetch("http://localhost:8000/api/signup", {
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
        <h1 className="mb-5">SignUp</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br />
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
        <button onClick={SignUp} className="btn btn-primary">
          SignUp
        </button>
        <div className="mt-3">
          <p>
            <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
