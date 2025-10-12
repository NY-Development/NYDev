import Image from 'next/image';
import Link from 'next/link';

// -----------------------------------------------------------------------------
// 🔹 Helper Component: StatusBadge
// -----------------------------------------------------------------------------
const StatusBadge = ({ status }) => {
  if (status) {
    return (
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
        Done
      </span>
    );
  } else {
    return (
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300">
        In Progress
      </span>
    );
  }
};

// -----------------------------------------------------------------------------
// 🔹 Main Component: ProjectCard
// -----------------------------------------------------------------------------

export default function ProjectCard({ title, desc, image, link = "#", status = false, techTags = [] }) {
    
  // Conditional variables for styling and component choice
  const Tag = status ? Link : 'div';
  
  const baseClasses = `block bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                       dark:shadow-xl dark:shadow-indigo-900/10 overflow-hidden 
                       transition-all duration-300 group`;
                       
  const interactiveClasses = `transform hover:scale-[1.02] hover:shadow-2xl`;
  const disabledClasses = `cursor-default opacity-80`;

  return (
    <Tag 
      // Apply the link prop only if it is a Link component
      {...(status ? { href: link } : {})}
      
      // Conditionally apply interactive or disabled classes
      className={`${baseClasses} ${status ? interactiveClasses : disabledClasses}`}
    >
      
      {/* Project Image Container */}
      {/* 🚨 FIX: Container must be 'relative' and have a fixed height for Image fill prop to work */}
      <div className="relative overflow-hidden h-56">
        <Image 
          src={image} 
          alt={`Screenshot of the ${title} project`} 
          
          // 🚨 FIX: Use 'fill' to make the image size itself to the parent container
          fill={true} 
          
          // Recommended: Use sizes prop for better image optimization
          sizes="(max-width: 768px) 100vw, 33vw"

          className="object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
        
        {/* Optional: Overlay/Fade effect on hover */}
        <div className="absolute inset-0 bg-indigo-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>

      {/* Content Area */}
      <div className="relative p-6 space-y-3">
        {/* Title */}
        <h3 className={`text-xl font-bold 
                        text-gray-900 dark:text-gray-100 
                        transition-colors
                        ${status ? 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400' : ''}`}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {desc}
        </p>

        {/* Tech Tags */}
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
        {/* Status Badge Positioned on the Image */}
        <div className="absolute bottom-4 right-4 z-10">
            <StatusBadge status={status} />
        </div>
      </div>
    </Tag>
  );
}