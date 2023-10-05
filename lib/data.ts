import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import profil1 from "@/public/profile1.png";
import profil2 from "@/public/img.png";
import profil3 from "@/public/2.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Blogs",
  //   hash: "#blogs",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "CV Todak Source",
    description:
      "Im making simple website for small company using HTMl, CSS and PHP.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Graduated bootcamp",
    location: "Refocus Indonesia",
    description:
      "I graduated after 1 year of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Fullstack Developer",
    location: "Femtatech Indonesia",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Upwork",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Thread Clone",
    description:
      "Thread like website.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: profil1,
    linkUrl: "https://alfred-threads-clone.vercel.app/",
  },
  {
    title: "React Cart",
    description:
      "Simple E-commerce Cart.",
    tags: ["React", "JavaScript", "Tailwind", "Redux"],
    imageUrl: profil2,
    linkUrl: "https://github.com/SwitchZer/React-Cart",
  },
  {
    title: "Laravel Point of Sales",
    description:
      "Simple POS Website.",
    tags: ["PHP", "Laravel", "MySql", "Bootsrap"],
    imageUrl: profil3,
    linkUrl: "https://github.com/SwitchZer/Laravel-POS",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
] as const;
