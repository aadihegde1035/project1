import React from 'react';
import { LineChart, Search, Lightbulb, BarChart2, Activity, PieChart } from 'lucide-react';

export default function AnalysisServices() {
  const services = [
    {
      icon: LineChart,
      title: "Descriptive Analysis",
      description: "Understand historical data patterns and trends through comprehensive data summarization and visualization."
    },
    {
      icon: Search,
      title: "Diagnostic Analysis",
      description: "Identify root causes of past performance issues and provide actionable recommendations."
    },
    {
      icon: Lightbulb,
      title: "Predictive Analysis",
      description: "Forecast future trends and behaviors using advanced data models and machine learning."
    },
    {
      icon: BarChart2,
      title: "Prescriptive Analysis",
      description: "Get strategic recommendations and simulate scenarios to determine optimal actions."
    },
    {
      icon: Activity,
      title: "Real-Time Analysis",
      description: "Monitor live data streams for immediate insights and quick decision-making."
    },
    {
      icon: PieChart,
      title: "Custom Reports & Dashboards",
      description: "Access tailored reports and interactive dashboards for ongoing data monitoring."
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-5"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          alt="Analysis background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Analysis Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analytical solutions to transform your data into actionable insights
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