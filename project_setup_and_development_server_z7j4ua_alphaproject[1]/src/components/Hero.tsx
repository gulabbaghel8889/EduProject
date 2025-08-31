import React from 'react';
import { Search, Shield, Users, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing Academic
            <span className="text-blue-600"> Project Collaboration</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            An integrated platform connecting students, universities, and researchers across India. 
            Share knowledge, prevent plagiarism, and foster innovation in academic projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium">
              Explore Projects
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              Register Institution
            </button>
          </div>
        </div>

        {/* Hero Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Discovery</h3>
            <p className="text-gray-600">Advanced search and AI-powered recommendations for relevant projects</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Plagiarism Detection</h3>
            <p className="text-gray-600">Built-in plagiarism checker to ensure originality and academic integrity</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-University Collaboration</h3>
            <p className="text-gray-600">Connect with peers and researchers across different institutions</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Analytics</h3>
            <p className="text-gray-600">Track project impact, citations, and research trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
