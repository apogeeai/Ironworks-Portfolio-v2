"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-muted/30"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "transition-all duration-1000 ease-out", 
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-0 overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional portrait of John Doe"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                sizes="(max-width: 768px) 90vw, 400px"
                priority
              />
            </div>
          </div>
          <div 
            className={cn(
              "transition-all duration-1000 ease-out delay-300", 
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Full Stack Developer with over 5 years of experience in building 
              web applications using modern technologies. I specialize in 
              React, Next.js, Node.js, and cloud infrastructure.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in tech began at the University of Technology, where I earned my 
              Computer Science degree. Since then, I've collaborated with startups and 
              established companies to create digital products that solve real-world problems.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <span className="font-medium min-w-32">Name:</span>
                <span className="text-muted-foreground">John Doe</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-32">Location:</span>
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-32">Experience:</span>
                <span className="text-muted-foreground">5+ Years</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-32">Email:</span>
                <span className="text-muted-foreground">contact@johndoe.dev</span>
              </div>
            </div>
            <div className="mt-8">
              <Button className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}