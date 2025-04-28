import React, { useState } from 'react';
import UserList from './users/UserList';
import UserForm from './users/UserForm';
import { Plus } from 'lucide-react';

export default function UserManagement() {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-purple-700 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          Create User
        </button>
      </div>

      {isCreating && (
        <UserForm onClose={() => setIsCreating(false)} />
      )}

      <UserList />
    </div>
  );
}
