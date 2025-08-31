import React from 'react';

const UniversityPartners: React.FC = () => {
  const universities = [
    { name: 'IIT Delhi', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=IIT+Delhi' },
    { name: 'IIT Mumbai', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=IIT+Mumbai' },
    { name: 'NIT Trichy', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=NIT+Trichy' },
    { name: 'BITS Pilani', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=BITS+Pilani' },
    { name: 'IISC Bangalore', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=IISC+Bangalore' },
    { name: 'Delhi University', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=Delhi+University' },
    { name: 'Jadavpur University', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=Jadavpur+Uni' },
    { name: 'Anna University', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=Anna+University' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of universities and colleges across India who are already using our platform 
            to enhance academic collaboration and knowledge sharing.
          </p>
        </div>

        {/* University Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {universities.map((university, index) => (
            <div key={index} className="flex items-center justify-center bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <img 
                src={university.logo} 
                alt={university.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                DS
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Dr. Sanjay Mehta</p>
                <p className="text-sm text-gray-600">Head of Research, IIT Delhi</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "This platform has revolutionized how our students collaborate and share research. 
              The plagiarism detection feature ensures academic integrity while fostering innovation."
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                PK
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Prof. Priya Krishnan</p>
                <p className="text-sm text-gray-600">Dean, Computer Science, NIT Trichy</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The cross-institutional collaboration features have opened new opportunities 
              for our students to work with peers from other universities."
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                AS
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Arjun Sharma</p>
                <p className="text-sm text-gray-600">PhD Student, BITS Pilani</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Finding relevant research and connecting with like-minded researchers 
              has never been easier. This platform is a game-changer for academic research."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join the Academic Revolution
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Be part of India's largest academic project sharing platform
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium">
            Register Your Institution
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartners;
