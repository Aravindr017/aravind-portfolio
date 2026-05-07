"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const QA_DATA = [
  {
    question: "Who are you?",
    answer: "Hi! I am Aravind R, a Computer Science Engineer and AI/ML enthusiast. I am driven by motion, data, and impactful leadership. I've served as the Past Student Representative of the IEEE PES Kerala Chapter and love building intelligent systems."
  },
  {
    question: "What are your top projects?",
    answer: "Some of my top projects include 'Noxus' (a predictive AI model), 'Smart Home Automation' (IoT-based energy monitoring), 'Novus' (autonomous RC plane), and 'AutoGlide' (aircraft landing system). You can check out the 'Projects' section for more details and GitHub links!"
  },
  {
    question: "What are your main achievements?",
    answer: "I secured a Global Rank of #83 in IEEE Xtreme 18.0! I also won 1st Prize in the Idea Pitching competition at PowerConnect+ and Amrithakiranam. Additionally, I've successfully organized 10+ major IEEE events and trained over 500 students."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me via email at ar986153@gmail.com. You can also find me on LinkedIn (linkedin.com/in/aravindr017), GitHub (@Aravindr017), or Twitter (@aravindr_). Feel free to use the contact form at the bottom of the page!"
  },
  {
    question: "Where can I find your resume?",
    answer: "You can download my resume directly using the 'Resume' button in the top navigation bar or the footer! It contains all my latest professional experiences, including my cybersecurity internship at Technovalley Pvt Ltd."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user', text: string }[]>([
    { sender: 'bot', text: "Hi there! I'm Aravind's virtual assistant. What would you like to know about him?" }
  ]);

  const handleQuestionClick = (qa: typeof QA_DATA[0]) => {
    setMessages(prev => [...prev, { sender: 'user', text: qa.question }]);
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: qa.answer }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[350px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🤖</div>
                <h3 className="font-semibold">Aravind's Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-4 overflow-y-auto max-h-[300px] flex flex-col gap-3 bg-gray-50 dark:bg-black/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-zinc-800 text-black dark:text-white border border-gray-100 dark:border-white/5 rounded-tl-none shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-white/10">
              <p className="text-xs text-gray-500 dark:text-white/50 mb-2 font-medium">Suggested Questions:</p>
              <div className="flex flex-col gap-2">
                {QA_DATA.map((qa, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestionClick(qa)}
                    className="text-left text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 p-2 rounded-lg transition-colors border border-blue-100 dark:border-blue-800/30"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
