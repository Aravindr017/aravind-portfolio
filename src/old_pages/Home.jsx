import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WelcomeScreen from '../components/WelcomeScreen';
import './Home.css';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const welcomeShown = sessionStorage.getItem('welcomeShown');
    if (welcomeShown) {
      setShowWelcome(false);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (showContent) {
      initCounters();
      initScrollAnimations();
    }
  }, [showContent]);

  const handleWelcomeFinish = () => {
    setShowWelcome(false);
    setShowContent(true);
  };

  const initCounters = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.dataset.value);
          const suffix = counter.dataset.suffix || '';
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 10);
          
          const updateCounter = () => {
            start += increment;
            if (start < target) {
              counter.textContent = Math.ceil(start) + suffix;
              setTimeout(updateCounter, 10);
            } else {
              counter.textContent = target + suffix;
            }
          };
          
          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(counter => observer.observe(counter));
  };

  const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  };

  if (showWelcome) {
    return <WelcomeScreen onFinish={handleWelcomeFinish} />;
  }

  if (!showContent) return null;

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Full Image */}
      <section className="hero">
        <div className="hero-image-container">
          <img src="/images/profile-full.jpg" alt="Aravind R" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content container">
          <div className="hero-text animate-fadeInUp">
            <span className="hero-greeting">👋 Hello, I'm</span>
            <h1 className="hero-title">
              Aravind R
              <span className="hero-title-gradient">Software Engineer & IEEE Leader</span>
            </h1>
            <p className="hero-description">
              Building innovative solutions and leading technical communities 
              with passion and purpose. Global Rank #83 in IEEE Xtreme 18.0.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Let's Talk <i className="fas fa-paper-plane"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-card">
              <i className="fas fa-trophy stat-icon"></i>
              <h3 className="counter" data-value="83">0</h3>
              <p>Global Rank</p>
            </div>
            <div className="stat-card glass-card">
              <i className="fas fa-users stat-icon"></i>
              <h3 className="counter" data-value="500" data-suffix="+">0</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-card glass-card">
              <i className="fas fa-code stat-icon"></i>
              <h3 className="counter" data-value="16" data-suffix="+">0</h3>
              <p>Projects</p>
            </div>
            <div className="stat-card glass-card">
              <i className="fas fa-trophy stat-icon"></i>
              <h3 className="counter" data-value="10" data-suffix="+">0</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know the person behind the code</p>
          </div>
          
          <div className="about-content">
            <div className="about-image fade-up">
              <div className="image-frame glass-card">
                <img src="/images/profile.jpg" alt="Aravind R" />
              </div>
            </div>
            
            <div className="about-text fade-up">
              <h3>Who am I?</h3>
              <p>
                I'm a final year Computer Science student and <strong>Student Representative</strong> of the 
                IEEE PES Kerala Chapter. With a passion for technology and leadership, I've organized 
                major IEEE events, led the EcoWatt project, and secured a <strong>global rank of #83</strong> 
                in IEEE Xtreme 18.0.
              </p>
              <p>
                My journey includes working on innovative projects like Smart Home Automation, 
                completing a cybersecurity internship, and winning the <strong>First Prize in Idea Pitching</strong> 
                at PowerConnect+. I believe in using technology to create meaningful impact.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>B.Tech CSE</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-briefcase"></i>
                  <span>IEEE Leader</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-medal"></i>
                  <span>Award Winner</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-heart"></i>
                  <span>Mentor</span>
                </div>
              </div>
              
              <Link to="/achievements" className="btn btn-primary">
                Explore Achievements <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </div>
          
          <div className="skills-grid">
            <div className="skill-card glass-card fade-up">
              <i className="fas fa-microchip"></i>
              <h3>Core Technologies</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>Data Structures</li>
                <li>OOP</li>
              </ul>
            </div>
            
            <div className="skill-card glass-card fade-up">
              <i className="fas fa-code"></i>
              <h3>Web Development</h3>
              <ul>
                <li>HTML5/CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            
            <div className="skill-card glass-card fade-up">
              <i className="fas fa-database"></i>
              <h3>Database & Tools</h3>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Firebase</li>
              </ul>
            </div>
            
            <div className="skill-card glass-card fade-up">
              <i className="fas fa-users"></i>
              <h3>Soft Skills</h3>
              <ul>
                <li>Leadership</li>
                <li>Team Management</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Public Speaking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card glass-card fade-up">
              <div className="project-image">
                <img src="/images/project11.jpg" alt="EcoWatt" />
                <div className="project-overlay">
                  <Link to="/projects" className="btn btn-primary">View Project</Link>
                </div>
              </div>
              <div className="project-info">
                <h3>EcoWatt</h3>
                <p>IoT-based power management system for IEEE events</p>
                <div className="project-tech">
                  <span>IoT</span>
                  <span>Arduino</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
            
            <div className="project-card glass-card fade-up">
              <div className="project-image">
                <img src="/images/project2.jpg" alt="Smart Home" />
                <div className="project-overlay">
                  <Link to="/projects" className="btn btn-primary">View Project</Link>
                </div>
              </div>
              <div className="project-info">
                <h3>Smart Home Automation</h3>
                <p>AI-powered home control with voice recognition</p>
                <div className="project-tech">
                  <span>IoT</span>
                  <span>ESP8266</span>
                  <span>AI</span>
                </div>
              </div>
            </div>
            
            <div className="project-card glass-card fade-up">
              <div className="project-image">
                <img src="/images/leadership.jpg" alt="Instrument IT" />
                <div className="project-overlay">
                  <Link to="/achievements" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
              <div className="project-info">
                <h3>Instrument IT</h3>
                <p>Educational technology initiative for underprivileged students</p>
                <div className="project-tech">
                  <span>Arduino</span>
                  <span>Education</span>
                  <span>IoT</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-cta fade-up">
            <Link to="/projects" className="btn btn-outline">
              View All Projects <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
