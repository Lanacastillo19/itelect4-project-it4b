import { courses, allSubmissions } from "../data/mockData";
import type { Course, Submission } from "../types/index";

export async function fetchCourses(): Promise<Course[]> {
  return courses;
}

export async function fetchCourseByCode(code: string): Promise<Course> {
  const course = courses.find(
    (c) => c.code.toLowerCase() === code.toLowerCase()
  );
  if (!course) {
    throw new Error(`No course found with code "${code}".`);
  }
  return course;
}

export async function fetchSubmissions(): Promise<Submission[]> {
  return allSubmissions;
}

export async function createSubmission(
  newSubmission: Omit<Submission, "id">
): Promise<Submission> {
  const created: Submission = {
    id: Date.now(),
    ...newSubmission,
  };
  allSubmissions.push(created);
  return created;
}