import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      // if login success
      // if (response.data.token) {
      //   localStorage.setItem("token", response.data.token);
      // }
      console.log(response);
      if (response.status == 200) {
        alert("login sucessfully");
        navigate("/gallery");
      }
    } catch (err) {
      // alert("Login failed! Check email or password.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="mb-3 login">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3 login">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <p>
        Don't have an account? <Link to={"/"}>SignUp</Link>
      </p>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
