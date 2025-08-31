import React, { useState } from 'react';
import { 
  ArrowLeft, Eye, Download, Heart, Share2, Star, MessageCircle,
  Calendar, Award, Code, FileText, Bookmark
} from 'lucide-react';
import { projects as mockProjects } from '../data/mockData';
import { Project } from '../types';

interface ProjectDetailProps {
  projectId: number | null;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [project] = useState<Project | null>(() => {
    if (!projectId) return null;
    return mockProjects.find(p => p.id === projectId) || null;
  });
  
  const [activeTab, setActiveTab] = useState('overview');
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Could not load project</h2>
          <p className="text-gray-600 mt-2">The project could not be found.</p>
          <button onClick={onBack} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const renderOverview = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.full_description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                <Award className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderFiles = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Project Files</h3>
      <div className="grid grid-cols-1 gap-4">
        {project.files.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                {file.type === 'document' && <FileText className="h-5 w-5 text-blue-600" />}
                {file.type === 'code' && <Code className="h-5 w-5 text-green-600" />}
              </div>
              <div>
                <p className="font-medium text-gray-900">{file.name}</p>
                <p className="text-sm text-gray-500">{file.size}</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'files', label: 'Files & Downloads' },
    { id: 'comments', label: `Comments (${project.comments})` },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Projects</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <img src={project.thumbnail} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h1>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-lg transition-colors ${bookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>)}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1"><Eye className="h-4 w-4" /><span>{project.views}</span></div>
                    <div className="flex items-center space-x-1"><Download className="h-4 w-4" /><span>{project.downloads}</span></div>
                    <div className="flex items-center space-x-1"><Heart className={`h-4 w-4 ${liked ? 'fill-current text-red-500' : ''}`} /><span>{project.likes + (liked ? 1 : 0)}</span></div>
                    <div className="flex items-center space-x-1"><MessageCircle className="h-4 w-4" /><span>{project.comments}</span></div>
                    <div className="flex items-center space-x-1"><Star className="h-4 w-4 fill-current text-yellow-400" /><span>{project.rating}</span></div>
                  </div>
                  <button onClick={() => setLiked(!liked)} className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${liked ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                    <span>{liked ? 'Liked' : 'Like'}</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="p-6">
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'files' && renderFiles()}
                {activeTab === 'comments' && <div className="text-gray-600">Comments feature coming soon.</div>}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Author Information</h3>
              <div className="flex items-center space-x-3 mb-4">
                <img src={project.author_info.profile} alt={project.author_info.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-medium text-gray-900">{project.author_info.name}</p>
                  <p className="text-sm text-gray-600">{project.university}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Department:</span><span className="text-gray-900">{project.department}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Level:</span><span className="text-gray-900">{project.level}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Supervisor:</span><span className="text-gray-900">{project.supervisor}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Year:</span><span className="text-gray-900">{project.author_info.year}</span></div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact Author</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm"><span className="text-gray-600">Published:</span><span className="text-gray-900">{new Date(project.created_at).toLocaleDateString()}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-600">Status:</span><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{project.status}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
