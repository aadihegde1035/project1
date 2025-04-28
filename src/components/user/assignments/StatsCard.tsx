import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  color: 'purple' | 'yellow' | 'fuchsia';
  onClick: () => void;
  active: boolean;
}

export default function StatsCard({ 
  icon: Icon, 
  title, 
  count, 
  color, 
  onClick,
  active 
}: StatsCardProps) {
  const colorClasses = {
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      hover: 'hover:bg-purple-50',
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      hover: 'hover:bg-yellow-50',
    },
    fuchsia: {
      bg: 'bg-fuchsia-100',
      text: 'text-fuchsia-600',
      hover: 'hover:bg-fuchsia-50',
    },
  }[color];

  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-lg shadow p-6 w-full transition-colors ${
        colorClasses.hover
      } ${active ? 'ring-2 ring-offset-2 ' + colorClasses.text : ''}`}
    >
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${colorClasses.bg}`}>
          <Icon className={`h-6 w-6 ${colorClasses.text}`} />
        </div>
        <div className="ml-4 text-left">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold text-gray-900">{count}</p>
        </div>
      </div>
    </button>
  );
}
