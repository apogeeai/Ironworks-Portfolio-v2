"use client";

import { motion } from "framer-motion";
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
  ArrowRight,
  Award,
} from "lucide-react";

// Data
const skills = [
  { name: "Demand Generation", percentage: 95, gradient: "from-[#3d6b6f] to-[#569196]" },
  { name: "Marketing Automation", percentage: 95, gradient: "from-[#569196] to-[#6ba8ad]" },
  { name: "A/B Testing & Optimization", percentage: 92, gradient: "from-[#4a8084] to-[#5c9da2]" },
  { name: "Full-Stack Development", percentage: 88, gradient: "from-[#3d6b6f] to-[#4f8a8f]" },
  { name: "AI-Powered Analytics", percentage: 90, gradient: "from-[#569196] to-[#7bc4c9]" },
  { name: "Email & Lifecycle Marketing", percentage: 94, gradient: "from-[#4a8084] to-[#6bb5ba]" },
  { name: "ROI/KPI Analysis", percentage: 90, gradient: "from-[#3d6b6f] to-[#569196]" },
  { name: "MarTech Architecture", percentage: 92, gradient: "from-[#569196] to-[#88d4d9]" },
];

const experiences = [
  {
    title: "Digital Marketing Manager",
    company: "Candescent",
    period: "06/2025 - Present",
    location: "Atlanta, GA (Remote)",
    color: "from-[#3d6b6f] to-[#569196]",
    highlights: [
      "Directed post-carve-out launch of Adobe Marketo with ON24, Bizzabo, and Salesforce integrations",
      "Lead 6 specialists delivering integrated multi-channel campaigns (email, web, ABM, webinars, digital ads)",
      "Working on creating real-time Power BI dashboards tracking pipeline, webinar attendance, and ROI",
      "Implement segmentation, A/B testing, and predictive models to optimize cross-sell/upsell strategies",
    ],
  },
  {
    title: "Demand Generation Manager",
    company: "Metro Credit Union",
    period: "06/2020 - 12/2024",
    location: "Chelsea, MA",
    color: "from-[#4a8084] to-[#6ba8ad]",
    highlights: [
      "Achieved Marketo certification and led seamless transition from HubSpot to Marketo and 6sense",
      "Built full-funnel marketing stack contributing to $15.4M in 2023 net earnings in CD segment",
      "Drove 25% increase in enrollment velocity through A/B tested automated campaigns",
      "Pioneered custom-coded, AI-powered predictive analytics dashboard for real-time campaign insights",
    ],
  },
  {
    title: "Marketing Content Specialist",
    company: "Microsoft",
    period: "04/2020 - 09/2020",
    location: "Burlington, MA",
    color: "from-[#569196] to-[#7bc4c9]",
    highlights: [
      "Led marketing automation and technical operations for global marketing initiatives",
      "Managed advanced implementations, attribution models, and CRM integrations",
      "Optimized pipeline velocity by 35% through A/B testing and campaign strategy",
    ],
  },
  {
    title: "Digital Marketing Manager / Web Developer",
    company: "Shorelight Education",
    period: "02/2014 - 03/2019",
    location: "Boston, MA",
    color: "from-[#3d6b6f] to-[#5c9da2]",
    highlights: [
      "Led demand generation strategy across 19+ university partner programs",
      "Achieved 40% increase in qualified leads through multi-channel acquisition funnels",
      "Architected end-to-end marketing automation strategies in HubSpot and Marketo",
      "Improved conversion rates by 25% through dynamic content personalization and A/B testing",
    ],
  },
  {
    title: "Marketing Web Developer",
    company: "Bullhorn",
    period: "02/2013 - 03/2014",
    location: "Boston, MA",
    color: "from-[#4a8084] to-[#569196]",
    highlights: [
      "Primary Drupal developer directing multiple corporate CMS projects",
      "Managed full customer lifecycle marketing initiatives from email campaigns to SEO/AdWords",
      "Served as onsite graphic designer and provided UI/UX assistance to core product",
    ],
  },
  {
    title: "Marketing Web Developer",
    company: "Broadcom",
    period: "05/2010 - 01/2013",
    location: "Boston, MA",
    color: "from-[#569196] to-[#88d4d9]",
    highlights: [
      "Led comprehensive website architecture redesigns for SaaS company",
      "Reduced bounce rate by 45% through improved functionality and aesthetics",
      "Created targeted automated emails and landing pages in Marketo and Salesforce",
    ],
  },
];

const stats = [
  { icon: TrendingUp, value: "$60M+", label: "Revenue Generated", gradient: "from-[#3d6b6f] to-[#569196]" },
  { icon: Users, value: "19+", label: "University Partnered With", gradient: "from-[#4a8084] to-[#6ba8ad]" },
  { icon: Zap, value: "45%", label: "Bounce Rate Reduction", gradient: "from-[#569196] to-[#7bc4c9]" },
  { icon: Target, value: "20+", label: "Years Experience", gradient: "from-[#5c9da2] to-[#88d4d9]" },
];

