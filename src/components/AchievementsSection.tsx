"use client";

import { motion } from "framer-motion";

const CUSTOM_EASING = [0.16, 1, 0.3, 1];

interface Achievement {
  id: string;
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
  const renderIcon = (id: string) => {
    switch(id) {
      case "ieee-xtreme":
        return (
          <svg className="w-5 h-5 text-amber-500 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-9H6a3 3 0 01-3-3V7a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2a3 3 0 01-3 3h-1m-10-4h12v5a6 6 0 01-12 0V5z" />
          </svg>
        );
      case "amrithakiranam":
        return (
          <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "powerconnect":
        return (
          <svg className="w-5 h-5 text-emerald-500 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "academic":
        return (
          <svg className="w-5 h-5 text-purple-500 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case "event-org":
        return (
          <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "education":
        return (
          <svg className="w-5 h-5 text-amber-500 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  const getThemeColor = (theme: string) => {
    switch(theme) {
      case 'gold': return 'bg-white dark:bg-zinc-900 border-amber-500/40 dark:border-yellow-500/30 dark:bg-gradient-to-br dark:from-yellow-500/20 dark:to-orange-500/5 shadow-sm dark:shadow-none';
      case 'blue': return 'bg-white dark:bg-zinc-900 border-blue-500/40 dark:border-blue-500/30 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-cyan-500/5 shadow-sm dark:shadow-none';
      case 'green': return 'bg-white dark:bg-zinc-900 border-emerald-500/40 dark:border-emerald-500/30 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-teal-500/5 shadow-sm dark:shadow-none';
      case 'purple': return 'bg-white dark:bg-zinc-900 border-purple-500/40 dark:border-purple-500/30 dark:bg-gradient-to-br dark:from-purple-500/20 dark:to-pink-500/5 shadow-sm dark:shadow-none';
      default: return 'bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none';
    }
  };

  const getProgressColor = (theme: string) => {
    switch(theme) {
      case 'gold': return 'bg-amber-500 dark:bg-yellow-500';
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-emerald-500';
      case 'purple': return 'bg-purple-500';
      default: return 'bg-zinc-900 dark:bg-white';
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 bg-slate-50 dark:bg-black text-zinc-900 dark:text-white relative border-t border-zinc-200 dark:border-white/10 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0.01, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: CUSTOM_EASING }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 dark:bg-white/10 border border-zinc-300 dark:border-white/20 mb-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-800 dark:text-white/90 uppercase">Honors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            My Achievements
          </h2>
          <p className="text-zinc-600 dark:text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            "Recognition of technical excellence and leadership through awards and accomplishments"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0.01, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: CUSTOM_EASING }}
              className={`relative flex flex-col p-8 rounded-3xl ${getThemeColor(ach.theme)} backdrop-blur-xl border hover:scale-[1.02] transition-transform duration-500 overflow-hidden group`}
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-black/5 dark:bg-white/5 rounded-full blur-3xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors pointer-events-none" />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                  {renderIcon(ach.id)}
                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 relative z-10">
                {ach.title}
              </h3>
              <p className="text-sm font-mono text-zinc-500 dark:text-white/50 mb-6 relative z-10">
                {ach.date}
              </p>

              <ul className="flex-1 space-y-3 mb-8 relative z-10">
                {ach.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-white/75">
                    <span className="text-zinc-400 dark:text-white/40 mt-1.5 text-[8px]">●</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-auto relative z-10">
                <div className="flex justify-between text-xs font-semibold text-zinc-500 dark:text-white/60 uppercase tracking-wider mb-2">
                  <span>{ach.status}</span>
                  <span>{ach.progressText}</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-100 dark:bg-white/10 rounded-full overflow-hidden mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className={`h-full ${getProgressColor(ach.theme)} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                  />
                </div>
                
                <a 
                  href={ach.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 border border-zinc-200 dark:border-white/15 rounded-full text-xs sm:text-sm font-medium text-zinc-800 dark:text-white transition-colors"
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
