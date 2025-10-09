"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component
import { Clock, BookOpen, DollarSign, ChevronDown, ChevronUp, CheckCircle } from "lucide-react"; // Added CheckCircle
import { courses } from "@/app/data/courseData";

export default function CourseDetail() { // Added 'courses' as a prop/mock
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  // Renamed state to be more descriptive of the content
  const [openWeekKey, setOpenWeekKey] = useState(null); 

  if (!course)
    return (
      <div className="text-center py-20 text-xl font-medium text-gray-600 dark:text-gray-300">
        Course not found.
      </div>
    );

  // Function to toggle the accordion, using the week's key string (e.g., 'week1')
  const toggleAccordion = (weekKey) => setOpenWeekKey(openWeekKey === weekKey ? null : weekKey);

  // Convert the modules object into an array of [weekKey, lessonsArray] pairs for mapping
  const modulesArray = Object.entries(course.modules);

  // Helper to format the week key (e.g., 'week1' -> 'Week 1')
  const formatWeekTitle = (weekKey) => {
    const num = weekKey.replace('week', '');
    return `Week ${num}`;
  };

  // Calculate total number of lessons (BookOpen stat)
  const totalLessons = modulesArray.reduce((acc, [, lessons]) => acc + lessons.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* ---------------------------------------------------------------------- */}
      {/* HERO HEADER */}
      {/* ---------------------------------------------------------------------- */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl p-6 lg:p-10 mb-10 border border-gray-100 dark:border-gray-800">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Image (Using Next.js Image) */}
          <div className="col-span-1 relative h-64 lg:h-full min-h-[300px]">
            <Image
              src={course.image}
              alt={course.title}
              fill // Use 'fill' to make it responsive inside the parent div
              className="object-cover rounded-xl"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="col-span-2 space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
              {course.title}
            </h1>
            <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
              {course.tagline || "Master your development journey with NYDev."}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {course.fullDescription}
            </p>

            {/* Info Pills (Updated to use module data) */}
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 mr-1.5 text-indigo-600 dark:text-indigo-400" />
                {modulesArray.length} Weeks
              </span>
              <span className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1.5 rounded-full">
                <BookOpen className="w-4 h-4 mr-1.5 text-indigo-600 dark:text-indigo-400" />
                {totalLessons} Lessons
              </span>
              <span className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 bg-green-100 dark:bg-green-900/50 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4 mr-1.5 text-green-600 dark:text-green-400" />
                {course.price || "$TBD"}
              </span>
            </div>

            {/* CTA */}
            <button className="w-full lg:w-auto mt-6 bg-indigo-600 text-white text-lg font-bold px-8 py-3 rounded-xl shadow-none md:shadow-xl hover:bg-indigo-700 transition-all transform hover:scale-[1.02] shadow-indigo-500/50">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* INSTRUCTORS & CURRICULUM */}
      {/* ---------------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Instructors */}
        <div className="lg:col-span-1 p-6 dark:bg-gray-900 rounded-xl shadow-lg h-fit border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-5 border-b pb-2 border-gray-200 dark:border-gray-700 text-indigo-600 dark:text-indigo-400">
            Meet Your Mentors
          </h2>
          <div className="space-y-6">
            {course.instructors.map((inst, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-3 dark:bg-gray-850 rounded-lg"
              >
                {/* Note: Ideally, use Next.js Image here too, but retaining <img> for simplicity */}
                <Image
                  src={inst.image}
                  alt={inst.name}
                  className="w-16 h-16 rounded-full border-2 border-indigo-400 ring-2 ring-indigo-100 dark:ring-indigo-900 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {inst.name}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    {inst.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {inst.bioSnippet || "Expert in modern web frameworks."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline (Detailed Curriculum Accordion - Now using modules) */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Detailed Course Curriculum
          </h2>
          <div className="space-y-4">
            {modulesArray.map(([weekKey, lessons], i) => (
              <div
                key={weekKey}
                className={`border rounded-xl transition-all duration-300 ${
                  openWeekKey === weekKey
                    ? "border-indigo-500 bg-indigo-50 dark:bg-gray-800 shadow-xl"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(weekKey)}
                  className="flex justify-between items-center w-full text-left p-5 font-bold text-lg"
                >
                  <span
                    className={`${
                      openWeekKey === weekKey
                        ? "text-indigo-700 dark:text-indigo-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {formatWeekTitle(weekKey)}: {lessons.length} Lessons
                  </span>
                  {openWeekKey === weekKey ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {openWeekKey === weekKey && (
                  <div className="p-5 pt-0 border-t border-indigo-200 dark:border-gray-700/50">
                    <ul className="space-y-3">
                      {lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start text-base">
                          <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800 dark:text-gray-200">{lesson.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}