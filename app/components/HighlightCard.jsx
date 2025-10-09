"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react"; // Added Clock icon
import Image from "next/image";

// Helper function to check for "Coming Soon" state
const isComingSoon = (link) => !link || link === "#" || link === "";

export default function HighlightCard({ title, desc, img, link, isNew }) {
  const comingSoon = isComingSoon(link);

  // Determine base styles, adding opacity/graying for 'Coming Soon' state
  const baseClasses = `
    relative rounded-2xl overflow-hidden h-full flex flex-col
    transition-all duration-300
    ${comingSoon 
      ? 'dark:bg-gray-800 border-gray-300 dark:border-gray-700 opacity-70 cursor-not-allowed'
      : 'dark:bg-gray-850 border border-gray-200 dark:border-indigo-700/30 shadow-xl hover:shadow-2xl'
    }
  `;
  
  // Conditionally wrap with motion.div for animation only if not 'Coming Soon'
  const CardWrapper = comingSoon ? 'div' : motion.div;
  const motionProps = comingSoon ? {} : {
    whileHover: { scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }, // Elevated shadow
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 200, damping: 20 }
  };


  return (
    <CardWrapper
      className={baseClasses}
      {...motionProps}
    >
      <div className="relative h-56 flex-shrink-0">
        
        {/* Image and Dark Overlay */}
        <Image 
            src={img} 
            alt={title} 
            className={`object-cover w-full h-full ${comingSoon ? 'grayscale' : ''}`} // Grayscale for coming soon
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Status Badges */}
        {isNew && (
          <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            NEW
          </span>
        )}
        
        {comingSoon && (
          <span className="absolute bottom-4 right-4 bg-yellow-500 text-gray-900 px-4 py-1.5 rounded-lg text-base font-bold flex items-center shadow-lg">
            <Clock className="w-4 h-4 mr-2" /> 
            Coming Soon
          </span>
        )}
      </div>

      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 flex-grow">{desc}</p>
        
        {/* Call to Action or Disabled State */}
        {comingSoon ? (
            <span className="mt-4 inline-block text-gray-500 dark:text-gray-500 font-medium cursor-not-allowed border-b-2 border-dashed border-gray-400">
                Check back soon
            </span>
        ) : (
            <Link
                href={link}
                className="mt-4 inline-flex items-center justify-center px-6 py-2.5 
                           bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                           rounded-lg transition-colors duration-200 shadow-md 
                           focus:ring-2 focus:ring-indigo-500"
            >
                View Project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        )}
      </div>
    </CardWrapper>
  );
}