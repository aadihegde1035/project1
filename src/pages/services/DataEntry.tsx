import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/services/data-entry/Hero';
import ValueAddSection from '../../components/services/data-entry/ValueAddSection';
import ServicesOffered from '../../components/services/data-entry/ServicesOffered';
import WorkProcess from '../../components/services/data-entry/WorkProcess';
import { ArrowRight, Shield, Award, Zap, Lock, Settings } from 'lucide-react';

export default function DataEntry() {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Accuracy You Can Trust",
      description: "Rigorous quality checks and validation processes ensure error-free data"
    },
    {
      icon: Zap,
      title: "Speed and Scalability",
      description: "Handle large volumes of data quickly without compromising quality"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Robust security protocols protect your sensitive information"
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Customized services to match your specific business requirements"
    },
    {
      icon: Award,
      title: "Affordable Excellence",
      description: "High-quality services at competitive rates for businesses of all sizes"
    }
  ];

  return (
    <Layout>
      <Hero />
      <ValueAddSection />
      <ServicesOffered />
      
      {/* Why Choose Us Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Neo DataWorks?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the difference of working with data entry experts
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WorkProcess />

      {/* CTA Section */}
      <div className="bg-purple-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Transform Your Data Today
                </h2>
                <p className="mt-4 text-xl text-purple-100">
                  Don't let unstructured data hold your business back. Let's structure your data for success.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}