import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Navbar';
function Signup() {
  const [role, setRole] = useState("candidat");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await fetch("https://pfe-api-8b8e.vercel.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, nom: name, prenom: "", email, mot_de_passe: password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Inscription réussie !");
        navigate("/login"); // Redirect to login page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'inscription !");
    }
  };

  return (
   <div>
    <Nav/>
     <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100 shadow-lg rounded p-4 bg-white" style={{ maxWidth: "900px", height: "550px" }}>
        <div className="col-md-6 d-flex flex-column justify-content-center h-100">
          <h2 className="mb-4 fw-bold mt-5" style={{ color: "#00327D", fontFamily: "Inter" ,fontSize:'18px'}}>
        Inscrivez-vous dès maintenant et débloquez de nouvelles opportunités d'emploi !
          </h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="candidat">Candidat</option>
                <option value="recruteur">Recruteur</option>
              </select>
            </div>
            <div className="mb-3 position-relative">
              <input type="text" className="form-control ps-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <FaUser className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>
            <div className="mb-3 position-relative">
              <input type="email" className="form-control ps-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <FaEnvelope className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>
            <div className="mb-3 position-relative">
              <input type="password" className="form-control ps-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <FaLock className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>
            <div className="mb-3 position-relative">
              <input type="password" className="form-control ps-2" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
              <FaLock className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>
            <button type="submit" className="w-100" style={{ backgroundColor: "#00327D", border: "1px solid white", borderRadius: "30px", padding: "5px", color: "white", fontSize: "18px", fontWeight: "bold", fontFamily: "Inter" }}>
              Sign Up
            </button>
           <p className="">Already have an account? <a href="/login">Sign In</a></p>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block h-100">
          <img src="login.jpg" alt="Sign Up" className="img-fluid w-100 h-100 rounded" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
   </div>
  );
}

export default Signup;
