import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import ProjectBrowser from './components/ProjectBrowser';
import UniversityPartners from './components/UniversityPartners';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import ProjectDetail from './components/ProjectDetail';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import CollaborationSpace from './components/CollaborationSpace';
import PlagiarismChecker from './components/PlagiarismChecker';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'browse':
        return <ProjectBrowser onProjectSelect={setSelectedProject} setActiveTab={setActiveTab} />;
      case 'project-detail':
        return <ProjectDetail projectId={selectedProject} onBack={() => setActiveTab('browse')} />;
      case 'submit':
        return (
          <div className="min-h-screen pt-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Submit Your Project</h1>
                <p className="text-gray-600 mb-8">Share your innovative project with the academic community and contribute to knowledge sharing.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter project title" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">University/College</label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select your institution</option>
                        <option>IIT Delhi</option>
                        <option>IIT Mumbai</option>
                        <option>NIT Trichy</option>
                        <option>BITS Pilani</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select department</option>
                        <option>Computer Science</option>
                        <option>Electronics</option>
                        <option>Mechanical</option>
                        <option>Civil</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Academic Level</label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select level</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>PhD</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                    <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={6} placeholder="Describe your project, objectives, methodology, and outcomes..."></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keywords (comma-separated)</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="machine learning, AI, IoT, web development..." />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Documents</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <p className="text-gray-600">Upload project report, code, presentations, etc.</p>
                      <button type="button" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Choose Files</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="plagiarism" className="rounded border-gray-300" />
                    <label htmlFor="plagiarism" className="text-sm text-gray-700">I consent to plagiarism detection scanning</label>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">Submit Project</button>
                </form>
              </div>
            </div>
          </div>
        );
      case 'dashboard':
        return <UserDashboard />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'collaborate':
        return <CollaborationSpace />;
      case 'plagiarism':
        return <PlagiarismChecker />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Statistics />
            <UniversityPartners />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
