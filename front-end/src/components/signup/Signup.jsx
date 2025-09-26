// import React from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// // import axios from "axios";
// const Signup = () => {
//   // varialbel store karvamate lakhiyu 6e.
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // universal handler

//   const change = (e) => {
//     const { name, email, password } = e.target.value;
//     setUser((prevUser) => ({
//       ...prevUser,
//       name,
//       email,
//       password,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user);
//     try {
//       const response = await fetch("http://localhost:5000/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // convert data object into json
//         body: JSON.stringify(user),
//       });

//       console.log(response);
//     } catch (error) {
//       console.log("Register", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <div className="mb-3 sign-up">
//           <label for="exampleInputName" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputName"
//             aria-describedby="emailHelp"
//             onChange={change}
//             name="name"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>

//         <div className="mb-3 sign-up">
//           <label for="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3 sign-up">
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             name="password"
//           />
//         </div>
//         <p>
//           Already have on account ? <Link to={"/login"}>Login</Link>
//         </p>
//         {/* <Link to={"/login"}></Link> */}
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </>
//   );
// };

// export default Signup;

// import React from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// // import axios from "axios";
// const Signup = () => {
//   // varialbel store karvamate lakhiyu 6e.
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // universal handler

//   const change = (e) => {
//     const { name, email, password } = e.target.value;
//     setUser((prevUser) => ({
//       ...prevUser,
//       name,
//       email,
//       password,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user);
//     try {
//       const response = await fetch("http://localhost:5000/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // convert data object into json
//         body: JSON.stringify(user),
//       });

//       console.log(response);
//     } catch (error) {
//       console.log("Register", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <div className="mb-3 sign-up">
//           <label for="exampleInputName" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputName"
//             aria-describedby="emailHelp"
//             onChange={change}
//             name="name"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>

//         <div className="mb-3 sign-up">
//           <label for="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3 sign-up">
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             name="password"
//           />
//         </div>
//         <p>
//           Already have on account ? <Link to={"/login"}>Login</Link>
//         </p>
//         {/* <Link to={"/login"}></Link> */}
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  // single state for all inputs
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // universal input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", user);

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.log("Register error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="mb-3 sign-up">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 sign-up">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3 sign-up">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
