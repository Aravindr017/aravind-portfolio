"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 240;

export default function ImageSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Helper to draw image like background-size: cover
  function drawImageProp(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    x: number,
    y: number,
    w: number,
    h: number,
    offsetX = 0.5,
    offsetY = 0.5
  ) {
    if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
    }

    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    let iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,
      nh = ih * r,
      cx,
      cy,
      cw,
      ch,
      ar = 1;

    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    cw = iw / (nw / w);
    ch = ih / (nh / h);
    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
  }

  // Progressive Preload images to prevent network throttling
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // Function to load a specific range of images
    const loadBatch = (start: number, end: number, callback?: () => void) => {
      for (let i = start; i <= end; i++) {
        const img = new Image();
        const num = i.toString().padStart(3, "0");
        // Cloudinary optimized URL
        img.src = `https://res.cloudinary.com/dxlqjiqvn/image/upload/f_auto,q_auto,w_1920/v1778192624/ezgif-frame-${num}.png`;
        
        img.onload = () => {
          loadedCount++;
          if (i === 1 && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              canvasRef.current.width = window.innerWidth;
              canvasRef.current.height = window.innerHeight;
              drawImageProp(ctx, img, 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
          }
          // If this batch is done, trigger the callback
          if (loadedCount === end && callback) {
            callback();
          }
        };
        loadedImages[i - 1] = img; // Keep order
      }
    };

    // Load first 30 frames immediately for the hero entrance
    loadBatch(1, 30, () => {
      // Once first 30 are loaded, slowly load the rest in the background
      setTimeout(() => {
        loadBatch(31, FRAME_COUNT);
      }, 1000);
    });

    setImages(loadedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
        const img = images[frameIndex];
        const ctx = canvasRef.current.getContext("2d");
        
        if (ctx && img && img.complete && img.naturalWidth > 0) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          drawImageProp(ctx, img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Update canvas on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (images.length === 0) return;
      
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      
      const img = images[frameIndex];
      const canvas = canvasRef.current;
      
      if (canvas && img && img.complete && img.naturalWidth > 0) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImageProp(ctx, img, 0, 0, canvas.width, canvas.height);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, images]);

  // --- Text Animations based on scroll ---
  
  // Top-left text (Aravind R.)
  const nameOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const nameY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  
  // Bottom-left text 1 (Roles)
  const roleOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
  const roleY = useTransform(scrollYProgress, [0.15, 0.3, 0.5, 0.6], [50, 0, 0, 50]);

  // Bottom-right text 2 (IEEE Xtreme)
  const impactOpacity = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const impactY = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [50, 0, 0, 50]);

  // Top-right text 3 (Other Achievements)
  const achOpacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const achY = useTransform(scrollYProgress, [0.75, 0.9], [-50, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/90 pointer-events-none" />

        {/* Top Left: Name */}
        <motion.div
          style={{ opacity: nameOpacity, y: nameY }}
          className="absolute top-16 left-8 md:top-24 md:left-24 pointer-events-none"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            ARAVIND R.
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-white to-transparent mt-6 rounded-full" />
        </motion.div>

        {/* Bottom Left: Roles */}
        <motion.div
          style={{ opacity: roleOpacity, y: roleY }}
          className="absolute bottom-16 left-8 md:bottom-32 md:left-24 pointer-events-none max-w-2xl bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
            <span className="text-white">🚀</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Software Engineer, AI Engineer & IEEE Leader
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
            Bridging the gap between intelligent systems and human-centric design. Driven by motion, data, and impactful leadership.
          </p>
        </motion.div>

        {/* Bottom Right: Impact / Metrics */}
        <motion.div
          style={{ opacity: impactOpacity, y: impactY }}
          className="absolute bottom-16 right-8 md:bottom-32 md:right-24 pointer-events-none max-w-xl text-right bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(234,179,8,0.15)]"
        >
          <div className="w-full flex justify-end mb-6">
             <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/40">
               <span className="text-yellow-500 text-xl">🏆</span>
             </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-white to-white/70 mb-4 leading-tight">
            Global Rank <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">#83</span><br/>IEEE Xtreme 18.0
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
            Competed against 19,000+ global participants, solving complex algorithmic challenges. Synthesizing intelligence & leadership.
          </p>
        </motion.div>

        {/* Top Right: Other Achievements */}
        <motion.div
          style={{ opacity: achOpacity, y: achY }}
          className="absolute top-16 right-8 md:top-24 md:right-24 pointer-events-none max-w-sm text-right"
        >
           <div className="flex flex-col gap-4">
              <div className="bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center gap-4 justify-end">
                <div className="text-right">
                  <p className="text-white font-bold text-lg">1st Prize</p>
                  <p className="text-white/50 text-xs uppercase tracking-widest">PowerConnect+</p>
                </div>
                <span className="text-3xl">💡</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center gap-4 justify-end translate-x-4">
                <div className="text-right">
                  <p className="text-white font-bold text-lg">1st Prize</p>
                  <p className="text-white/50 text-xs uppercase tracking-widest">Amrithakiranam</p>
                </div>
                <span className="text-3xl">📜</span>
              </div>
           </div>
        </motion.div>
        
      </div>
    </section>
  );
}
