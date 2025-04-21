import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between">
        {/* Social icons commented out for now
        <div className="flex justify-center space-x-6 md:order-2">
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link 
            href="mailto:contact@example.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        */}
        <div className="mt-0 w-full md:mt-0 md:order-1">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2025 Ironworks Interactive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}