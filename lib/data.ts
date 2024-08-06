import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import profil1 from "@/public/profile1.png";
import profil2 from "@/public/img.png";
import profil3 from "@/public/2.jpg";
import profil5 from "@/public/FoodRecipe.png";
import profil4 from "@/public/Homepage.png";
import profil6 from "@/public/13.png";
import profil7 from "@/public/LandingPagePijar.png";

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
    title: "Internship Program from School",
    location: "CV Todak Source",
    description:
      "Im making simple website for small company using HTMl, CSS and PHP and Maintenance the website.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - September 2021",
  },
  {
    title: "Graduated Bootcamp",
    location: "PijarCamp by Telkom Indonesia",
    description:
      "I graduated after 4 month of intense studying and making real project using React.Js, Next.Js, Node.Js, Express.Js and React Native.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2024 - July 2024",
  },

] as const;

export const projectsData = [
  {
    title: "Peworld Web",
    description:
      "Peworld Website - Comprehensive Web/Mobile Developer Recruitment Platform",
    tags: ["React.Js", "Express.Js", "PostgreSQL", "Tailwind", "Redux Thunk"],
    imageUrl: profil7,
    linkUrl: "https://github.com/SwitchZer/Hire-Job-App",
  },
  {
    title: "Peworld Mobile",
    description:
      "Peworld Mobile - Easier Hire Developer From Your Mobile Device",
    tags: ["React Native", "Express.Js", "PostgreSQL", "Tailwind", "Redux Thunk"],
    imageUrl: profil6,
    linkUrl: "https://github.com/SwitchZer/PeWorld-Mobile",
  },
  {
    title: "Food Recipe",
    description:
      "Food Recipe - Browse and Share Recipe Here",
    tags: ["Next.Js", "Express.Js", "PostgreSQL", "Tailwind"],
    imageUrl: profil5,
    linkUrl: "https://github.com/SwitchZer/food-recipe",
  },
  {
    title: "Blanja",
    description:
      "Blanja - Simple Online Shop Website",
    tags: ["Next.Js", "Express.Js", "PostgreSQL", "Tailwind"],
    imageUrl: profil4,
    linkUrl: "https://github.com/SwitchZer/blanja-fe",
  },
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
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Redux",
  "PostgreSQL",
  "MySQL",
  "React Native"
] as const;
