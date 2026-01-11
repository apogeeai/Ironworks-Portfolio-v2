"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Easing function - easeInOutCubic
const easeInOutCubic = (t: number) => 
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const handleScrollToSection = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = elementPosition;
    
    const duration = 1200;
    let start: number | null = null;
    
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

// Simple stagger container
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center" id="home">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="w-full h-full bg-[#569196]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/video/IWI-BG-Video-v3.mp4?v=4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#569196]/40" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:max-w-3xl">
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium tracking-widest uppercase mb-4">
              Demand Generation Strategies
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            variants={itemVariants}
          >
            Creative <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ecff] via-[#7abebc] to-[#a0d9d6]">
              Web Solutions
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl"
            variants={itemVariants}
          >
            Cutting-edge strategies for businesses to boost website traffic and increase revenue.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            variants={itemVariants}
          >
            <motion.button
              className="inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8 bg-[#84CC16] text-gray-900 hover:bg-[#65a30d] shadow-lg shadow-[#84CC16]/30"
              onClick={(e) => handleScrollToSection(e, "#portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium p-4 text-white"
          onClick={(e) => handleScrollToSection(e, "#portfolio")}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </div>
  );
}
