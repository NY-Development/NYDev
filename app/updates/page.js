"use client";
import HighlightCard from "../components/HighlightCard";
import { motion } from "framer-motion";

// Example: This could later come from an API or JSON file
const highlights = [
  {
    title: "Next.js Masterclass",
    desc: "A hands-on course to master Next.js — build production-ready web apps with real-world projects.",
    img: "/images/nextjs_course.jpg",
    link: "/courses/nextjs-masterclass",
    isNew: true,
  },
  {
    title: "AI Integration Toolkit",
    desc: "Easily integrate AI-powered features into your apps using our new developer-friendly toolkit.",
    img: "/images/ai_toolkit.jpg",
    link: "/products/ai-toolkit",
    isNew: true,
  },
  {
    title: "NYDev LaunchPad",
    desc: "Our new platform helps startups build and deploy their MVPs in weeks, not months.",
    img: "/images/launchpad.jpg",
    link: "/services/launchpad",
    isNew: false,
  },
  {
    title: "React Native Accelerator",
    desc: "Fast-track your mobile app development journey with our new React Native training and tools.",
    img: "/images/react_native_course.jpg",
    link: "/courses/react-native",
    isNew: true,
  },
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500 py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
        >
          🔥 Latest Updates & Releases
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Stay up-to-date with NYDev’s newest courses, tools, and platform updates.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {highlights.map((item, index) => (
          <HighlightCard key={index} {...item} />
        ))}
      </motion.div>
    </main>
  );
}
