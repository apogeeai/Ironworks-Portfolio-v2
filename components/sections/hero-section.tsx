"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Easing function - easeInOutCubic
const easeInOutCubic = (t: number) => 
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    
    if (element) {
      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      // Get the current scroll position
      const startPosition = window.pageYOffset;
      // Calculate distance to scroll
      const distance = elementPosition;
      
      const duration = 1200; // Duration in ms (1.2 seconds)
      let start: number | null = null;
      
      // Animation frame recursive function
      const animateScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
        
        if (progress < duration) {
          window.requestAnimationFrame(animateScroll);
        }
      };
      
      window.requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center" id="home">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
          >
            <source src="/video/IWI-BG-Video-v3.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#569196]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 mt-16">
        <div className="lg:max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium tracking-widest uppercase mb-4">
              Demand Generation Strategies
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Creative <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#569196] via-[#7abebc] to-[#a0d9d6] animate-pulse-slow">
              Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#569196] to-[#a0d9d6] animate-pulse-slow">Solutions</span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Cutting-edge strategies for businesses to boost website traffic and increase revenue.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <motion.button
              className="inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8 bg-[#965b56] text-white hover:bg-[#7a4945] shadow-lg shadow-[#965b56]/20 group"
              onClick={(e) => handleScrollToSection(e, "#portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Portfolio
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 1.5,
                  repeatDelay: 1
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 text-white"
          onClick={(e) => handleScrollToSection(e, "#portfolio")}
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 2,
            repeatDelay: 0.5
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </div>
  );
}