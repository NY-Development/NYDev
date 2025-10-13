"use client";
import CourseCard from "../components/CourseCard";
import { courses } from "@/app/data/courseData"; // Assuming courses is now imported from a deeper path

export default function CoursesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-gray-100">
        Explore Our <span className="text-indigo-600 dark:text-indigo-400">Expert-Led</span> Courses
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}