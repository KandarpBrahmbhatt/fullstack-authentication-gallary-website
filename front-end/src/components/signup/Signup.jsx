import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  // varialbel store karvamate lakhiyu 6e.
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   cosnt
  return (
    <>
      <form>
        <h1>Sign Up</h1>
        <div className="mb-3 sign-up">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3 sign-up">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 sign-up">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p>
          Already have on account ? <Link to={"/login"}>Login</Link>
        </p>
        {/* <Link to={"/login"}></Link> */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Signup;
