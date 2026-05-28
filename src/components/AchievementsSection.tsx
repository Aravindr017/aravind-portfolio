"use client";

import { motion } from "framer-motion";

const CUSTOM_EASING = [0.16, 1, 0.3, 1];

interface Achievement {
  id: string;
  icon: string;
  title: string;
  date: string;
  bullets: string[];
  status: string;
  progressText: string;
  docUrl: string;
  docImage: string;
  theme: "gold" | "blue" | "green" | "purple";
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ieee-xtreme",
    icon: "🏆",
    title: "Global Rank 83 - IEEE Xtreme 18.0",
    date: "2024 • Annual IEEE Programming Competition",
    bullets: [
      "Competed against 19,000+ global participants",
      "Solved complex algorithmic challenges",
      "Top 1 Rank in my college"
    ],
    status: "Completed",
    progressText: "Global Top 100",
    docUrl: "/images/ieeextreme.jpg",
    docImage: "/images/ieeextreme.jpg",
    theme: "gold"
  },
  {
    id: "amrithakiranam",
    icon: "📜",
    title: "1st Prize - Amrithakiranam Medi IQ",
    date: "2020 • District Level quiz competition",
    bullets: [
      "Health Quiz programme",
      "Conducted by Kerala Government Medical Officer's Association",
      "Won ₹5000 prize money"
    ],
    status: "Completed",
    progressText: "1st Place",
    docUrl: "/images/amrithakiranam.jpg",
    docImage: "/images/amrithakiranam.jpg",
    theme: "blue"
  },
  {
    id: "powerconnect",
    icon: "💡",
    title: "1st Prize - PowerConnect+ Idea Pitching",
    date: "2024 • 2 day event at Amal Jyothi CE",
    bullets: [
      "Proposed sustainable energy solution",
      "Won among 50+ college teams",
      "Won ₹3000 prize money"
    ],
    status: "Completed",
    progressText: "1st Place",
    docUrl: "/images/powerconnect.jpg",
    docImage: "/images/powerconnect.jpg",
    theme: "green"
  },
  {
    id: "academic",
    icon: "🎓",
    title: "Academic Achievement",
    date: "2022 • 1st Year B.Tech",
    bullets: [
      "Completed Plus Two Science (2022) with 95% mark",
      "Completed 10th Standard (2020) with 98% mark",
      "Completed B.Tech Mini Project on Smart Home Automation (2025)"
    ],
    status: "Ongoing",
    progressText: "5+ Sub Course Completed",
    docUrl: "/images/academic.jpg",
    docImage: "/images/academic.jpg",
    theme: "purple"
  },
  {
    id: "event-org",
    icon: "👥",
    title: "Major Event Organization",
    date: "IEEE PES Kerala Chapter Events",
    bullets: [
      "AKPESSC Flagship Event (150+ attendees)",
      "R10 Global Workshop",
      "YP Conclave",
      "Chairs and SLT meet-up"
    ],
    status: "Completed",
    progressText: "15+ Events Conducted",
    docUrl: "/images/aksc.jpg",
    docImage: "/images/aksc.jpg",
    theme: "blue"
  },
  {
    id: "education",
    icon: "📚",
    title: "Education Volunteer",
    date: "PROJECT: Instrument IT",
    bullets: [
      "Workshop funded by IEEE TryEngineering",
      "Trained 100+ students in IoT fundamentals",
      "Basics of Arduino"
    ],
    status: "Completed",
    progressText: "500+ Students Trained",
    docUrl: "/images/instrument1.jpg",
    docImage: "/images/instrument1.jpg",
    theme: "gold"
  }
];

export default function AchievementsSection() {
  const getThemeColor = (theme: string) => {
    switch(theme) {
      case 'gold': return 'from-yellow-500/20 to-orange-500/5 border-yellow-500/30';
      case 'blue': return 'from-blue-500/20 to-cyan-500/5 border-blue-500/30';
      case 'green': return 'from-emerald-500/20 to-teal-500/5 border-emerald-500/30';
      case 'purple': return 'from-purple-500/20 to-pink-500/5 border-purple-500/30';
      default: return 'from-white/10 to-transparent border-white/10';
    }
  };

  const getProgressColor = (theme: string) => {
    switch(theme) {
      case 'gold': return 'bg-yellow-500';
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-emerald-500';
      case 'purple': return 'bg-purple-500';
      default: return 'bg-white';
    }
  };

  return (
    <section id="achievements" className="py-32 px-6 bg-white dark:bg-black text-black dark:text-white relative border-t border-black/10 dark:border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: CUSTOM_EASING }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            My Achievements
          </h2>
          <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
            "Recognition of technical excellence and leadership through awards and accomplishments"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: CUSTOM_EASING }}
              className={`relative flex flex-col p-8 rounded-3xl bg-gradient-to-br ${getThemeColor(ach.theme)} backdrop-blur-xl border hover:scale-[1.02] transition-transform duration-500 overflow-hidden group`}
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 flex items-center justify-center text-2xl shadow-inner">
                  {ach.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-black dark:text-white mb-2 relative z-10">
                {ach.title}
              </h3>
              <p className="text-sm font-mono text-black/50 dark:text-white/50 mb-6 relative z-10">
                {ach.date}
              </p>

              <ul className="flex-1 space-y-3 mb-8 relative z-10">
                {ach.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70">
                    <span className="text-black/40 dark:text-white/40 mt-1 text-[10px]">■</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-auto relative z-10">
                <div className="flex justify-between text-xs font-semibold text-black/60 dark:text-white/60 uppercase tracking-wider mb-2">
                  <span>{ach.status}</span>
                  <span>{ach.progressText}</span>
                </div>
                <div className="w-full h-1.5 bg-black/10 dark:bg-black/50 rounded-full overflow-hidden mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className={`h-full ${getProgressColor(ach.theme)} rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                  />
                </div>
                
                <a 
                  href={ach.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 rounded-full text-sm font-medium text-black dark:text-white transition-colors"
                >
                  <img src={ach.docImage} alt="Certificate" className="w-4 h-4 rounded-sm object-cover opacity-80 hidden" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  View Certificate/Photo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
