/**
 * Public Website Configuration
 * Centralized configuration for easy customization
 */

export const siteConfig = {
  // Brand Information
  brand: {
    name: "REC Online",
    fullName: "Rumonge English Center",
    tagline: "Master English with AI",
    description: "Join thousands of learners transforming their English skills with our intelligent, personalized learning platform.",
  },

  // Navigation
  navigation: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Sign In",
      href: "/",
    },
  },

  // Hero Section
  hero: {
    headline: "Master English with AI",
    subheadline: "Join thousands of learners transforming their English skills with our intelligent, personalized learning platform. Learn at your pace, achieve your goals.",
    cta1: {
      label: "Get Started Free",
      href: "/",
    },
    cta2: {
      label: "Watch Demo",
      action: "demo",
    },
    stats: [
      { label: "Active Students", value: "5,000+" },
      { label: "Courses Available", value: "150+" },
      { label: "Success Rate", value: "95%" },
      { label: "Countries", value: "45+" },
    ],
  },

  // Features Section
  features: [
    {
      icon: "Zap",
      title: "AI Tutor",
      description: "Personalized tutoring powered by advanced AI",
      features: ["24/7 availability", "Adaptive learning", "Instant feedback"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: "BookOpen",
      title: "Interactive Assignments",
      description: "Engaging exercises that adapt to your level",
      features: ["Real-time grading", "Progress tracking", "Varied content"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: "MessageSquare",
      title: "Grammar Checker",
      description: "Advanced writing analysis and corrections",
      features: ["Real-time corrections", "Detailed explanations", "Writing tips"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: "Users",
      title: "Community Forum",
      description: "Connect with learners worldwide",
      features: ["Peer support", "Expert answers", "Discussion threads"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: "Headphones",
      title: "Text-to-Speech",
      description: "Perfect your pronunciation with audio",
      features: ["Native speakers", "Multiple accents", "Offline access"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: "Award",
      title: "Certifications",
      description: "Earn recognized credentials",
      features: ["Verified certificates", "Career boost", "Shareable"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-100",
    },
  ],

  // Pricing Section
  pricing: {
    title: "Plans for Every Learner",
    description: "Choose the perfect plan to start your learning journey",
    plans: [
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
    ],
  },

  // Testimonials Section
  testimonials: [
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
  ],

  // Statistics Section
  statistics: {
    title: "Trusted by Learners Worldwide",
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Students Trained", value: "5,000+" },
      { label: "Success Rate", value: "95%" },
      { label: "Countries", value: "45+" },
    ],
  },

  // Why Choose Us Section
  whyChooseUs: [
    {
      icon: "Shield",
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: "Clock",
      title: "Learn at Your Pace",
      description: "Flexible scheduling that fits your lifestyle",
    },
    {
      icon: "Smartphone",
      title: "Mobile Friendly",
      description: "Learn anywhere, anytime on any device",
    },
    {
      icon: "TrendingUp",
      title: "Proven Results",
      description: "Track your progress with detailed analytics",
    },
  ],

  // CTA Section
  cta: {
    headline: "Ready to Transform Your English?",
    subheadline: "Join thousands of successful learners. Start your free trial today—no credit card required.",
    buttons: [
      {
        label: "Sign In",
        href: "/",
        variant: "secondary",
      },
      {
        label: "Create Account",
        href: "/enroll",
        variant: "primary",
      },
    ],
  },

  // Footer
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "#" },
          { label: "Roadmap", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Help Center", href: "#" },
          { label: "Documentation", href: "#" },
          { label: "API Docs", href: "#" },
          { label: "Community", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Cookies", href: "#" },
          { label: "Compliance", href: "#" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Twitter", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "Facebook", href: "#" },
          { label: "Instagram", href: "#" },
        ],
      },
    ],
    copyright: "© 2024 Rumonge English Center. All rights reserved. | Made with ❤️ for learners worldwide",
  },

  // Colors & Styling
  colors: {
    primary: "from-blue-600 to-indigo-600",
    secondary: "from-blue-400 to-indigo-600",
    accent: "from-blue-600 via-indigo-600 to-purple-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
  },

  // Metadata
  metadata: {
    title: "REC Online - Learn English with Rumonge English Center",
    description: "Join Rumonge English Center's comprehensive online learning platform. Master English with AI-powered tutoring, interactive assignments, and a supportive community.",
    keywords: "English learning, online courses, AI tutor, grammar checker, language education",
    ogImage: "/og-image.png",
  },
};

export type SiteConfig = typeof siteConfig;
