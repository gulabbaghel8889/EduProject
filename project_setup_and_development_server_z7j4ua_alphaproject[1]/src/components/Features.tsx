import React from 'react';
import { Database, Globe, Lightbulb, Award, FileText, Users2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Centralized Repository',
      description: 'Comprehensive database of student projects from universities across India with advanced categorization and metadata.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Cross-Institutional Network',
      description: 'Connect universities, colleges, and research institutions on a single platform for seamless knowledge sharing.',
      color: 'green'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Discovery',
      description: 'Discover innovative solutions and breakthrough research across different domains and academic levels.',
      color: 'yellow'
    },
    {
      icon: Award,
      title: 'Academic Recognition',
      description: 'Showcase exceptional projects and provide recognition through institutional partnerships and industry connections.',
      color: 'purple'
    },
    {
      icon: FileText,
      title: 'Plagiarism Prevention',
      description: 'Advanced plagiarism detection algorithms to ensure originality and maintain academic integrity standards.',
      color: 'red'
    },
    {
      icon: Users2,
      title: 'Peer Learning',
      description: 'Facilitate collaborative learning through project discussions, mentorship, and knowledge exchange programs.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides comprehensive tools and features to revolutionize how academic projects 
            are shared, discovered, and collaborated upon across Indian higher education institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Academic Collaboration?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students, researchers, and institutions already benefiting from our comprehensive project management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Start Free Trial
            </button>
            <button className="border border-blue-300 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
