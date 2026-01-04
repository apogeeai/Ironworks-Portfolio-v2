"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/#home", label: "Home", hash: "#home" },
  { href: "/#portfolio", label: "Portfolio", hash: "#portfolio" },
  { href: "/resume", label: "Resume", isPage: true },
];

// Easing function - easeInOutCubic
const easeInOutCubic = (t: number) => 
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    // If not on home page, let the default link behavior work (navigate to /#section)
    if (!isHomePage) {
      return;
    }
    
    // On home page, do smooth scroll
    e.preventDefault();
    const element = document.querySelector(link.hash || link.href);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = elementPosition;
      
      const duration = 1000;
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

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md bg-white/70 transition-all duration-300",
      scrolled && "shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/IWI-v3.png" 
                alt="Ironworks Interactive Logo" 
                className="h-8 cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link key={link.href} href={link.href}>
                    <motion.span
                      className="text-gray-700 hover:text-[#569196] px-2 py-1 text-sm uppercase tracking-wider relative transition-colors duration-200 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ) : (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#569196] px-2 py-1 text-sm uppercase tracking-wider relative transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, link)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
                )
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#569196]"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                    <motion.span
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#569196] hover:bg-[#569196]/5 rounded-md cursor-pointer"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ) : (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#569196] hover:bg-[#569196]/5 rounded-md"
                  onClick={(e) => {
                    handleNavClick(e, link);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}