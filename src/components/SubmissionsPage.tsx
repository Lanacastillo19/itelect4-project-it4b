import { allSubmissions } from "../data/mockData";
import SubmissionBadge from "./SubmissionBadge";

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Submissions
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Review your course project submissions and grades.
        </p>
      </div>

      {allSubmissions.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
          No submissions found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allSubmissions.map((submission) => (
            <SubmissionBadge key={submission.id} submission={submission} />
          ))}
        </div>
      )}
    </div>
  );
}