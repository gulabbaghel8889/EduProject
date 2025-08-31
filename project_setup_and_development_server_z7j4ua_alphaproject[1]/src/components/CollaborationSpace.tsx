import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Video, 
  Calendar, 
  FileText, 
  Share2,
  Plus,
  Search,
  Bell,
  Clock
} from 'lucide-react';

const CollaborationSpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const collaborativeProjects = [
    {
      id: 1,
      title: 'Cross-University AI Research Initiative',
      participants: ['IIT Delhi', 'BITS Pilani', 'NIT Trichy'],
      lead: 'Dr. Sanjay Mehta',
      status: 'Active',
      progress: 75,
      deadline: '2025-03-15',
      lastActivity: '2 hours ago',
      messages: 23
    },
    {
      id: 2,
      title: 'Sustainable Energy Solutions Network',
      participants: ['IIT Mumbai', 'IISC Bangalore'],
      lead: 'Prof. Priya Krishnan',
      status: 'Planning',
      progress: 30,
      deadline: '2025-04-20',
      lastActivity: '1 day ago',
      messages: 8
    },
    {
      id: 3,
      title: 'Regional Language NLP Consortium',
      participants: ['Delhi University', 'Jadavpur University', 'Anna University'],
      lead: 'Dr. Suresh Reddy',
      status: 'Review',
      progress: 90,
      deadline: '2025-02-10',
      lastActivity: '3 hours ago',
      messages: 45
    }
  ];

  const mentorshipOpportunities = [
    {
      id: 1,
      mentor: 'Dr. Anjali Patel',
      expertise: 'Blockchain & Distributed Systems',
      university: 'BITS Pilani',
      rating: 4.9,
      projects: 12,
      available: true
    },
    {
      id: 2,
      mentor: 'Prof. Vikram Singh',
      expertise: 'Renewable Energy & Smart Grids',
      university: 'IIT Mumbai',
      rating: 4.8,
      projects: 8,
      available: false
    },
    {
      id: 3,
      mentor: 'Dr. Manpreet Kaur',
      expertise: 'Agricultural Technology & IoT',
      university: 'Agricultural University, Punjab',
      rating: 4.7,
      projects: 15,
      available: true
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Cross-Institutional Research Symposium',
      date: '2025-01-25',
      time: '10:00 AM',
      type: 'Conference',
      participants: 150,
      virtual: true
    },
    {
      id: 2,
      title: 'AI in Healthcare Workshop',
      date: '2025-01-28',
      time: '2:00 PM',
      type: 'Workshop',
      participants: 45,
      virtual: false
    },
    {
      id: 3,
      title: 'Student Project Showcase',
      date: '2025-02-05',
      time: '11:00 AM',
      type: 'Showcase',
      participants: 200,
      virtual: true
    }
  ];

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Collaborative Projects</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Start New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {collaborativeProjects.map(project => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Led by {project.lead}</span>
                  <span>•</span>
                  <span>{project.participants.length} institutions</span>
                  <span>•</span>
                  <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Active' ? 'bg-green-100 text-green-800' :
                project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {project.participants.slice(0, 3).map((participant, index) => (
                    <div key={index} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                      {participant.split(' ').map(word => word[0]).join('')}
                    </div>
                  ))}
                  {project.participants.length > 3 && (
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                      +{project.participants.length - 3}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  Last activity: {project.lastActivity}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <MessageCircle className="h-4 w-4" />
                  <span>{project.messages}</span>
                </div>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMentorship = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Mentorship Opportunities</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Become a Mentor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentorshipOpportunities.map(mentor => (
          <div key={mentor.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {mentor.mentor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{mentor.mentor}</h3>
                <p className="text-sm text-gray-600">{mentor.university}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-1">Expertise</p>
              <p className="text-sm text-gray-600">{mentor.expertise}</p>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-medium">{mentor.rating}</span>
              </div>
              <div className="text-sm text-gray-600">
                {mentor.projects} projects mentored
              </div>
            </div>

            <button 
              className={`w-full py-2 rounded-lg font-medium transition-colors ${
                mentor.available 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!mentor.available}
            >
              {mentor.available ? 'Request Mentorship' : 'Currently Unavailable'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {upcomingEvents.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {event.type}
                  </span>
                  {event.virtual && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Virtual</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  Details
                </button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Join Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'projects', label: 'Collaborative Projects', icon: Users },
    { id: 'mentorship', label: 'Mentorship', icon: MessageCircle },
    { id: 'events', label: 'Events & Workshops', icon: Calendar },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Collaboration Space</h1>
          <p className="text-lg text-gray-600">Connect, collaborate, and learn with peers across institutions</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'mentorship' && renderMentorship()}
        {activeTab === 'events' && renderEvents()}
      </div>
    </div>
  );
};

export default CollaborationSpace;
