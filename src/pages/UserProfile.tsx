import React from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import { useUserStats } from '../hooks/useUserStats';
import { useCompletedAssignments } from '../hooks/useCompletedAssignments';
import { getScoreColor } from '../utils/scoreUtils';
import { formatDate } from '../utils/dateUtils';
import { User, FileText, Award } from 'lucide-react';
import LoadingSpinner from '../components/shared/LoadingSpinner';

export default function UserProfile() {
  const { userProfile, loading: profileLoading } = useUserProfile();
  const { averageScore, loading: statsLoading } = useUserStats();
  const { assignments, loading: assignmentsLoading } = useCompletedAssignments();

  if (profileLoading || statsLoading || assignmentsLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
              <User className="w-12 h-12 text-purple-700" />
            </div>
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{userProfile?.name}</h1>
            <p className="text-gray-600 mb-4">{userProfile?.email}</p>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-700" />
              <span className="text-gray-700">Overall Performance:</span>
              <span className={`font-semibold ${getScoreColor(averageScore)}`}>
                {averageScore}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment History */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-700" />
            <h2 className="text-xl font-semibold text-gray-900">Assignment History</h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((assignment) => {
                const percentage = (assignment.score! / assignment.assignment.points) * 100;
                return (
                  <tr key={assignment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {assignment.assignment.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {assignment.assignment.assignment_id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(assignment.submitted_at!)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {assignment.score} / {assignment.assignment.points}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-semibold ${getScoreColor(percentage)}`}>
                        {percentage.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}