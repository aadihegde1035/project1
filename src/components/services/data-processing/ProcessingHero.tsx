import React from 'react';

export default function ProcessingHero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-purple-900 py-32">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Data visualization"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900/90 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Data Processing Services
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Transform raw data into actionable insights that drive decision-making and operational efficiency. Our advanced processing solutions help businesses harness the full potential of their data.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                className="rounded-lg shadow-xl ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data processing visualization"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}