import React from 'react';
import { Bot, Users, Workflow } from 'lucide-react';

export default function ProcessingApproach() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-5"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
          alt="Technology pattern"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Approach to Data Processing</h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine cutting-edge technology with human expertise to deliver efficient, accurate, and tailored data processing solutions that meet your unique business needs.
            </p>
            
            <div className="mt-12 space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Bot className="w-6 h-6 text-purple-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Automated Processing Tools</h3>
                  <p className="mt-2 text-gray-600">
                    Advanced software handles large datasets quickly and efficiently, utilizing data mining tools, ETL processes, and AI-powered analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Human Expertise</h3>
                  <p className="mt-2 text-gray-600">
                    Our skilled professionals provide critical thinking, quality assurance, and customization to ensure optimal results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Workflow className="w-6 h-6 text-purple-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Hybrid Model</h3>
                  <p className="mt-2 text-gray-600">
                    By combining automation with human oversight, we deliver faster completion times and higher accuracy at cost-effective rates.
                  </p>
                </div>
              </div>
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