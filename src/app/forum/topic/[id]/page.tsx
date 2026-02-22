'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/logo";
import { ArrowLeft, ThumbsUp, MessageCircle, Share2, Flag, Send } from "lucide-react";
import { useState } from "react";

interface Reply {
  id: string;
  author: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  isAuthor: boolean;
}

export default function TopicPage({ params }: { params: { id: string } }) {
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with actual data fetching
  const topic = {
    id: params.id,
    title: "Best practices for learning English pronunciation",
    category: "pronunciation",
    author: "Sarah Johnson",
    avatar: "👩‍🎓",
    createdAt: "3 days ago",
    views: 156,
    content: `I've been learning English for a while now, and I'm struggling with pronunciation. 
    
    I can read and understand English well, but when I try to speak, people often don't understand me. 
    
    What are the best strategies to improve pronunciation? Should I focus on specific sounds first, or practice full sentences? 
    
    Any recommendations for tools or resources would be greatly appreciated!`,
  };

  const replies: Reply[] = [
    {
      id: "1",
      author: "Mike Chen",
      avatar: "👨‍💼",
      content: "Great question! I'd recommend starting with individual sounds first. The IPA (International Phonetic Alphabet) is really helpful for understanding how to produce each sound correctly.",
      createdAt: "2 days ago",
      likes: 12,
      isAuthor: false,
    },
    {
      id: "2",
      author: "Emma Wilson",
      avatar: "👩‍🎓",
      content: "I found that watching English movies with subtitles and then trying to mimic the actors really helped me. It's like shadowing but more fun!",
      createdAt: "2 days ago",
      likes: 8,
      isAuthor: false,
    },
    {
      id: "3",
      author: "Sarah Johnson",
      avatar: "👩‍🎓",
      content: "Thanks for the suggestions! I'll definitely try the IPA approach and the movie shadowing technique. I appreciate the help!",
      createdAt: "1 day ago",
      likes: 3,
      isAuthor: true,
    },
  ];

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your reply submission logic here
    setTimeout(() => {
      setReply("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/forum" className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                REC Forum
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl">
          {/* Back Link */}
          <Link href="/forum" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Forum
          </Link>

          {/* Topic Header */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-3">
                    {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900">{topic.title}</h1>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{topic.avatar}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{topic.author}</p>
                    <p className="text-sm text-gray-600">{topic.createdAt}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>{topic.views} views</span>
                  <span>{replies.length} replies</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap mb-6">
                {topic.content}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm">Helpful</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors ml-auto">
                  <Flag className="h-4 w-4" />
                  <span className="text-sm">Report</span>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Replies Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              Replies ({replies.length})
            </h2>

            <div className="space-y-4">
              {replies.map((r) => (
                <Card key={r.id} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{r.avatar}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-gray-900">
                              {r.author}
                              {r.isAuthor && (
                                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                                  Author
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-gray-600">{r.createdAt}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{r.content}</p>

                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{r.likes}</span>
                          </button>
                          <button className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reply Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Add Your Reply</CardTitle>
              <CardDescription>Share your thoughts and help the community</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReplySubmit} className="space-y-4">
                <Textarea
                  placeholder="Write your reply here... (Markdown supported)"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  rows={6}
                  className="resize-none"
                  required
                />

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Tip:</strong> Be helpful, respectful, and provide specific examples when possible.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all h-10"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isLoading ? "Posting..." : "Post Reply"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-900 hover:border-gray-400 h-10"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
