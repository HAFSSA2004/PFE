import './App.css';
//import Nav from './Navbar';
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
import GoogleCalendar from './GoogleCalendar.js';
import PostJob from './PostJob.jsx';
import CandidatSpace from './CandidatSpace.js';
//import PostJob2 from './PostJob2.js';
//import PostJob3 from './PostJob3.js';
//import PostJob4 from './PostJob4.js';
import AdminSpace from './Admin-space.js';
import MonOffre from './MonOffre.jsx';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/offre/:id" element={<OffreDetail />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/manage-candidatures" element={<ManageCandidatures />} />
        <Route path="/GoogleCalendar" element={<GoogleCalendar />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/offres/recruteur/:id" element={<MonOffre />} />
        <Route path="/candidat-space" element={<CandidatSpace />} />
        <Route path="/Admin-space" element={<AdminSpace />} />

        
      </Routes>

      <Footer />
      
    
    </div>
   
  );
}

export default App;
