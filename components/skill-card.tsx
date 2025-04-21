"use client";

import { Card, CardContent } from "@/components/ui/card";
import { type Skill } from "@/lib/data";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Braces, 
  Component, 
  Server, 
  Database, 
  GitBranch,
  Box,
  CheckCircle,
  Package,
  PenTool, 
  Cloud,
  Flame,
  Triangle,
  Globe,
  Palette
} from "lucide-react";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const delay = index * 50;

  const getIcon = () => {
    switch (skill.icon) {
      case "code":
        return <Code className="h-5 w-5" />;
      case "braces":
        return <Braces className="h-5 w-5" />;
      case "component":
        return <Component className="h-5 w-5" />;
      case "server":
        return <Server className="h-5 w-5" />;
      case "database":
        return <Database className="h-5 w-5" />;
      case "git-branch":
        return <GitBranch className="h-5 w-5" />;
      case "box":
        return <Box className="h-5 w-5" />;
      case "check-circle":
        return <CheckCircle className="h-5 w-5" />;
      case "package":
        return <Package className="h-5 w-5" />;
      case "pen-tool":
        return <PenTool className="h-5 w-5" />;
      case "cloud":
        return <Cloud className="h-5 w-5" />;
      case "flame":
        return <Flame className="h-5 w-5" />;
      case "triangle":
        return <Triangle className="h-5 w-5" />;
      case "globe":
        return <Globe className="h-5 w-5" />;
      case "palette":
        return <Palette className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryColor = () => {
    switch (skill.category) {
      case "frontend":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "backend":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "tools":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      case "cloud":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div
      className="animate-fade-in translate-y-0 opacity-100"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "backwards" 
      }}
    >
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardContent className="p-4 flex items-center gap-3">
          <div className={cn(
            "w-8 h-8 rounded-md flex items-center justify-center",
            getCategoryColor()
          )}>
            {getIcon()}
          </div>
          <span className="font-medium">{skill.name}</span>
        </CardContent>
      </Card>
    </div>
  );
}