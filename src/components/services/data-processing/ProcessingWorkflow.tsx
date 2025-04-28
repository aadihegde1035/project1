import React from 'react';
import { MessageSquare, Settings, CheckSquare, BarChart } from 'lucide-react';

export default function ProcessingWorkflow() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We begin by understanding your business needs and data challenges through detailed discussions."
    },
    {
      icon: Settings,
      title: "Custom Solution Design",
      description: "Our team develops a tailored processing workflow that aligns with your goals and requirements."
    },
    {
      icon: CheckSquare,
      title: "Processing & Validation",
      description: "We process your data using our advanced tools while ensuring accuracy through rigorous validation."
    },
    {
      icon: BarChart,
      title: "Analysis & Delivery",
      description: "Final results are analyzed, formatted to your specifications, and delivered with comprehensive documentation."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
          <p className="mt-4 text-xl text-gray-600">
            A streamlined workflow designed to deliver exceptional results
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