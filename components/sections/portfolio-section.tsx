"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Lightbox from "@/components/lightbox";

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div 
      className="py-32 px-4 bg-gradient-to-b from-white to-gray-50" 
      id="portfolio" 
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-sm font-bold tracking-widest text-indigo-600 mb-3 inline-block">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto rounded" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            A curated selection of my most impactful and visually stunning work 
            across various styles and contexts.
          </p>
        </motion.div>

        <div id="wrapper">
          <motion.div 
            className="gallery"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.a 
              href="https://apogeelabs-demo.adamsdevideas.com/" 
              target="_blank" 
              variants={itemVariants}
              className="gallery-item"
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/02/Moden-Marketing-Dashboard.png" alt="Modern Marketing Dashboard" />
            </motion.a>
            
            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/01/Apogee-Intelligence.png" alt="Apogee Intelligence" />
            </motion.a>

            <motion.a 
              href="https://ar-dashboard.adamsdevideas.com/" 
              target="_blank" 
              variants={itemVariants}
              className="gallery-item"
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/03/AR-Dashboard-v2.png" alt="AR Dashboard" />
            </motion.a>
                          
            <motion.a 
              href="https://synaptivesounds.com/" 
              target="_blank" 
              variants={itemVariants}
              className="gallery-item"
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/01/Synaptive-Sounds.png" alt="Synaptive Sounds" />
            </motion.a>

            <motion.a 
              href="https://demand-gen.adamsdevideas.com/" 
              target="_blank" 
              variants={itemVariants}
              className="gallery-item"
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/03/Predictive-Analytics-v5.png" alt="Predictive Analytics" />
            </motion.a>

            <motion.a 
              href="https://meditation-orb.adamsdevideas.com/" 
              target="_blank" 
              variants={itemVariants}
              className="gallery-item"
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/03/Relaxing-Blob-v2.jpg" alt="Relaxing Blob" />
            </motion.a>
          
            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2024/08/Shorelight-Screenshot.png" alt="Shorelight Screenshot" />
            </motion.a>

            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2024/08/UIC-Screenshot.png" alt="UIC Screenshot" />
            </motion.a>

            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >      
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2024/08/US-News-Screenshot.png" alt="US News Screenshot" />
            </motion.a>

            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >    
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2024/08/LSU-Screenshot.png" alt="LSU Screenshot" />
            </motion.a>

            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >       
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2024/08/AU-Screenshot.png" alt="AU Screenshot" />
            </motion.a>

            <motion.a 
              href="#" 
              className="gallery-item lightbox-trigger" 
              variants={itemVariants}
            >    
              <img className="content-image" src="https://ironworksinteractive.com/wp-content/uploads/2025/01/MetroCU-Screenshot-v2.png" alt="MetroCU Screenshot" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Lightbox Component */}
      <Lightbox />
    </div>
  );
}