import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import './Resume.css';

const Resume = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, []);

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'College of Engineering Adoor',
      period: '2022 - 2026',
      score: 'CGPA: 8.0',
      description: 'Currently in final year with focus on software development and embedded systems.'
    },
    {
      degree: 'Plus Two (Science)',
      institution: 'St. Stephen\'s Higher Secondary School',
      period: '2020 - 2022',
      score: 'Percentage: 95%',
      description: 'Specialized in Computer Science with Mathematics and Physics.'
    },
    {
      degree: 'SSLC (10th)',
      institution: 'St. Stephen\'s High School',
      period: '2020',
      score: 'Percentage: 98%',
      description: 'Achieved distinction with outstanding performance in all subjects.'
    }
  ];

  const skills = {
    technical: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'IoT', level: 75 }
    ],
    soft: [
      'Leadership',
      'Team Management',
      'Communication',
      'Problem Solving',
      'Time Management',
      'Public Speaking',
      'Event Organization',
      'Mentoring'
    ]
  };

  const certifications = [
    'Flutter Internship',
    'Blockchain Internship',
    'Web Development',
    'IoT Certification',
    'Cybersecurity Internship',
    'AI with Python',
    'Generative AI',
    'Robotics and Automation'
  ];

  const handlePreviewClick = () => {
    setShowPdfModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowPdfModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      
      <section className="resume-page">
        <div className="container">
          <div className="section-header fade-up">
            <h1 className="section-title">My Resume</h1>
            <p className="section-subtitle">
              A comprehensive overview of my professional journey and qualifications
            </p>
          </div>

          <div className="resume-actions fade-up">
            <a href="/documents/Resume(Aravind_R).pdf" download className="btn btn-primary">
              <i className="fas fa-download"></i> Download PDF
            </a>
            <button onClick={handlePreviewClick} className="btn btn-outline">
              <i className="fas fa-eye"></i> Preview Resume
            </button>
          </div>

          <div className="resume-tabs fade-up">
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="fas fa-graduation-cap"></i> Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <i className="fas fa-code"></i> Skills
            </button>
            <button 
              className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              <i className="fas fa-certificate"></i> Certifications
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'education' && (
              <div className="education-grid">
                {education.map((item, index) => (
                  <div key={index} className="education-card glass-card fade-up">
                    <div className="education-period">{item.period}</div>
                    <h3>{item.degree}</h3>
                    <h4>{item.institution}</h4>
                    <div className="education-score">{item.score}</div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="skills-container">
                <div className="technical-skills">
                  <h3>Technical Skills</h3>
                  <div className="skills-grid">
                    {skills.technical.map((skill, index) => (
                      <div key={index} className="skill-item fade-up">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="soft-skills">
                  <h3>Soft Skills</h3>
                  <div className="soft-skills-grid">
                    {skills.soft.map((skill, index) => (
                      <div key={index} className="soft-skill-item glass-card fade-up">
                        <i className="fas fa-check-circle"></i>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-card glass-card fade-up">
                    <i className="fas fa-certificate"></i>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      <div className={`modal-overlay ${showPdfModal ? 'active' : ''}`} onClick={handleCloseModal}>
        <div className={`modal-content glass ${showPdfModal ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>
          <embed 
            src="/documents/Resume(Aravind_R).pdf" 
            type="application/pdf"
            className="pdf-viewer"
          />
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Resume;
