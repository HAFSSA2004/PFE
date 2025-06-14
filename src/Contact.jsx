import './contact.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
export default function ContactPage() {
  return (
  <div>
    <Navbar/>
      <div className="contact-page">
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
       
      </div>

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contactez-nous</h1>
          <p className='text-white'>Nous sommes là pour vous aider dans vos besoins de recrutement et de recherche d’emploi</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info-container">
          <div className="contact-info">
            <h2>Entrer en contact</h2>
            <p>
             
              Vous avez des questions sur nos services ou besoin d’assistance ? Notre équipe est prête à vous aider à trouver la solution de recrutement idéale pour votre entreprise ou votre carrière.
            </p>

            <div className="contact-methods">
              <ContactMethod
                title="Phone"
                content="+33 (0)1 23 45 67 89"
                description="Monday to Friday, 9am - 6pm"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
              />

              <ContactMethod
                title="Email"
                content="contact@recrutpro.com"
                description="We'll respond within 24 hours"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
              />

              <ContactMethod
                title="Office"
                content="123 Avenue des Champs-Élysées, 75008 Paris, France"
                description=""
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
              />
            </div>

            <div className="social-connect">
             
            </div>
          </div>

          <div className="office-locations">
            <h2>Nos bureaux</h2>
            <div className="office-grid">
              <OfficeCard location="Paris (HQ)" address="123 Avenue des Champs-Élysées, 75008 Paris, France" phone="+33 (0)1 23 45 67 89" />
              <OfficeCard location="Lyon" address="45 Rue de la République, 69002 Lyon, France" phone="+33 (0)4 56 78 90 12" />
              <OfficeCard location="Marseille" address="78 La Canebière, 13001 Marseille, France" phone="+33 (0)4 91 23 45 67" />
              <OfficeCard location="Bordeaux" address="56 Cours de l'Intendance, 33000 Bordeaux, France" phone="+33 (0)5 56 78 90 12" />
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-form">
            <h2>Envoyez-nous un message</h2>
            <p>Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <FormInput label="Name" name="name" type="text" required />
              <div className="form-row">
                <FormInput label="Email" name="email" type="email" required />
                <FormInput label="Phone" name="phone" type="tel" />
              </div>
              <FormInput label="Company" name="company" type="text" />
              <FormSelect label="Subject" name="subject" options={["General Inquiry", "Customer Support", "Sales", "Partnership", "Careers at RecrutPro"]} required />
              <FormTextarea label="Message" name="message" required />
              <div className="form-group checkbox-group">
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">
                  J’accepte la <a href="/privacy-policy">politique de confidentialité</a> et consens au traitement de mes données
                </label>
              </div>
              <button type="submit" className="submit-button">Envoyer le message</button>
            </form>
          </div>

          <div className="contact-faq">
            <h2>Questions fréquentes</h2>
            <div className="faq-list">
              <FAQItem question="Quels services propose HireBridge? " answer="Nous proposons des solutions de recrutement complètes : publication d'offres, recherche de candidats, chasse de tête et conseil RH pour les entreprises de toutes tailles." />
              <FAQItem question="Sous quel délai vais-je recevoir une réponse ?" answer="Nous nous engageons à répondre à toutes les demandes sous 24 heures ouvrées. Pour toute urgence, veuillez contacter notre service client par téléphone." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

// Other component definitions (unchanged, except for minor label tweaks)
function ContactMethod({ title, content, description, icon }) {
  return (
    <div className="contact-method">
      <div className="contact-icon">{icon}</div>
      <div className="contact-details">
        <h3>{title}</h3>
        <p>{content}</p>
        {description && <p className="text-muted">{description}</p>}
      </div>
    </div>
  );
}

function SocialIcon({ platform, link }) {
  return (
    <a href={link} aria-label={platform}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="social-icon">
        <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    </a>
  );
}

function OfficeCard({ location, address, phone }) {
  return (
    <div className="office-card">
      <h3>{location}</h3>
      <p>{address}</p>
      <p>{phone}</p>
    </div>
  );
}

function FormInput({ label, name, type, required }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <input type={type} id={name} name={name} required={required} />
    </div>
  );
}

function FormSelect({ label, name, options, required }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <select id={name} name={name} required={required}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({ label, name, required }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <textarea id={name} name={name} required={required}></textarea>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="faq-item">
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
}
