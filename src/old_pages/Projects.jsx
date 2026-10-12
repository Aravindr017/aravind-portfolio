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
      image: '/images/vakku-newweb.png',
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'GSAP', 'i18next', 'Cloudflare Pages'],
      description: 'Official eFootball creator platform with 3D visuals, a multi-language UI, and a Git-backed CMS on Cloudflare edge functions.',
      longDescription: 'A fully redesigned official web platform for a professional eFootball player and YouTube creator, built with React 19, Vite, and Cloudflare Pages Edge Functions. It brings together a searchable player progression database, a tactical manager guide, live YouTube video sync, and a dark neon gaming theme with Framer Motion, GSAP, and Three.js 3D visuals. The site supports five languages through i18next with automatic browser detection. A secure admin dashboard uses Google OAuth 2.0 and HMAC-SHA256 signed sessions, and publishes content by committing JSON files straight to GitHub through the Contents API, so no database is needed. The YouTube edge function reads the uploads playlist for just 1 quota unit per fetch and caches results for 30 minutes. Google AdSense is integrated with responsive ad units.',
      features: [
        'Player progression database with position and attribute filtering',
        'Tactical manager guide with formations, playstyles, and boosts',
        'Live YouTube video sync via a cached Cloudflare edge function',
        'Multi-language support: English, Hindi, Japanese, Spanish, German',
        'Dark neon theme with custom cursor, Framer Motion, GSAP, and Three.js 3D visuals',
        'Secure admin CMS with Google OAuth 2.0 and HMAC-signed sessions',
        'Git-backed publishing: edits commit JSON to GitHub, no database needed',
        'Automatic Cloudflare cache purge on publish',
        'Code-split routes with vendor chunking for fast loads',
        'Google AdSense integration with SEO metadata'
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
    },
    {
      id: 9,
      title: 'SKINOVA AI',
      category: 'AI/ML',
      image: '/images/SKINNOVA_AI.png',
      tech: ['React', 'Vite', 'FastAPI', 'EfficientNet-B0', 'ONNX Runtime Web', 'Gemini AI', 'FAISS', 'PWA'],
      description: 'AI dermatological screening PWA with dual-engine cloud and offline on-device skin lesion analysis.',
      longDescription: 'SKINOVA AI is a clinical-grade skin screening and telehealth platform that combines an EfficientNet-B0 deep learning model, Google Gemini multimodal vision, and a RAG-based clinical knowledge engine. When online, it fuses cloud AI predictions for higher accuracy. When offline, it runs 100% in the browser using WebAssembly (ONNX Runtime Web) with ~160 ms inference and no patient data leaving the device. A multi-stage lesion gatekeeper rejects non-skin images such as documents, walls, and portraits before any prediction is made. Results are classified across 7 HAM10000 disease classes with risk levels, urgency guidance, specialist matching, and printable clinical PDF reports.',
      features: [
        'Dual-engine AI: Gemini Vision + EfficientNet-B0 consensus',
        '100% offline on-device inference with WebAssembly (~160 ms)',
        'Multi-stage lesion gatekeeper to block non-skin images',
        '7-class HAM10000 classification with risk and urgency rating',
        'RAG clinical chatbot grounded in WHO ICD-11 and DermNet knowledge',
        'Geo-based specialist and hospital finder with OpenStreetMap',
        'One-click clinical PDF report generator',
        'Installable PWA with service worker offline caching',
        'Health and activity tracking with UV protection advisor'
      ],
      links: {
        live: 'https://skinova-nu.vercel.app/',
        github: 'https://github.com/Aravindr017/SKINOVA'
      }
    },
    {
      id: 10,
      title: 'Speech Command Classifier',
      category: 'AI/ML',
      image: '/images/command-classifier.png',
      tech: ['Python', 'Sentence Transformers', 'ONNX Runtime', 'Streamlit', 'NumPy'],
      description: 'Offline semantic voice command classifier for automotive and IoT systems with out-of-scope rejection.',
      longDescription: 'A lightweight semantic command classifier built for automotive and IoT voice systems. It takes text from an ASR engine and maps it to one of 14 predefined commands, or rejects it as out-of-scope using a cosine similarity threshold. The model uses a paraphrase-MiniLM-L3-v2 embedding exported to an INT8 quantized ONNX format (~16 MB) and runs fully offline on edge devices with under 100 ms CPU latency. Each command is represented by a prototype vector, so new commands can be added by updating prototypes only, with no retraining, re-export, or re-quantization. The training data is synthetic and includes ASR noise such as word drops, typos, fillers, and simulated Indian accent variations.',
      features: [
        '14 voice commands with out-of-scope rejection',
        'INT8 quantized ONNX model (~16 MB) for edge devices',
        'Under 100 ms inference latency on CPU',
        'Fully offline after the first model download',
        'Prototype-based design: add new commands without retraining',
        'Robust to ASR noise, typos, fillers, and accent variations',
        'Evaluation suite with classification report and confusion matrix',
        'Interactive Streamlit web interface'
      ],
      links: {
        live: 'https://speech-command-classifier.streamlit.app/',
        github: 'https://github.com/Aravindr017/Lightweight-Speech-Command-Classifier-for-Edge-Deployment'
      }
    },
    {
      id: 11,
      title: 'Portugal Election 2019 Prediction',
      category: 'AI/ML',
      image: '/images/election-regression.png',
      tech: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'pandas', 'Streamlit'],
      description: 'ML regression project predicting final election mandates, deployed as a Streamlit dashboard.',
      longDescription: 'A machine learning project that predicts final mandates from the Real-Time Election Results Portugal 2019 dataset. It covers the full workflow: data cleaning, outlier analysis, feature engineering with correlation and mutual information scores, scaling, and one-hot encoding. Several regression models were built and compared, including KNN, SVR, Linear Regression, Decision Tree, and TensorFlow and PyTorch neural networks. The boosted KNN Regressor performed best with an R² of 0.999996 and is deployed behind a Streamlit dashboard with a login gate, light and dark themes, and transparent predictions that show the raw and preprocessed input rows.',
      features: [
        'Compared 15+ regression models with grid and randomized search tuning',
        'Best model: boosted KNN Regressor (R² of 0.999996)',
        'Feature selection using Pearson correlation and mutual information',
        'Secure login gate for the Streamlit dashboard',
        'Real-time final mandate prediction from grouped input forms',
        'Light and dark theme toggle with responsive layout',
        'Transparent output showing raw and preprocessed model input',
        'Automated model sanity-check script (test_model.py)'
      ],
      links: {
        live: 'https://portugalelection-2019.streamlit.app/',
        github: 'https://github.com/Aravindr017/Portugal_election-2019'
      }
    },
    {
      id: 12,
      title: 'Restaurant Management Suite',
      category: 'Desktop',
      image: '/images/restaurant-img.png',
      tech: ['VB.NET', 'Windows Forms', '.NET Framework 4.7.2', 'MS Access', 'OLEDB'],
      description: 'Desktop restaurant POS with multi-role access, live order tracking, and a recursive login check.',
      longDescription: 'A desktop restaurant automation and point-of-sale system built with VB.NET, Windows Forms, and a Microsoft Access database. It has three purpose-built portals: an Owner dashboard for managing tables, staff, menu, and sales analytics; a Waiter station for moving orders through the kitchen workflow; and a password-free Customer self-service portal for ordering by table. Staff passwords are Base64-encrypted, and logins are verified by a recursive authentication algorithm with a 3-attempt lockout. Job applicants apply through an onboarding portal and only get login access once the Owner approves them. Estimated kitchen wait times are calculated from dish prep times and shown as real-time countdown progress bars. The database creates and seeds itself on first launch.',
      features: [
        'Multi-role access: Owner, Waiter, and Customer table portal',
        'Recursive password verification with 3-attempt lockout',
        'Staff job application and Owner approval workflow',
        'Dynamic table management: add tables and change seating capacity',
        'Workforce management with duties, shifts, and weekly hours',
        'Real-time kitchen countdown tracker with progress bars',
        'Order lifecycle: Preparing, Ready, Served, Completed / Paid',
        'Menu catalog management with categories, prices, and prep times',
        'Self-seeding Access database with Jet 4.0 and ACE fallback'
      ],
      links: {
        github: 'https://github.com/Aravindr017/Restaurant_Management_Suite'
      }
    },
    {
      id: 13,
      title: 'CIFAR-100 Image Classification CNN',
      category: 'AI/ML',
      image: '/images/cifar-100.png',
      tech: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Matplotlib', 'Seaborn'],
      description: 'Custom CNN built from scratch for 100-class image classification on native 32x32 CIFAR-100 images.',
      longDescription: 'A deep learning project that designs and evaluates a custom Convolutional Neural Network for the CIFAR-100 dataset, working directly on the native 32x32 resolution with no resizing. The model uses three convolutional blocks (32, 64, and 128 filters) with batch normalization, max pooling, and dropout, followed by a regularized dense head. The pipeline includes a train/validation/test split, on-the-fly data augmentation, an optimized tf.data pipeline, mixed precision with XLA compilation, and AdamW with early stopping, learning rate reduction, and checkpointing. Evaluation covers accuracy and loss curves, a confusion matrix, a classification report, per-class accuracy, and hardest-class analysis, along with a documented list of improvements for future iterations.',
      features: [
        'Custom 3-block CNN designed for native 32x32 inputs',
        'Batch normalization, dropout, and L2 regularization',
        'Data augmentation with random flip and rotation',
        'Optimized tf.data pipeline with caching and prefetching',
        'Mixed precision and XLA JIT compilation for faster training',
        'AdamW optimizer with EarlyStopping, ReduceLROnPlateau, and ModelCheckpoint',
        'Confusion matrix, classification report, and per-class accuracy',
        'Hardest-class analysis and documented improvement roadmap'
      ],
      links: {
        github: 'https://github.com/Aravindr017/CIFAR-100_CNN_EfficientNet'
      }
    }, {
      id: 14,
      title: 'Smart Energy Grid & Solar Forecasting',
      category: 'AI/ML',
      image: '/images/solar-forcasting.png',
      tech: ['Python', 'scikit-learn', 'pandas', 'PuLP', 'Streamlit', 'Open-Meteo API'],
      description: 'Solar power forecasting and battery arbitrage system for smart grids. Internship project at TrackGenesis (in progress).',
      longDescription: 'An end-to-end renewable energy forecasting and battery optimization system built as a real-world internship project at TrackGenesis. It forecasts solar power generation at 15-minute and hourly resolutions using inverter data, pyranometer sensor readings, and Open-Meteo weather forecasts. The pipeline includes solar geometry calculations, autoregressive lag features, causal rolling irradiance statistics, and a leakage-free scikit-learn pipeline with physical nighttime zero-inflation. Ridge Regression cut daylight RMSE by about 48% against a 24-hour persistence benchmark on Plant 1 and 47% on Plant 2. Upcoming phases add Duck Curve grid analytics, 24-hour forecasting with LightGBM, XGBoost, and Prophet, and linear programming (PuLP) to schedule battery charging at cheap solar peaks and discharging in expensive evening hours. A Streamlit dashboard covers generation analysis and forecast benchmarking.',
      features: [
        'Day-ahead solar power forecasting at 15-minute and hourly resolution',
        'Solar geometry, lag, and rolling irradiance feature engineering',
        'Ridge Regression: ~48% lower daylight RMSE than the persistence benchmark',
        'Leakage-free temporal split with a StandardScaler pipeline',
        'Physical nighttime zero-inflation for realistic predictions',
        'Duck Curve analytics for grid peak demand (upcoming)',
        'PuLP linear programming for battery charge/discharge arbitrage (upcoming)',
        'Streamlit dashboard with forecast benchmarking and diurnal profiling'
      ],
      links: {
        github: 'https://github.com/Aravindr017/Smart-Energy-Grid-and-Solar-Power-Forecasting-with-Battery-Optimization'
      }
    },
    {
      id: 15,
      title: 'Fake News Classification',
      category: 'AI/ML',
      image: '/images/fake-news.png',
      tech: ['Python', 'NLTK', 'scikit-learn', 'TF-IDF', 'Logistic Regression', 'pandas'],
      description: 'NLP pipeline that classifies news articles as real or fake using TF-IDF and Logistic Regression.',
      longDescription: 'A natural language processing project that classifies news articles as real or fake using the Kaggle Fake News Classification dataset. Article titles and body text are combined and cleaned through a full preprocessing pipeline: lowercasing, HTML and URL removal, punctuation and number removal, tokenization, stopword removal, and lemmatization. The cleaned text is converted into TF-IDF features (5,000 features with unigrams and bigrams) and fed to a Logistic Regression model, all wrapped in a scikit-learn Pipeline. The model is evaluated on held-out data with accuracy, precision, recall, F1-score, and a confusion matrix.',
      features: [
        'Full text cleaning: HTML, URL, punctuation, and number removal',
        'Tokenization, stopword removal, and lemmatization with NLTK',
        'TF-IDF vectorization with unigrams and bigrams (5,000 features)',
        'Logistic Regression classifier in a single scikit-learn Pipeline',
        'Title and body text combined for richer context',
        'Train, evaluation, and test splits for reliable validation',
        'Evaluation with accuracy, precision, recall, F1-score, and confusion matrix'
      ],
      links: {
        github: 'https://github.com/Aravindr017/NLP_FakeNews-Classification'
      }
    },
    {
      id: 16,
      title: 'SMS Spam Classification (RNN)',
      category: 'AI/ML',
      image: '/images/sms-spam.png',
      tech: ['Python', 'TensorFlow', 'Keras', 'RNN', 'pandas', 'scikit-learn'],
      description: 'Recurrent Neural Network that classifies SMS messages as spam or ham.',
      longDescription: 'A deep learning project that classifies SMS messages as spam or ham using a Recurrent Neural Network built with Keras. Messages are tokenized with a 5,000-word vocabulary and an out-of-vocabulary token, then padded to a fixed length of 100. A stratified 80/20 split preserves the spam-to-ham ratio in the imbalanced dataset. The model stacks an Embedding layer, a SimpleRNN layer, and dense layers with a sigmoid output, trained with the Adam optimizer and binary cross-entropy loss. It reached about 86.6% test accuracy, and the analysis documents next steps such as LSTM/GRU layers, dropout, and hyperparameter tuning.',
      features: [
        'Keras Tokenizer with a 5,000-word vocabulary and OOV handling',
        'Sequence padding to a uniform length of 100 tokens',
        'Stratified train/test split to handle class imbalance',
        'Embedding + SimpleRNN + Dense architecture for binary classification',
        'Training and validation loss/accuracy visualizations',
        '~86.6% test accuracy',
        'Documented improvement roadmap (LSTM/GRU, dropout, tuning)'
      ],
      links: {
        github: 'https://github.com/Aravindr017/Recurrent_Neural_Network-Spam_Classification'
      }
    }
  ];

  const filters = ['all', 'AI/ML', 'Web', 'IoT', 'Robotics', 'Desktop'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'AI/ML' && (p.category === 'AI' || p.category === 'AI/ML')));

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
