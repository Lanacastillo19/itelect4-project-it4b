import React from "react";
import type { Submission } from "../types/index";

interface SubmissionBadgeProps {
  submission: Submission;
  children?: React.ReactNode;
}

const SubmissionBadge: React.FC<SubmissionBadgeProps> = ({ submission, children }) => {
  return (
    <div className="submission-badge" style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "8px", backgroundColor: "#1e1e1e", color: "#fff" }}>
      <p><strong>Repository:</strong> {submission.repoUrl}</p>
      <p><strong>Evaluation Score:</strong> {submission.score ?? "Not graded yet"}</p>
      {children}
    </div>
  );
};

export default SubmissionBadge;