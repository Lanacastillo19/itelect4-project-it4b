import UserCard from "./components/UserCard";
import CourseCard from "./components/CourseCard";
import SubmissionBadge from "./components/SubmissionBadge";
import type { User, Course, Submission } from "./types/index";

const student: User = {
  id: 1,
  name: "Juan dela Cruz",
  email: "juan@example.com",
  role: "student",
  isActive: true,
};

const course: Course = {
  code: "ITELECT4",
  title: "IT Elective 4",
  units: 3,
  semester: "1st Semester 2026-2027",
};

const submission: Submission = {
  id: 1,
  studentId: 1,
  courseCode: "ITELECT4",
  repoUrl: "https://github.com/Lanacastillo19/itelect4-project-it4b",
  submittedAt: new Date(),
  score: 95,
};

function App() {
  return (
    <div className="app" style={{ padding: "20px" }}>
      <h2>ITELECT4 Dashboard - GT2 Part 1</h2>
      
      <UserCard
        user={student}
        onSelect={(u) => console.log("Selected target account profile:", u)}
      />
      
      <CourseCard course={course} />
      
      <SubmissionBadge submission={submission}>
        <p style={{ color: "#4caf50", fontWeight: "bold" }}>✓ Upload Completed Successfully (On Time)</p>
      </SubmissionBadge>
    </div>
  );
}

export default App;