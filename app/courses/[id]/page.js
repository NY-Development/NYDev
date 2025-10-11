"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image"; 
import { Clock, BookOpen, DollarSign, ChevronDown, ChevronUp, CheckCircle, CircleUserRound, Award } from "lucide-react"; // Added Award icon
import { courses } from "@/app/data/courseData";
import Link from "next/link";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [openWeekKey, setOpenWeekKey] = useState("week1"); // Default to opening the first week for a better first impression

  if (!course)
    return (
      <div className="text-center py-20 text-xl font-medium text-gray-600 dark:text-gray-300">
        Course not found.
      </div>
    );

  const toggleAccordion = (weekKey) => setOpenWeekKey(openWeekKey === weekKey ? null : weekKey);

  const modulesArray = Object.entries(course.modules);

  const formatWeekTitle = (weekKey) => {
    const num = weekKey.replace('week', '');
    return `Week ${num}`;
  };

  const totalLessons = modulesArray.reduce((acc, [, lessons]) => acc + lessons.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      
      {/* Back Link */}
      <Link 
        href="/courses" 
        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition mb-6 md:mb-8"
      >
          &larr; Back to All Courses
      </Link>
      
      {/* ---------------------------------------------------------------------- */}
      {/* HERO HEADER */}
      {/* ---------------------------------------------------------------------- */}
      <div className=" dark:bg-gray-850 rounded-3xl overflow-hidden shadow-2xl p-6 lg:p-12 mb-12 border border-gray-100 dark:border-gray-800">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Image */}
          <div className="col-span-1 relative h-64 lg:h-full min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={course?.image}
              alt={course?.title}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-5">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold italic">
              {course.tagline || course.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-2">
              {course.fullDescription}
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-3 md:gap-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
              <span className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 rounded-full ring-1 ring-indigo-200 dark:ring-indigo-700">
                <Clock className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                {modulesArray.length} Weeks
              </span>
              <span className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 rounded-full ring-1 ring-indigo-200 dark:ring-indigo-700">
                <BookOpen className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                {totalLessons} Lessons
              </span>
              <span className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 bg-green-50 dark:bg-green-950 px-3 py-1.5 rounded-full ring-1 ring-green-200 dark:ring-green-700">
                <CircleUserRound className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                Max {course.maxStudents || 20} Students
              </span>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center gap-6 pt-6">
                <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {course.price || "$TBD"}
                </span>
                <Link 
                href="/enroll"
                className="cursor-pointer flex-grow md:flex-grow-0 bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-2xl hover:bg-indigo-700 transition-all transform active:scale-[0.98] shadow-indigo-500/50">
                    Enroll Now
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* INSTRUCTORS & CURRICULUM */}
      {/* ---------------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Instructors */}
        <div className="lg:col-span-1 p-6  dark:bg-gray-850 rounded-2xl shadow-xl h-fit border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-indigo-100 dark:border-gray-700 text-indigo-600 dark:text-indigo-400 flex items-center">
            <Award className="w-6 h-6 mr-2" /> Meet Your Mentors
          </h2>
          <div className="space-y-6">
            {course.instructors.map((inst, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:shadow-lg dark:hover:bg-gray-800"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    width={64}
                    height={64}
                    src={inst.image}
                    alt={inst.name}
                    className="object-cover border-4 border-white dark:border-gray-850 ring-2 ring-indigo-400"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {inst.name}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 italic">
                    {inst.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {inst.bioSnippet || "Expert in modern web frameworks and best practices."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline (Detailed Curriculum Accordion) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Detailed Course Curriculum
          </h2>
          <div className="space-y-4">
            {modulesArray.map(([weekKey, lessons], i) => (
              <div
                key={weekKey}
                className={`border rounded-xl transition-all duration-300 ${
                  openWeekKey === weekKey
                    ? "border-indigo-500 bg-indigo-50 dark:bg-gray-900 shadow-xl"
                    : "border-gray-200 dark:border-gray-700  dark:bg-gray-850 hover:shadow-md"
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
                    <span className="text-xl font-extrabold mr-2">{formatWeekTitle(weekKey)}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">({lessons.length} Lessons)</span>
                  </span>
                  {openWeekKey === weekKey ? (
                    <ChevronUp className="w-6 h-6 text-indigo-600 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                  )}
                </button>

                {/* Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${openWeekKey === weekKey ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className="p-5 pt-0 border-t border-indigo-200 dark:border-gray-700/50">
                            <ul className="space-y-4">
                                {lessons.map((lesson, idx) => (
                                <li key={idx} className="flex items-start text-base border-b border-dashed border-gray-200 dark:border-gray-700/50 pb-4 last:border-b-0 last:pb-0">
                                    <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                                    <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">{lesson.title}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.desc}</p>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}