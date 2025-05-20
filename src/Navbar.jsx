import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img
  src="/li.png"
  alt="Logo"
  className="navbar-logo me-2"
/>

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            {user?.role === 'recruteur' && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
            )}
            {user?.role === 'candidat' && (
              <li className="nav-item">
                <Link className="nav-link" to="/candidat-space">Espace Candidat</Link>
              </li>
            )}
            {user?.role === 'Admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/Admin-space">Espace Admin</Link>
              </li>
            )}
            <li>
                <li className='nav-item'>
                  <button
                      className="nav-link text-danger"
                      style={{marginBottom:'22px'}}
                      onClick={() => {
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        window.location.href = '/';
                      }}
                    >
                      Logout
                    </button>
                </li>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            {!user ? (
              <>
                <Link to="/Login" className="btnL me-2">Sign In</Link>
                <Link to="/Signup" className="btn btn-outline-primary me-3">Register</Link>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn bg-transparent border-0 p-0"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/images.png"
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', objectFit: 'cover',marginTop:'-15px' }}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="profileDropdown">
                  <li className="dropdown-item text-muted">Welcome, {user.email}</li>
                  {user.role === 'candidat' && (
                    <li><Link className="dropdown-item" to="/candidat-space">Espace Candidat</Link></li>
                  )}
                  {user.role === 'recruteur' && (
                    <li><Link className="dropdown-item" to="/dashboard">Dashboard Recruteur</Link></li>
                  )}
                  {user.role === 'Admin' && (
                    <li><Link className="dropdown-item" to="/Admin-space">Espace Admin</Link></li>
                  )}
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                  
                  </li>
                </ul>
              </div>
            )}

            <div className="vr mx-3 d-none d-lg-block"></div>

            <Link
              to="/PostJob"
              className="text-decoration-none text-muted fw-semibold text-nowrap"
            >
              Entreprises / Publier une offre
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
