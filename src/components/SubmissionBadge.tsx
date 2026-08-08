import type { Submission } from "../types/index";

interface SubmissionBadgeProps {
  submission?: Submission;
  status?: string;
}

function SubmissionBadge({ submission, status }: SubmissionBadgeProps) {
  const displayText = status || (submission as any)?.status || "Submitted";

  return (
    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
      {displayText}
    </span>
  );
}

export default SubmissionBadge;