const tools = [
  "Marketo", "HubSpot", "6sense", "Salesforce", "ON24", "Bizzabo", "Power BI", "Tableau",
  "Google Analytics 4", "GTM", "Optimizely", "Next.js", "TypeScript", "React", "Node.js",
  "Python", "AWS", "Azure", "Vercel", "Docker", "Kubernetes", "WordPress", "Webflow",
  "Drupal", "Figma", "Adobe Creative Cloud", "Claude", "Cursor", "ChatGPT", "TensorFlow", "LangChain",
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Components
function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.5 }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-semibold">{skill.name}</span>
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${skill.gradient} font-bold`}>
          {skill.percentage}%
        </span>
      </div>
      <div className="h-4 bg-[#569196]/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
        />
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const isEven = index % 2 === 0;
  const year = experience.period.split("/")[1]?.split(" ")[0] || experience.period.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative mb-8 last:mb-0 ${index > 0 ? "lg:-mt-24" : ""}`}
    >
      {/* Timeline year label */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 z-30 hidden lg:block">
        <div className="bg-gradient-to-r from-[#569196] to-[#7bc4c9] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {year}
        </div>
      </div>

      <div className={`lg:w-[45%] ${isEven ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
        <div className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${experience.color} rounded-[10px] blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />
          <div className="relative bg-white rounded-[10px] p-6 border border-[#569196]/10">
            <div className={`absolute -top-4 ${isEven ? "left-6" : "right-6"} px-4 py-2 bg-gradient-to-r ${experience.color} text-white text-sm font-bold rounded-full shadow-lg`}>
              {experience.company}
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <h3 className="text-xl font-black text-gray-900">{experience.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-0.5 flex-1 bg-gradient-to-r ${experience.color} opacity-30`} />
                <span className="text-[#569196] font-semibold text-sm">{experience.period}</span>
                <div className={`h-0.5 flex-1 bg-gradient-to-l ${experience.color} opacity-30`} />
              </div>
              <ul className="space-y-3">
                {experience.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${experience.color} flex-shrink-0`} />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 -right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#569196]/30 via-[#7bc4c9]/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#3d6b6f]/30 via-[#569196]/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#88d4d9]/25 via-[#6ba8ad]/15 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 w-full"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#3d6b6f] to-[#569196] text-white text-sm font-bold rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Marketing Operations Leader
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]"
          >
            Adam{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d6b6f] via-[#569196] to-[#7bc4c9]">
              Carfagna
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl"
          >
            Results-driven Marketing Operations leader with{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3d6b6f] to-[#569196]">20+ years</span>{" "}
            of experience building data-driven marketing strategies,{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#569196] to-[#7bc4c9]">AI-powered analytics</span>
            , and advanced MarTech ecosystems.
          </motion.p>

          {/* Contact chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 items-center">
            <a href="mailto:Adam.Carfagna@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#3d6b6f] to-[#569196] text-white rounded-full font-medium text-sm">
              <Mail className="w-4 h-4" />
              Adam.Carfagna@gmail.com
            </a>
            <a href="https://linkedin.com/in/adamcarfagna" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0077b5] to-[#0066a0] text-white rounded-full font-medium text-sm">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#569196]/30 text-gray-700 rounded-full font-medium text-sm">
              <MapPin className="w-4 h-4 text-[#569196]" />
              Saugus, MA
            </span>
            <a href="/Adam-Carfagna-Resume-FINAL-October.pdf" download className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#569196] to-[#7bc4c9] text-white rounded-full font-medium text-sm">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.section>

        {/* Stats Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-[10px] p-6 bg-gradient-to-br ${stat.gradient} text-white`}
              >
                <stat.icon className="w-10 h-10 mb-3 opacity-90" />
                <div className="text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 relative">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12 relative z-10"
          >
            <div className="p-3 bg-gradient-to-br from-[#3d6b6f] to-[#569196] rounded-[10px] text-white">
              <Briefcase className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Experience</h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-[#569196]/30 to-transparent ml-4 hidden sm:block" />
          </motion.div>

          <div className="relative z-10">
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#569196] via-[#7bc4c9] to-[#569196] hidden lg:block rounded-full" />
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-[#569196] hidden lg:block" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-3 h-3 rounded-full bg-[#569196] hidden lg:block" />

            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.company} experience={experience} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-[#569196] to-[#7bc4c9] rounded-[10px] text-white">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Skills & Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-1 bg-white/60 backdrop-blur-sm rounded-[10px] p-8 border border-[#569196]/20">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* Tools & Platforms */}
        <section className="mb-16">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-[#4a8084] to-[#6ba8ad] rounded-[10px] text-white">
              <Globe className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Tools & Platforms</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {tools.map((tool) => (
              <motion.span
                key={tool}
                variants={itemVariants}
                className="px-4 py-2 bg-gradient-to-r from-[#569196] to-[#6ba8ad] text-white rounded-full text-sm font-semibold"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-[#3d6b6f] to-[#5c9da2] rounded-[10px] text-white">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Education & Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[10px] p-6 bg-gradient-to-br from-[#3d6b6f] to-[#569196] text-white"
            >
              <GraduationCap className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-1">BS Electrical & Computer Systems Engineering</h3>
              <p className="font-medium opacity-90">University of Massachusetts Amherst</p>
              <p className="text-sm opacity-75 mt-2">College of Engineering • IEEE</p>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10" />
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-[10px] p-6 bg-gradient-to-br from-[#569196] to-[#7bc4c9] text-white"
            >
              <Award className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-1">Adobe Certified Professional</h3>
              <p className="font-medium opacity-90">Marketo Engage</p>
              <p className="text-sm opacity-75 mt-2">Marketing Automation Certification</p>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10" />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <div className="relative overflow-hidden rounded-[10px] p-12 bg-gradient-to-r from-[#2d5558] via-[#3d6b6f] to-[#2d5558]">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Let's Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7bc4c9] to-[#a8e6eb]">Amazing</span>
              </h2>
              <p className="text-[#a8e6eb] text-lg mb-8 max-w-2xl mx-auto">
                Ready to drive growth for your organization? Let's connect.
              </p>
              <motion.a
                href="https://linkedin.com/in/adamcarfagna"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#569196] rounded-[10px] font-bold text-lg"
              >
                <Linkedin className="w-6 h-6" />
                Connect on LinkedIn
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
