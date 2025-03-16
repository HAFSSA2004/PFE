import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">RecrutPro</a>

        {/* Bouton Toggle pour le menu mobile */}
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
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Jobs</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button className="btn btn-primary btnS me-2">Sign In</button>
            <button className="btn btn-outline-primary me-3">Register</button>
            <div className="vr"></div>
            <a href="#" className="ms-3  text-decoration-none text-muted">
              Entreprises/Publier Une Offre D'Emploi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
