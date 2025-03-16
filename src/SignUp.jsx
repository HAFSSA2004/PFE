import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
//import "@fontsource/inter"; // Defaults to 400 (normal)

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100 shadow-lg rounded p-4 bg-white" style={{ maxWidth: "900px", height: "500px" }}>
        
        {/* Left side - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center h-100">
          <h2 className="mb-4 fw-bold" style={{ color: '#00327D', fontFamily: 'Inter' }}>
            Sign up now and unlock new job opportunities!
          </h2>
          <form>
            {/* Name Input */}
            <div className="mb-3 position-relative">
              <input
                type="text"
                className="form-control ps-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaUser className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>

            {/* Email Input */}
            <div className="mb-3 position-relative">
              <input
                type="email"
                className="form-control ps-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>

            {/* Password Input */}
            <div className="mb-3 position-relative">
              <input
                type="password"
                className="form-control ps-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-3 position-relative">
              <input
                type="password"
                className="form-control ps-2"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <FaLock className="position-absolute top-50 translate-middle-y text-muted" style={{ right: "15px" }} />
            </div>

            <button type="submit" className="w-100" style={{ 
              backgroundColor: "#00327D", 
              border: '1px solid white', 
              borderRadius: '30px', 
              padding: "5px", 
              color: 'white', 
              fontSize: "18px", 
              fontWeight: 'bold', 
              fontFamily: 'Inter' 
            }}>
              Sign Up
            </button>
            <p className="mt-3 text-center">Already have an account? <a href="/login">Sign In</a></p>

          </form>
        </div>
    
        {/* Right side - Image */}
        <div className="col-md-6 d-none d-md-block h-100">
          <img src="Login.jpg" alt="Sign Up" className="img-fluid w-100 h-100 rounded" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
