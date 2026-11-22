"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const QA_DATA = [
  {
    question: "Who are you?",
    answer: "Hi! I am Aravind R, a Computer Science Engineering graduate (CGPA 8.05) from College of Engineering Adoor, AI/ML Engineer, and Full-Stack Developer. I'm a passionate IEEE volunteer and past Student Representative of the IEEE PES Kerala Chapter, dedicated to building intelligent systems and impactful tech solutions."
  },
  {
    question: "What are your top projects?",
    answer: "Some of my flagship projects include 'SKINOVA AI' (dual-engine skin screening PWA), 'Offline Speech Command Classifier' (17MB model with 95% accuracy), 'AI Interview Coach' (real-time feedback over WebSockets), 'Noxus' (predictive AI neural network), and 'Smart Home Automation' (IoT-based energy monitoring). Explore the interactive Projects marquee section for more!"
  },
  {
    question: "What are your main achievements?",
    answer: "I secured Global Rank #83 in IEEE Xtreme 18.0 (among 19,000+ competitors globally). I've won 1st Prize in Idea Pitching at PowerConnect+ and Amrithakiranam Medi IQ, organized 126+ events for 1,000+ participants as IEEE PES Kerala Student Representative, and trained over 500 students in tech workshops!"
  },
  {
    question: "What is your tech stack?",
    answer: "My core expertise includes AI/ML (TensorFlow, PyTorch, Scikit-Learn, OpenCV, RAG, GenAI), Full-Stack (Next.js, React, Node.js, WebSockets, Tailwind CSS), Languages (Python, Java, C++, C, SQL, JavaScript), and Cloud/DevOps (Docker, Kubernetes, AWS, Cloudflare, MongoDB, Firebase)."
  },
  {
    question: "Where can I find your resume?",
    answer: "You can view and download my updated resume directly using the 'Resume' button in the top navigation bar or the hero section! It details my latest AI/ML and software engineering internships, technical projects, certifications, and leadership roles."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me directly via email at ar986153@gmail.com or phone (+91 6237-177-643). You can also connect with me on LinkedIn (linkedin.com/in/aravindr017) and GitHub (@Aravindr017), or send a message using the Contact form below!"
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
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
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
            <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-white/10 max-h-[180px] overflow-y-auto">
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
