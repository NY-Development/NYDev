"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
// import { toast } from "react-hot-toast";
import { toast } from "react-toastify";
import Image from "next/image"; 
import { 
  Clock, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  CircleUserRound, 
  Award,
  CircleDollarSign, // Added for Pricing
  Handshake, // Added for Why Pay
  Target, // Added for Outcomes
  FileText, // 🚨 NEW ICON: Added for Prerequisites
} from "lucide-react"; 
// Assuming the courses data is imported from the correct relative path
import { courses } from "@/app/data/courseData"; 
import Link from "next/link";

// Define the tabs for the new section
const tabs = [
  { id: 'outcomes', label: 'Key Outcomes', icon: Target },
  { id: 'pricing', label: 'Pricing Plans', icon: CircleDollarSign },
  { id: 'whyPay', label: 'Why Enroll?', icon: Handshake },
  { id: 'prerequisites', label: 'Prerequisites', icon: FileText }, // 🚨 ADDED PREREQUISITES TAB
];

export default function CourseDetail() {
  const params = useParams(); // Use params directly from Next.js 13/14
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // Handle dynamic routing segments
  
  // Adjusted import path for courses based on your original request
  // NOTE: Ensure your actual file structure is /app/data/courseData.js
  const course = courses.find((c) => c.id === id); 
  
  const [openWeekKey, setOpenWeekKey] = useState("week1"); 
  const [activeTab, setActiveTab] = useState(tabs[0].id); // State for the active tab

  const toastClick = () => {
    return toast("ℹ️ Enrollment isn't open yet, please await further email updates.")
  }

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

  // --- Tab Content Renderers ---

  const renderOutcomes = () => (
    <div className="space-y-4">
      {course.outcomes.map((outcome, i) => (
        <div key={i} className="flex items-start text-gray-700 dark:text-gray-300">
          <CheckCircle className="w-5 h-5 mr-3 mt-1 text-indigo-500 flex-shrink-0" />
          <p>{outcome}</p>
        </div>
      ))}
    </div>
  );

  const renderPricing = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {course.pricingPlans.map((plan, i) => (
        <div 
          key={i} 
          className={`p-6 rounded-xl border-2 transition-all ${
            plan.popular 
              ? 'border-indigo-600 bg-indigo-50 dark:bg-gray-800 shadow-lg' 
              : 'border-gray-200 dark:border-gray-700 dark:bg-gray-850'
          }`}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{plan.name}</h3>
            {plan.popular && (
              <span className="text-xs font-semibold px-3 py-1 bg-indigo-600 text-white rounded-full">MOST POPULAR</span>
            )}
          </div>
          <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 my-4">{plan.price}</p>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderWhyPay = () => (
    <div className="space-y-4">
      {course.whyPay.map((reason, i) => (
        <div key={i} className="flex items-start text-gray-700 dark:text-gray-300">
          <Handshake className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
          <p className="font-medium">{reason}</p>
        </div>
      ))}
    </div>
  );
  
  // 🚨 NEW RENDERER: Prerequisites Tab Content
  const renderPrerequisites = () => (
    <div className="space-y-4">
      {course.prerequisites && course.prerequisites.length > 0 ? (
        course.prerequisites.map((req, i) => (
          <div key={i} className="flex items-start text-gray-700 dark:text-gray-300">
            <FileText className="w-5 h-5 mr-3 mt-1 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
            <p>{req}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-400 italic">
          No specific prerequisites are listed for this course.
        </p>
      )}
    </div>
  );
  
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'outcomes':
        return renderOutcomes();
      case 'pricing':
        return renderPricing();
      case 'whyPay':
        return renderWhyPay();
      case 'prerequisites': // 🚨 ADDED CASE
        return renderPrerequisites();
      default:
        return null;
    }
  };


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
      <div className="dark:bg-gray-850 rounded-3xl overflow-hidden shadow-2xl p-6 lg:p-12 mb-12 border border-gray-100 dark:border-gray-800">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Image */}
          <div className="col-span-1 relative h-64 lg:h-full min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={course.image}
              alt={course.title}
              fill={true}
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
              <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {course.price || "$TBD"}
              </span>
              {/* <Link 
              href="/enroll"
              className="cursor-pointer md:flex-grow-0 bg-indigo-600 text-white text-lg font-bold px-2 py-2 md:px-10 md:py-4 rounded-xl shadow-2xl hover:bg-indigo-700 transition-all transform active:scale-[0.98] shadow-indigo-500/50">
                Enroll Now
              </Link> */}
              <button 
              onClick={toastClick}
              className="cursor-pointer md:flex-grow-0 bg-indigo-600 text-white text-lg font-bold px-2 py-2 md:px-10 md:py-4 rounded-xl shadow-2xl hover:bg-indigo-700 transition-all transform active:scale-[0.98] shadow-indigo-500/50">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* TABBED INFO SECTION (Outcomes, Pricing, Why Pay, Prerequisites) */}
      {/* ---------------------------------------------------------------------- */}
      <div className="mb-12">
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="p-6 dark:bg-gray-850 rounded-xl border border-gray-100 dark:border-gray-800">
          {renderActiveTabContent()}
        </div>
      </div>


      {/* ---------------------------------------------------------------------- */}
      {/* INSTRUCTORS & CURRICULUM */}
      {/* ---------------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Instructors */}
        <div className="lg:col-span-1 p-6 dark:bg-gray-850 rounded-2xl shadow-xl h-fit border border-gray-100 dark:border-gray-800">
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
                    : "border-gray-200 dark:border-gray-700 dark:bg-gray-850 hover:shadow-md"
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