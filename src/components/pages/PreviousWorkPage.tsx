
import React from 'react';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const PreviousWorkPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full bg-white p-8 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Previous Work</h1>
        <p className="text-sm text-gray-500 mt-1">Professional journey & education</p>
      </div>

      {/* Timeline */}
      <div className="flex-1">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-12">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                  <p className="text-sm text-blue-600 font-medium">Startup Inc. • 2021 - 2023</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Led frontend development for a SaaS platform serving 10k+ users. 
                    Implemented responsive designs and improved performance by 40%.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-12">
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Junior Developer</h3>
                  <p className="text-sm text-emerald-600 font-medium">Agency Co. • 2020 - 2021</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Developed custom websites and web applications for various clients. 
                    Collaborated with designers to create pixel-perfect implementations.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['JavaScript', 'CSS', 'WordPress'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-12">
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Computer Science Degree</h3>
                  <p className="text-sm text-purple-600 font-medium">University • 2016 - 2020</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Bachelor's degree with focus on software engineering and web technologies. 
                    Graduated with honors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-xs text-gray-400 mt-4">
        02
      </div>
    </div>
  );
};

export default PreviousWorkPage;
