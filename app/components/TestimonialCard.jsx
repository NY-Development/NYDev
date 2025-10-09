import Image from 'next/image'; // For optimized image handling in Next.js
import { Quote } from 'lucide-react'; // Icon for visual emphasis

// Props now include 'title' and 'avatar' for the full professional look
export default function TestimonialCard({ name, title, feedback, avatar = "/avatars/placeholder-avatar.jpg" }) {
  return (
    <div 
      className="dark:bg-gray-850 rounded-2xl p-8 h-full 
                 border-gray-200 dark:border-indigo-700/30 // Dynamic border color
                 shadow-xl dark:shadow-indigo-900/10 
                 flex flex-col 
                 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] 
                 hover:border-indigo-500 dark:hover:border-indigo-400 // Hover border effect
                 hover:ring-2 hover:ring-indigo-200 dark:hover:ring-indigo-700/50" // Hover ring effect
      role="figure"
    >
      
      {/* 1. Avatar and Quote Icon */}
      <div className="flex items-center space-x-4 mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">
        
        {/* Avatar Container (ensures circular crop) */}
        <div className="relative w-14 h-14 flex-shrink-0">
          <Image 
            src={avatar} 
            alt={`Avatar of ${name}`} 
            width={56} // Explicit width (w-14 = 56px)
            height={56} // Explicit height
            className="rounded-full object-cover border-2 border-indigo-500/50"
          />
        </div>

        {/* Name and Title */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
            {name}
          </h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">
            {title}
          </p>
        </div>

      </div>

      {/* 2. Feedback Text */}
      <div className="flex-grow">
        {/* Quote icon for visual flair */}
        <Quote className="w-6 h-6 text-indigo-500 dark:text-indigo-400 opacity-70 mb-2" aria-hidden="true"/>
        
        <blockquote className="text-base text-gray-700 dark:text-gray-300 leading-relaxed italic">
          "{feedback}"
        </blockquote>
      </div>
      
    </div>
  );
}