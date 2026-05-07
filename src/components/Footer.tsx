"use client";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-black flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-6">
        <a href="https://www.facebook.com/share/1A4LSXwCfv" target="_blank" aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
          <span className="text-xl">f</span>
        </a>
        <a href="https://x.com/aravindr_" target="_blank" aria-label="Twitter" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
          <span className="text-xl">X</span>
        </a>
        <a href="https://www.instagram.com/aravind.x_17" target="_blank" aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
          <span className="text-xl">ig</span>
        </a>
        <a href="https://www.linkedin.com/in/aravindr017" target="_blank" aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
          <span className="text-xl">in</span>
        </a>
        <a href="https://github.com/Aravindr017" target="_blank" aria-label="GitHub" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
          <span className="text-xl">git</span>
        </a>
      </div>
      <p className="text-white/40 text-sm">
        Copyright © {new Date().getFullYear()} by Aravind R. All rights reserved. | Designed by Aravind
      </p>
    </footer>
  );
}
