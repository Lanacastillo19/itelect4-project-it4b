import type { User, Course, Submission, LostItem } from "../types/index";

export const student: User = {
  id: 1,
  name: "Juan dela Cruz",
  email: "juan@example.com",
  role: "student",
  isActive: true,
};

export const allCourses: Course[] = [
  {
    code: "ITELECT4",
    title: "IT Elective 4 - Web Architecture & Development",
    units: 3,
    semester: "1st Semester 2026-2027",
  },
  {
    code: "ITELECT3",
    title: "IT Elective 3 - Enterprise Systems",
    units: 3,
    semester: "2nd Semester 2025-2026",
  },
  {
    code: "CSSWENG",
    title: "Software Engineering Principles",
    units: 3,
    semester: "1st Semester 2026-2027",
  },
];

export const allSubmissions: Submission[] = [
  {
    id: 1,
    studentId: 1,
    courseCode: "ITELECT4",
    repoUrl: "github.com/juan/itelect4-project-part2",
    submittedAt: new Date(),
    score: 95,
  },
  {
    id: 2,
    studentId: 1,
    courseCode: "ITELECT3",
    repoUrl: "github.com/juan/itelect3-final-exam",
    submittedAt: new Date(),
  },
  {
    id: 3,
    studentId: 1,
    courseCode: "CSSWENG",
    repoUrl: "github.com/juan/cssweng-sprint1-docs",
    submittedAt: new Date(),
    score: 90,
  },
];

export const lostItems: LostItem[] = [
  { id: 1, name: "USB Flash Drive", location: "Innovation Hub" },
  { id: 2, name: "Canvas Tote Bag", location: "Student Lounge" },
  { id: 3, name: "Smart Watch", location: "West Hallway" },
];
