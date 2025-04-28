import React from 'react';
import Layout from '../../components/layout/Layout';
import ProcessingHero from '../../components/services/data-processing/ProcessingHero';
import ProcessingBenefits from '../../components/services/data-processing/ProcessingBenefits';
import ProcessingApproach from '../../components/services/data-processing/ProcessingApproach';
import ProcessingServices from '../../components/services/data-processing/ProcessingServices';
import IndustriesServed from '../../components/services/data-processing/IndustriesServed';
import WhyChooseUs from '../../components/services/data-processing/WhyChooseUs';
import ProcessingWorkflow from '../../components/services/data-processing/ProcessingWorkflow';

export default function DataProcessing() {
  return (
    <Layout>
      <ProcessingHero />
      <ProcessingBenefits />
      <ProcessingApproach />
      <ProcessingServices />
      <IndustriesServed />
      <WhyChooseUs />
      <ProcessingWorkflow />
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-800/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
            <div className="px-6 py-12 sm:px-12 lg:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Turn Your Data into a Competitive Advantage
                </h2>
                <p className="mt-4 text-xl text-purple-100">
                  Let's transform your raw data into actionable insights that drive growth.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition-colors"
                  >
                    Get Started Today
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