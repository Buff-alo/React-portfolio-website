import { Frown } from "lucide-react";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  Mailbox,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project1.png";

export const HERO_TAGS = [
  "Docker",
  "Terraform",
  "Ansible",
  "Django",
];

export const SKILLS_CAT = [
  {
    title: "DevOps",
    icon: Cloud,
    description: "Implementing scalable and secure infrastructure solutions.",
    skills: [
      { name: "Docker", level: 90, color: "bg-blue-500" },
      { name: "Terraform", level: 85, color: "bg-green-500" },
      { name: "Ansible", level: 80, color: "bg-red-500" },
      { name: "Traefik", level: 75, color: "bg-gray-500" },
      { name: "Nomad", level: 70, color: "bg-orange-500" },
      { name: "Consul", level: 70, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing APIs and server-side logic for web applications.",
    skills: [
      { name: "Django", level: 60, color: "bg-blue-500" },
      { name: "Laravel", level: 20, color: "bg-green-400" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and managing reliable data storage systems.",
    skills: [
      { name: "MySql", level: 70, color: "bg-blue-500" },
      // { name: "MongoDB", level: 75, color: "bg-green-500" },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Building basic and functional user interfaces.",
    skills: [{ name: "React", level: 60, color: "bg-purple-400" }],
  },
];


export const TECH_STACK = [
  { name: "Linux", icon: "logos:linux-tux" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitLab CI", icon: "logos:gitlab" },
  { name: "Nginx", icon: "logos:nginx" },
  { name: "Systemd", icon: "material-icon-theme:systemd-light" },
  { name: "Bash", icon: "simple-icons:gnubash" },
  { name: "Visual Studio Code", icon: "logos:visual-studio-code" },
];


export const STATS = [
  { title: "Projects Completed", value: 25, icon: Rocket },
  { title: "Years of Experience", value: "3+", icon: Briefcase },
  { title: "Happy Clients", value: 10, icon: Heart },
  { title: "Coffee Cups", value: 300, icon: Coffee },
];

export const PROJECTS = [
  {
    id: 1,
    title: "DevOps Pipeline & Infrastructure Setup",
    description:
      "A full CI/CD pipeline using GitLab CI, Docker, Terraform, and Ansible to deploy a Django web app.",
    image: PROJECT_IMG_1,
    tags: ["Terraform", "Ansible", "Docker", "GitLab CI", "Traefik"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    category: "DevOps",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2022",
    title: "Started Computer Science Degree",
    company: "Takoradi Technical University",
    description:
      "Enrolled as a Computer Science student specializing in Networking, DevOps, and Backend Development.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Built First Full Stack Project",
    description:
      "Created a full stack app with Django and React. Started diving into API development and deployment.",
    icon: Code2,
    color: "bg-blue-400",
  },
  {
    year: "2023",
    title: "Shifted to DevOps Focus",
    description:
      "Started building infrastructure as code using Terraform, Docker, and Ansible. Explored reverse proxies like Traefik.",
    icon: Cloud,
    color: "bg-gray-500",
  },
  {
    year: "2025",
    title: "Launched Cloud Portfolio Site",
    description:
      "Deployed a portfolio app to the cloud using Docker Compose, GitLab CI, and Traefik with dynamic subdomains.",
    icon: Rocket,
    color: "bg-red-500",
  },
  {
    year: "2025",
    title: "Automated Trading Bot (Ongoing)",
    description:
      "Working on a trade bot using Telethon, Selenium, and multi-threading, combining Python, bots, and automation.",
    icon: Zap,
    color: "bg-yellow-500",
  },
];

export const PASSIONS = [
  {
    title: "Infrastructure Automation",
    description:
      "Love automating deployments and environments using modern DevOps tools.",
    icon: Cloud,
  },
  {
    title: "System Design & Architecture",
    description:
      "Interested in how scalable systems are planned and implemented.",
    icon: Server,
  },
  {
    title: "Problem Solving",
    description:
      "Enjoy breaking down complex infrastructure or backend issues.",
    icon: Coffee,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Buff-alo",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/kwadwo-boakye-69196b324/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSl4kyZI3SM%2B93DkCkY8lhQ%3D%3D",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/boakkwadwo",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:contact@kwadwolabs.cloud",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 20 116 2943",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@kwadwolabs.cloud",
  },
];
