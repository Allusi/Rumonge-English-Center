'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import {
  BookOpen,
  Users,
  Zap,
  MessageSquare,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lightbulb,
  Headphones,
  BarChart3,
  Smartphone,
  Shield,
  Clock,
  Sparkles,
  ChevronRight,
  Play,
} from "lucide-react";

export default function PublicWebsite() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content: "REC Online transformed my English skills. The AI tutor is incredibly helpful!",
      rating: 5,
      image: "👩‍🎓",
    },
    {
      name: "Ahmed Hassan",
      role: "Professional",
      content: "Best investment for my career. The courses are comprehensive and well-structured.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Maria Garcia",
      role: "Student",
      content: "The community support and grammar checker helped me improve significantly.",
      rating: 5,
      image: "👩‍🎓",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for beginners",
      features: [
        "Access to basic courses",
        "AI Tutor (limited)",
        "Grammar Checker",
        "Community Forum",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$24.99",
      period: "/month",
      description: "Most popular choice",
      features: [
        "All Starter features",
        "Unlimited AI Tutor",
        "Advanced assignments",
        "Priority support",
        "Certificate of completion",
        "Offline access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For organizations",
      features: [
        "All Professional features",
        "Team management",
        "Custom curriculum",
        "Dedicated support",
        "Analytics dashboard",
        "API access",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const stats = [
    { label: "Active Students", value: "5,000+", icon: Users },
    { label: "Courses Available", value: "150+", icon: BookOpen },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Countries", value: "45+", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Logo />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                REC Online
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <Link href="/forum">
                <Button variant="ghost" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Forum
                </Button>
              </Link>
              <Link href="/public-website/login">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all">
                  Sign In
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Link href="/">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">AI-Powered Learning Platform</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl leading-tight">
                  Master English with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of learners transforming their English skills with our intelligent, personalized learning platform. Learn at your pace, achieve your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl transition-all transform hover:scale-105">
                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center hover:scale-105 transition-transform">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl border border-white/20 backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">AI-Powered Tutoring</p>
                      <p className="text-sm text-blue-100">24/7 personalized lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Interactive Content</p>
                      <p className="text-sm text-blue-100">Engaging assignments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Community Support</p>
                      <p className="text-sm text-blue-100">Learn together</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Certifications</p>
                      <p className="text-sm text-blue-100">Verified credentials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:py-32 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
              <Lightbulb className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">Powerful Features</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources designed to accelerate your English learning journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "AI Tutor",
                description: "Personalized tutoring powered by advanced AI",
                features: ["24/7 availability", "Adaptive learning", "Instant feedback"],
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-100",
              },
              {
                icon: BookOpen,
                title: "Interactive Assignments",
                description: "Engaging exercises that adapt to your level",
                features: ["Real-time grading", "Progress tracking", "Varied content"],
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-100",
              },
              {
                icon: MessageSquare,
                title: "Grammar Checker",
                description: "Advanced writing analysis and corrections",
                features: ["Real-time corrections", "Detailed explanations", "Writing tips"],
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-100",
              },
              {
                icon: Users,
                title: "Community Forum",
                description: "Connect with learners worldwide",
                features: ["Peer support", "Expert answers", "Discussion threads"],
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-100",
              },
              {
                icon: Headphones,
                title: "Text-to-Speech",
                description: "Perfect your pronunciation with audio",
                features: ["Native speakers", "Multiple accents", "Offline access"],
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-100",
              },
              {
                icon: Award,
                title: "Certifications",
                description: "Earn recognized credentials",
                features: ["Verified certificates", "Career boost", "Shareable"],
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-100",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader>
                  <div className={`mb-4 inline-flex rounded-lg ${feature.bgColor} p-3 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <BarChart3 className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Flexible Pricing</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Plans for Every Learner
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to start your learning journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`border-0 transition-all duration-300 transform hover:scale-105 ${
                  plan.highlighted
                    ? "shadow-2xl ring-2 ring-blue-600 md:scale-105"
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg"
                        : "border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600">Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Loved by Learners Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our students have to say about their learning experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{testimonial.image}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:40px_40px]"></div>
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-8 md:grid-cols-4 text-center text-white">
            <div className="space-y-2 hover:scale-110 transition-transform">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform">
              <p className="text-4xl font-bold">5,000+</p>
              <p className="text-blue-100">Students Trained</p>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform">
              <p className="text-4xl font-bold">95%</p>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform">
              <p className="text-4xl font-bold">45+</p>
              <p className="text-blue-100">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Why Choose REC Online?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Secure & Private", desc: "Your data is protected with enterprise-grade security" },
                  { icon: Clock, title: "Learn at Your Pace", desc: "Flexible scheduling that fits your lifestyle" },
                  { icon: Smartphone, title: "Mobile Friendly", desc: "Learn anywhere, anytime on any device" },
                  { icon: TrendingUp, title: "Proven Results", desc: "Track your progress with detailed analytics" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors">
                        <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Learning Today</h3>
                    <p className="text-gray-600 mb-6">Join our community and transform your English skills</p>
                    <Link href="/public-website/signup">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all">
                        Create Free Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Transform Your English?
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            Join thousands of successful learners. Start your free trial today—no credit card required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto hover:shadow-lg transition-all">
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/public-website/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 transition-all hover:shadow-lg"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-gray-900 text-gray-400 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-5 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Logo />
              <span className="font-semibold text-white">REC Online</span>
            </div>
            <p className="text-sm text-center md:text-right">
              © 2024 Rumonge English Center. All rights reserved. | Made with ❤️ for learners worldwide
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations - Moved to tailwind.config.ts */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
