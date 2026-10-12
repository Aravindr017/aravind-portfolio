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
    tech: "React 19 | Vite | Tailwind CSS | Three.js | Cloudflare Pages",
    image: "/images/vakku-newweb.png",
    description: "Official eFootball creator platform with 3D visuals, multi-language UI, and a Git-backed CMS on Cloudflare edge functions.",
    features: [
      "Player progression database with position and attribute filtering",
      "Tactical manager guide with formations, playstyles, and boosts",
      "Live YouTube video sync via a cached Cloudflare edge function",
      "Multi-language support: English, Hindi, Japanese, Spanish, German",
      "Dark neon theme with custom cursor, Framer Motion, GSAP, and Three.js 3D visuals",
      "Secure admin CMS with Google OAuth 2.0 and HMAC-signed sessions",
      "Git-backed publishing: edits commit JSON to GitHub, no database needed",
      "Automatic Cloudflare cache purge on publish",
      "Google AdSense integration with SEO metadata"
    ],
    documents: [
      { type: "external", url: "https://vakkotty.in/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/vakkotty-client", text: "Source Code" }
    ],
    tags: ["React 19", "Cloudflare", "Gaming", "3D Animation"]
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
  },
  {
    id: "skinova",
    title: "SKINOVA AI",
    tech: "React | FastAPI | EfficientNet-B0 | ONNX Web | Gemini AI",
    image: "/images/SKINNOVA_AI.png",
    description: "AI dermatological screening PWA with dual-engine cloud and offline on-device skin lesion analysis across 7 HAM10000 classes.",
    features: [
      "Dual-engine AI: Gemini Vision + EfficientNet-B0 consensus",
      "100% offline on-device inference with WebAssembly (~160 ms)",
      "Multi-stage lesion gatekeeper to block non-skin images",
      "7-class HAM10000 classification with risk and urgency rating",
      "RAG clinical chatbot grounded in WHO ICD-11 and DermNet knowledge",
      "Geo-based specialist and hospital finder with OpenStreetMap",
      "One-click clinical PDF report generator",
      "Installable PWA with service worker offline caching"
    ],
    documents: [
      { type: "external", url: "https://skinova-nu.vercel.app/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/SKINOVA", text: "Source Code" }
    ],
    tags: ["AI/ML", "Healthcare", "Computer Vision"]
  },
  {
    id: "speech-command",
    title: "Speech Command Classifier",
    tech: "Python | Sentence Transformers | ONNX Runtime | Streamlit",
    image: "/images/command-classifier.png",
    description: "Offline semantic voice command classifier for automotive and IoT systems with out-of-scope rejection.",
    features: [
      "14 voice commands with out-of-scope rejection",
      "INT8 quantized ONNX model (~16 MB) for edge devices",
      "Under 100 ms inference latency on CPU",
      "Fully offline after the first model download",
      "Prototype-based design: add new commands without retraining",
      "Robust to ASR noise, typos, fillers, and accent variations",
      "Interactive Streamlit web interface"
    ],
    documents: [
      { type: "external", url: "https://speech-command-classifier.streamlit.app/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/Lightweight-Speech-Command-Classifier-for-Edge-Deployment", text: "Source Code" }
    ],
    tags: ["AI/ML", "Edge AI", "NLP"]
  },
  {
    id: "portugal-election",
    title: "Portugal Election 2019 Prediction",
    tech: "Python | scikit-learn | TensorFlow | PyTorch | Streamlit",
    image: "/images/election-regression.png",
    description: "ML regression project predicting final election mandates, deployed as an interactive Streamlit dashboard.",
    features: [
      "Compared 15+ regression models with grid and randomized search tuning",
      "Best model: boosted KNN Regressor (R² of 0.999996)",
      "Feature selection using Pearson correlation and mutual information",
      "Secure login gate for the Streamlit dashboard",
      "Real-time final mandate prediction from grouped input forms",
      "Light and dark theme toggle with responsive layout"
    ],
    documents: [
      { type: "external", url: "https://portugalelection-2019.streamlit.app/", text: "Live Demo" },
      { type: "github", url: "https://github.com/Aravindr017/Portugal_election-2019", text: "Source Code" }
    ],
    tags: ["Machine Learning", "Data Science", "Streamlit"]
  },
  {
    id: "restaurant-suite",
    title: "Restaurant Management Suite",
    tech: "VB.NET | Windows Forms | MS Access | OLEDB",
    image: "/images/restaurant_img.png",
    description: "Desktop restaurant POS with multi-role access, live order tracking, and a recursive login check.",
    features: [
      "Multi-role access: Owner, Waiter, and Customer table portal",
      "Recursive password verification with 3-attempt lockout",
      "Staff job application and Owner approval workflow",
      "Dynamic table management: add tables and change seating capacity",
      "Real-time kitchen countdown tracker with progress bars",
      "Order lifecycle: Preparing, Ready, Served, Completed / Paid",
      "Self-seeding Access database with Jet 4.0 and ACE fallback"
    ],
    documents: [
      { type: "github", url: "https://github.com/Aravindr017/Restaurant_Management_Suite", text: "Source Code" }
    ],
    tags: ["Desktop", "Software Engineering", ".NET"]
  },
  {
    id: "cifar-100",
    title: "CIFAR-100 Image Classification CNN",
    tech: "Python | TensorFlow | Keras | scikit-learn | NumPy",
    image: "/images/cifar-100.png",
    description: "Custom CNN built from scratch for 100-class image classification on native 32x32 CIFAR-100 images.",
    features: [
      "Custom 3-block CNN designed for native 32x32 inputs",
      "Batch normalization, dropout, and L2 regularization",
      "Data augmentation with random flip and rotation",
      "Optimized tf.data pipeline with caching and prefetching",
      "Mixed precision and XLA JIT compilation for faster training",
      "AdamW optimizer with EarlyStopping and ModelCheckpoint",
      "Confusion matrix, classification report, and per-class accuracy"
    ],
    documents: [
      { type: "github", url: "https://github.com/Aravindr017/CIFAR-100_CNN_EfficientNet", text: "Source Code" }
    ],
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"]
  },
  {
    id: "solar-forecasting",
    title: "Smart Energy Grid & Solar Forecasting",
    tech: "Python | scikit-learn | pandas | PuLP | Streamlit",
    image: "/images/solar-forcasting.png",
    description: "Solar power forecasting and battery arbitrage system for smart grids. TrackGenesis internship project.",
    features: [
      "Day-ahead solar power forecasting at 15-minute and hourly resolution",
      "Solar geometry, lag, and rolling irradiance feature engineering",
      "Ridge Regression: ~48% lower daylight RMSE than persistence benchmark",
      "Leakage-free temporal split with a StandardScaler pipeline",
      "Physical nighttime zero-inflation for realistic predictions",
      "PuLP linear programming for battery charge/discharge arbitrage",
      "Streamlit dashboard with forecast benchmarking and diurnal profiling"
    ],
    documents: [
      { type: "github", url: "https://github.com/Aravindr017/Smart-Energy-Grid-and-Solar-Power-Forecasting-with-Battery-Optimization", text: "Source Code" }
    ],
    tags: ["AI/ML", "Renewable Energy", "Smart Grid"]
  },
  {
    id: "fake-news",
    title: "Fake News Classification",
    tech: "Python | NLTK | scikit-learn | TF-IDF | pandas",
    image: "/images/fake-news.png",
    description: "NLP pipeline that classifies news articles as real or fake using TF-IDF and Logistic Regression.",
    features: [
      "Full text cleaning: HTML, URL, punctuation, and number removal",
      "Tokenization, stopword removal, and lemmatization with NLTK",
      "TF-IDF vectorization with unigrams and bigrams (5,000 features)",
      "Logistic Regression classifier in a scikit-learn Pipeline",
      "Combined title and body text for richer context",
      "Evaluated with accuracy, precision, recall, F1-score, and confusion matrix"
    ],
    documents: [
      { type: "github", url: "https://github.com/Aravindr017/NLP_FakeNews-Classification", text: "Source Code" }
    ],
    tags: ["NLP", "Machine Learning", "Scikit-Learn"]
  },
  {
    id: "sms-spam",
    title: "SMS Spam Classification (RNN)",
    tech: "Python | TensorFlow | Keras | RNN | pandas",
    image: "/images/sms-spam.png",
    description: "Recurrent Neural Network that classifies SMS messages as spam or ham.",
    features: [
      "Keras Tokenizer with a 5,000-word vocabulary and OOV handling",
      "Sequence padding to a uniform length of 100 tokens",
      "Stratified train/test split to handle class imbalance",
      "Embedding + SimpleRNN + Dense architecture for binary classification",
      "Training and validation loss/accuracy visualizations",
      "~86.6% test accuracy achieved on held-out evaluation"
    ],
    documents: [
      { type: "github", url: "https://github.com/Aravindr017/Recurrent_Neural_Network-Spam_Classification", text: "Source Code" }
    ],
    tags: ["Deep Learning", "RNN", "NLP"]
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
      className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden flex flex-col justify-center border-t border-zinc-200 dark:border-white/10 scroll-mt-32 transition-colors duration-300"
    >
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 dark:bg-white/10 border border-zinc-300 dark:border-white/20 mb-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-800 dark:text-white/90 uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            Technical Projects
          </h2>
          <p className="text-zinc-600 dark:text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            "Innovative solutions combining cutting-edge technology with creative problem solving"
          </p>
        </div>

        <div
          className="w-full relative overflow-hidden py-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex gap-8 w-max px-8"
            style={{
              animation: "marquee-horizontal 90s linear infinite",
              animationPlayState: isHovered || selectedProject ? "paused" : "running",
            }}
          >
            {displayProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col w-[350px] md:w-[450px] aspect-[4/3] rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />

                {/* Fallback color while image loads or if missing */}
                <div className="absolute inset-0 bg-zinc-900" />

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white transition-colors"
              >
                ✕
              </button>

              {/* Left: Image */}
              <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0 flex flex-col justify-end p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 bg-zinc-900 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />
                <div className="relative z-10 mt-auto">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{selectedProject.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed font-light">{selectedProject.tech}</p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Overview</h4>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed text-sm">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70">
                        <span className="text-black/40 dark:text-white/40 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-black/70 dark:text-white/70 inline-block">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Links & Documents</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.documents.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] bg-black text-white dark:bg-white dark:text-black py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black/80 dark:hover:bg-white/90 transition-colors"
                      >
                        {doc.type === "github" ? "GitHub" : doc.type === "external" ? "Live Demo" : "View Details"}
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
