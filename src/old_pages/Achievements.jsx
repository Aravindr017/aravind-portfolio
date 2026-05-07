import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import './Achievements.css';

const Achievements = () => {
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

  const achievements = [
    {
      year: '2026',
      title: 'Outstanding Student Volunteer Award',
      organization: 'IEEE PES Kerala Chapter',
      description: 'Recognized for exceptional contributions as a student volunteer in IEEE PES Kerala Chapter. Organized almost 125+ events in the year 2025-26.',
      icon: 'fa-solid fa-trophy',
      color: 'green'
    },
    {
      year: '2024',
      title: 'Global Rank 83 - IEEE Xtreme 18.0',
      organization: 'IEEE',
      description: 'Competed against 19,000+ global participants in this 24-hour programming competition, securing top 1 rank in college.',
      icon: 'fa-solid fa-trophy',
      color: 'gold'
    },
    {
      year: '2024',
      title: '1st Prize - Idea Pitching',
      organization: 'PowerConnect+',
      description: 'Won first prize among 50+ teams for proposing an innovative sustainable energy solution at Amal Jyothi College of Engineering.',
      icon: 'fa-solid fa-lightbulb',
      color: 'blue'
    },
    {
      year: '2020',
      title: '1st Prize - Amrithakiranam Medi IQ',
      organization: 'KGMOA',
      description: 'Won district level health quiz competition conducted by Kerala Government Medical Officer\'s Association with ₹5000 prize money.',
      icon: 'fa-solid fa-brain',
      color: 'purple'
    },
    {
      year: '2022',
      title: 'Academic Excellence',
      organization: 'Higher Secondary Education',
      description: 'Secured 95% in Plus Two Science and 98% in SSLC, demonstrating consistent academic performance.',
      icon: 'fa-solid fa-graduation-cap',
      color: 'red'
    },
    {
      year: '2024',
      title: 'Event Organizing',
      organization: 'IEEE PES Kerala Chapter',
      description: 'Recognized for organizing AKPESSC, R10 Global Workshop, and YP Conclave with 500+ participants.',
      icon: 'fa-solid fa-calendar-check',
      color: 'orange'
    },
    {
      year: '2023',
      title: 'Innovation in IoT',
      organization: 'Project EcoWatt',
      description: 'Led the development of IoT-based power management system for IEEE events, reducing energy consumption by 30%.',
      icon: 'fa-solid fa-microchip',
      color: 'teal'
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="achievements-page">
        <div className="container">
          <div className="section-header fade-up">
            <h1 className="section-title">Achievements & Recognition</h1>
            <p className="section-subtitle">
              Milestones that define my journey in technology and leadership
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className={`achievement-card glass-card fade-up ${item.color}`}
              >
                <div className="achievement-year">{item.year}</div>
                <div className="achievement-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="achievement-stats">
            <div className="stat-item glass-card fade-up">
              <span className="stat-number">10+</span>
              <span className="stat-label">Competitions Won</span>
            </div>
            <div className="stat-item glass-card fade-up">
              <span className="stat-number">15+</span>
              <span className="stat-label">Events Organized</span>
            </div>
            <div className="stat-item glass-card fade-up">
              <span className="stat-number">20+</span>
              <span className="stat-label">Workshops Attended</span>
            </div>
            <div className="stat-item glass-card fade-up">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students Trained</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Achievements;
