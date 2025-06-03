
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoverPage from './pages/CoverPage';
import CurrentSituationPage from './pages/Page1-Current';
import PreviousWorkPage from './pages/Page2-Previous';
import Project1Page from './pages/Page3-Project1';
import Project2Page from './pages/Page4-Project2';
import OtherPage from './pages/Page5-Other';
import InterestsPage from './pages/Page6-Interests';
import BackPage from './pages/BackPage';

const Magazine = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const pages = [
    { component: CoverPage},
    { component: CurrentSituationPage},
    { component: PreviousWorkPage},
    { component: Project1Page},
    { component: Project2Page},
    { component: OtherPage},
    { component: InterestsPage },
    { component: BackPage}
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
      spreads.push({ left: 7, right:  null});
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
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black h-full flex items-center justify-center">
      {/* Desktop Layout */}
      {!isMobile ? (
        <div className="flex justify-center items-center h-full flex flex-grow">
          {/* Left Page */}
          <div className="w-1/2 h-full flex items-center justify-end">
            {LeftPageComponent ? (
                <LeftPageComponent onNavigate={goToPage} />
              
            ) : (
              <div className="w-1/2 h-full" />
            )}
          </div>

          {/* Right Page */}
          <div className="w-1/2 h-full flex items-center justify-start">
            {RightPageComponent ? (
                <RightPageComponent onNavigate={goToPage} />
              
            ) : (
              <div className="w-1/2  h-full" />
            )}
          </div>
        </div>
      ) : (
        /* Mobile Layout */
        <div className="max-w-md mx-auto flex items-center justify-center">
          <div className="flex items-center justify-center">
            {RightPageComponent && (
                <RightPageComponent onNavigate={goToPage}/>
              
            )}
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 flex items-center">
        <button
          onClick={prevSpread}
          disabled={currentSpread === 0}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute bottom-12 right-0 flex items-center">
        <button
          onClick={nextSpread}
          disabled={currentSpread === spreads.length - 1}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
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
}
export default Magazine;
