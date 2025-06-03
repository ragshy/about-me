
import React from 'react';
import Page from '../Page';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const InterestsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <Page onNavigate={onNavigate} pageIndex={6} title="Interests" variant="right" className=' p-4'>
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Interests</h1>
        <p className="text-sm text-gray-500 mt-1">What I'm passionate about beyond code</p>
      </div>

      {/* Interests Grid */}
      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Photography */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-semibold text-gray-900 mb-1">Photography</h3>
            <p className="text-xs text-gray-600">Street & landscape photography</p>
          </div>

          {/* Music */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🎵</div>
            <h3 className="font-semibold text-gray-900 mb-1">Music</h3>
            <p className="text-xs text-gray-600">Piano & music production</p>
          </div>

          {/* Travel */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">✈️</div>
            <h3 className="font-semibold text-gray-900 mb-1">Travel</h3>
            <p className="text-xs text-gray-600">15+ countries explored</p>
          </div>

          {/* Reading */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📚</div>
            <h3 className="font-semibold text-gray-900 mb-1">Reading</h3>
            <p className="text-xs text-gray-600">Tech & philosophy books</p>
          </div>
        </div>

        {/* Current Reads */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Currently Reading</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">"Clean Architecture"</span>
              <span className="text-gray-500"> by Robert Martin</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">"The Design of Everyday Things"</span>
              <span className="text-gray-500"> by Don Norman</span>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Fun Facts</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div>• Can solve a Rubik's cube in under 2 minutes</div>
            <div>• Speaks 3 languages fluently</div>
            <div>• Has a collection of vintage cameras</div>
            <div>• Enjoys cooking fusion cuisine</div>
          </div>
        </div>
      </div>

      </Page>
  );
};

export default InterestsPage;
