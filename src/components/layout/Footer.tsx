import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-white">
              Neo DataWorks is a leading provider of data management solutions, 
              helping businesses transform their raw data into valuable insights.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@neodataworks.in</span>
              </div>
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1- 708-418-6560</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>2398 East Camelback Road, Suite 1100, Phoenix, Arizona 85016</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <div>
                <Link to="/terms" className="text-white hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <Link to="/contact" className="text-white hover:text-gray-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-white">
            © {new Date().getFullYear()} Neo DataWorks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}