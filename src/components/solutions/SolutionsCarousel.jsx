import React, { useState, useEffect, useCallback } from 'react';
import SolutionCard from './SolutionCard';

const SolutionsCarousel = ({ solutions, autoPlay = true, autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Enhanced auto-play functionality
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === solutions.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [solutions.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? solutions.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [solutions.length, isTransitioning]);

  // Auto-play effect with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  // Enhanced touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false); // Pause auto-play on touch
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Enhanced keyboard navigation
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case ' ':
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
        break;
      case 'Home':
        e.preventDefault();
        setCurrentIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setCurrentIndex(solutions.length - 1);
        break;
    }
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="lg:hidden relative"> {/* Only show on mobile/tablet */}
      {/* Carousel Header */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Solution {currentIndex + 1} of {solutions.length}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto"></div>
      </div>

      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(autoPlay)}
        tabIndex={0}
        role="region"
        aria-label="Solutions carousel"
        aria-live="polite"
      >
        {/* Carousel Container with Enhanced Animation */}
        <div 
          className="flex transition-all duration-700 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
          }}
        >
          {solutions.map((solution, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6">
              <SolutionCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                ctaText={solution.ctaText}
                onCtaClick={solution.onCtaClick}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-indigo-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-indigo-200 focus:outline-none group"
          aria-label="Previous solution"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-indigo-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-indigo-200 focus:outline-none group"
          aria-label="Next solution"
        >
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Enhanced Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm hover:bg-white text-indigo-700 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-indigo-200 focus:outline-none group"
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-5 4h1m4 0h1" />
            </svg>
          )}
        </button>
      </div>

      {/* Enhanced Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded-full ${
              index === currentIndex 
                ? 'w-8 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 scale-110' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
            aria-label={`Go to solution ${index + 1}`}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse opacity-50" />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      {isAutoPlaying && (
        <div className="mt-6 bg-gray-200 rounded-full h-1.5 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full transition-all duration-100 ease-linear relative overflow-hidden"
            style={{ 
              width: `${((currentIndex + 1) / solutions.length) * 100}%`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      )}

      {/* Enhanced Instructions */}
      <div className="text-center mt-6 space-y-2">
        <p className="text-sm text-gray-500">
          Swipe or use arrow keys to navigate
        </p>
        <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600">←</kbd>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600">→</kbd>
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600">Space</kbd>
            Pause/Play
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolutionsCarousel;