"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageSequenceHero() {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax scroll tracking for hero elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.95], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.95], [0, -30]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* Background Image Container with Parallax & Subject-Centered Cropping */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/aravindstatic.jpg"
            alt="Aravind R. - Software & AI Engineer"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[center_60%] sm:object-[center_64%] lg:object-[center_66%]"
            style={{
              // Responsive focal centering: ensures the subject is centered on PC/laptops and the excess sky is cropped down
              objectPosition: "50% 66%",
            }}
          />
        </motion.div>

        {/* Cinematic Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_rgba(0,0,0,0.35)_60%,_rgba(0,0,0,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent transition-colors duration-300" />
      </div>

      {/* Hero Foreground Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-10 flex-1 flex flex-col justify-between"
      >
        {/* Top: Introduction, Headline & Mission */}
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 dark:bg-white/10 backdrop-blur-xl border border-white/20 mb-4 sm:mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-white/90 uppercase">
              Software Engineer • AI Engineer • IEEE Leader
            </span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
          >
            ARAVIND R.
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 bg-gradient-to-r from-white via-white/80 to-transparent mt-3 mb-4 rounded-full"
          />

          {/* Tagline / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-white/85 font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            Bridging the gap between intelligent systems and human-centric design. Driven by motion, high-scale engineering, and impactful leadership.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-7"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              <span>Explore Projects</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="/documents/Resume(Aravind_R).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-xl border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>Resume</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Highlights & Metrics Cards */}
        <div className="mt-8 lg:mt-auto pt-4 flex flex-col lg:flex-row items-end justify-between gap-4 sm:gap-6">
          {/* Bottom Left: Global Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:max-w-sm bg-white/90 dark:bg-black/50 backdrop-blur-2xl p-5 sm:p-6 rounded-2xl border border-amber-500/40 dark:border-yellow-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(234,179,8,0.12)] hover:border-amber-500/60 dark:hover:border-yellow-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500/15 dark:bg-yellow-500/20 border border-amber-500/30 dark:border-yellow-500/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-amber-600 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-9H6a3 3 0 01-3-3V7a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2a3 3 0 01-3 3h-1m-10-4h12v5a6 6 0 01-12 0V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-600 dark:text-yellow-400 font-semibold">IEEE Xtreme 18.0</p>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                  Global Rank <span className="text-amber-600 dark:text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">#83</span>
                </h3>
              </div>
            </div>
            <p className="text-xs text-zinc-600 dark:text-white/75 font-normal dark:font-light leading-relaxed">
              Competed against 19,000+ global participants, solving complex algorithmic challenges under extreme time constraints.
            </p>
          </motion.div>

          {/* Center: Scroll down indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex flex-col items-center text-white/70 hover:text-white transition-colors text-[10px] tracking-widest uppercase gap-1.5 pb-1 cursor-pointer"
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-4 h-7 rounded-full border border-white/40 flex items-start justify-center p-1"
            >
              <div className="w-1 h-1.5 bg-white rounded-full" />
            </motion.div>
          </motion.a>

          {/* Bottom Right: Key Honors */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:max-w-sm bg-white/90 dark:bg-black/50 backdrop-blur-2xl p-5 sm:p-6 rounded-2xl border border-zinc-200/90 dark:border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col gap-2.5"
          >
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/10 dark:bg-amber-400/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">1st Prize Winner</p>
                  <p className="text-[10px] text-zinc-500 dark:text-white/50 uppercase tracking-wider">PowerConnect+</p>
                </div>
              </div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Winner
              </span>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-500/10 dark:bg-blue-400/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">1st Prize Winner</p>
                  <p className="text-[10px] text-zinc-500 dark:text-white/50 uppercase tracking-wider">Amrithakiranam</p>
                </div>
              </div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Winner
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
