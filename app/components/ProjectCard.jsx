import Link from 'next/link'; // Use Link for navigation

// Added 'link' and 'techTags' to props for future use
export default function ProjectCard({ title, desc, image, link = "#", techTags = [] }) {
  return (
    // Wrap the card in a Link for better routing and use a card-like element
    <Link 
      href={link}
      className="block bg-white dark:bg-gray-800 rounded-2xl 
                 shadow-lg dark:shadow-xl dark:shadow-indigo-900/10 
                 overflow-hidden transition-all duration-300 
                 transform hover:scale-[1.02] hover:shadow-2xl 
                 group" // Add group for child hover effects
    >
      
      {/* Project Image */}
      {/* Increased height for a more impactful image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`Screenshot of the ${title} project`} 
          className="w-full h-56 object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
        {/* Optional: Overlay/Fade effect on hover */}
        <div className="absolute inset-0 bg-indigo-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-3">
        {/* Title - Bolder and using primary brand color on hover */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 
                       group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        {/* Description - Better contrast */}
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {desc}
        </p>

        {/* Tech Tags (Placeholder for future data) */}
        {techTags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {techTags.map(tag => (
              <span 
                key={tag} 
                className="text-xs font-medium px-3 py-1 rounded-full 
                           bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
      </div>
    </Link>
  );
}