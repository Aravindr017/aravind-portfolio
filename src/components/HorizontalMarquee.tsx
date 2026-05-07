"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Document {
  type: string;
  url: string;
  text: string;
}

interface Project {
  id: string;
  title: string;
  tech: string;
  image: string;
  description: string;
  features: string[];
  documents: Document[];
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: "noxus",
    title: "Noxus: AI Model",
    tech: "Python | Neural Networks | Data Preprocessing",
    image: "/images/noxus.jpg",
    description: "Developed predictive AI model with focus on model architecture optimization and real-time data processing capabilities. The model demonstrates exceptional accuracy in pattern recognition and predictive analytics applications.",
    features: [
      "Advanced neural network architecture",
      "Real-time data processing capabilities",
      "High accuracy predictive modeling",
      "Optimized for performance and efficiency",
      "Custom data preprocessing pipeline"
    ],
    documents: [{ type: "certificate", url: "/images/noxus.jpg", text: "View Certificate" }],
    tags: ["Machine Learning", "Deep Learning", "AI"]
  },
  {
    id: "smart-home",
    title: "Smart Home Automation",
    tech: "IoT | ESP8266 | ACS712 Sensor",
    image: "/images/project2.jpg",
    description: "Real-time electrical monitoring system with predictive malfunction detection and energy usage optimization. The system provides homeowners with detailed insights into their energy consumption patterns.",
    features: [
      "Real-time energy monitoring",
      "Predictive malfunction detection",
      "Energy usage optimization",
      "Mobile app integration",
      "Customizable alerts and notifications"
    ],
    documents: [{ type: "image", url: "/images/smarthomeautomation.jpg", text: "View Image" }, { type: "github", url: "https://github.com/Aravindr017/smart-home-automation", text: "Source Code" }],
    tags: ["IoT", "Embedded Systems", "Hardware"]
  },
  {
    id: "novus",
    title: "Novus: RC Plane",
    tech: "Aerodynamics | Servo Motors | Control Systems",
    image: "/images/novus.jpg",
    description: "Designed and calibrated RC aircraft with autonomous flight capabilities and optimized aerodynamic performance. The aircraft features advanced stabilization systems and customizable flight patterns.",
    features: [
      "Autonomous flight capabilities",
      "Optimized aerodynamic design",
      "Advanced stabilization system",
      "Custom flight pattern programming",
      "Real-time telemetry data"
    ],
    documents: [{ type: "certificate", url: "/images/novus.jpg", text: "View Certificate" }],
    tags: ["Aerospace", "Robotics", "Control Theory"]
  },
  {
    id: "ai-python",
    title: "AI Model With Python",
    tech: "Python | Neural Networks | AI",
    image: "/images/aiwithpython.jpg",
    description: "Developed an AI Model With Python on a workshop conducted by Techmaghi in association with KSHITIJ, IIT KHARAGPUR. The project involved hands-on training in building and training neural networks from scratch.",
    features: [
      "Hands-on neural network development",
      "Practical Python implementation",
      "Data preprocessing techniques",
      "Model evaluation and optimization",
      "Real-world application scenarios"
    ],
    documents: [{ type: "certificate", url: "/images/aiwithpython.jpg", text: "View Certificate" }],
    tags: ["Deep Learning", "Machine Learning", "AI"]
  },
  {
    id: "gen-ai",
    title: "Generative AI Model",
    tech: "AI | Python | Data Processing",
    image: "/images/genai.jpg",
    description: "Developed an AI Model on workshop 'Build Your Own Generative AI Model' conducted by AI expert and IIT Delhi alumnus. The project explored cutting-edge techniques in generative modeling.",
    features: [
      "Generative model architecture",
      "Creative content generation",
      "Advanced training techniques",
      "Ethical considerations in AI",
      "Real-world application examples"
    ],
    documents: [{ type: "certificate", url: "/images/genai.jpg", text: "View Certificate" }],
    tags: ["Deep Learning", "Machine Learning", "AI"]
  },
  {
    id: "rc-car",
    title: "Remote Control Car",
    tech: "HC-SR04 | Arduino UNO R3 | HC-05 Bluetooth",
    image: "/images/rccar.jpg",
    description: "Developed a RC car can control using Blynk and Controller using Arduino and Ultrasonic object sensor to avoid crash on objects. The car features multiple control modes and autonomous obstacle avoidance.",
    features: [
      "Bluetooth remote control",
      "Obstacle avoidance system",
      "Multiple control modes",
      "Real-time sensor feedback",
      "Customizable control interface"
    ],
    documents: [{ type: "image", url: "/images/rccar.jpg", text: "View Image" }],
    tags: ["Control Theory", "Robotics", "Hardware"]
  },
  {
    id: "interview-cbot",
    title: "AI Interview Coach",
    tech: "AI | WebSocket | Render",
    image: "/images/interview-cbot.jpg",
    description: "An AI-powered chatbot designed to help users prepare for technical interviews. The bot simulates real interview scenarios, asks relevant questions, and provides feedback on responses.",
    features: [
      "Simulates technical interview scenarios",
      "Provides real-time feedback on answers",
      "Covers multiple programming languages",
      "Tracks user progress over time",
      "Responsive design works on all devices"
    ],
    documents: [
      { type: "external", url: "https://interview-cbot.netlify.app", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/interview-bot", text: "Source Code" }
    ],
    tags: ["AI Chatbot", "Web App", "Interview Prep"]
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    tech: "HTML | CSS | JavaScript",
    image: "/images/netflix-clone.jpg",
    description: "A responsive Netflix clone built using HTML, CSS (Bootstrap), and JavaScript. The project showcases a sleek user interface with language support and search functionality.",
    features: [
      "Responsive design for all devices",
      "Language support and search functionality",
      "Sleek UI with Bootstrap",
      "Dynamic content loading",
      "Customizable themes"
    ],
    documents: [
      { type: "external", url: "https://myproject-aravindr2025.netlify.app/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/netflix-clone", text: "Source Code" }
    ],
    tags: ["Frontend", "Web App", "Clone"]
  },
  {
    id: "vakkotty-gaming",
    title: "VaKKoTTy Gaming",
    tech: "HTML | CSS | JavaScript | Three.js",
    image: "/images/vakkotty-gaming.jpg",
    description: "A professional website for an eFootball gamer featuring player progression tracking, manager tactics showcase, gallery, and contact sections. Includes 3D animations.",
    features: [
      "Interactive 3D football animation using Three.js",
      "Dark/light mode toggle with localStorage",
      "Particle.js animated background",
      "Custom player progression hub",
      "Manager recommendation system"
    ],
    documents: [
      { type: "external", url: "https://vakkotty.in/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/vakkotty-client", text: "Source Code" }
    ],
    tags: ["Frontend", "Gaming", "3D Animation"]
  },
  {
    id: "smart-tracker",
    title: "Smart Tracker",
    tech: "Bootstrap | CSS3 | AOS",
    image: "/images/Smart_tracker.png",
    description: "A frontend for a smart tracking system, featuring real-time location updates, user authentication, and an intuitive UI built with Bootstrap and CSS3.",
    features: [
      "Real-time location tracking interface",
      "User authentication and profile management",
      "Smooth animations with AOS library",
      "Intuitive and user-friendly UI"
    ],
    documents: [
      { type: "external", url: "https://smarttracker-test.netlify.app/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/SmartTrack-Frontend", text: "Source Code" }
    ],
    tags: ["Frontend", "Bootstrap", "Tracking"]
  },
  {
    id: "autoglide",
    title: "AutoGlide: Aircraft Landing",
    tech: "Matlab | Sensors | Servo",
    image: "/images/autoglide_img.png",
    description: "Developed an autonomous aircraft landing system using Arduino, ultrasonic sensors, and servo motors to ensure safe and precise landings.",
    features: [
      "Autonomous landing capabilities",
      "Real-time distance measurement",
      "Servo motor control for landing gear",
      "Ultrasonic sensor integration",
      "Safety protocols for landing"
    ],
    documents: [
      { type: "image", url: "/images/autoglide.jpeg", text: "View Image" },
      { type: "github", url: "https://github.com/Aravindr017/AutoGlide", text: "Source Code" }
    ],
    tags: ["Embedded Systems", "Hardware"]
  }
];

