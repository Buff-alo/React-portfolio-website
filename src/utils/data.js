import { Code } from "lucide-react";
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
  MapPin,
  Phone,
} from "lucide-react";



import { FiGithub, FiGitlab, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project1.png";
import PROJECT_IMG_2 from "../assets/images/project2.png";

export const HERO_TAGS = ["Docker", "Terraform", "Ansible", "Django"];

export const SKILLS_CAT = [
  {
    title: "DevOps & Infrastructure",
    icon: Cloud,
    description: "Implementing scalable and secure infrastructure solutions.",
    skills: [
      { name: "Terraform", level: 90, color: "bg-purple-500" },
      { name: "Ansible", level: 85, color: "bg-gray-500" },
      { name: "Nomad", level: 75, color: "bg-green-500" },
      { name: "Consul", level: 80, color: "bg-pink-500" },
      { name: "Kubernetes", level: 85, color: "bg-blue-600" },
      { name: "Docker", level: 90, color: "bg-blue-500" },
      { name: "GitLab CI/CD", level: 85, color: "bg-orange-500" },
      { name: "Github actions", level: 60, color: "bg-gray-400"}
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing APIs and server-side logic for web applications.",
    skills: [
      { name: "Django", level: 60, color: "bg-green-500" },
      { name: "Django REST Framework", level: 50, color: "bg-teal-500" },
      { name: "Django Ninja", level: 40, color: "bg-gray-800" },
      { name: "Laravel", level: 20, color: "bg-red-400" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Languages I use to build, automate, and scale systems.",
    icon: Code,
    skills: [
      { name: "Python", level: 90, color: "bg-blue-500" },
      { name: "JavaScript", level: 80, color: "bg-yellow-400" },
      { name: "TypeScript", level: 70, color: "bg-indigo-600" },
      { name: "Bash", level: 75, color: "bg-gray-600" },
      { name: "PHP", level: 40, color: "bg-purple-600" },
      { name: "Rust", level: 30, color: "bg-orange-600"}
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and managing reliable data storage systems.",
    skills: [
      { name: "MySql", level: 70, color: "bg-blue-500" },
      { name: "PostgreSQL", level: 65, color: "bg-indigo-500" },
      { name: "MariaDB", level: 50, color: "bg-blue-500"},
      { name: "SQLite", level: 80, color: "bg-gray-500" },
      // { name: "MongoDB", level: 75, color: "bg-green-500" },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Building basic and functional user interfaces.",
    skills: [
      { name: "React", level: 70, color: "bg-sky-500" },
      { name: "TailwindCSS", level: 75, color: "bg-teal-500" },
    ],
  },
];

export const TECH_STACK = [
  { name: "Linux", icon: "logos:linux-tux" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitLab CI", icon: "logos:gitlab-icon" },
  { name: "Nginx", icon: "logos:nginx" },
  { name: "Systemd", icon: "material-icon-theme:systemd-light" },
  { name: "Bash", icon: "simple-icons:gnubash" },
  { name: "Visual Studio Code", icon: "logos:visual-studio-code" },
  { name: "Traefik", icon: "simple-icons:traefikmesh" },
  { name: "Cloudflare", icon: "logos:cloudflare-icon" },
  { name: "AWS EC2", icon: "logos:aws" },
];

export const STATS = [
  { title: "VMs Automated", value: "20+" },
  { title: "Deployments", value: "30+" },
  { title: "CI/CD Pipelines", value: "10+" },
  { title: "Projects Delivered", value: "15+" },
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
    repoUrl: "https://github.com/Buff-alo/Infrastructure",
    featured: true,
    category: "DevOps",
  },
  {
    id: 2,
    title: "Multi-cloud K3s cluster & DevOps Pipeline",
    description:
      "A multi-cloud Kubernetes (K3s) cluster setup using Terraform and Ansible, with a CI/CD pipeline via GitLab CI.",
    image: PROJECT_IMG_2,
    tags: ["Terraform", "Ansible", "Kubernetes", "GitLab CI", "Traefik"],
    liveUrl: "#",
    repoUrl: "https://github.com/Buff-alo/kubernetes-infra",
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
    year: "2026",
    title: "Ai Powered Bible Presentation App",
    description:
      "An Ai powered bible presentation app in Rust using AI models to transcribe audio and generate presentations of spoken verses with their references.",
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
    // GitHub's specific purple/black or just white
    color: "hover:text-white",
    bgColor: "hover:bg-[#333]",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/kwadwo-boakye",
    // LinkedIn Blue
    color: "hover:text-white",
    bgColor: "hover:bg-[#0077b5]",
  },
  {
    name: "X (Twitter)",
    // Swapped to FaXTwitter for accuracy
    icon: FiTwitter,
    url: "https://x.com/boakkwadwo",
    // X Black
    color: "hover:text-white",
    bgColor: "hover:bg-black",
  },
  {
    name: "GitLab",
    icon: FiGitlab,
    url: "https://gitlab.com/boakkwadwo2",
    // GitLab Orange
    color: "hover:text-white",
    bgColor: "hover:bg-[#FC6D26]",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:contact@kwadwolabs.cloud",
    // Generic Green or Blue for contact
    color: "hover:text-white",
    bgColor: "hover:bg-emerald-600",
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
    copyable: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@kwadwolabs.cloud",
    copyable: true,
  },
];
