import React from 'react';
import { MessageSquare, Database, BarChart, LineChart } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Understanding Your Needs",
    description: "We begin by identifying your business goals and the questions you need answers to."
  },
  {
    icon: Database,
    title: "Data Preparation",
    description: "Raw data is cleaned, validated, and structured for analysis."
  },
  {
    icon: BarChart,
    title: "Analysis Execution",
    description: "We apply advanced techniques to uncover trends, patterns, and insights."
  },
  {
    icon: LineChart,
    title: "Results & Support",
    description: "Insights are delivered through detailed reports with ongoing assistance to refine strategies."
  }
];

export default function AnalysisWorkflow() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our proven workflow ensures high-quality insights and actionable results
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-purple-400" />
                )}
                <div className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}