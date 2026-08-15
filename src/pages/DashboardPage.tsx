import { useState, useRef } from "react";
import { student, allCourses } from "../data/mockData";
import UserCard from "../components/UserCard";
import CourseCard from "../components/CourseCard";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleFocusSearch = () => {
    searchInputRef.current?.focus();
  };

  const filteredCourses = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-4xl space-y-8 text-center">
      {/* Header section with Focus Search */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          ITELECT4 Dashboard - GT2 Part 2
        </h1>
        <div className="flex gap-2">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={handleFocusSearch}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Focus Search
          </button>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />

      {/* User Info Section */}
      <UserCard user={student} />

      <hr className="border-gray-300 dark:border-gray-700" />

      {/* Available Courses Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Available Courses
        </h2>

        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}