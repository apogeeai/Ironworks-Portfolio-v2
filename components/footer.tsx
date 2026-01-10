import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d6b6f] via-[#569196] to-[#7bc4c9]"></div>
      
      {/* Circular light gradient in bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 30%, transparent 70%)'
        }}
      ></div>
      
      {/* Grain texture overlay - harder/more visible */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      ></div>
      
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between relative z-10">
        {/* Social icons commented out for now
        <div className="flex justify-center space-x-6 md:order-2">
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link 
            href="mailto:contact@example.com" 
            className="text-white/80 hover:text-white transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        */}
        <div className="mt-0 w-full md:mt-0 md:order-1">
          <p className="text-center text-sm text-white">
            © 2025 IronWorks Interactive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}