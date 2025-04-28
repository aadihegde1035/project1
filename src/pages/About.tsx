import React from 'react';
import Layout from '../components/layout/Layout';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import AboutValues from '../components/about/AboutValues';
import WhyChooseUs from '../components/about/WhyChooseUs';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <AboutHero />
        <AboutContent />
        <AboutValues />
        <WhyChooseUs />
        
        {/* CTA Section */}
        <div className="bg-purple-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Join the Neo DataWorks Family
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              From startups to industry leaders, we partner with businesses across the globe to help them make sense of their data. Let us help you turn your data into your most valuable asset.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50"
            >
              Contact us today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}