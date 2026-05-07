import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('Xm_s7hYkROA4zbwN3');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        ...formData,
        email_subject: `New Message: ${formData.subject}`
      };

      await emailjs.send(
        'service_gd3uxn8',
        'template_ewwhfu9',
        templateParams
      );

      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'ar986153@gmail.com',
      link: 'mailto:ar986153@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 6238 177 643',
      link: 'tel:+916238177643'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      value: '+91 6238 177 643',
      link: 'https://wa.me/+916238177643'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Adoor, Kerala, India',
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/aravindr017', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/Aravind986153', label: 'GitHub' },
    { icon: 'fab fa-twitter', url: 'https://x.com/aravindr_', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/aravind.x_17', label: 'Instagram' },
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com/share/1A4LSXwCfv', label: 'Facebook' }
  ];

  return (
    <>
      <Navbar />
      
      <section className="contact-page">
        <div className="container">
          <div className="section-header fade-up">
            <h1 className="section-title">Let's Connect</h1>
            <p className="section-subtitle">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info-section fade-up">
              <h2>Get in Touch</h2>
              <p className="contact-description">
                I'm currently open to new opportunities, collaborations, or just a friendly chat about tech and innovation.
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item glass-card">
                    <div className="contact-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h3>Connect on Social Media</h3>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card glass-card"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-section fade-up">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Freelance Work">Freelance Work</option>
                    <option value="Technical Consultation">Technical Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>

                {showSuccess && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Thank you for your message! I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
