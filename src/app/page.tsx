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
      // Show navbar AFTER the 400vh hero section (roughly window.innerHeight * 3.8)
      const threshold = typeof window !== "undefined" ? window.innerHeight * 3.5 : 3000;
      setIsVisible(latest > threshold);
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
          className="fixed top-6 left-1/2 z-50 flex items-center gap-4 md:gap-6 px-6 py-4 rounded-[2rem] bg-white/40 dark:bg-black/40 backdrop-blur-3xl border border-black/10 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          {["About", "Projects", "Skills", "Achievements", "Leadership", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs md:text-sm font-medium text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white cursor-pointer transition-colors tracking-wide px-1 md:px-2"
            >
              {item}
            </a>
          ))}
          <div className="w-px h-5 bg-white/20 mx-2 hidden md:block" />
          <a
            href="/documents/Resume(Aravind_R).pdf"
            target="_blank"
            className="text-xs md:text-sm font-semibold bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:bg-black/80 dark:hover:bg-white/80 transition-colors hidden md:block"
          >
            Resume
          </a>
          <div className="w-px h-5 bg-white/20 mx-2 hidden md:block" />
          <ThemeToggle />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

// --- Biography Section ---
const BioSection = () => {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0.1, 0.3], [150, 0]);
  const opacityText = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section id="about" className="relative min-h-[150vh] bg-white dark:bg-black">
      <div className="sticky top-0 min-h-screen w-full overflow-hidden flex items-center justify-center py-20">

        {/* Background Layer: Old Image */}
        <div className="absolute inset-0">
          <img
            src="/images/profile.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-white/40 dark:to-black/40" />
        </div>

        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 w-full max-w-7xl px-6 mx-auto mt-10 md:mt-0"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            {/* Left side: Text Content */}
            <div className="w-full lg:w-3/5 text-left order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-black dark:text-white/70 font-light leading-relaxed">
                <p>
                  I am a Computer Science Engineer and <strong>Past Student Representative</strong> of the IEEE PES Kerala Chapter. With a strong background in leadership and technical projects, I have organized major IEEE PES events, led the EcoWatt project, and secured a <strong className="text-black dark:text-white">global rank of #83</strong> in IEEE Xtreme 18.0.
                </p>
                <p>
                  I have worked on projects like Smart Home Automation and AutoGlide, and completed <strong className="text-black dark:text-white">cybersecurity & Flutter</strong> internships. I won the <strong className="text-black dark:text-white">First Prize in the Idea Pitching competition</strong> at PowerConnect+ and contributed to education initiatives like <strong className="text-black dark:text-white">PROJECT: Instrument IT</strong>.
                </p>
                <p>
                  Additionally, I served as the <strong className="text-black dark:text-white">Sports Secretary</strong> of the College of Engineering Adoor, showcasing my diverse skills in leadership, technology, and community engagement.
                </p>
              </div>
            </div>

            {/* Right side: New Image cropped to face */}
            <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-white/10 to-white/30 backdrop-blur-md shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-white dark:bg-black">
                  <img
                    src="/images/about_me_img1.JPG"
                    alt="Aravind R"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Skills Matrix ---
const SkillsMatrix = () => {
  const skills = [
    { title: "Core Technologies", items: ["Python", "Java", "C/C++", "Data Structures", "OOPs"] },
    { title: "Web Development", items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"] },
    { title: "Database & Frameworks", items: ["MySQL", "PostgreSQL", "MongoDB", "Bootstrap", "Tailwind CSS"] },
    { title: "Non-Technical", items: ["Leadership", "Teamwork", "Time Management", "Communication", "Problem Solving"] }
  ];

  return (
    <section id="skills" className="py-40 bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-center">
          Technical Skill Matrix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: CUSTOM_EASING }}
              className="p-10 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white/90">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-black/10 dark:bg-white/10 text-sm font-medium tracking-wide">
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
    { year: "2025-26", role: "Student Representative", org: "IEEE PES Kerala Chapter", desc: "Organized 10+ events for 500+ participants." },
    { year: "2024-25", role: "MDC Travancore HUB", org: "IEEE PES Kerala Chapter", desc: "Coordinated chapter activities and workshops." },
    { year: "2024-25", role: "Student Lead 2", org: "IEDC TBI @CE Adoor", desc: "Mentored student startup projects and ideas." },
    { year: "2023", role: "Cybersecurity Intern", org: "Technovalley Pvt Ltd", desc: "MITM Attack detection using Packet Capturing." },
    { year: "2022-24", role: "Sports Secretary", org: "College of Engineering Adoor", desc: "Managed sports events and inter-college tournaments." },
    { year: "2022", role: "Engineering Commenced", org: "College of Engineering Adoor", desc: "Began Computer Science degree program." }
  ];

  return (
    <section id="leadership" className="relative py-20 text-black dark:text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/leadershipjourney.jpg" alt="Leadership Journey" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-white/80 dark:via-black/80 to-white dark:to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-center">
          Leadership & Timeline
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/20 dark:before:via-white/20 before:to-transparent">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: CUSTOM_EASING }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/30 dark:border-white/30 bg-white dark:bg-black text-black dark:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors">
                <span className="font-mono text-sm text-black dark:text-white/50">{item.year}</span>
                <h3 className="text-xl font-bold mt-2">{item.role}</h3>
                <h4 className="text-md font-medium text-black dark:text-white/70 mb-3">{item.org}</h4>
                <p className="text-black dark:text-white/60 font-light leading-relaxed">{item.desc}</p>
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
    <section className="py-32 bg-white dark:bg-black text-black dark:text-white border-t border-black/10 dark:border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-40 text-center">
          {[
            { val: "83", label: "Global Rank IEEE Xtreme" },
            { val: "8.0", label: "Current CGPA" },
            { val: "16+", label: "Projects Completed" },
            { val: "10+", label: "Competitions Won" },
            { val: "500+", label: "Students Trained" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: CUSTOM_EASING }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">{metric.val}</span>
              <span className="text-sm font-medium text-black dark:text-white/50 uppercase tracking-widest">{metric.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Endorsement */}
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center border border-black/10 dark:border-white/10">
          <img src="/images/instrument2.jpg" alt="Endorsement Background" className="absolute w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 dark:from-black/80 via-white/50 dark:via-black/50 to-white/80 dark:to-black/80" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: CUSTOM_EASING }}
            className="relative z-10 max-w-4xl text-center px-6 py-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium leading-relaxed mb-8 italic text-black dark:text-white/90">
              "Aravind is an exceptional leader and engineer, driving innovation and inspiring those around him. His dedication to IEEE and tech initiatives is unmatched."
            </h2>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-black dark:text-white">Gokul G K</span>
              <span className="text-black/60 dark:text-white/60 font-medium">Past Chairperson (2025-26) - IEEE PES SBC College of Engineering Adoor</span>
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

      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen selection:bg-white selection:text-black font-sans antialiased">
        <FloatingNavBar />

        <ImageSequenceHero />

        <BioSection />

        <div id="projects">
          <HorizontalMarquee />
        </div>

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
