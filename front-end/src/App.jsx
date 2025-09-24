
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login.jsx'

import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Signup from './components/signup/Signup.jsx'
import Gallary from './components/Gellary/Gallery.jsx'
function App() {

  return (
    <Router>
 <Navbar/>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gallery' element={<Gallary/>}/>
      </Routes>

    

 </Router>
  )
}

export default App
