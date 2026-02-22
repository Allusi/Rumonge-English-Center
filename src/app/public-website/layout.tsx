import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REC Online - Learn English with Rumonge English Center",
  description: "Join Rumonge English Center's comprehensive online learning platform. Master English with AI-powered tutoring, interactive assignments, and a supportive community.",
  keywords: "English learning, online courses, AI tutor, grammar checker, language education",
  openGraph: {
    title: "REC Online - Learn English with Rumonge English Center",
    description: "Join Rumonge English Center's comprehensive online learning platform.",
    type: "website",
  },
};

export default function PublicWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
