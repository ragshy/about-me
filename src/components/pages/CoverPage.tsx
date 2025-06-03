
import React from 'react';

interface PageProps {
  onNavigate?: (pageIndex: number) => void;
}

const CoverPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex flex-col relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full blur-xl" />
      
      <div className="flex-1 flex flex-col justify-between p-8 relative z-10">
        {/* Header */}
        <div className="text-right">
          <div className="text-sm font-light tracking-wider opacity-70">PERSONAL PORTFOLIO</div>
          <div className="text-xs font-light tracking-widest opacity-50 mt-1">2024 EDITION</div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">YOUR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              NAME
            </span>
          </h1>
          
          <div className="space-y-2">
            <p className="text-lg font-light tracking-wide opacity-90">
              Creative Developer & Designer
            </p>
            <p className="text-sm opacity-70 max-w-sm mx-auto leading-relaxed">
              Crafting digital experiences through code, design, and innovation
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={() => onNavigate?.(1)}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wide hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              Enter Portfolio
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
    </div>
  );
};

export default CoverPage;
