
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
  const [currentSpread, setCurrentSpread] = useState(0);
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

  // Calculate spreads for book-like pagination
  const spreads = [];
  
  if (!isMobile) {
    // Desktop: First spread shows back page (7) and cover (0)
    spreads.push({ left: 7, right: 0 });
    
    // Then pairs: (1,2), (3,4), (5,6), and finally just back page (7)
    for (let i = 1; i < pages.length - 1; i += 2) {
      if (i + 1 < pages.length - 1) {
        spreads.push({ left: i, right: i + 1 });
      } else {
        spreads.push({ left: i, right: null });
      }
    }
    
    // Last spread shows just the back page
    if (pages.length > 1) {
      spreads.push({ left: null, right: 7 });
    }
  } else {
    // Mobile: Each page is its own spread
    pages.forEach((_, index) => {
      spreads.push({ left: null, right: index });
    });
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSpread = () => {
    if (currentSpread < spreads.length - 1) {
      setCurrentSpread(currentSpread + 1);
    }
  };

  const prevSpread = () => {
    if (currentSpread > 0) {
      setCurrentSpread(currentSpread - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (isMobile) {
      setCurrentSpread(pageIndex);
    } else {
      // Find the spread that contains this page
      const spreadIndex = spreads.findIndex(spread => 
        spread.left === pageIndex || spread.right === pageIndex
      );
      if (spreadIndex !== -1) {
        setCurrentSpread(spreadIndex);
      }
    }
  };

  const currentSpreadData = spreads[currentSpread];
  const LeftPageComponent = currentSpreadData?.left !== null ? pages[currentSpreadData.left]?.component : null;
  const RightPageComponent = currentSpreadData?.right !== null ? pages[currentSpreadData.right]?.component : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-7xl">
        {/* Desktop Layout */}
        {!isMobile ? (
          <div className="flex gap-4 justify-center items-center">
            {/* Left Page */}
            <div className="relative w-[400px] h-[600px] perspective-1000">
              {LeftPageComponent ? (
                <div className="magazine-page bg-white shadow-2xl rounded-r-lg overflow-hidden transform-gpu transition-transform duration-700">
                  <LeftPageComponent onNavigate={goToPage} />
                </div>
              ) : (
                <div className="w-[400px] h-[600px]" />
              )}
            </div>

            {/* Right Page */}
            <div className="relative w-[400px] h-[600px] perspective-1000">
              {RightPageComponent ? (
                <div className="magazine-page bg-white shadow-2xl rounded-l-lg overflow-hidden transform-gpu transition-transform duration-700">
                  <RightPageComponent onNavigate={goToPage} />
                </div>
              ) : (
                <div className="w-[400px] h-[600px]" />
              )}
            </div>
          </div>
        ) : (
          /* Mobile Layout */
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative w-full h-[80vh] perspective-1000">
              {RightPageComponent && (
                <div className="magazine-page bg-white shadow-2xl rounded-lg overflow-hidden transform-gpu transition-transform duration-700">
                  <RightPageComponent onNavigate={goToPage} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSpread}
            disabled={currentSpread === 0}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSpread}
            disabled={currentSpread === spreads.length - 1}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {spreads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpread(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSpread 
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
