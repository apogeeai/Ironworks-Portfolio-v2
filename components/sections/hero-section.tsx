"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center" id="home">
      <div className="absolute inset-0">
        <div className={cn(
          "w-full h-full",
          mounted && "opacity-100 transform-none"
        )}>
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 mt-16">
        <div className="lg:max-w-3xl">
          <div className={cn(
            "mb-6",
            mounted && "opacity-100 transform-none"
          )}>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium tracking-widest uppercase mb-4">
              Visual Storytelling
            </span>
          </div>

          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-6 text-white leading-tight",
            mounted && "opacity-100 transform-none"
          )}>
            Capturing <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
              Moments in Motion
            </span>
          </h1>

          <p className={cn(
            "text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl",
            mounted && "opacity-100 transform-none"
          )}>
            Photography & Cinematography that tells your story with emotion, 
            depth, and stunning visual clarity.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row gap-5",
            mounted && "opacity-100 transform-none"
          )}>
            <Button
              size="lg"
              className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 group"
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({
                behavior: "smooth"
              })}
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-indigo-900"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth"
              })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={() => document.querySelector("#services")?.scrollIntoView({
            behavior: "smooth"
          })}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}