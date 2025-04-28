import React from 'react';
import Layout from '../../components/layout/Layout';
import AnalysisHero from '../../components/services/data-analysis/AnalysisHero';
import AnalysisBenefits from '../../components/services/data-analysis/AnalysisBenefits';
import AnalysisServices from '../../components/services/data-analysis/AnalysisServices';
import AnalysisApproach from '../../components/services/data-analysis/AnalysisApproach';
import IndustriesServed from '../../components/services/data-analysis/IndustriesServed';
import WhyChooseUs from '../../components/services/data-analysis/WhyChooseUs';
import AnalysisWorkflow from '../../components/services/data-analysis/AnalysisWorkflow';

export default function DataAnalysis() {
  return (
    <Layout>
      <AnalysisHero />
      <AnalysisBenefits />
      <AnalysisApproach />
      <AnalysisServices />
      <IndustriesServed />
      <WhyChooseUs />
      <AnalysisWorkflow />
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-800/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
            <div className="px-6 py-12 sm:px-12 lg:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Unlock the Power of Your Data
                </h2>
                <p className="mt-4 text-xl text-purple-100">
                  Transform your raw data into actionable insights that drive growth and innovation.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition-colors"
                  >
                    Start Your Data Journey
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