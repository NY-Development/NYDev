import Image from "next/image";
// Import social icons from Lucide
import { Linkedin, Github, Instagram, Twitter, Facebook, Send, Link as LinkIcon } from "lucide-react";

// Define a map for icons and their components
const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  x: Twitter, // Using X for Twitter
  facebook: Facebook,
  telegram: Send, // Using Send icon for Telegram
  website: LinkIcon, // Using LinkIcon for portfolio/website
};

// Interface for the links object (optional)
// Example: { linkedin: "...", github: "...", website: "..." }
export default function TeamCard({ name, role, image, desc, links = {} }) {
  
  // Filter for only valid links to render
  const validLinks = Object.entries(links).filter(([, url]) => url);

  return (
    <div 
      className="relative flex flex-col items-center bg-white dark:bg-gray-900 
                 rounded-2xl p-8 
                 shadow-xl dark:shadow-2xl dark:shadow-indigo-900/10 
                 border border-gray-100 dark:border-gray-800 
                 hover:shadow-indigo-500/30 hover:scale-[1.02] 
                 transition-all duration-300 ease-out"
    >
      {/* ----------------- Image Section ----------------- */}
      <div className="relative w-32 h-32 mx-auto mb-5 rounded-full ring-4 ring-indigo-500/50 dark:ring-indigo-400/50 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          width={128} 
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      {/* ----------------- Text Section ----------------- */}
      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
        {name}
      </h3>
      <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
        {role}
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
        {desc}
      </p>

      {/* ----------------- Social Links Section ----------------- */}
      {validLinks.length > 0 && (
        <div className="flex justify-center flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
          {validLinks.map(([key, url]) => {
            const Icon = socialIcons[key];
            if (!Icon) return null; // Skip if no icon is mapped
            
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}'s ${key} profile`}
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}