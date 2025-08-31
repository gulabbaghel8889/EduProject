import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Download, 
  Eye, 
  BarChart3,
  Calendar,
  Filter,
  ChevronDown
} from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('views');

  const metrics = [
    {
      title: 'Total Projects',
      value: '52,431',
      change: '+12.5%',
      trend: 'up',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: '8,945',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Total Downloads',
      value: '234,567',
      change: '+15.3%',
      trend: 'up',
      icon: Download,
      color: 'purple'
    },
    {
      title: 'Project Views',
      value: '1.2M',
      change: '+23.1%',
      trend: 'up',
      icon: Eye,
      color: 'orange'
    }
  ];

  const topProjects = [
    {
      title: 'AI-Powered Medical Diagnosis System',
      university: 'IIT Delhi',
      views: 12456,
      downloads: 1234,
      rating: 4.8,
      growth: '+25%'
    },
    {
      title: 'Blockchain Academic Credentials',
      university: 'BITS Pilani',
      views: 9876,
      downloads: 987,
      rating: 4.9,
      growth: '+18%'
    },
    {
      title: 'Smart Traffic IoT System',
      university: 'NIT Trichy',
      views: 8765,
      downloads: 876,
      rating: 4.5,
      growth: '+12%'
    },
    {
      title: 'NLP Regional Languages',
      university: 'IISC Bangalore',
      views: 7654,
      downloads: 765,
      rating: 4.7,
      growth: '+8%'
    }
  ];

  const universityStats = [
    { name: 'IIT Delhi', projects: 1234, users: 456, growth: '+15%' },
    { name: 'IIT Mumbai', projects: 1098, users: 398, growth: '+12%' },
    { name: 'BITS Pilani', projects: 987, users: 345, growth: '+18%' },
    { name: 'NIT Trichy', projects: 876, users: 289, growth: '+9%' },
    { name: 'IISC Bangalore', projects: 765, users: 234, growth: '+22%' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-lg text-gray-600">Platform performance and insights</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(metric.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-sm text-gray-600">{metric.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Project Views Trend</h3>
              <select 
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-1"
              >
                <option value="views">Views</option>
                <option value="downloads">Downloads</option>
                <option value="submissions">Submissions</option>
                <option value="users">Active Users</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive charts will be displayed here</p>
                <p className="text-sm text-gray-400">Connect database for real-time data</p>
              </div>
            </div>
          </div>

          {/* University Performance */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Universities</h3>
            <div className="space-y-4">
              {universityStats.map((university, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{university.name}</p>
                      <p className="text-sm text-gray-600">{university.projects} projects • {university.users} users</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">{university.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Projects */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Projects</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-3 text-sm font-medium text-gray-700">Project</th>
                    <th className="pb-3 text-sm font-medium text-gray-700">University</th>
                    <th className="pb-3 text-sm font-medium text-gray-700">Views</th>
                    <th className="pb-3 text-sm font-medium text-gray-700">Downloads</th>
                    <th className="pb-3 text-sm font-medium text-gray-700">Rating</th>
                    <th className="pb-3 text-sm font-medium text-gray-700">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topProjects.map((project, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4">
                        <div className="font-medium text-gray-900">{project.title}</div>
                      </td>
                      <td className="py-4 text-gray-600">{project.university}</td>
                      <td className="py-4 text-gray-900">{project.views.toLocaleString()}</td>
                      <td className="py-4 text-gray-900">{project.downloads.toLocaleString()}</td>
                      <td className="py-4">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-900">{project.rating}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-green-600 font-medium">{project.growth}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
