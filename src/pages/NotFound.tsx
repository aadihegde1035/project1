import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-b from-purple-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="text-[20rem] font-bold text-purple-900">404</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-6xl font-bold text-purple-900 mb-8">Page Not Found</h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Oops! It seems like the page you're looking for has been moved or doesn't exist.
                Let's get you back on track.
              </p>
              
              <div className="flex justify-center gap-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-700 transition-colors"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Looking for something specific?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <Link
                to="/about"
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600">Learn more about our company and mission</p>
              </Link>
              <Link
                to="/contact"
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">Get in touch with our support team</p>
              </Link>
              <Link
                to="/login"
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Login</h3>
                <p className="text-gray-600">Access your employee portal</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}