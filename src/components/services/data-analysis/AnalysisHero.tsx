import React from 'react';

export default function AnalysisHero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-purple-900 py-32">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          alt="Data visualization"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900/90 mix-blend-multiply"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Data Analysis Services
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Transform your raw data into actionable insights that drive informed decisions, identify trends, and uncover opportunities for growth.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                className="rounded-lg shadow-xl ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Data analysis visualization"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}