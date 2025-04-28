// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FileText, User, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useAuth } from '../../contexts/AuthContext';
// import UserProfileMenu from './UserProfileMenu';
// import { useUserStats } from '../../hooks/useUserStats';
// import { useUserProfile } from '../../hooks/useUserProfile';

// interface UserLayoutProps {
//   children: React.ReactNode;
// }

// export default function UserLayout({ children }: UserLayoutProps) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { signOut } = useAuth();
//   const { averageScore } = useUserStats();
//   const { userProfile } = useUserProfile();
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const getScoreColor = (score: number) => {
//     if (score >= 96) return 'border-fuchsia-500';
//     if (score >= 86) return 'border-fuchsia-400';
//     if (score >= 76) return 'border-lime-400';
//     if (score >= 66) return 'border-yellow-400';
//     if (score >= 51) return 'border-orange-400';
//     if (score >= 26) return 'border-red-400';
//     return 'border-red-700';
//   };

//   const handleSignOut = async () => {
//     await signOut();
//     navigate('/login');
//   };

//   const isAssignmentsActive = location.pathname === '/dashboard' || 
//     location.pathname.startsWith('/dashboard/assignment/');

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300`}>
//           <div className="h-16 flex items-center px-6 border-b justify-between">
//             {!isSidebarCollapsed && (
//               <h1 className="text-xl font-bold text-gray-800">Employee Portal</h1>
//             )}
//             <button
//               onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//               className="p-1 rounded-md hover:bg-gray-100"
//             >
//               {isSidebarCollapsed ? (
//                 <ChevronRight className="w-5 h-5 text-gray-500" />
//               ) : (
//                 <ChevronLeft className="w-5 h-5 text-gray-500" />
//               )}
//             </button>
//           </div>
//           <nav className="mt-6">
//             <Link
//               to="/dashboard"
//               className={`flex items-center px-6 py-3 text-sm ${
//                 isAssignmentsActive 
//                   ? 'text-purple-700 bg-purple-50' 
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <FileText size={20} className={isSidebarCollapsed ? 'mx-auto' : 'mr-3'} />
//               {!isSidebarCollapsed && 'Assignments'}
//             </Link>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Top Navigation */}
//           <div className="h-16 bg-white shadow-sm flex items-center justify-end px-8">
//             <div className="relative">
//               <button
//                 onClick={() => setIsProfileOpen(!isProfileOpen)}
//                 className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
//               >
//                 <span className="text-sm font-medium text-gray-700">
//                   {userProfile?.name || 'Loading...'}
//                 </span>
//                 <div className={`w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ${getScoreColor(averageScore)} border-2`}>
//                   <User className="w-6 h-6 text-gray-600" />
//                 </div>
//               </button>
              
//               {isProfileOpen && (
//                 <UserProfileMenu 
//                   onClose={() => setIsProfileOpen(false)}
//                   onSignOut={handleSignOut}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-1 overflow-auto p-8">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FileText, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import UserProfileMenu from './UserProfileMenu';
import { useUserStats } from '../../hooks/useUserStats';
import { useUserProfile } from '../../hooks/useUserProfile';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();
  const { averageScore } = useUserStats();
  const { userProfile } = useUserProfile();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 96) return 'border-fuchsia-500';
    if (score >= 86) return 'border-fuchsia-400';
    if (score >= 76) return 'border-lime-400';
    if (score >= 66) return 'border-yellow-400';
    if (score >= 51) return 'border-orange-400';
    if (score >= 26) return 'border-red-400';
    return 'border-red-700';
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const isAssignmentsActive = location.pathname === '/dashboard' ||
    location.pathname.startsWith('/dashboard/assignment/');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300`}>
          <div className="h-16 flex items-center px-6 border-b justify-between">
            {!isSidebarCollapsed && (
              <h1 className="text-xl font-bold text-gray-800">Employee Portal</h1>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              {isSidebarCollapsed ? (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
          <nav className="mt-6">
            <Link
              to="/dashboard"
              className={`flex items-center px-6 py-3 text-sm ${
                isAssignmentsActive
                  ? 'text-purple-700 bg-purple-50'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FileText size={20} className={isSidebarCollapsed ? 'mx-auto' : 'mr-3'} />
              {!isSidebarCollapsed && 'Assignments'}
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <div className="h-16 bg-white shadow-sm flex items-center justify-between px-8"> {/* justify-between added */}
            <div className="flex-grow text-center"> {/* Centered title */}
              <span className="text-xl font-bold text-gray-800">Neo Dataworks</span>
            </div>
            <div className="relative"> {/* Profile Menu */}
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700">
                  {userProfile?.name || 'Loading...'}
                </span>
                <div className={`w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ${getScoreColor(averageScore)} border-2`}>
                  <User className="w-6 h-6 text-gray-600" />
                </div>
              </button>

              {isProfileOpen && (
                <UserProfileMenu
                  onClose={() => setIsProfileOpen(false)}
                  onSignOut={handleSignOut}
                />
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}