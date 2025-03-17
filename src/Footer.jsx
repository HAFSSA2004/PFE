import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>RecrutPro</h3>
          <ul>
            <li>Emploi Idéal</li>
            <li>Recruter des Talents</li>
            <li>Plateforme Pro</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Job Seekers</h3>
          <ul>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Upload CV</a></li>
            <li><a href="#">Career Advice</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Recruiters</h3>
          <ul>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Candidate Search</a></li>
            <li><a href="#">Recruitment Solutions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support & Resources</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="subscribe-section">
          <input
            type="email"
            placeholder="Entrer your Email"
            className="email-input"
          />
          <button className="subscribe-button">
            Subscribe
          </button>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
