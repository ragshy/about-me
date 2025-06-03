
import React from 'react';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const Project2Page: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Project Image */}
      <div className="h-1/3 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">TaskFlow</h1>
          <p className="text-sm opacity-90">Project Management Tool</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex-1 p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A collaborative project management application designed for remote teams. Features 
            real-time collaboration, automated workflows, and comprehensive reporting. Used by 
            50+ teams across different industries to streamline their project delivery.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">Key Features</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Real-time collaboration</li>
            <li>• Kanban & Gantt views</li>
            <li>• Automated notifications</li>
            <li>• Time tracking integration</li>
            <li>• Custom reporting dashboards</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">
              View Demo
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Case Study
            </button>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-xs text-gray-400 pb-4">
        04
      </div>
    </div>
  );
};

export default Project2Page;
