"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
}

const MOCK_PROJECTS: Project[] = [
  { id: "1", title: "Neural Synthesis", category: "AI / ML Architecture" },
  { id: "2", title: "Quantum Vision", category: "Computer Vision" },
  { id: "3", title: "Lexical Engine", category: "NLP Models" },
  { id: "4", title: "Autonomous Core", category: "Robotics" },
];

export default function VerticalMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicating the array to create a seamless infinite loop effect
  const displayProjects = [...MOCK_PROJECTS, ...MOCK_PROJECTS];

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <div 
        className="w-full max-w-lg h-[150%] relative overflow-hidden"
        style={{
          // Masking to fade out the top and bottom of the marquee
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex flex-col gap-8 w-full absolute top-0"
          style={{
            animation: "marquee-vertical 20s linear infinite",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {displayProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="group relative flex flex-col p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors duration-500 overflow-hidden cursor-pointer"
            >
              {/* Subtle border-beam animation using a sweeping gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[border-beam_2s_linear_infinite]" />
              
              <div className="relative z-10 flex flex-col items-start gap-4">
                <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-3xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes border-beam {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
