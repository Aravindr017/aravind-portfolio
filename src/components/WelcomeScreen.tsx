"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep % 8 === 0) {
        setCurrentMessage(prev => (prev + 1) % messages.length);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          try {
            sessionStorage.setItem('welcomeShown', 'true');
          } catch (e) {
            console.warn('Session storage failed', e);
          }
          onFinish();
        }, 800); // Pause for 800ms at 100% before triggering exit animation
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-md px-6">
        <div className="flex flex-col items-center justify-center min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                {messages[currentMessage].text}
              </h1>
              <p className="text-white/50 text-sm tracking-widest uppercase">
                {messages[currentMessage].lang}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-white/40 text-sm font-mono flex items-center gap-1">
          Loading...
          <span className="flex">
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}>.</motion.span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
