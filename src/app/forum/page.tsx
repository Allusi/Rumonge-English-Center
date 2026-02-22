'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import {
  MessageSquare,
  Plus,
  Search,
  Eye,
  MessageCircle,
  Clock,
  User,
  TrendingUp,
  ArrowRight,
  LogOut,
} from "lucide-react";
import { useState } from "react";

interface ForumTopic {
  id: string;
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  category: string;
  replies: number;
  views: number;
  lastReply: string;
  lastReplyBy: string;
  createdAt: string;
  isPinned: boolean;
}

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoggedIn] = useState(true);

  const categories = [
    { id: "all", name: "All Topics", color: "bg-blue-100 text-blue-700" },
    { id: "general", name: "General Discussion", color: "bg-green-100 text-green-700" },
    { id: "grammar", name: "Grammar Help", color: "bg-purple-100 text-purple-700" },
    { id: "vocabulary", name: "Vocabulary", color: "bg-orange-100 text-orange-700" },
    { id: "pronunciation", name: "Pronunciation", color: "bg-red-100 text-red-700" },
    { id: "resources", name: "Learning Resources", color: "bg-indigo-100 text-indigo-700" },
  ];

  const topics: ForumTopic[] = [
    {
      id: "1",
      title: "Best practices for learning English pronunciation",
      description: "Share your tips and tricks for improving pronunciation skills",
      author: "Sarah Johnson",
      authorAvatar: "👩‍🎓",
      category: "pronunciation",
      replies: 24,
      views: 156,
      lastReply: "2 hours ago",
      lastReplyBy: "Mike Chen",
      createdAt: "3 days ago",
      isPinned: true,
    },
    {
      id: "2",
      title: "Common grammar mistakes and how to avoid them",
      description: "Let's discuss the most common grammar errors and solutions",
      author: "Ahmed Hassan",
      authorAvatar: "👨‍💼",
      category: "grammar",
      replies: 18,
      views: 203,
      lastReply: "1 hour ago",
      lastReplyBy: "Emma Wilson",
      createdAt: "5 days ago",
      isPinned: true,
    },
    {
      id: "3",
      title: "Recommended books for English learners",
      description: "What are your favorite books to improve English?",
      author: "Maria Garcia",
      authorAvatar: "👩‍🎓",
      category: "resources",
      replies: 32,
      views: 289,
      lastReply: "30 minutes ago",
      lastReplyBy: "John Smith",
      createdAt: "1 week ago",
      isPinned: false,
    },
    {
      id: "4",
      title: "How to improve vocabulary quickly",
      description: "Effective strategies for expanding your vocabulary",
      author: "David Lee",
      authorAvatar: "👨‍💼",
      category: "vocabulary",
      replies: 15,
      views: 142,
      lastReply: "4 hours ago",
      lastReplyBy: "Lisa Wong",
      createdAt: "2 days ago",
      isPinned: false,
    },
    {
      id: "5",
      title: "Struggling with phrasal verbs",
      description: "Can someone explain phrasal verbs in simple terms?",
      author: "Carlos Rodriguez",
      authorAvatar: "👨‍💼",
      category: "grammar",
      replies: 12,
      views: 98,
      lastReply: "6 hours ago",
      lastReplyBy: "Sophie Martin",
      createdAt: "1 day ago",
      isPinned: false,
    },
    {
      id: "6",
      title: "English movies and TV shows for learning",
      description: "Share your favorite movies and shows for English practice",
      author: "Nina Patel",
      authorAvatar: "👩‍🎓",
      category: "resources",
      replies: 28,
      views: 267,
      lastReply: "45 minutes ago",
      lastReplyBy: "Tom Anderson",
      createdAt: "3 days ago",
      isPinned: false,
    },
  ];

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pinnedTopics = filteredTopics.filter((t) => t.isPinned);
  const regularTopics = filteredTopics.filter((t) => !t.isPinned);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/public-website" className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                REC Forum
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/public-website/login">
                <Button variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Community Forum</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Learning Community
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with fellow learners, ask questions, share resources, and grow together
            </p>
            <Link href="/forum/new-topic">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="h-4 w-4 mr-2" />
                Create New Topic
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? category.color
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Pinned Topics */}
          {pinnedTopics.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Pinned Topics
              </h2>
              <div className="space-y-4">
                {pinnedTopics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Topics */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {pinnedTopics.length > 0 ? "Recent Topics" : "All Topics"}
            </h2>
            {regularTopics.length > 0 ? (
              <div className="space-y-4">
                {regularTopics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-lg text-center py-12">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No topics found matching your search</p>
                <Link href="/forum/new-topic">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Topic
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold">{topics.length}</p>
              <p className="text-blue-100">Active Topics</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{topics.reduce((sum, t) => sum + t.replies, 0)}</p>
              <p className="text-blue-100">Total Replies</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{topics.reduce((sum, t) => sum + t.views, 0)}</p>
              <p className="text-blue-100">Total Views</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1.2K</p>
              <p className="text-blue-100">Active Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 text-gray-400 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Forum Rules</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Be Respectful</a></li>
                <li><a href="#" className="hover:text-white transition">No Spam</a></li>
                <li><a href="#" className="hover:text-white transition">Search Before Posting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Grammar Help</a></li>
                <li><a href="#" className="hover:text-white transition">Vocabulary</a></li>
                <li><a href="#" className="hover:text-white transition">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Report Issue</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© 2024 REC Online Forum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TopicCard({ topic }: { topic: ForumTopic }) {
  const categoryColors: Record<string, string> = {
    general: "bg-green-100 text-green-700",
    grammar: "bg-purple-100 text-purple-700",
    vocabulary: "bg-orange-100 text-orange-700",
    pronunciation: "bg-red-100 text-red-700",
    resources: "bg-indigo-100 text-indigo-700",
  };

  return (
    <Link href={`/forum/topic/${topic.id}`}>
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {topic.isPinned && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                    📌 Pinned
                  </span>
                )}
                <span className={`px-2 py-1 text-xs font-semibold rounded ${categoryColors[topic.category]}`}>
                  {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{topic.authorAvatar}</span>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{topic.author}</p>
                <p className="text-gray-600">{topic.createdAt}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <MessageCircle className="h-4 w-4" />
                <span>{topic.replies} replies</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Eye className="h-4 w-4" />
                <span>{topic.views} views</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{topic.lastReply}</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Last reply by <span className="font-semibold text-gray-900">{topic.lastReplyBy}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
