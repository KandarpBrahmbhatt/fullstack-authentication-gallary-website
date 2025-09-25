import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup.jsx";
import Gallary from "./components/Gellary/Gallery.jsx";
import Comment from "./components/Comment/Comment.jsx";
// import GP from './components/Gellary/GP.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/comment" element={<Comment />} />
        {/* <Route path='/gallery' element={<GP/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
