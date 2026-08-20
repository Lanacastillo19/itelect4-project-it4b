import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchSubmissions, createSubmission, fetchCourses } from "../api/client";

export default function SubmissionsPage() {
  const [courseCode, setCourseCode] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const queryClient = useQueryClient();

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const { data: submissions = [], isLoading } = useQuery({
    queryKey: ["submissions"],
    queryFn: fetchSubmissions,
  });

  useEffect(() => {
    if (courses.length > 0 && !courseCode) {
      setCourseCode(courses[0].code);
    }
  }, [courses, courseCode]);

  const mutation = useMutation({
    mutationFn: createSubmission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      setRepoUrl("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!repoUrl.trim() || !courseCode) return;

  mutation.mutate({
    studentId: 1,
    courseCode,
    repoUrl,
    submittedAt: new Date(), 
  });
};

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Submissions</h1>

      <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Submit Repository</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            className="rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {courses.map((course) => (
              <option key={course.code} value={course.code}>
                {course.code}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="GitHub Repo URL (e.g. github.com/user/repo)"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="flex-1 rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            required
          />
          <button
            type="submit"
            disabled={mutation.isPending}
            className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {mutation.isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {isLoading ? (
        <p className="text-slate-500">Loading submissions...</p>
      ) : (
        <div className="space-y-3">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <div>
                <span className="font-bold text-blue-600 dark:text-blue-400">{sub.courseCode}</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">{sub.repoUrl}</p>
                <p className="text-xs text-slate-400">
                  {new Date(sub.submittedAt).toLocaleDateString()}
                </p>
              </div>
              {sub.score !== undefined && (
                <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-800 dark:bg-green-900 dark:text-green-200">
                  Score: {sub.score}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}