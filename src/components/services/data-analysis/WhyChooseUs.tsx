import React from 'react';
import { Settings, Shield, Users, FileText, Award } from 'lucide-react';

const reasons = [
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "We tailor our analysis to your unique business needs, ensuring relevant and actionable insights."
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "From AI-driven analytics to interactive dashboards, we utilize cutting-edge tools to deliver high-quality results."
  },
  {
    icon: Users,
    title: "Expertise Across Domains",
    description: "Our team combines data science expertise with industry-specific knowledge for targeted insights."
  },
  {
    icon: FileText,
    title: "Comprehensive Reporting",
    description: "We provide clear, concise, and visually engaging reports, making complex data easy to understand."
  },
  {
    icon: Award,
    title: "Data Security",
    description: "Your data's confidentiality and security are our top priorities. We implement strict protocols to protect sensitive information."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-5"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          alt="Technology background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Neo DataWorks</h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine industry expertise with cutting-edge technology to deliver superior data analysis solutions that drive business success.
            </p>
            
            <div className="mt-12 space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-700 text-white">
                      <reason.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                    <p className="mt-2 text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 to-transparent mix-blend-multiply rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}