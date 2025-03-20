import './App.css';
import Nav from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Signup from './SignUp';
import Login from './Login';
import Footer from './Footer';
import Dashboard from "./Dashboard";
import ManageCandidatures from './ManageCandidatures.js';
import OffreDetail from './OffreDetail';
import {  Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/offre/:id" element={<OffreDetail />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/manage-candidatures" element={<ManageCandidatures />} />
      </Routes>

      <Footer />
      
    
    </div>
   
  );
}

export default App;
