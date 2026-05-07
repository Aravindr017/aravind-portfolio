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
    const subject = (form.querySelector("#subject") as HTMLSelectElement).value;

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
    <section id="contact" className="py-32 px-6 bg-zinc-950 text-white relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: CUSTOM_EASING }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Build Something Amazing</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities, collaborations, or just a friendly chat about tech and innovation. Reach out and let's create something extraordinary together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-8">
            {/* Direct Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: CUSTOM_EASING }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
              <p className="text-sm text-white/60 mb-6">Prefer direct communication? Here are the best ways to reach me quickly.</p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:ar986153@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">✉️</span>
                  <span className="truncate">ar986153@gmail.com</span>
                </a>
                <a href="mailto:aravind17@ieee.org" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">✉️</span>
                  <span className="truncate">aravind17@ieee.org</span>
                </a>
                <a href="tel:+916238177643" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">📞</span>
                  <span>+91 6238 177 643</span>
                </a>
                <a href="https://wa.me/+916238177643" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">💬</span>
                  <span>WhatsApp/Call</span>
                </a>
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: CUSTOM_EASING }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold mb-2">Social Profiles</h3>
              <p className="text-sm text-white/60 mb-6">Connect with me on professional networks.</p>
              
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/aravindr017" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[#0077b5]/20 text-[#0077b5] flex items-center justify-center shrink-0">in</span>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Aravindr017" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">git</span>
                  <span>GitHub Projects</span>
                </a>
                <a href="https://x.com/aravindr_" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">X</span>
                  <span>Tech Thoughts</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: CUSTOM_EASING }}
            className="lg:col-span-2 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-sm text-white/60 mb-8">Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                  <input type="text" id="name" name="from_name" placeholder="Enter your name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                  <input type="email" id="email" name="from_email" placeholder="your.email@example.com" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">What would you like to discuss?</label>
                <select id="subject" name="subject" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none">
                  <option value="" disabled className="text-black">Select topic</option>
                  <option value="Project Collaboration" className="text-black">Project Collaboration</option>
                  <option value="Job Opportunity" className="text-black">Job Opportunity</option>
                  <option value="Freelance Work" className="text-black">Freelance Work</option>
                  <option value="Technical Consultation" className="text-black">Technical Consultation</option>
                  <option value="Other Inquiry" className="text-black">Other Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Your Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Hi Aravind, I'd like to discuss..." required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
              </div>

              <input type="hidden" name="email_subject" value="New Message from Portfolio" />

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full md:w-auto self-start mt-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
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
                  className="mt-6 p-4 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-3"
                >
                  <span className="text-xl">✓</span>
                  Thank you for your message! I'll get back to you within 24 hours.
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