export default function HorizontalMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Duplicate for seamless infinite scroll
  const displayProjects = [...PROJECTS, ...PROJECTS];

  return (
    <section 
      id="projects"
      className="relative w-full py-40 bg-zinc-950 text-white overflow-hidden flex items-center border-t border-white/10"
    >
      <div className="relative z-10 w-full">
        <div className="px-6 md:px-24 mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Technical Projects
          </h2>
          <p className="text-white/60 text-lg">
            "Innovative solutions combining cutting-edge technology with creative problem solving"
          </p>
        </div>

        <div 
          className="w-full relative overflow-hidden py-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex gap-8 w-max px-8"
            style={{
              animation: "marquee-horizontal 60s linear infinite",
              animationPlayState: isHovered || selectedProject ? "paused" : "running",
            }}
          >
            {displayProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col w-[350px] md:w-[450px] aspect-[4/3] rounded-3xl bg-black border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                
                {/* Fallback color while image loads or if missing */}
                <div className="absolute inset-0 bg-zinc-900" />
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                
                <div className="relative z-20 flex flex-col justify-end h-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-white/80 bg-white/10 px-2 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2">
                    {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* --- Project Details Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>

              {/* Left: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-6 left-6 right-6">
                   <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                   <p className="text-white/70 font-mono text-sm">{selectedProject.tech}</p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-8 overflow-y-auto max-h-[90vh]">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="text-white/40 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                   <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                   <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Links & Documents</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.documents.map((doc, i) => (
                      <a 
                        key={i} 
                        href={doc.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/80 transition-colors"
                      >
                        {doc.type === "github" ? "GitHub" : doc.type === "external" ? "Live Demo" : "View Image/Cert"}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
