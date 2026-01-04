"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Linkedin,
  Download,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// Skill data for charts - all shades of brand teal
const skills = [
  { name: "Demand Generation", percentage: 95, color: "#3d7a7f" },
  { name: "Marketing Automation (Marketo/HubSpot)", percentage: 95, color: "#4a8a8f" },
  { name: "A/B Testing & Optimization", percentage: 92, color: "#569196" },
  { name: "Full-Stack Development", percentage: 88, color: "#5a9da2" },
  { name: "AI-Powered Analytics", percentage: 90, color: "#62a0a5" },
  { name: "Email & Lifecycle Marketing", percentage: 94, color: "#6fb0b5" },
  { name: "ROI/KPI Analysis", percentage: 90, color: "#7bc0c5" },
  { name: "MarTech Architecture", percentage: 92, color: "#88cfd4" },
];

const experiences = [
  {
    title: "Digital Marketing Manager",
    company: "Candescent",
    period: "06/2025 - Present",
    location: "Atlanta, GA",
    highlights: [
      "Direct post-carve-out launch of Adobe Marketo with ON24, Bizzabo, and Salesforce integrations",
      "Lead 6 specialists delivering integrated multi-channel campaigns (email, web, ABM, webinars, digital ads)",
      "Build real-time Power BI dashboards tracking pipeline, webinar attendance, and ROI",
      "Implement segmentation, A/B testing, and predictive models to optimize cross-sell/upsell strategies"
    ]
  },
  {
    title: "Demand Generation Manager",
    company: "Metro Credit Union",
    period: "06/2020 - 12/2024",
    location: "Chelsea, MA",
    highlights: [
      "Achieved Marketo certification and led seamless transition from HubSpot to Marketo and 6sense",
      "Built full-funnel marketing stack contributing to $15.4M in 2023 net earnings in CD segment",
      "Drove 25% increase in enrollment velocity through A/B tested automated campaigns",
      "Pioneered custom-coded, AI-powered predictive analytics dashboard for real-time campaign insights"
    ]
  },
  {
    title: "Marketing Content Specialist (Contract)",
    company: "Microsoft",
    period: "04/2020 - 09/2020",
    location: "Burlington, MA",
    highlights: [
      "Led marketing automation and technical operations for global marketing initiatives",
      "Managed advanced implementations, attribution models, and CRM integrations",
      "Optimized pipeline velocity by 35% through A/B testing and campaign strategy"
    ]
  },
  {
    title: "Digital Marketing Manager / Web Developer",
    company: "Shorelight Education",
    period: "02/2014 - 03/2019",
    location: "Boston, MA",
    highlights: [
      "Led demand generation strategy across 19+ university partner programs",
      "Achieved 40% increase in qualified leads through multi-channel acquisition funnels",
      "Architected end-to-end marketing automation strategies in HubSpot and Marketo",
      "Improved conversion rates by 25% through dynamic content personalization and A/B testing"
    ]
  },
  {
    title: "Marketing Web Developer",
    company: "Bullhorn",
    period: "02/2013 - 03/2014",
    location: "Boston, MA",
    highlights: [
      "Primary Drupal developer directing multiple corporate CMS projects",
      "Managed full customer lifecycle marketing initiatives from email campaigns to SEO/AdWords",
      "Served as onsite graphic designer and provided UI/UX assistance to core product"
    ]
  },
  {
    title: "Marketing Web Developer",
    company: "Broadcom",
    period: "05/2010 - 01/2013",
    location: "Boston, MA",
    highlights: [
      "Led comprehensive website architecture redesigns for SaaS company",
      "Reduced bounce rate by 45% through improved functionality and aesthetics",
      "Created targeted automated emails and landing pages in Marketo and Salesforce"
    ]
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm font-semibold">{skill.percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#569196] to-transparent" />
      
      {/* Timeline dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        viewport={{ once: true }}
        className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#569196] ring-4 ring-[#569196]/20"
      />
      
      <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-[#569196]/20 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
            <p className="text-[#569196] font-semibold">{experience.company}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-[#569196]/10 text-[#569196] text-sm font-medium rounded-full">
              {experience.period}
            </span>
            <p className="text-gray-500 text-sm mt-1 flex items-center justify-end gap-1">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </p>
          </div>
        </div>
        
        <ul className="space-y-2 mt-4">
          {experience.highlights.map((highlight, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-2 text-gray-600"
            >
              <Sparkles className="w-4 h-4 text-[#569196] mt-1 flex-shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#569196]/10 to-indigo-200/20 blur-3xl"
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-200/20 to-[#569196]/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section with Headshot */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Headshot area - LEFT */}
            <motion.div 
              variants={scaleIn}
              className="lg:col-span-1 flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Animated aurora gradient frame */}
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-3xl p-1 shadow-2xl shadow-[#569196]/30 overflow-hidden relative">
                  {/* Moving gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#569196] via-[#6ba8ad] to-[#569196] bg-[length:200%_100%] animate-aurora" />
                  <div className="relative w-full h-full rounded-3xl bg-gray-200 overflow-hidden flex items-center justify-center">
                    {/* Placeholder for headshot - replace src with your actual headshot */}
                    <img 
                      src="/headshot.jpg" 
                      alt="Adam Carfagna" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center text-gray-400">
                      <Users className="w-16 h-16 mb-2" />
                      <span className="text-sm">Add headshot.jpg</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#569196] to-[#7bc4c9] rounded-2xl -z-10 blur-sm opacity-60" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#569196] to-[#4a7f84] rounded-xl -z-10 blur-sm opacity-60" />
              </div>
            </motion.div>

            {/* Name and intro - RIGHT, wraps around headshot */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 bg-[#569196]/10 text-[#569196] text-sm font-semibold rounded-full mb-4 uppercase tracking-wider"
              >
                Marketing Operations Leader
              </motion.span>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Adam <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ecff] via-[#7abebc] to-[#a0d9d6] animate-pulse-slow">Carfagna</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl">
                Results-driven Marketing Operations leader with <span className="text-[#569196] font-semibold">20+ years</span> of experience building 
                data-driven marketing strategies, <span className="text-[#569196] font-semibold">AI-powered analytics</span>, and advanced MarTech ecosystems. 
                Proven success in increasing engagement, improving conversion rates, and accelerating pipeline velocity.
              </p>

              {/* Contact info row */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4 mb-6"
              >
                <motion.a 
                  variants={fadeInUp}
                  href="mailto:Adam.Carfagna@gmail.com" 
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-[#569196]"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Adam.Carfagna@gmail.com</span>
                </motion.a>
                <motion.a 
                  variants={fadeInUp}
                  href="https://linkedin.com/in/adamcarfagna" 
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-[#569196]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </motion.a>
                <motion.span 
                  variants={fadeInUp}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-gray-700"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Saugus, MA</span>
                </motion.span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  href="/Adam-Carfagna-Resume-FINAL-October.pdf" 
                  download
                  className="inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8 bg-[#569196] text-white hover:bg-[#4a7f84] shadow-lg shadow-[#569196]/20 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="/#portfolio"
                  className="inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8 border-2 border-[#569196] text-[#569196] hover:bg-[#569196]/5 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Portfolio
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, value: "$15.4M", label: "Revenue Generated" },
              { icon: Users, value: "19+", label: "University Partners" },
              { icon: Zap, value: "45%", label: "Bounce Rate Reduction" },
              { icon: Target, value: "20+", label: "Years Experience" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 text-center hover:shadow-xl hover:border-[#569196]/20 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-[#569196] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Briefcase className="w-8 h-8 text-[#569196]" />
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </motion.div>

          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.company} experience={experience} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <BarChart3 className="w-8 h-8 text-[#569196]" />
            <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Tools & Platforms */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Globe className="w-8 h-8 text-[#569196]" />
            <h2 className="text-3xl font-bold text-gray-900">Tools & Platforms</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {[
              "Marketo", "HubSpot", "6sense", "Salesforce", "ON24", "Bizzabo",
              "Power BI", "Tableau", "Google Analytics 4", "GTM", "Optimizely",
              "Next.js", "TypeScript", "React", "Node.js", "Python",
              "AWS", "Azure", "Vercel", "Docker", "Kubernetes",
              "WordPress", "Webflow", "Drupal", "Figma", "Adobe Creative Cloud",
              "Claude", "Cursor", "ChatGPT", "TensorFlow", "LangChain"
            ].map((tool, i) => (
              <motion.span
                key={tool}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 text-gray-700 text-sm font-medium hover:border-[#569196]/30 hover:shadow-lg transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <GraduationCap className="w-8 h-8 text-[#569196]" />
            <h2 className="text-3xl font-bold text-gray-900">Education & Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">BS Electrical & Computer Systems Engineering</h3>
                  <p className="text-[#569196] font-semibold">University of Massachusetts Amherst</p>
                  <p className="text-gray-500 mt-1">College of Engineering • Talent Advancement Program, IEEE</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Adobe Certified Professional</h3>
                  <p className="text-[#569196] font-semibold">Marketo Engage</p>
                  <p className="text-gray-500 mt-1">Marketing Automation Certification</p>
                </div>
                <span className="inline-block px-3 py-1 bg-[#569196]/10 text-[#569196] text-sm font-medium rounded-full">
                  Certified
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section - Glassmorphic Bento with Moving Gradient */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <div className="relative overflow-hidden rounded-3xl p-12 shadow-2xl shadow-[#569196]/30 border border-[#569196]/20">
            {/* Moving aurora gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#569196] via-[#7bc4c9] to-[#569196] bg-[length:200%_100%] animate-aurora opacity-90" />
            {/* Glassmorphic overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Let's Build Something Amazing
              </h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Ready to drive growth for your organization? Let's connect and discuss how I can help 
                elevate your digital presence and marketing strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="mailto:Adam.Carfagna@gmail.com"
                  className="inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8 bg-white text-[#569196] hover:bg-gray-50 shadow-lg shadow-gray-900/10 border border-[#569196]/20 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/adamcarfagna" 
                  target="_blank"
                  className="inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8 bg-[#0077b5] text-white hover:bg-[#005885] shadow-lg shadow-[#0077b5]/20 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

