import Link from "next/link";
import { Clock, Users } from "lucide-react"; 
import Image from "next/image";

export default function CourseCard ({ course }) {
    const cardBg = "dark:bg-gray-850";
    const hoverClasses = "hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 ease-out";
    const linkPath = `/courses/${course.id}`;

    return (
        <Link 
            href={linkPath}
            className={`${cardBg} shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 ${hoverClasses}`}
        >
            {/* Image with subtle gradient overlay */}
            <div className="relative">
                <Image 
                    src={course.image} 
                    alt={course.title} 
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-indigo-900/10 dark:bg-indigo-900/20 mix-blend-multiply"></div>
            </div>
            
            <div className="p-6 flex flex-col h-full">
                {/* Course Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{course.description}</p>
                
                {/* Instructors Section */}
                <div className="flex justify-between items-center mb-5 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex -space-x-3">
                        {course.instructors.slice(0, 3).map((inst, idx) => (
                            <div key={idx} className="relative group">
                                <Image
                                    src={inst.image}
                                    alt={inst.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-white dark:border-gray-800 ring-2 ring-indigo-500/50"
                                />
                                <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10 shadow-md">
                                    {inst.name}
                                </div>
                            </div>
                        ))}
                        {course.instructors.length > 3 && (
                            <div className="w-10 h-10 rounded-full  dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-semibold text-white dark:text-white">
                                +{course.instructors.length - 3}
                            </div>
                        )}
                    </div>
                    
                    {/* Simple Stats */}
                    <div className="flex items-center text-white dark:text-white text-sm space-x-3">
                        <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1"/> {course.duration || '2h'}
                        </span>
                    </div>
                </div>

                {/* Action Link Button */}
                <Link
                    href={linkPath}
                    className="inline-block w-full text-center bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-base font-semibold hover:bg-indigo-700 transition shadow-md shadow-indigo-500/30"
                >
                    Start Learning
                </Link>
            </div>
        </Link>
    );
};