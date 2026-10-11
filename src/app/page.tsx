"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import HorizontalMarquee from "@/components/HorizontalMarquee";
import ImageSequenceHero from "@/components/ImageSequenceHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import AchievementsSection from "@/components/AchievementsSection";
import WelcomeScreen from "@/components/WelcomeScreen";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";
import Image from "next/image";

// --- Custom Easing Curve ---
const CUSTOM_EASING = [0.16, 1, 0.3, 1];

// --- 1. Floating Dynamic Island Nav Bar ---
const FloatingNavBar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show navbar once user scrolls down slightly past the hero top
      setIsVisible(latest > 250);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0, x: "-50%", scale: 0.8 }}
          animate={{ y: 0, opacity: 1, x: "-50%", scale: 1 }}
          exit={{ y: -100, opacity: 0, x: "-50%", scale: 0.8 }}
          transition={{ duration: 0.6, ease: CUSTOM_EASING }}
          className="fixed top-6 left-1/2 z-50 flex items-center gap-3 md:gap-6 px-4 md:px-6 py-3 md:py-4 rounded-[2rem] bg-white/80 dark:bg-black/75 backdrop-blur-3xl border border-zinc-200/90 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] max-w-[95vw] md:max-w-none overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {["About", "Projects", "Skills", "Achievements", "Leadership", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs md:text-sm font-medium text-zinc-600 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white cursor-pointer transition-colors tracking-wide px-1 md:px-2"
            >
              {item}
            </a>
          ))}
          <div className="w-px h-5 bg-zinc-200 dark:bg-white/20 mx-2 hidden md:block" />
          <a
            href="/documents/Resume(Aravind_R).pdf"
            target="_blank"
            className="text-xs md:text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/80 px-4 py-2 rounded-full transition-colors hidden md:block"
          >
            Resume
          </a>
          <div className="w-px h-5 bg-zinc-200 dark:bg-white/20 mx-2 hidden md:block" />
          <ThemeToggle />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

