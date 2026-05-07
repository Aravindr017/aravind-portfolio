import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, []);

  const experiences = [
    {
      period: '2025 - Present',
      title: 'Student Representative',
      organization: 'IEEE PES Kerala Chapter',
      description: 'Leading chapter activities and organizing events for 500+ participants across Kerala. Coordinating with student branches and planning technical workshops.',
      achievements: [
        'Organized SLT Chairs meetup at FISAT, Kochi HUB',
        'Representing IEEE PES Kerala Chapter at various forums',
        'Planning flagship events for the academic year'
      ],
      icon: 'fa-solid fa-users',
      type: 'current'
    },
    {
      period: '2024 - 2025',
      title: 'MDC Travancore HUB',
      organization: 'IEEE PES Kerala Chapter',
      description: 'Coordinated chapter activities and organized technical events across the Travancore region.',
      achievements: [
        'Organized 15+ technical events and workshops',
        'Coordinated AKPESSC flagship event',
        'Managed R10 Global Workshop and YP Conclave',
        'Led PROJECT: Instrument-IT - 4-day hybrid Arduino workshop'
      ],
      icon: 'fa-solid fa-globe'
    },
    {
      period: '2024 - 2025',
      title: 'Student Lead 2',
      organization: 'IEDC TBI@CE Adoor',
      description: 'Mentored student startup projects and coordinated innovation events.',
      achievements: [
        'Mentored 10+ student startup projects',
        'Organized innovation workshops and ideation sessions',
        'Facilitated networking events with industry experts'
      ],
      icon: 'fa-solid fa-lightbulb'
    },
    {
      period: '2023 - 2024',
      title: 'Membership Development Lead',
      organization: 'IEEE SB College of Engineering Adoor',
      description: 'Focused on growing IEEE PES membership at the student branch level.',
      achievements: [
        'Increased membership by 196% through strategic drives',
        'Organized onboarding sessions for new members',
        'Developed engagement strategies for member retention'
      ],
      icon: 'fa-solid fa-chart-line'
    },
    {
      period: '2023 - 2024',
      title: 'Project Lead',
      organization: 'EcoWatt Project',
      description: 'Spearheaded IEEE PES MDI Proposal initiative for sustainable energy solutions.',
      achievements: [
        'Leading team of 15 students in prototype development',
        'Developing campus-wide energy conservation solutions',
        'Presented project at multiple technical symposiums'
      ],
      icon: 'fa-solid fa-bolt'
    },
    {
      period: '2023',
      title: 'Cybersecurity Intern',
      organization: 'Technovalley Pvt Ltd',
      description: 'Worked on MITM ATTACK detection using Packet Capturing Method.',
      achievements: [
        'Developed detection algorithms for network attacks',
        'Analyzed network traffic patterns',
        'Implemented security protocols'
      ],
      icon: 'fa-solid fa-shield'
    },
    {
      period: '2022 - 2024',
      title: 'Sports Secretary',
      organization: 'College of Engineering Adoor',
      description: 'Managed sports events and coordinated inter-college tournaments.',
      achievements: [
        'Organized inter-collegiate sports fest with 300+ participants',
        'Managed sports budget and equipment procurement',
        'Coordinated with multiple departments for event success'
      ],
      icon: 'fa-solid fa-medal'
    },
    {
      period: '2022 - 2023',
      title: 'Membership Development Coordinator',
      organization: 'IEEE SB College of Engineering Adoor',
      description: 'Conducted membership drives and promotional campaigns.',
      achievements: [
        'Led two successful membership drives',
        'Organized promotional events and workshops',
        'Developed outreach strategies for student engagement'
      ],
      icon: 'fa-solid fa-user-plus'
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="experience-page">
        <div className="container">
          <div className="section-header fade-up">
            <h1 className="section-title">Leadership Journey</h1>
            <p className="section-subtitle">
              Building communities, leading teams, and creating impact
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`experience-card glass-card fade-up ${exp.type === 'current' ? 'current' : ''}`}
              >
                <div className="experience-icon">
                  <i className={exp.icon}></i>
                </div>
                <div className="experience-content">
                  <span className="experience-period">{exp.period}</span>
                  <h3>{exp.title}</h3>
                  <h4>{exp.organization}</h4>
                  <p>{exp.description}</p>
                  <ul className="experience-achievements">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {exp.type === 'current' && (
                  <span className="current-badge">Current Role</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Experience;
