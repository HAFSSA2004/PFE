import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section company-info">
            <div className="logo-container">
              <svg viewBox="0 0 24 24" className="company-logo" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"
                />
                <path fill="currentColor" d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z" />
              </svg>
              <h3>RecrutPro</h3>
            </div>
            <p>Votre solution pour l'emploi et le recrutement.</p>
            <div className="language-selector">
              <select aria-label="Select language">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
          <div className="footer-section">
            <h3>For Job Seekers</h3>
            <ul>
              <li>
                <a href="/">Browse Jobs</a>
              </li>
              <li>
                <a href="/">Upload CV</a>
              </li>
              <li>
                <a href="/">Career Advice</a>
              </li>
              <li>
                <a href="/">Salary Calculator</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>For Recruiters</h3>
            <ul>
              <li>
                <a href="/">Post a Job</a>
              </li>
              <li>
                <a href="/">Candidate Search</a>
              </li>
              <li>
                <a href="/">Recruitment Solutions</a>
              </li>
              <li>
                <a href="/">Pricing Plans</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support & Resources</h3>
            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Help Center</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest job opportunities and career advice.</p>
            <div className="subscribe-section">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="email-input"
                  aria-label="Email address"
                />
                <button className="subscribe-button">Subscribe</button>
              </div>
              <p className="privacy-note">
                By subscribing, you agree to our <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>
          </div>
          <div className="app-download">
            <h3>Get Our App</h3>
            <div className="app-buttons">
              <a href="/" className="app-button" aria-label="Download on App Store">
                <svg viewBox="0 0 24 24" className="app-icon" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.12 2.29-.84 3.46-.77 1.5.12 2.65.64 3.39 1.64-3.12 1.87-2.38 5.98.48 7.13-.52 1.54-1.19 3.05-2.41 4.18zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.66 4.22-3.74 4.25z"
                  />
                </svg>
                <span>App Store</span>
              </a>
              <a href="/" className="app-button" aria-label="Get it on Google Play">
                <svg viewBox="0 0 24 24" className="app-icon" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.493.873l.003.002c.306.186.687.204 1.01.048l.024-.013 10.5-5.815c.3-.166.486-.48.486-.823s-.185-.657-.485-.823l-10.5-5.815c-.127-.07-.268-.105-.41-.105-.16 0-.32.046-.457.132l-.004.002A.972.972 0 0 0 3.6 1.798l.01.016z"
                  />
                </svg>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="copyright">© {new Date().getFullYear()} RecrutPro. All rights reserved.</p>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/accessibility">Accessibility</a>
            </div>
          </div>
          <div className="social-icons">
            <a href="/" aria-label="Facebook">
              <svg viewBox="0 0 320 512" className="social-icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </a>
            <a href="/" aria-label="LinkedIn">
              <svg viewBox="0 0 448 512" className="social-icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
            <a href="/" aria-label="Twitter">
              <svg viewBox="0 0 512 512" className="social-icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
            <a href="/" aria-label="Instagram">
              <svg viewBox="0 0 448 512" className="social-icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a href="/" aria-label="YouTube">
              <svg viewBox="0 0 576 512" className="social-icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
