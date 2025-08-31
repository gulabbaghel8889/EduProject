import React from 'react';

const Statistics: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Partner Universities', description: 'Institutions across India' },
    { number: '50,000+', label: 'Student Projects', description: 'Shared on platform' },
    { number: '2M+', label: 'Project Views', description: 'Monthly engagement' },
    { number: '95%', label: 'Plagiarism Detection', description: 'Accuracy rate' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Impact & Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is making a significant impact on academic collaboration and knowledge sharing 
            across Indian higher education institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Driving Innovation Across India</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">National Coverage</p>
                  <p className="text-gray-600 text-sm">Connecting institutions from metro cities to rural areas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Quality Assurance</p>
                  <p className="text-gray-600 text-sm">Rigorous plagiarism detection and peer review process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Research Impact</p>
                  <p className="text-gray-600 text-sm">Facilitating cross-functional research collaborations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Project Categories</h4>
            <div className="space-y-4">
              {[
                { name: 'Computer Science & IT', percentage: 35, color: 'bg-blue-500' },
                { name: 'Engineering & Technology', percentage: 28, color: 'bg-green-500' },
                { name: 'Sciences & Research', percentage: 20, color: 'bg-purple-500' },
                { name: 'Business & Management', percentage: 10, color: 'bg-yellow-500' },
                { name: 'Other Disciplines', percentage: 7, color: 'bg-gray-500' }
              ].map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-gray-900 font-medium">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
