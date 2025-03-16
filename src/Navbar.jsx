import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">RecrutPro</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button className="btn btn-primary btnS me-2">Sign In</button>
            <button className="btn btn-outline-primary me-3">Register</button>
            <div className="vr"></div>
            <Link to="/post-job" className="ms-3 text-decoration-none text-muted">
              Entreprises/Publier Une Offre D'Emploi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
