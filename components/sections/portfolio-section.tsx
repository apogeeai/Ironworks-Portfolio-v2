"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const portfolioItems = [
  {
    id: 1,
    title: "Wedding Photography",
    subtitle: "Sarah & Mark's Lakeside Celebration",
    description: "Intimate moments captured against breathtaking natural backdrops.",
    image: "https://images.pexels.com/photos/1519741/pexels-photo-1519741.jpeg",
    category: "WEDDING PHOTOGRAPHY",
  },
  {
    id: 2,
    title: "Fashion",
    subtitle: "Urban Streetwear Collection",
    description: "Modern fashion photography with an urban edge.",
    image: "https://images.pexels.com/photos/1526047/pexels-photo-1526047.jpeg",
    category: "FASHION",
  },
  {
    id: 3,
    title: "Portrait",
    subtitle: "Artistic Studio Portraits",
    description: "Professional studio portraits with artistic lighting.",
    image: "https://images.pexels.com/photos/1519225/pexels-photo-1519225.jpeg",
    category: "PORTRAIT",
  },
  {
    id: 4,
    title: "Travel",
    subtitle: "Japanese Temples Series",
    description: "Cultural photography capturing the essence of Japan.",
    image: "https://images.pexels.com/photos/1518998/pexels-photo-1518998.jpeg",
    category: "TRAVEL",
  },
  {
    id: 5,
    title: "Commercial",
    subtitle: "Modern Tech Product Line",
    description: "Professional product photography for tech brands.",
    image: "https://images.pexels.com/photos/1509805/pexels-photo-1509805.jpeg",
    category: "COMMERCIAL",
  },
];

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

  return (
    <div 
      className="py-32 px-4 bg-gradient-to-b from-white to-gray-50" 
      id="portfolio" 
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "text-center mb-20",
          isVisible && "opacity-100 transform-none"
        )}>
          <span className="uppercase text-sm font-bold tracking-widest text-indigo-600 mb-3 inline-block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto rounded" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            A curated selection of our most impactful and visually stunning work 
            across various styles and contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className={cn(
            "md:col-span-8 overflow-hidden rounded-xl group aspect-[16/9] relative",
            isVisible && "opacity-100 transform-none"
          )}>
            <img
              src={portfolioItems[0].image}
              alt={portfolioItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-8">
              <span className="text-white/80 text-sm font-medium tracking-wider mb-2">
                {portfolioItems[0].category}
              </span>
              <h3 className="text-white text-2xl font-bold mb-3">
                {portfolioItems[0].subtitle}
              </h3>
              <p className="text-white/90 mb-4">{portfolioItems[0].description}</p>
              <Button className="bg-white text-black hover:bg-opacity-90">
                View Project
              </Button>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {portfolioItems.slice(1, 3).map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "overflow-hidden rounded-xl group aspect-[4/3] relative",
                  isVisible && "opacity-100 transform-none"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                  <span className="text-white/80 text-sm font-medium tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.subtitle}
                  </h3>
                  <Button size="sm" className="bg-white text-black hover:bg-opacity-90">
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {portfolioItems.slice(3).map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "md:col-span-4 overflow-hidden rounded-xl group aspect-square relative",
                isVisible && "opacity-100 transform-none"
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                <span className="text-white/80 text-sm font-medium tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">
                  {item.subtitle}
                </h3>
                <Button size="sm" className="bg-white text-black hover:bg-opacity-90">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "text-center mt-16",
          isVisible && "opacity-100 transform-none"
        )}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20 group"
          >
            View Complete Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}