import {useEffect, useState} from "react"
import State from "./context/State";
import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Signin from './components/Signin.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Terms from './components/terms.jsx'
import Affiliate from './components/affiliate.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RegistrationForm from "./components/Signup.jsx";
function App() {
  const [loggedin, setloggedin] = useState(false)
  useEffect(() => {
    setloggedin(localStorage.getItem("paisa-login-token"));
  }, []);
  
 
  return (
    <State>
          <Router basename='/'>
    {
      !loggedin?(
        <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Signin />} />
        </Routes>
        <Footer/>

        </>
      ):
      <>
         <Navbar2/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/affiliate" element={<Affiliate />} />

        <Route path="/login" element={<Signin />} />
        </Routes>
        <Footer/>

      </>
    }
    
    </Router>
    </State>
  );
}

export default App;
