import './App.css';
import Nav from './Navbar';
import Home from './Home';
import About from './About'; // Exemple d'autres pages
import Contact from './Contact';
import Signup from './SignUp';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          {/* Ajoute d'autres routes ici */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
