import React, { useState } from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Award, 
  Calendar, 
  BarChart3, 
  Bell,
  Settings,
  Download,
  Heart,
  Eye,
  MessageCircle,
  Plus
} from 'lucide-react';

const UserDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const userStats = {
    projectsSubmitted: 8,
    totalViews: 12456,
    totalDownloads: 867,
    totalLikes: 234,
    averageRating: 4.6,
    collaborations: 5,
    citations: 23,
    followers: 89
  };

  const recentProjects = [
    {
      id: 1,
      title: 'AI-Powered Medical Diagnosis System',
      status: 'Published',
      views: 1248,
      downloads: 89,
      likes: 156,
      rating: 4.8,
      date: '2024-12-15'
    },
    {
      id: 2,
      title: 'Smart Traffic Management IoT System',
      status: 'Under Review',
      views: 892,
      downloads: 67,
      likes: 98,
      rating: 4.5,
      date: '2024-12-10'
    },
    {
      id: 3,
      title: 'Blockchain-Based Credential Verification',
      status: 'Draft',
      views: 0,
      downloads: 0,
      likes: 0,
      rating: 0,
      date: '2024-12-08'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'collaboration',
      message: 'Dr. Anjali Patel wants to collaborate on your AI Medical project',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'like',
      message: '15 new likes on your Smart Traffic project',
      time: '4 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'comment',
      message: 'New comment on Blockchain Credential project',
      time: '1 day ago',
      read: true
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Projects</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.projectsSubmitted}</p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.totalViews.toLocaleString()}</p>
            </div>
            <Eye className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Downloads</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.totalDownloads}</p>
            </div>
            <Download className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.averageRating}</p>
            </div>
            <Award className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentProjects.map(project => (
              <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'Published' ? 'bg-green-100 text-green-800' :
                      project.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                    <span>{project.views} views</span>
                    <span>{project.downloads} downloads</span>
                    <span>{project.likes} likes</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(project.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {notifications.map(notification => (
            <div key={notification.id} className={`p-4 rounded-lg ${notification.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${notification.read ? 'bg-gray-400' : 'bg-blue-600'}`}></div>
                <div className="flex-1">
                  <p className="text-gray-900">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'My Projects', icon: BookOpen },
    { id: 'collaborations', label: 'Collaborations', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">PhD Student, IIT Delhi</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {sidebarItems.map(item => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === item.id 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {sidebarItems.find(item => item.id === activeSection)?.label}
              </h1>
            </div>

            {activeSection === 'overview' && renderOverview()}
            {activeSection === 'notifications' && renderNotifications()}
            {activeSection === 'projects' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-gray-600">Project management interface coming soon...</p>
              </div>
            )}
            {activeSection === 'collaborations' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-gray-600">Collaboration tools coming soon...</p>
              </div>
            )}
            {activeSection === 'settings' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-gray-600">Settings panel coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
