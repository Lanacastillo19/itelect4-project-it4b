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

  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Custom hooks
  const previousSearch = usePrevious(search);
  const { value: showCards, toggle } = useToggle(true);

  useEffect(() => {
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

    inputRef.current?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearch(e.target.value);
  };

  return (
    <div className="app" style={{ padding: "20px" }}>
      <h2>ITELECT4 Dashboard - GT2 Part 2</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />

      <p>Current Search: {search}</p>
      <p>Previous Search: {previousSearch ?? "None"}</p>

      <button onClick={toggle}>
        {showCards ? "Hide Cards" : "Show Cards"}
      </button>

      {showCards && (
        <>
          {student && (
            <UserCard
              user={student}
              onSelect={(u) => console.log(u)}
            />
          )}

          {course && <CourseCard course={course} />}

          {submission && (
            <SubmissionBadge submission={submission}>
              <p
                style={{
                  color: "#4caf50",
                  fontWeight: "bold",
                }}
              >
                ✓ Upload Completed Successfully (On Time)
              </p>
            </SubmissionBadge>
          )}
        </>
      )}
    </div>
  );
}

export default App;