export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
  featured: boolean;
};

export type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'cloud';
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring product listings, shopping cart, and payment processing with Stripe.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers with real-time data visualization using Recharts and WebSocket.",
    image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "D3.js", "Node.js", "Socket.io"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Task Management App",
    description: "A productivity app with task management features, calendars, and notifications for team collaboration.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-4",
    title: "AI Content Generator",
    description: "A web application that leverages AI to generate content for blogs, social media, and marketing materials.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-5",
    title: "Real Estate Listings",
    description: "A property listing platform with search functionality, map integration, and virtual tours for real estate companies.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "Express", "MongoDB", "Google Maps API"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Budget Tracker",
    description: "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Angular", "TypeScript", "Node.js", "PostgreSQL"],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML & CSS", icon: "code", category: "frontend" },
  { name: "JavaScript", icon: "braces", category: "frontend" },
  { name: "TypeScript", icon: "braces", category: "frontend" },
  { name: "React", icon: "component", category: "frontend" },
  { name: "Next.js", icon: "server", category: "frontend" },
  { name: "Vue.js", icon: "component", category: "frontend" },
  { name: "Tailwind CSS", icon: "palette", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "server", category: "backend" },
  { name: "Express", icon: "server", category: "backend" },
  { name: "Python", icon: "code", category: "backend" },
  { name: "Django", icon: "server", category: "backend" },
  { name: "PostgreSQL", icon: "database", category: "backend" },
  { name: "MongoDB", icon: "database", category: "backend" },
  { name: "GraphQL", icon: "git-branch", category: "backend" },
  
  // Tools
  { name: "Git", icon: "git-branch", category: "tools" },
  { name: "Docker", icon: "box", category: "tools" },
  { name: "Jest", icon: "check-circle", category: "tools" },
  { name: "Webpack", icon: "package", category: "tools" },
  { name: "Figma", icon: "pen-tool", category: "tools" },
  
  // Cloud
  { name: "AWS", icon: "cloud", category: "cloud" },
  { name: "Google Cloud", icon: "cloud", category: "cloud" },
  { name: "Firebase", icon: "flame", category: "cloud" },
  { name: "Vercel", icon: "triangle", category: "cloud" },
  { name: "Netlify", icon: "globe", category: "cloud" },
];