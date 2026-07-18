import type { Course } from "../types/index";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="course-card" style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h3>{course.code}: {course.title}</h3>
      <p>Units: {course.units}</p>
      <p>Semester: {course.semester}</p>
    </div>
  );
}

export default CourseCard;