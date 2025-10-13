"use client";
import { Briefcase, Send } from "lucide-react";

// Helper component for job card status (e.g., New, Urgent)
const JobStatusBadge = ({ children, isUrgent = false }) => (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
        isUrgent 
          ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' 
          : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
    }`}>
        {children}
    </span>
);

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Briefcase className="w-14 h-14 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
            Careers at <span className="text-indigo-600 dark:text-indigo-400">NYDev</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            We’re always looking for passionate innovators, developers, and designers to join our team — 
            where creativity meets technology and new ideas are valued.
          </p>
        </div>

        <div className="space-y-6">
          {/* Job Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-indigo-400/50">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Frontend Developer (React/Next.js)</h3>
                <JobStatusBadge isUrgent={true}>Urgent</JobStatusBadge>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Build dynamic, accessible user interfaces using modern frameworks, TypeScript, and Tailwind CSS. Focus on performance and user experience.
            </p>
            <a 
              href="mailto:careers@nydev.tech?subject=Application:%20Frontend%20Developer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              <Send className="w-5 h-5" /> Apply Now
            </a>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-indigo-400/50">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Backend Developer (Node/Django)</h3>
                <JobStatusBadge isUrgent={false}>Open</JobStatusBadge>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Design and implement scalable backend systems and secure, high-performance APIs for new and existing digital products.
            </p>
            <a 
              href="mailto:careers@nydev.tech?subject=Application:%20Backend%20Developer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              <Send className="w-5 h-5" /> Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}