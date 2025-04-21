"use client";

import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Working with LensCraft was an absolute dream. They captured our wedding day with such artistry and emotion that looking at our photos feels like reliving each precious moment.",
    author: "Jessica Williams",
    role: "Wedding Client",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    id: 2,
    quote: "Their attention to detail and creative vision brought our brand's story to life. The commercial photos exceeded our expectations and truly elevated our marketing materials.",
    author: "Michael Chen",
    role: "Marketing Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 3,
    quote: "The team's professionalism and artistic eye made our fashion shoot a huge success. They captured exactly what we wanted and more.",
    author: "Sarah Martinez",
    role: "Fashion Designer",
    image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-32 px-4 bg-indigo-900 text-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={cn(
          "text-center mb-16",
          isVisible && "opacity-100 transform-none"
        )}>
          <span className="uppercase text-sm font-bold tracking-widest text-indigo-300 mb-3 inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-indigo-300 mx-auto rounded" />
        </div>

        <div className="relative">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-indigo-600 opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "text-center transition-all duration-500 absolute inset-0",
                  index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none",
                  isVisible && "animate-fade-in"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-xl md:text-2xl italic text-indigo-100 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-indigo-600"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-indigo-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex ? "bg-indigo-300 w-8" : "bg-indigo-600/30"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}