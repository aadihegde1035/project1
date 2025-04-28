import React from 'react';
import LoginForm from '../components/LoginForm';
import { UserCircle } from 'lucide-react';

export default function UserLogin() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <UserCircle className="w-12 h-12 text-purple-700" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Employee Portal
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your data entry dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm role="user" />
        </div>
      </div>
    </div>
  );
}