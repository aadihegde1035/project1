import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../components/user/UserLayout';
import AssignmentViewer from '../components/user/assignments/AssignmentViewer';
import AssignmentList from '../components/user/assignments/AssignmentList';
import UserProfile from './UserProfile';

export default function UserDashboard() {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<AssignmentList />} />
        <Route path="/assignment/:id" element={<AssignmentViewer />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </UserLayout>
  );
}