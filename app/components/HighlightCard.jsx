// /app/components/HighlightCard.jsx (Assumed Content)
import Link from "next/link";
import Image from "next/image";

const HighlightCard = ({ title, desc, img, link, isNew, isComingSoon } ) => {
  const cardClasses = "relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col h-full";

  return (
    <Link href={link} className="block group h-full">
      <div className={cardClasses}>
        {/* Badge Section */}
        <div className="absolute top-4 left-4 z-10 space-x-2">
          {/* New Badge (Keep existing logic) */}
          {isNew && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-none rounded-full text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300">
              NEW
            </span>
          )}
          
          {/* Coming Soon Badge (NEW ADDITION) */}
          {isComingSoon && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-none rounded-full text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300">
              COMING SOON
            </span>
          )}
        </div>

        {/* Image Section */}
        <div className="relative h-56 w-full">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay to dim image slightly */}
          <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {desc}
          </p>
          {/* <span className="mt-4 text-indigo-600 dark:text-indigo-400 font-semibold flex items-center">
            Learn More &rarr;
          </span> */}
        </div>
      </div>
    </Link>
  );
};

export default HighlightCard;