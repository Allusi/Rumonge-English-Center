"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  features,
  color,
  bgColor,
}: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      <div className={`h-1 bg-gradient-to-r ${color}`}></div>
      <CardHeader>
        <div className={`mb-4 inline-flex rounded-lg ${bgColor} p-3 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  onCTA?: () => void;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
  onCTA,
}: PricingCardProps) {
  return (
    <Card
      className={`border-0 transition-all duration-300 transform hover:scale-105 ${
        highlighted
          ? "shadow-2xl ring-2 ring-blue-600 md:scale-105"
          : "shadow-lg hover:shadow-xl"
      }`}
    >
      {highlighted && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-center text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onCTA}
          className={`w-full px-4 py-2 rounded-lg font-semibold transition-all ${
            highlighted
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg"
              : "border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {cta}
        </button>
      </CardContent>
    </Card>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{image}</div>
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 italic">"{content}"</p>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  icon?: ReactNode;
}

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="text-center hover:scale-105 transition-transform">
      {icon && <div className="flex justify-center mb-2">{icon}</div>}
      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
