import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'AI Interview Coach',
      category: 'AI',
      image: '/images/interview-cbot.jpg',
      tech: ['React', 'AI', 'WebSocket'],
      description: 'AI-powered chatbot that simulates technical interviews and provides real-time feedback.',
      longDescription: 'An intelligent interview preparation platform that uses AI to simulate real interview scenarios, ask relevant questions, and provide comprehensive feedback on responses. The system adapts to user responses and provides personalized improvement suggestions.',
      features: [
        'Real-time interview simulation',
        'Personalized feedback on answers',
        'Progress tracking across sessions',
        'Support for multiple programming languages',
        'Customizable difficulty levels'
      ],
      links: {
        live: 'https://interview-cbot.netlify.app',
        github: 'https://github.com/Aravindr017/interview-bot'
      }
    },
    {
      id: 2,
      title: 'VaKKoTTy Gaming',
      category: 'Web',
      image: '/images/vakkotty-gaming.jpg',
      tech: ['React', 'Three.js', 'Bootstrap'],
      description: 'Professional eFootball gamer website with 3D animations and dark/light mode.',
      longDescription: 'A feature-rich portfolio website for an eFootball gamer/content creator with interactive 3D animations, player progression tracking, and modern UI. Includes custom 3D football animations using Three.js and a responsive design.',
      features: [
        'Interactive 3D animations with Three.js',
        'Dark/Light mode toggle with localStorage',
        'Player progression tracking hub',
        'Manager tactics showcase',
        'YouTube video integration',
        'Particle.js animated background'
      ],
      links: {
        live: 'https://vakkotty.in/',
        github: 'https://github.com/Aravindr017/vakkotty-client'
      }
    },
    {
      id: 3,
      title: 'Smart Home Automation',
      category: 'IoT',
      image: '/images/smarthomeautomation.jpg',
      tech: ['IoT', 'ESP8266', 'ACS712'],
      description: 'Real-time electrical monitoring with predictive malfunction detection.',
      longDescription: 'An IoT-based smart home system that monitors electrical parameters in real-time and predicts potential malfunctions before they occur. The system provides homeowners with detailed insights into their energy consumption patterns and sends alerts for abnormal behavior.',
      features: [
        'Real-time energy monitoring',
        'Predictive malfunction detection',
        'Energy usage optimization',
        'Mobile app integration',
        'Customizable alerts and notifications'
      ],
      links: {
        image: '/images/smarthomeautomation.jpg',
        github: 'https://github.com/Aravindr017/smart-home-automation'
      }
    },
    {
      id: 4,
      title: 'Novus RC Plane',
      category: 'Robotics',
      image: '/images/novus.jpg',
      tech: ['Arduino', 'Aerodynamics', 'Control Systems'],
      description: 'Autonomous RC aircraft with optimized aerodynamic performance.',
      longDescription: 'Designed and calibrated RC aircraft with autonomous flight capabilities and advanced stabilization systems. The aircraft features custom PID controllers for stable flight and can be programmed for autonomous missions.',
      features: [
        'Autonomous flight capabilities',
        'Advanced stabilization system',
        'Real-time telemetry data',
        'Custom flight pattern programming',
        'Optimized aerodynamic design'
      ],
      links: {
        certificate: '/images/novus.jpg'
      }
    },
    {
      id: 5,
      title: 'Netflix Clone',
      category: 'Web',
      image: '/images/netflix-clone.jpg',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'Responsive Netflix clone with sleek UI and search functionality.',
      longDescription: 'A fully responsive Netflix clone built with vanilla HTML, CSS, and JavaScript, featuring a modern UI and dynamic content loading. The project showcases a sleek user interface with language support and search functionality.',
      features: [
        'Fully responsive design',
        'Search functionality',
        'Sleek Netflix-like UI',
        'Dynamic content loading',
        'Language support'
      ],
      links: {
        live: 'https://myproject-aravindr2025.netlify.app/',
        github: 'https://github.com/Aravindr017/netflix-clone'
      }
    },
    {
      id: 6,
      title: 'AutoGlide',
      category: 'Robotics',
      image: '/images/autoglide_img.png',
      tech: ['Arduino', 'Sensors', 'Matlab'],
      description: 'Autonomous aircraft landing system using ultrasonic sensors.',
      longDescription: 'Advanced landing system for autonomous aircraft using ultrasonic sensors and servo motors for precise and safe landings. The system uses real-time distance measurements to adjust landing trajectory and ensure safe touchdown.',
      features: [
        'Autonomous landing capability',
        'Obstacle detection and avoidance',
        'Real-time trajectory adjustments',
        'Multiple safety protocols',
        'Data logging for analysis'
      ],
      links: {
        image: '/images/autoglide.jpeg',
        github: 'https://github.com/Aravindr017/AutoGlide'
      }
    },
    {
      id: 7,
      title: 'Noxus AI Model',
      category: 'AI',
      image: '/images/noxus.jpg',
      tech: ['Python', 'Neural Networks', 'ML'],
      description: 'Predictive AI model with real-time data processing.',
      longDescription: 'Advanced AI model for predictive analytics with optimized architecture and real-time processing capabilities. The model demonstrates exceptional accuracy in pattern recognition and can process streaming data for real-time predictions.',
      features: [
        'Real-time data processing',
        'High accuracy predictions',
        'Pattern recognition',
        'Scalable architecture',
        'Customizable model parameters'
      ],
      links: {
        certificate: '/images/noxus.jpg'
      }
    },
    {
      id: 8,
      title: 'Smart Tracker',
      category: 'Web',
      image: '/images/Smart_tracker.png',
      tech: ['Bootstrap', 'CSS3', 'AOS'],
      description: 'Real-time location tracking system with user authentication.',
      longDescription: 'Frontend for a smart tracking system with real-time updates, user authentication, and smooth animations. The interface provides an intuitive way to track assets with live location updates and historical data visualization.',
      features: [
        'Real-time location updates',
        'User authentication system',
        'Smooth scroll animations',
        'Responsive dashboard',
        'Historical data view'
      ],
      links: {
        live: 'https://smarttracker-test.netlify.app/',
        github: 'https://github.com/Aravindr017/SmartTrack-Frontend'
      }
    }
  ];

  const filters = ['all', 'AI', 'Web', 'IoT', 'Robotics'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Navbar />

      <section className="projects-page">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">
              A showcase of my technical projects and innovations
            </p>
          </div>

          <div className="filter-bar glass">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="project-card glass-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className={`modal-content glass ${modalOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>

          {selectedProject && (
            <>
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <span className="modal-category">{selectedProject.category}</span>
              </div>

              <div className="modal-body">
                <img src={selectedProject.image} alt={selectedProject.title} />

                <p className="modal-description">{selectedProject.longDescription}</p>

                <h3>Key Features</h3>
                <ul className="modal-features">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h3>Technologies Used</h3>
                <div className="modal-tech">
                  {selectedProject.tech.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="modal-links">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      onClick={e => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      onClick={e => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  )}
                  {selectedProject.links.certificate && (
                    <a
                      href={selectedProject.links.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      onClick={e => e.stopPropagation()}
                    >
                      <i className="fas fa-certificate"></i> Certificate
                    </a>
                  )}
                  {selectedProject.links.image && (
                    <a
                      href={selectedProject.links.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      onClick={e => e.stopPropagation()}
                    >
                      <i className="fas fa-image"></i> View Image
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Projects;
