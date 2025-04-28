import React from 'react';
import { Brain, TrendingUp, Zap, Users } from 'lucide-react';

export default function AnalysisBenefits() {
  const benefits = [
    {
      icon: Brain,
      title: "Data-Driven Decisions",
      description: "Move from intuition-based to evidence-based strategies, reducing risks and improving outcomes."
    },
    {
      icon: TrendingUp,
      title: "Competitive Advantage",
      description: "Stay ahead of market changes and anticipate customer needs through trend analysis."
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Identify inefficiencies and optimize resource allocation for streamlined processes."
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Understand customer behaviors and preferences to deliver personalized experiences."
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Data Analysis is Essential</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the power of your data to drive business growth and innovation
          </p>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-700 rounded-lg mb-6">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}