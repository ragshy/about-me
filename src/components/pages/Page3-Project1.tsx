
import React from 'react';

import Page from '../Page';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const Project1Page: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <Page onNavigate={onNavigate} pageIndex={3} title="Project Alpha" variant="left" className='bg-gradient-to-br from-blue-500 to-purple-600 '>
      {/* Project Image */}
      <div className="h-1/3 relative bg-transparent overflow-hidden">
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">Project Alpha</h1>
          <p className="text-sm opacity-90">E-commerce Platform</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex-1 p-6 space-y-4 bg-white">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A modern e-commerce platform built with React and Node.js, featuring real-time inventory 
            management, secure payments, and an intuitive admin dashboard. The platform serves over 
            5,000 active users and processes 200+ orders daily.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">Key Features</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Real-time inventory tracking</li>
            <li>• Stripe payment integration</li>
            <li>• Advanced search & filtering</li>
            <li>• Mobile-responsive design</li>
            <li>• Admin analytics dashboard</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View Live Site
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              View Code
            </button>
          </div>
        </div>
      </div>

      </Page>
  );
};

export default Project1Page;
