"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const CUSTOM_EASING = [0.16, 1, 0.3, 1];

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_gd3uxn8",
        "template_ewwhfu9",
        form,
        "Xm_s7hYkROA4zbwN3"
      );
      
      form.reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white relative border-t border-zinc-200 dark:border-white/10 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0.01, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: CUSTOM_EASING }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 mb-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-700 dark:text-white/90 uppercase">Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Let's Build Something Amazing</h2>
          <p className="text-zinc-600 dark:text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities, collaborations, or discussing intelligent systems. Reach out and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-8">
            {/* Direct Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: CUSTOM_EASING }}
              className="p-8 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Direct Contact</h3>
              <p className="text-sm text-zinc-500 dark:text-white/60 mb-6">Prefer direct communication? Here are the best ways to reach me quickly.</p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:ar986153@gmail.com" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-zinc-200/70 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-zinc-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="truncate text-sm">ar986153@gmail.com</span>
                </a>
                <a href="mailto:aravind17@ieee.org" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-zinc-200/70 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-zinc-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="truncate text-sm">aravind17@ieee.org</span>
                </a>
                <a href="tel:+916238177643" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-zinc-200/70 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-zinc-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-sm">+91 6238 177 643</span>
                </a>
                <a href="https://wa.me/+916238177643" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-zinc-200/70 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <span className="text-sm">WhatsApp Message</span>
                </a>
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: CUSTOM_EASING }}
              className="p-8 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Social Profiles</h3>
              <p className="text-sm text-zinc-500 dark:text-white/60 mb-6">Connect with me on professional networks.</p>
              
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/aravindr017" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[#0077b5]/15 text-[#0077b5] flex items-center justify-center shrink-0 font-bold text-sm">in</span>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Aravindr017" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-zinc-200/70 dark:bg-white/10 flex items-center justify-center shrink-0 font-mono text-xs">git</span>
                  <span className="text-sm">GitHub Repositories</span>
                </a>
                <a href="https://x.com/aravindr_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-zinc-200/70 dark:bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">𝕏</span>
                  <span className="text-sm">X (Twitter)</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: CUSTOM_EASING }}
            className="lg:col-span-2 p-8 md:p-12 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-none"
          >
            <h3 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white">Send a Message</h3>
            <p className="text-sm text-zinc-500 dark:text-white/60 mb-8">Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-white/80">Your Name</label>
                  <input type="text" id="name" name="from_name" placeholder="Enter your name" required className="w-full bg-white dark:bg-black/40 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-white/30 focus:outline-none focus:border-zinc-500 dark:focus:border-white/40 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-white/80">Email Address</label>
                  <input type="email" id="email" name="from_email" placeholder="your.email@example.com" required className="w-full bg-white dark:bg-black/40 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-white/30 focus:outline-none focus:border-zinc-500 dark:focus:border-white/40 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-white/80">What would you like to discuss?</label>
                <select id="subject" name="subject" required className="w-full bg-white dark:bg-black/40 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 dark:focus:border-white/40 transition-colors">
                  <option value="" disabled className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">Select topic</option>
                  <option value="Project Collaboration" className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">Project Collaboration</option>
                  <option value="Job Opportunity" className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">Job Opportunity</option>
                  <option value="Freelance Work" className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">Freelance Work</option>
                  <option value="Technical Consultation" className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">Technical Consultation</option>
                  <option value="Other Inquiry" className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">Other Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-white/80">Your Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Hi Aravind, I'd like to discuss..." required className="w-full bg-white dark:bg-black/40 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-white/30 focus:outline-none focus:border-zinc-500 dark:focus:border-white/40 transition-colors resize-none"></textarea>
              </div>

              <input type="hidden" name="email_subject" value="New Message from Portfolio" />

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold py-4 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>

            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">Thank you for your message! I'll get back to you within 24 hours.</span>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
