import React from 'react';
import { Database, FileCheck, GitMerge, Tags, BarChart3, Shield } from 'lucide-react';

export default function ProcessingServices() {
  const services = [
    {
      icon: FileCheck,
      title: "Data Cleaning & Validation",
      description: "Identify and correct inaccuracies, remove duplicates, and ensure data consistency across your systems."
    },
    {
      icon: Database,
      title: "Data Transformation",
      description: "Convert raw data into standardized, usable formats compatible with your existing tools and processes."
    },
    {
      icon: GitMerge,
      title: "Data Integration",
      description: "Seamlessly merge data from multiple sources into a unified, coherent database system."
    },
    {
      icon: Tags,
      title: "Classification & Categorization",
      description: "Organize data into meaningful categories following industry-specific standards."
    },
    {
      icon: BarChart3,
      title: "Analysis & Reporting",
      description: "Generate actionable insights through comprehensive reports and intuitive visualizations."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Protect sensitive information with enterprise-grade encryption and security protocols."
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-5"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology pattern"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Data Processing Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of services designed to transform your raw data into valuable business assets
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-700 rounded-lg mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}