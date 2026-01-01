"use client";

import { useState } from 'react';
import ProjectCard from "../components/ProjectCard";

// -----------------------------------------------------------------------------
// 🔹 1. Project Data with Categorization
// -----------------------------------------------------------------------------
const projects = [
  { 
    id: 1, 
    title: "Procedure Notifier", 
    desc: "A healthcare workflow notifier that ensures timely alerts for procedures, improving efficiency and patient care.", 
    image: "/procedure.jpg",
    link: "https://pn-jet.vercel.app",
    techTags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: ["Backend & API", "Software Solutions", "Mobile App"], 
    isDone: true, 
  },
  { 
    id: 2, 
    title: "Bed Notification System | BNS", 
    desc: "A custom real-time system for hospital administration, providing complete bed assignment and patient flow management.", 
    image: "/project2.png",
    link: "https://bnst-beta.vercel.app",
    techTags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: ["Web Development", "Backend & API", "Software Solutions", "Mobile App"], 
    isDone: true,
  },
  { 
    id: 3, 
    title: "JobsPark Platform", 
    desc: "A comprehensive job posting and hiring web application featuring advanced filtering and candidate matching algorithms.", 
    image: "/project3.png",
    link: "https://js-kk9h.onrender.com",
    techTags: ["React.js", "Expressjs", "MongoDB", "Tailwind CSS"],
    category: ["Web Development", "Backend & API"], 
    isDone: true,
  },
  { 
    id: 4, 
    title: "Adama Bakery & Cake", 
    desc: "A modern bakery website showcasing products, online orders, and delivery tracking for customers.", 
    image: "/projects/abc.jpg",
    link: "https://adama-bakery.vercel.app",
    techTags: ["React.js", "Tailwind CSS", "Tailwindcss", "Expressjs"],
    category: ["Web Development", "UI/UX Design"], 
    isDone: 'testing',
  },
  { 
    id: 5, 
    title: "AddisPet", 
    desc: "A premium pet care and adoption ecosystem tailored for the Ethiopian market. Features a fluid, motion-driven marketplace for pet supplies and a secure portal for animal adoption. Built with a focus on high-performance UX, real-time filtering, and secure Google authentication to foster a trusted local pet community.", 
    image: "/projects/addispet.png",
    link: "https://addispet.vercel.app",
    techTags: [
        "Next.js", 
        "TypeScript", 
        "Tailwind CSS", 
        "Framer Motion", 
        "MongoDB", 
        "Google OAuth", 
        "Express.js"
    ],
    category: ["Full Stack Development", "UI/UX Design"], 
    isDone: true,
  },
  { 
    id: 6, 
    title: "North Nazareth Meserete Kirstos Church | NNMKC", 
    desc: "The NNMKC (North Nazareth Meserete Kristos Church) digital platform is a full-scale web application designed to modernize and extend the ministry, communication, and service reach of the church located in Adama, Ethiopia. The project provides a centralized online presence where members—both local and international—can easily access sermons, ministries, events, announcements, and donation services.", 
    image: "/projects/nnmkc.jpg",
    link: "https://mkc-adama.vercel.app",
    techTags: ["React.js", "ChakraUI", "Nestjs", "PostgreSQL"],
    category: ["Web Development", "Backend & API"], 
    isDone: false,
  },
  { 
    id: 7, 
    title: "TG Mart Online Store", 
    desc: "A modern and user-friendly eCommerce platform where customers can effortlessly browse products, compare options, and make secure purchases. Designed with a clean interface and smooth navigation, it provides a fast, reliable, and enjoyable shopping experience for users on any device.", 
    image: "/projects/tgmart.png",
    link: "https://sm-store-phi.vercel.app",
    techTags: ["React.js", "Tailwindcss", "Django", "PostgreSQL", "Python"],
    category: ["Web Development", "Backend & API"], 
    isDone: false,
  },
];

// -----------------------------------------------------------------------------
// 🔹 2. Filter Categories Data
// -----------------------------------------------------------------------------
const categories = [
    { name: "All Projects", filter: "All" },
    { name: "Web Development", filter: "Web Development" },
    { name: "Mobile", filter: "Mobile App" },
    { name: "UI/UX Design", filter: "UI/UX Design" },
    { name: "Backend & API", filter: "Backend & API" },
    { name: "Software Solutions", filter: "Software Solutions" },
];

// -----------------------------------------------------------------------------
// 🔹 3. Main Projects Component
// -----------------------------------------------------------------------------
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    // Filter logic based on the active tab
    const filteredProjects = projects.filter(project => {
        if (activeFilter === "All") {
            return true;
        }
        return project.category.includes(activeFilter);
    });

    // Custom tab styling logic
    const TabButton = ({ name, filter }) => (
        <button
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
                ${activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                }`}
        >
            {name}
        </button>
    );

    return (
        <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="projects-heading">
            
            <div className="text-center mb-16">
                <h1 
                    id="projects-heading" 
                    className="text-5xl font-extrabold tracking-tight 
                            text-gray-900 dark:text-gray-100 mb-4"
                >
                    Our Portfolio of Work
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Showcasing a range of real world applications and systems built for speed and scalability.
                </p>
            </div>

            {/* Tabbed Filter Navigation - 🚨 CHANGE: Switched from flex-scrolling to a responsive grid */}
            <div className="mb-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
                    {categories.map(cat => (
                        // 🚨 NOTE: TabButton should now have w-full to fill the grid cell
                        <TabButton key={cat.filter} {...cat} className="w-full" />
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((p) => <ProjectCard key={p.id} {...p} />)
                ) : (
                    // Empty state for filters
                    <div className="lg:col-span-3 md:col-span-2 text-center py-10">
                        <p className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
                            {`No projects found for "${activeFilter}".`}
                        </p>
                        <p className="text-gray-400 dark:text-gray-500 mt-2">
                            {`We're currently working on adding more examples in this area!`}
                        </p>
                    </div>
                )}
            </div>
            
        </section>
    );
}