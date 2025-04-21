"use client";

import { useRef, useState, useEffect } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

type ProjectFilter = "all" | "featured" | string[];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<ProjectFilter>("all");

  // Extract unique tags from projects using an alternative approach
  const allTags = Array.from(
    projects.reduce((acc, project) => {
      project.tags.forEach(tag => acc.add(tag));
      return acc;
    }, new Set<string>())
  ).sort();

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

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (Array.isArray(filter)) {
      return filter.some(tag => project.tags.includes(tag));
    }
    return true;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Explore my recent work and side projects that demonstrate my skills and passion for creating 
          beautiful, functional, and user-centered applications.
        </p>

        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className="min-w-20"
            >
              All
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("featured")}
              className="min-w-20"
            >
              Featured
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={Array.isArray(filter) && filter.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter([tag])}
                className="min-w-20"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects match the selected filter.</p>
            <Button 
              variant="outline" 
              onClick={() => setFilter("all")}
              className="mt-4"
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}