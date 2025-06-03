
import React from 'react';
import Page from '../Page';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const CoverPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <Page onNavigate={onNavigate} pageIndex={0} title="Cover Page" variant="right" className='bg-gray-900 p-4' showPageNumber={false}>
      <div className="flex flex-col justify-center p-8 text-white h-full space-y-8">
        {/* Header */}
        <div className="text-right">
          <div className="text-sm font-light tracking-wider opacity-70">PERSONAL JOURNAL</div>
          <div className="text-xs font-light tracking-widest opacity-50 mt-1">2025 EDITION</div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">Ragshanan</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              Ragunathan
            </span>
          </h1>
          

          <div className="pt-8">
            <button
              onClick={() => onNavigate?.(1)}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wide hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              Open
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="text-xs font-light tracking-wider opacity-50">
            SWIPE OR CLICK TO EXPLORE
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CoverPage;
