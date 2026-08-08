import { useState, useEffect, useRef } from "react";
import UserCard from "./components/UserCard";
import CourseCard from "./components/CourseCard";
import SubmissionBadge from "./components/SubmissionBadge";
import { usePrevious } from "./hooks/usePrevious";
import { useToggle } from "./hooks/useToggle";
import type { User, Course, Submission } from "./types";

function App() {
  const [student, setStudent] = useState<User | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Custom hooks
  const previousSearch = usePrevious(search);
  const { value: showCards, toggle: toggleCards } = useToggle(true);
  const { value: isDarkMode, toggle: toggleDarkMode } = useToggle(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudent({
        id: 1,
        name: "Juan dela Cruz",
        email: "juan@example.com",
        role: "student",
        isActive: true,
      });

      setCourse({
        code: "ITELECT4",
        title: "IT Elective 4",
        units: 3,
        semester: "1st Semester 2026-2027",
      });

      setSubmission({
        id: 1,
        studentId: 1,
        courseCode: "ITELECT4",
        repoUrl: "https://github.com/Lanacastillo19/itelect4-project-it4b",
        submittedAt: new Date(),
        score: 95,
      });

      setIsLoading(false);
    }, 500);

    inputRef.current?.focus();

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearch(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="animate-pulse p-6 text-gray-500 dark:text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="m-6 rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/40 dark:text-red-300">
        Could not load dashboard data. Please try again.
      </div>
    );
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 p-6 text-gray-900 transition-colors dark:bg-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold">ITELECT4 Dashboard - GT2 Part 3</h2>

        {/* Controls */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="rounded bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            onClick={toggleCards}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {showCards ? "Hide Cards" : "Show Cards"}
          </button>

          <button
            onClick={() => setIsError(true)}
            className="rounded bg-red-100 px-2 py-1 text-xs text-red-700 hover:bg-red-200 dark:bg-red-900/40 dark:text-red-300"
          >
            Simulate Error
          </button>
        </div>

        {/* Search Input */}
        <div className="mt-4 max-w-md">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Current Search: <span className="font-medium text-gray-700 dark:text-gray-300">{search || "None"}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Previous Search: <span className="font-medium text-gray-700 dark:text-gray-300">{previousSearch ?? "None"}</span>
          </p>
        </div>

        {/* Responsive Grid Layout */}
        {showCards && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {student && (
              <UserCard
                user={student}
                onSelect={(u) => console.log(u)}
              />
            )}

            {course && <CourseCard course={course} variant="default" />}

            {submission && (
              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <SubmissionBadge submission={submission} status="Submitted" />
                <p className="mt-2 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓ Upload Completed Successfully (On Time)
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;