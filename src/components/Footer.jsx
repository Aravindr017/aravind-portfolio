import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { href: 'https://linkedin.com/in/aravindr017', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://github.com/Aravind986153', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://x.com/aravindr_', icon: 'fab fa-twitter', label: 'Twitter' },
    { href: 'https://instagram.com/aravind.x_17', icon: 'fab fa-instagram', label: 'Instagram' },
    { href: 'https://facebook.com/share/1A4LSXwCfv', icon: 'fab fa-facebook-f', label: 'Facebook' }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Leadership' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Aravind R</h3>
            <p className="footer-text">
              Software Engineer & IEEE Student Leader passionate about creating innovative solutions 
              and inspiring the next generation of technologists.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <i className="fas fa-chevron-right"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:ar986153@gmail.com">ar986153@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+916238177643">+91 6238 177 643</a>
              </li>
              <li>
                <i className="fas fa-location-dot"></i>
                <span>Adoor, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Aravind R. All rights reserved.</p>
          <p>Designed with <i className="fas fa-heart" style={{ color: '#dc2626' }}></i> by Aravind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
