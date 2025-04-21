"use client";

import { useRef, useEffect, useState } from "react";
import { Camera, Play, Image, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServicesSection() {
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

  return (
    <div className="py-32 px-4" id="services" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="uppercase text-sm font-bold tracking-widest text-indigo-600 mb-3 inline-block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto rounded" />
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className={cn(
            "md:col-span-6 lg:col-span-5 bg-white p-10 rounded-xl shadow-xl shadow-indigo-100 relative overflow-hidden group",
            isVisible && "opacity-100 transform-none"
          )}>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />
            <Camera className="w-12 h-12 text-indigo-600 mb-8" />
            <h3 className="text-2xl font-semibold mb-4">Photography</h3>
            <p className="text-gray-600 mb-8">
              Expert photography services that capture authentic moments with precision 
              and artistry. From portraits and events to commercial projects.
            </p>
            <Button variant="ghost" className="text-indigo-600 group-hover:text-indigo-800">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-indigo-50 rounded-full opacity-50 group-hover:scale-150 transition-all duration-500" />
          </div>

          <div className={cn(
            "md:col-span-6 lg:col-span-7 bg-white p-10 rounded-xl shadow-xl shadow-indigo-100 relative overflow-hidden group",
            isVisible && "opacity-100 transform-none"
          )}>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-500" />
            <Play className="w-12 h-12 text-purple-600 mb-8" />
            <h3 className="text-2xl font-semibold mb-4">Videography</h3>
            <p className="text-gray-600 mb-8">
              Cinematic video production that brings stories to life with emotion and 
              technical excellence. Perfect for weddings, corporate videos, documentaries, 
              and brand stories.
            </p>
            <Button variant="ghost" className="text-purple-600 group-hover:text-purple-800">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-50 rounded-full opacity-50 group-hover:scale-150 transition-all duration-500" />
          </div>

          <div className={cn(
            "md:col-span-12 bg-white p-10 rounded-xl shadow-xl shadow-indigo-100 relative overflow-hidden group",
            isVisible && "opacity-100 transform-none"
          )}>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-red-500" />
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Image className="w-12 h-12 text-pink-600 mb-8" />
                <h3 className="text-2xl font-semibold mb-4">Print Shop</h3>
                <p className="text-gray-600 mb-8">
                  Gallery-quality print services that transform images into lasting 
                  artistic works. Fine art prints, canvas wraps, and digital downloads 
                  available for both personal and commercial use.
                </p>
                <Button variant="ghost" className="text-pink-600 group-hover:text-pink-800">
                  Visit print shop <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/1459908/pexels-photo-1459908.jpeg"
                  alt="Print shop showcase"
                  className="rounded-lg shadow-md w-full h-60 object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-50 rounded-full opacity-50 group-hover:scale-150 transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}