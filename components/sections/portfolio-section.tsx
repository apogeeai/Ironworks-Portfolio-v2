"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Lightbox from "@/components/lightbox";

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll animation for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div
      className="py-32 px-4 bg-[#fafafa] relative overflow-hidden"
      id="portfolio"
      ref={sectionRef}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY, willChange: "transform" }}
          className="absolute -top-1/3 -right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#569196]/30 via-[#7bc4c9]/20 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: backgroundY, willChange: "transform" }}
          className="absolute top-1/2 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#3d6b6f]/30 via-[#569196]/20 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: backgroundY, willChange: "transform" }}
          className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#88d4d9]/25 via-[#6ba8ad]/15 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-sm font-bold tracking-widest text-[#569196] mb-3 inline-block">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-[#569196] mx-auto rounded" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            A curated selection of my most impactful and visually stunning work
            across various styles and contexts.
          </p>
        </motion.div>

        <div id="wrapper" className="-mt-[10px]">
          <motion.div
            className="gallery"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.a
              href="https://saleslab.apogeeai.co/"
              target="_blank"
              variants={itemVariants}
              className="gallery-item"
            >
              <img
                className="content-image"
                src="/thumbnails/Moden-Marketing-Dashboard.png"
                data-full="/Moden-Marketing-Dashboard.png"
                alt="Modern Marketing Dashboard"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="https://apogeeintelligence.ai/"
              target="_blank"
              className="gallery-item"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/Apogee-Intelligence.png"
                data-full="/Apogee-Intelligence.png"
                alt="Apogee Intelligence"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="https://ar-dashboard.adamsdevideas.com/"
              target="_blank"
              variants={itemVariants}
              className="gallery-item"
            >
              <img
                className="content-image"
                src="/thumbnails/AR-Dashboard-v3.png"
                data-full="/AR-Dashboard-v2.png"
                alt="AR Dashboard"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="http://rig.apogeeai.co/"
              target="_blank"
              variants={itemVariants}
              className="gallery-item"
            >
              <img
                className="content-image"
                src="/thumbnails/AI-CEO-v2.jpg"
                data-full="/AI-CEO.jpg"
                alt="AI CEO"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="https://demand-gen.adamsdevideas.com/"
              target="_blank"
              variants={itemVariants}
              className="gallery-item"
            >
              <img
                className="content-image"
                src="/thumbnails/Predictive-Analytics-v5.png"
                data-full="/Predictive-Analytics-v5.png"
                alt="Predictive Analytics"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="https://meditation-orb.adamsdevideas.com/"
              target="_blank"
              variants={itemVariants}
              className="gallery-item"
            >
              <img
                className="content-image"
                src="/thumbnails/Relaxing-Blob-v2.png"
                data-full="/Relaxing-Blob-v2.jpg"
                alt="Relaxing Blob"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="javascript:void(0)"
              className="gallery-item lightbox-trigger"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/Shorelight-Screenshot.png"
                data-full="/Shorelight-Screenshot.png"
                alt="Shorelight Screenshot"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="javascript:void(0)"
              className="gallery-item lightbox-trigger"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/UIC-Screenshot.png"
                data-full="/UIC-Screenshot.png"
                alt="UIC Screenshot"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="javascript:void(0)"
              className="gallery-item lightbox-trigger"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/US-News-Screenshot.png"
                data-full="/US-News-Screenshot.png"
                alt="US News Screenshot"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="javascript:void(0)"
              className="gallery-item lightbox-trigger"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/LSU-Screenshot.png"
                data-full="/LSU-Screenshot.png"
                alt="LSU Screenshot"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="javascript:void(0)"
              className="gallery-item lightbox-trigger"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/AU-Screenshot.png"
                data-full="/AU-Screenshot.png"
                alt="AU Screenshot"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>

            <motion.a
              href="javascript:void(0)"
              className="gallery-item lightbox-trigger"
              variants={itemVariants}
            >
              <img
                className="content-image"
                src="/thumbnails/MetroCU-Screenshot-v2.png"
                data-full="/MetroCU-Screenshot-v2.png"
                alt="MetroCU Screenshot"
                style={{ transition: 'transform 0.5s ease' }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox />
    </div>
  );
}
