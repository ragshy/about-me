
import React from 'react';
import Page from '../Page';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const BackPage: React.FC<PageProps> = ({ onNavigate }) => {
  const tableOfContents = [
    { title: "Cover", page: 0, description: "Welcome & introduction" },
    { title: "Current Situation", page: 1, description: "Work, interests & projects" },
    { title: "Previous Work", page: 2, description: "Professional journey" },
    { title: "Project Alpha", page: 3, description: "E-commerce platform" },
    { title: "TaskFlow", page: 4, description: "Project management tool" },
    { title: "Other Work", page: 5, description: "Side projects & contributions" },
    { title: "Interests", page: 6, description: "Beyond the code" }
  ];

  return (
    <Page onNavigate={onNavigate} pageIndex={7} showPageNumber={false} title="Index" variant="left" className='bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900  p-4'>
    <div className="text-white p-8 flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">This is in here</h1>
        <p className="text-sm opacity-70">Navigate to any section</p>
      </div>

      {/* Table of Contents */}
      <div className="flex-1 space-y-3">
        {tableOfContents.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavigate?.(item.page)}
            className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs opacity-70 mt-1">{item.description}</p>
              </div>
              <div className="text-xs opacity-50 ml-4">
                {String(index).padStart(2, '0')}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 space-y-4">
        
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            GitHub
          </a>
        </div>
        
        <div className="text-xs opacity-50">
          © 2024 Ragshanan Ragunathan. All rights reserved.
        </div>
      </div>
    </div>
    </Page>
  );
};

export default BackPage;