// --- Biography Section ---
const BioSection = () => {
  return (
    <section id="about" className="relative min-h-[90vh] bg-white dark:bg-black text-zinc-900 dark:text-white scroll-mt-24 flex flex-col justify-center py-24 md:py-32 border-t border-zinc-200 dark:border-white/10 transition-colors duration-300">
      {/* Background Layer with subtle overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/profile.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-5 dark:opacity-10 blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-black dark:via-black/90 dark:to-black transition-colors duration-300" />
      </div>

      <motion.div
        initial={{ opacity: 0.01, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl px-6 mx-auto"
      >
        {/* Centered Section Header to match all other sections */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 mb-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-700 dark:text-white/90 uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            Building Intelligence with Purpose
          </h2>
          <p className="text-zinc-600 dark:text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Computer Science Engineer, AI Researcher, and IEEE PES Leader dedicated to high-impact technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

          {/* Left side: Text Content */}
          <div className="w-full md:w-3/5 text-left order-2 md:order-1">
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-white/80 font-normal dark:font-light leading-relaxed">
              <p>
                I am a Computer Science Engineer and <strong className="text-zinc-900 dark:text-white font-semibold">Past Student Representative</strong> of the IEEE PES Kerala Chapter. With a strong background in leadership and technical projects, I have organized major IEEE PES events, led the EcoWatt project, and secured a <strong className="text-amber-600 dark:text-yellow-400 font-semibold">global rank of #83</strong> in IEEE Xtreme 18.0.
              </p>
              <p>
                I have worked on projects like Smart Home Automation and AutoGlide, and completed <strong className="text-zinc-900 dark:text-white font-semibold">cybersecurity & Flutter</strong> internships. I won the <strong className="text-zinc-900 dark:text-white font-semibold">First Prize in the Idea Pitching competition</strong> at PowerConnect+ and contributed to education initiatives like <strong className="text-zinc-900 dark:text-white font-semibold">PROJECT: Instrument IT</strong>.
              </p>
              <p>
                Additionally, I served as the <strong className="text-zinc-900 dark:text-white font-semibold">Sports Secretary</strong> of the College of Engineering Adoor, showcasing my diverse skills in leadership, technology, and community engagement.
              </p>
            </div>

            {/* Quick credibility chips */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-white/80">
                <svg className="w-3.5 h-3.5 text-zinc-600 dark:text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span>CE Adoor</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-yellow-500/10 border border-amber-500/20 dark:border-yellow-500/20 text-xs font-medium text-amber-700 dark:text-yellow-400">
                <svg className="w-3.5 h-3.5 text-amber-600 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-9H6a3 3 0 01-3-3V7a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2a3 3 0 01-3 3h-1m-10-4h12v5a6 6 0 01-12 0V5z" />
                </svg>
                <span>IEEE Xtreme #83</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>IEEE PES Leader</span>
              </span>
            </div>
          </div>

          {/* Right side: Portrait Card */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-72 md:h-[24rem] lg:w-80 lg:h-[26rem] rounded-3xl p-2 bg-gradient-to-tr from-zinc-200/60 to-zinc-100 dark:from-white/10 dark:to-white/20 backdrop-blur-xl border border-zinc-200 dark:border-white/20 shadow-xl dark:shadow-[0_0_50px_rgba(255,255,255,0.08)]">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src="/images/about_me_img1.JPG"
                  alt="Aravind R"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-zinc-200/80 dark:border-white/15">
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">Aravind R.</p>
                  <p className="text-[10px] text-zinc-500 dark:text-white/60">Software Engineer • IEEE PES Leader</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

// --- Skills Matrix ---
const SkillsMatrix = () => {
  const skills = [
    {
      title: "AI / ML & Data Science",
      badge: "Specialization",
      span2: true,
      icon: (
        <svg className="w-5 h-5 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      items: [
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "OpenCV",
        "OpenAI API",
        "NLP",
        "RAG",
        "GenAI",
        "Deep Learning",
        "Machine Learning"
      ]
    },
    {
      title: "Languages",
      span2: false,
      icon: (
        <svg className="w-5 h-5 text-amber-500 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      items: ["Python", "Java", "C++", "C", "SQL", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Web & Frameworks",
      span2: false,
      icon: (
        <svg className="w-5 h-5 text-sky-500 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
      items: ["React JS", "Node.js", "Next.js", "Django", "REST APIs", "WebSockets", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Databases & DevOps",
      span2: false,
      icon: (
        <svg className="w-5 h-5 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      items: ["MongoDB", "Firebase", "Docker", "Kubernetes", "AWS", "Vercel", "Cloudflare"]
    },
    {
      title: "Core CS",
      span2: false,
      icon: (
        <svg className="w-5 h-5 text-rose-500 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557c0 1.25.75 2.25 1.5 2.25" />
        </svg>
      ),
      items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Front-End Development"]
    },
    {
      title: "Embedded & IoT",
      span2: false,
      icon: (
        <svg className="w-5 h-5 text-purple-500 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
      ),
      items: ["Arduino", "ESP8266", "MATLAB"]
    },
    {
      title: "Tools & Platforms",
      span2: false,
      icon: (
        <svg className="w-5 h-5 text-teal-500 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l2.804-2.804a2.5 2.5 0 00-3.536-3.536l-2.804 2.804m0 0L7.5 11.25" />
        </svg>
      ),
      items: ["VS Code", "Jupyter Notebook", "Streamlit", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative border-t border-zinc-200 dark:border-white/10 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 dark:bg-white/10 border border-zinc-300 dark:border-white/20 mb-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-800 dark:text-white/90 uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            Technical Skill Matrix
          </h2>
          <p className="text-zinc-600 dark:text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Comprehensive skill set across AI/ML engineering, full-stack systems, cloud infrastructure & embedded hardware.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0.01, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: CUSTOM_EASING }}
              className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-xl hover:border-zinc-300 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300 group ${category.span2 ? "md:col-span-2" : ""
                }`}
            >
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-white/10 border border-zinc-200/80 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">{category.title}</h3>
                    {category.badge && (
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                        {category.badge}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-medium text-zinc-500 dark:text-white/50 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                  {category.items.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {category.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-800 dark:text-white text-xs sm:text-sm font-medium tracking-wide border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-zinc-400 dark:hover:border-white/30 hover:scale-[1.03] transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Leadership Timeline ---
const LeadershipTimeline = () => {
  const milestones = [
    { year: "2026", role: "AI/ML Intern", org: "ICT Academy of Kerala", desc: "Completed Certification in Artificial Intelligence & Machine Learning & Working on industry-oriented AI/ML projects." },
    { year: "2026", role: "B.Tech Graduate", org: "College of Engineering Adoor", desc: "Completed B.Tech in Computer Science and Engineering from College of Engineering Adoor. CGPA - 8.05" },
    { year: "2025-26", role: "Student Representative", org: "IEEE PES Kerala Chapter", desc: "Organized 10+ events for 500+ participants." },
    { year: "2025", role: "Blockchain Intern", org: "Amrita School of Artificial Intelligence", desc: "Co-developed HEXENE, a Three-Tier Blockchain Framework for Carbon Credit Trading." },
    { year: "2024", role: "Flutter Intern", org: "Spectrum Softtech Solutions Pvt. Ltd.", desc: "Developed responsive and interactive Flutter applications." },
    { year: "2024-25", role: "MDC Travancore HUB", org: "IEEE PES Kerala Chapter", desc: "Coordinated chapter activities and workshops." },
    { year: "2024-25", role: "Student Lead 2", org: "IEDC TBI @CE Adoor", desc: "Mentored student startup projects and ideas." },
    { year: "2023", role: "Cybersecurity Intern", org: "Technovalley Pvt Ltd", desc: "MITM Attack detection using Packet Capturing." },
    { year: "2022-24", role: "Sports Secretary", org: "College of Engineering Adoor", desc: "Managed sports events and inter-college tournaments." },
    { year: "2022", role: "Engineering Commenced", org: "College of Engineering Adoor", desc: "Began Computer Science degree program." }
  ];

  return (
    <section id="leadership" className="relative py-24 md:py-32 bg-white dark:bg-black text-zinc-900 dark:text-white overflow-hidden border-t border-zinc-200 dark:border-white/10 scroll-mt-32 transition-colors duration-300">
      <div className="absolute inset-0">
        <img src="/images/leadershipjourney.jpg" alt="Leadership Journey" className="w-full h-full object-cover opacity-5 dark:opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-black dark:via-black/85 dark:to-black transition-colors duration-300" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 mb-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-700 dark:text-white/90 uppercase">Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Leadership & Timeline
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-white/20 before:to-transparent">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.01, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: CUSTOM_EASING }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-white/30 bg-white dark:bg-black text-zinc-900 dark:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="w-3 h-3 bg-zinc-900 dark:bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 backdrop-blur-md border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/30 shadow-sm dark:shadow-none transition-colors">
                <span className="font-mono text-sm text-amber-600 dark:text-yellow-400 font-semibold">{item.year}</span>
                <h3 className="text-xl font-bold mt-1 text-zinc-900 dark:text-white">{item.role}</h3>
                <h4 className="text-sm font-medium text-zinc-600 dark:text-white/70 mb-2">{item.org}</h4>
                <p className="text-zinc-500 dark:text-white/60 font-normal dark:font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Metrics & Peer Endorsement ---
const MetricsAndEndorsement = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24 md:mb-32 text-center">
          {[
            { val: "83", label: "Global Rank IEEE Xtreme" },
            { val: "8.05", label: "Current CGPA" },
            { val: "40+", label: "Projects Completed" },
            { val: "15+", label: "Competitions Won" },
            { val: "500+", label: "Students Trained" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: CUSTOM_EASING }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-6xl font-black tracking-tighter mb-3 text-zinc-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-white/90 dark:to-white/70">{metric.val}</span>
              <span className="text-xs font-semibold text-zinc-500 dark:text-white/50 uppercase tracking-widest">{metric.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Endorsement */}
        <div className="relative rounded-3xl overflow-hidden min-h-[360px] flex items-center justify-center border border-zinc-200 dark:border-white/15 bg-white dark:bg-black/40 shadow-lg dark:shadow-none backdrop-blur-xl">
          <img src="/images/instrument2.jpg" alt="Endorsement Background" className="absolute w-full h-full object-cover opacity-10 dark:opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/95 dark:from-black/90 dark:via-black/70 dark:to-black/90 transition-colors duration-300" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: CUSTOM_EASING }}
            className="relative z-10 max-w-4xl text-center px-6 py-16"
          >
            <h2 className="text-2xl md:text-3xl font-light leading-relaxed mb-6 italic text-zinc-800 dark:text-white/90">
              "Aravind is an exceptional leader and engineer, driving innovation and inspiring those around him. His dedication to IEEE and tech initiatives is unmatched."
            </h2>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-zinc-900 dark:text-white">Gokul G K</span>
              <span className="text-zinc-500 dark:text-white/60 text-xs sm:text-sm font-medium">Past Chairperson (2025-26) - IEEE PES SBC College of Engineering Adoor</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};


export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Check if welcome screen was already shown in this session
    const hasShown = sessionStorage.getItem('welcomeShown');
    if (hasShown) {
      setShowWelcome(false);
    }
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {showWelcome && <WelcomeScreen key="welcome" onFinish={() => setShowWelcome(false)} />}
      </AnimatePresence>

      <div className="bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen selection:bg-zinc-200 dark:selection:bg-white/20 selection:text-zinc-900 dark:selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
        <FloatingNavBar />

        <ImageSequenceHero />

        <BioSection />

        <HorizontalMarquee />

        <SkillsMatrix />

        <AchievementsSection />

        <LeadershipTimeline />

        <MetricsAndEndorsement />

        <ContactSection />

        <Footer />

        <BackToTop />
        <Chatbot />
      </div>
    </main>
  );
}
