"use client"; // CRITICAL: This tells Next.js this component runs in the browser, allowing us to use React hooks.

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (previous === undefined) return;

    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false); 
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 bg-black/70 backdrop-blur-md text-white border-b border-white/10"
    >
      {/* Logo Area */}
      <div className="font-bold text-xl tracking-tighter">
        <span className="text-blue-500">Sivangi</span>.dev
      </div>

      {/* Navigation Links - Hidden on very small screens, visible on medium (md) and up */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li><Link href="#about" className="hover:text-blue-400 transition-colors">About</Link></li>
        <li><Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link></li>
        <li><Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
      </ul>

      {/* Call to Action Button */}
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-transform hover:scale-105">
        Reach Out
      </button>
    </motion.nav>
  );
}