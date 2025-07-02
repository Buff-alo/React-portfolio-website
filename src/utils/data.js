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

import PROJECT_IMG_1 from "../assets/images/project1.jpg";

export const SKILLS_CAT = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building responsive and interactive user interfaces.",
    skills: [{ name: "React", level: 95, color: "bg-green-500" }],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing server-side applications and APIs.",
    skills: [
      { name: "Node.js", level: 90, color: "bg-blue-500" },
      { name: "Express", level: 85, color: "bg-blue-400" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and querying databases.",
    skills: [
      { name: "MongoDB", level: 90, color: "bg-green-500" },
      { name: "PostgreSQL", level: 80, color: "bg-blue-500" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Implementing and managing cloud infrastructure.",
    skills: [
      { name: "Docker", level: 85, color: "bg-blue-500" },
      { name: "Kubernetes", level: 75, color: "bg-blue-400" },
    ],
  },
];

export const TECH_STACK = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs" },
  { name: "MongoDB", icon: "logos:mongodb" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "Docker", icon: "logos:docker" },
];

export const STATS = [
  { title: "Projects Completed", value: 50, icon: Rocket },
  { title: "Years of Experience", value: "5+", icon: Briefcase },
  { title: "Happy Clients", value: 100, icon: Heart },
  { title: "Coffee Cups", value: 500, icon: Coffee },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: PROJECT_IMG_1,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2018",
    title: "Graduated with a Computer Science Degree",
    company: "XYZ Corp.",
    description:
      "Completed my Bachelor's degree in Computer Science, laying the foundation for my career in software development.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    year: "2019",
    title: "Started First Job as a Software Engineer",
    description:
      "Joined a tech company as a junior software engineer, working on web applications and gaining practical experience.",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "2020",
    title: "Became a Full Stack Developer",
    description:
      "Transitioned to a full stack developer role, working on both frontend and backend technologies.",
    icon: Code2,
    color: "bg-blue-400",
  },
  {
    year: "2021",
    title: "Contributed to Open Source Projects",
    description:
      "Started contributing to open source projects, enhancing my skills and collaborating with the developer community.",
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    year: "2022",
    title: "Launched Personal Projects",
    description:
      "Developed and launched several personal projects, showcasing my skills and creativity.",
    icon: Rocket,
    color: "bg-red-500",
  },
  {
    year: "2023",
    title: "Focused on Cloud Technologies",
    description:
      "Shifted focus towards cloud technologies and DevOps practices, enhancing my skill set for modern software development.",
    icon: Cloud,
    color: "bg-gray-500",
  },
];

export const PASSIONS = [
  {
    title: "Problem Solving",
    description:
      "Enjoy tackling complex challenges and finding efficient solutions.",
    icon: Coffee,
  },
  {
    title: "Learning New Technologies",
    description:
      "Passionate about staying updated with the latest trends and technologies in software development.",
    icon: BookOpen,
  },
  {
    title: "Building Scalable Applications",
    description:
      "Love creating applications that can handle growth and scale effectively.",
    icon: Zap,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "#",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "#",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "#",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "#",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  }
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "<your-location>",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "<your-phone>",
    },
    {
        icon: Mail,
        label: "Email",
        value: "<your-email>",
    },
]