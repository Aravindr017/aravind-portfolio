import { useState, useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  const messages = [
    { text: "Welcome", lang: "English" },
    { text: "Bienvenue", lang: "French" },
    { text: "Willkommen", lang: "German" },
    { text: "ようこそ", lang: "Japanese" },
    { text: "欢迎", lang: "Chinese" },
    { text: "Bienvenido", lang: "Spanish" },
    { text: "स्वागत हे", lang: "Hindi" },
    { text: "أهلا بك", lang: "Arabic" },
    { text: "Benvenuto", lang: "Italian" },
    { text: "Добро пожаловать", lang: "Russian" }
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      // Change message every 400ms
      if (currentStep % 8 === 0) {
        setCurrentMessage(prev => (prev + 1) % messages.length);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLeaving(true);
        setTimeout(() => {
          sessionStorage.setItem('welcomeShown', 'true');
          onFinish();
        }, 1000);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish, messages.length]);

  return (
    <div className={`welcome-screen ${isLeaving ? 'leave' : ''}`}>
      <div className="welcome-content">
        <div className="message-container">
          <div className="welcome-message">
            {messages[currentMessage].text}
          </div>
          <div className="message-language">
            {messages[currentMessage].lang}
          </div>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="loading-text">
          Loading amazing content
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
