import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react"; // Added ArrowRight for the CTA
import Image from "next/image";

export default function CourseCard({ course }) {
  const cardBg = "bg-white dark:bg-gray-900";
  const hoverClasses =
    "hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 ease-out";
  const linkPath = `/courses/${course.id}`;

  return (
    <Link 
      href={linkPath}
      className="block"
    >
      <div
        className={`${cardBg} shadow-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 ${hoverClasses} flex flex-col h-full group`}
      >
        {/* Image Section */}
        <div className="relative">
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={400}
            // Use group-hover for image scale effect
            className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          
          {/* Title & Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3 leading-snug">
              {course.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-5 line-clamp-3">
              {course.description}
            </p>
          </div>

          {/* Instructors, Duration & Price Section */}
          <div className="mt-auto">
            
            {/* Instructors & Duration */}
            <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4 mb-4">
              
              {/* Instructor Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {course.instructors && course.instructors.slice(0, 3).map((inst, idx) => (
                      <div key={idx} className="relative group">
                          <Image
                              src={inst.image}
                              alt={inst.name}
                              width={36}
                              height={36}
                              className="rounded-full border-2 border-white dark:border-gray-800 ring-2 ring-indigo-500/50 object-cover w-9 h-9"
                          />
                          {/* Tooltip for instructor name */}
                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10 shadow-lg pointer-events-none">
                              {inst.name}
                          </div>
                      </div>
                  ))}
                </div>
                {course.instructors?.length > 3 && (
                  <div className="w-9 h-9 rounded-full bg-indigo-600 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-semibold text-white ml-2">
                    +{course.instructors.length - 3}
                  </div>
                )}
                {(!course.instructors || course.instructors.length === 0) && (
                  <span className="text-gray-500 text-sm">No instructors yet</span>
                )}
              </div>

              {/* Duration & Capacity */}
              <div className="flex items-center text-sm space-x-4 text-gray-500 dark:text-gray-400">
                <span className="flex items-center font-medium">
                  <Clock className="w-4 h-4 mr-1.5 text-indigo-500" /> 12 Weeks
                </span>
                <span className="flex items-center font-medium">
                  <Users className="w-4 h-4 mr-1.5 text-indigo-500" /> {course.maxStudents || 20}
                </span>
              </div>
            </div>

            {/* Price and Call-to-Action */}
            <div className="flex justify-between items-center pt-2">
              {/* Price Tag */}
              <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
                {course.price || "Free"}
              </span>
              
              {/* Action Link (Now just part of the card's overall link) */}
              <div
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-base font-semibold transition-all shadow-lg shadow-indigo-500/40 group-hover:bg-indigo-700"
              >
                View Details
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}