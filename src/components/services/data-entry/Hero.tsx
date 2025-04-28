import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-900 to-purple-800 py-32">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          alt="Technology circuit background"
        />
        {/* Tech pattern overlay */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA3AF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-800/90 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Data Entry Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            In today's data-driven business landscape, maintaining accurate, organized, and up-to-date information is critical to operational success. Our data entry services combine the efficiency of advanced technology with the accuracy and insight of skilled professionals.
          </p>
        </div>
      </div>
    </div>
  );
}