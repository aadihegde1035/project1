import React from 'react';
import { FileText, Database, Eraser, TableProperties, RefreshCcw, Receipt } from 'lucide-react';

export default function ServicesOffered() {
  const services = [
    {
      icon: FileText,
      title: "Manual Data Entry",
      description: "Keying in data from physical or digital sources with precision"
    },
    {
      icon: Database,
      title: "Data Digitization",
      description: "Converting paper-based records into digital formats for easy access"
    },
    {
      icon: Eraser,
      title: "Data Cleaning",
      description: "Correcting errors and inconsistencies in datasets"
    },
    {
      icon: TableProperties,
      title: "Data Formatting",
      description: "Organizing information to suit specific business needs"
    },
    {
      icon: RefreshCcw,
      title: "Database Updates",
      description: "Regularly updating CRM systems and inventory records"
    },
    {
      icon: Receipt,
      title: "Invoice Processing",
      description: "Managing financial information accurately and efficiently"
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What We Handle</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive data entry services for all your business needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}