import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REC Forum - Community Discussion",
  description: "Join our community forum to discuss English learning, ask questions, and share resources with fellow learners.",
};

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
