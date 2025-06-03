
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoverPage from './pages/CoverPage';
import CurrentSituationPage from './pages/CurrentSituationPage';
import PreviousWorkPage from './pages/PreviousWorkPage';
import Project1Page from './pages/Project1Page';
import Project2Page from './pages/Project2Page';
import OtherPage from './pages/OtherPage';
import InterestsPage from './pages/InterestsPage';
import BackPage from './pages/BackPage';

const Magazine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const pages = [
    { component: CoverPage, title: "Cover" },
    { component: CurrentSituationPage, title: "Current Situation" },
    { component: PreviousWorkPage, title: "Previous Work" },
    { component: Project1Page, title: "Project 1" },
    { component: Project2Page, title: "Project 2" },
    { component: OtherPage, title: "Other" },
    { component: InterestsPage, title: "Interests" },
    { component: BackPage, title: "Index" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const CurrentPageComponent = pages[currentPage].component;
  const BackPageComponent = pages[pages.length - 1].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-7xl">
        {/* Desktop Layout */}
        {!isMobile ? (
          <div className="flex gap-4 justify-center items-center">
            {/* Left Page - Back side when on cover, previous page otherwise */}
            <div className="relative w-[400px] h-[600px] perspective-1000">
              <div className="magazine-page bg-white shadow-2xl rounded-r-lg overflow-hidden transform-gpu transition-transform duration-700">
                {currentPage === 0 ? (
                  <BackPageComponent onNavigate={goToPage} />
                ) : (
                  React.createElement(pages[currentPage - 1].component, { onNavigate: goToPage })
                )}
              </div>
            </div>

            {/* Right Page - Current page */}
            <div className="relative w-[400px] h-[600px] perspective-1000">
              <div className="magazine-page bg-white shadow-2xl rounded-l-lg overflow-hidden transform-gpu transition-transform duration-700">
                <CurrentPageComponent onNavigate={goToPage} />
              </div>
            </div>
          </div>
        ) : (
          /* Mobile Layout */
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative w-full h-[80vh] perspective-1000">
              <div className="magazine-page bg-white shadow-2xl rounded-lg overflow-hidden transform-gpu transition-transform duration-700">
                <CurrentPageComponent onNavigate={goToPage} />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
