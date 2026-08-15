import { useMemo, useState } from "react";
import { Link } from "react-router";
import { allCourses } from "../data/mockData";

function CoursesPage() {
  const [query, setQuery] = useState("");

  const visibleCourses = useMemo(
    () =>
      allCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.code.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">
        Courses
      </h2>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search courses by code or title..."
        className="w-full rounded-md border border-slate-400 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
      />

      {visibleCourses.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
          No courses match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <Link
              key={course.code}
              to={`/courses/${course.code}`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {course.code}: {course.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Units: {course.units}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                Semester: {course.semester}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoursesPage;