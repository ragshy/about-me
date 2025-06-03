
import React from 'react';
import Page from '../Page';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const OtherPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <Page onNavigate={onNavigate} pageIndex={5} title="Other Work" variant="left" className='p-4'>
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Other Work</h1>
        <p className="text-sm text-gray-500 mt-1">Side projects & experiments</p>
      </div>

      {/* Content Grid */}
      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Open Source */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Open Source Contributions</h3>
            <p className="text-sm text-gray-600 mb-3">
              Active contributor to various React libraries and tools
            </p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                15+ PRs merged
              </span>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                3 maintainer roles
              </span>
            </div>
          </div>

          {/* Writing */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Technical Writing</h3>
            <p className="text-sm text-gray-600 mb-3">
              Published articles on Medium and personal blog
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div>• "Modern React Patterns" - 10k+ views</div>
              <div>• "CSS Grid Mastery" - 5k+ views</div>
              <div>• "TypeScript Best Practices" - 8k+ views</div>
            </div>
          </div>

          {/* Speaking */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Speaking & Teaching</h3>
            <p className="text-sm text-gray-600 mb-3">
              Conference talks and workshop facilitation
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div>• ReactConf 2023 - "Building Accessible UIs"</div>
              <div>• Local meetups - Monthly React workshops</div>
              <div>• Online courses - 500+ students taught</div>
            </div>
          </div>
        </div>
      </div>
</Page>
      
  );
};

export default OtherPage;
