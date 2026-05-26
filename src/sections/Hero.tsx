"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Software Developer", "ECE Undergrad", "Next.js Enthusiast"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">
      {/* 1. Glowing Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none delay-500" />

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full pt-20">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 font-semibold tracking-wide uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I am <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Sivangi Kashyap
          </span>
        </motion.h1>

        {/* 3. The Typewriter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl text-neutral-400 font-medium h-10 mb-10"
        >
          I am a <span className="text-white">{currentRole}</span>
          <span className="animate-pulse text-blue-500 ml-1">|</span>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all">
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}