"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Maximize } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { type Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const delay = index * 100;

  return (
    <>
      <div 
        className="group h-full"
        style={{ animationDelay: `${delay}ms` }}
      >
        <Card 
          className="h-full overflow-hidden transition-all duration-300 hover:shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ 
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
              className={cn(
                "group-hover:scale-105",
                isHovered ? "scale-105" : "scale-100"
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button 
                variant="secondary" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => setIsOpen(true)}
              >
                <Maximize className="h-4 w-4 mr-2" />
                View Project
              </Button>
            </div>
            {project.featured && (
              <Badge 
                className="absolute top-2 right-2 bg-primary text-primary-foreground"
              >
                Featured
              </Badge>
            )}
          </div>
          <CardContent className="p-5">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description.substring(0, 100)}...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline">+{project.tags.length - 3}</Badge>
              )}
            </div>
            <div className="flex justify-between mt-auto pt-2">
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </Link>
              <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
              {project.featured && (
                <Badge className="mt-2 bg-primary text-primary-foreground">
                  Featured Project
                </Badge>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full aspect-video overflow-hidden rounded-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 60vw"
            />
          </div>
          <div>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 my-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </Button>
              </Link>
              <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}