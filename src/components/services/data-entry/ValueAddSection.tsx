import React from 'react';
import { Bot, Users, Zap } from 'lucide-react';

export default function ValueAddSection() {
  const approaches = [
    {
      icon: Bot,
      title: "Advanced Technology",
      features: [
        "Automated Data Processing for large datasets",
        "OCR (Optical Character Recognition) technology",
        "Data Validation Tools for consistency"
      ]
    },
    {
      icon: Users,
      title: "Human Expertise",
      features: [
        "Contextual Understanding of complex data",
        "Quality Assurance and cross-checking",
        "Custom Formatting to meet requirements"
      ]
    },
    {
      icon: Zap,
      title: "Hybrid Approach",
      features: [
        "Faster turnaround times",
        "Enhanced quality control",
        "Cost-effective solutions"
      ]
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-5"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
          alt="Technology background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How We Add Value</h2>
          <p className="mt-4 text-xl text-gray-600">
            We go beyond basic data entry to provide comprehensive solutions
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {approaches.map((approach) => (
            <div key={approach.title} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-700 to-purple-700 p-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <approach.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{approach.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {approach.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-600">
                      <span className="mr-2 text-purple-700">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}