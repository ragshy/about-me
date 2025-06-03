
import React from 'react';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const CurrentSituationPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full bg-white p-8 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Current Situation</h1>
        <p className="text-sm text-gray-500 mt-1">What I'm up to right now</p>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        {/* Work Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            Current Work
          </h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Senior Frontend Developer</h3>
            <p className="text-sm text-gray-600 mt-1">Tech Company • 2023 - Present</p>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              Building scalable web applications with React, TypeScript, and modern development practices.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
            Active Projects
          </h2>
          <div className="space-y-3">
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">Project Alpha</h3>
              <p className="text-sm text-gray-600 mt-1">
                An innovative web platform for creative professionals
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">Personal Blog</h3>
              <p className="text-sm text-gray-600 mt-1">
                Sharing insights about development and design
              </p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
            Current Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {['AI/ML', 'Web3', '3D Graphics', 'Photography', 'Music Production'].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Page number */}
      <div className="text-center text-xs text-gray-400 mt-4">
        01
      </div>
    </div>
  );
};

export default CurrentSituationPage;
