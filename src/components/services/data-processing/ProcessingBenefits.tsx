import React from 'react';
import { Brain, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export default function ProcessingBenefits() {
  const benefits = [
    {
      icon: Brain,
      title: "Improved Decision-Making",
      description: "Transform raw data into clear insights that empower leaders to make informed strategic decisions."
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Streamline workflows and reduce redundancies with organized, processed data."
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Accuracy",
      description: "Eliminate errors through robust validation and cleaning processes."
    },
    {
      icon: TrendingUp,
      title: "Regulatory Compliance",
      description: "Ensure data processing aligns with industry regulations and standards."
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Data Processing Matters</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Data processing transforms raw information into structured, usable formats that add real value to your business operations.
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