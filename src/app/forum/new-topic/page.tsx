'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/logo";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";

export default function NewTopicPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "general",
    description: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: "general", name: "General Discussion" },
    { id: "grammar", name: "Grammar Help" },
    { id: "vocabulary", name: "Vocabulary" },
    { id: "pronunciation", name: "Pronunciation" },
    { id: "resources", name: "Learning Resources" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your topic creation logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          {/* Back Link */}
          <Link href="/forum" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Forum
          </Link>

          {/* Form Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Create New Topic</CardTitle>
              <CardDescription>
                Share your question or start a discussion with the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">
                    Topic Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="What's your question or topic?"
                    value={formData.title}
                    onChange={handleChange}
                    className="h-10"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Be specific and descriptive (minimum 10 characters)
                  </p>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">
                    Category *
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Brief Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="One-line summary of your topic"
                    value={formData.description}
                    onChange={handleChange}
                    className="h-10"
                  />
                  <p className="text-xs text-gray-500">
                    This will appear in the topic list
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-sm font-medium">
                    Topic Content *
                  </Label>
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="Provide details about your question or topic. Be clear and specific to get better responses."
                    value={formData.content}
                    onChange={handleChange}
                    rows={8}
                    className="resize-none"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Markdown formatting is supported
                  </p>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Tips for a great topic:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>✓ Use a clear, descriptive title</li>
                    <li>✓ Provide context and examples</li>
                    <li>✓ Search for similar topics first</li>
                    <li>✓ Be respectful and constructive</li>
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all h-10"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isLoading ? "Creating..." : "Create Topic"}
                  </Button>
                  <Link href="/forum" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-2 border-gray-300 text-gray-900 hover:border-gray-400 h-10"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card className="border-0 shadow-lg mt-8 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-lg">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Be Respectful:</strong> Treat all members with courtesy and respect, even if you disagree.
              </p>
              <p>
                <strong>Stay On Topic:</strong> Keep discussions relevant to English learning and the forum category.
              </p>
              <p>
                <strong>No Spam:</strong> Don't post promotional content, links, or duplicate messages.
              </p>
              <p>
                <strong>Search First:</strong> Check if your question has already been answered.
              </p>
              <p>
                <strong>Provide Context:</strong> Give enough information for others to help you effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
