import React, { useState, useRef, useEffect } from 'react';

const SolutionCard = ({ 
  icon, 
  title, 
  description, 
  features = [],
  ctaText = "Get Started",
  onCtaClick,
  delay = 0,
  index = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const cardId = `solution-${title.replace(/\s+/g, '-').toLowerCase()}`;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isHovered ? '-translate-y-2 scale-105' : ''} ${
        isExpanded ? 'ring-2 ring-indigo-200 shadow-indigo-100' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="article"
      aria-labelledby={`${cardId}-title`}
    >
      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Floating Badge */}
      <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transition-all duration-500 ${
        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
      }`}>
        {index + 1}
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        {/* Card Header */}
        <div className="text-center">
          {/* Animated Icon with Glow Effect */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-xl transition-all duration-500 ${
              isHovered ? 'opacity-30 scale-110' : 'opacity-0 scale-100'
            }`} />
            <div className={`relative text-5xl transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
            }`}>
              {icon}
            </div>
          </div>
          
          <h3 id={`${cardId}-title`} className="text-xl font-semibold text-gray-800 mb-6 group-hover:text-indigo-700 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Enhanced Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-800 transition-all duration-300 flex items-center justify-center mx-auto gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-indigo-200 focus:outline-none"
            aria-expanded={isExpanded}
            aria-controls={cardId}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title} details`}
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10">{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <svg 
              className={`relative z-10 w-4 h-4 transition-transform duration-500 ${
                isExpanded ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Collapsible Content with Enhanced Animation */}
        <div 
          id={cardId}
          className={`overflow-hidden transition-all duration-700 ease-out ${
            isExpanded ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="pt-6 border-t border-gray-200">
            {/* Description with Fade-in Effect */}
            <div className={`transition-all duration-500 delay-100 ${
              isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {description}
              </p>
            </div>
            
            {/* Enhanced Features List */}
            {features.length > 0 && (
              <div className={`mb-6 transition-all duration-500 delay-200 ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3 animate-pulse"></div>
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-start group/feature transition-all duration-300 delay-${featureIndex * 50} ${
                        isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/feature:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm group-hover/feature:text-gray-800 transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Enhanced CTA Button */}
            {onCtaClick && (
              <div className={`transition-all duration-500 delay-300 ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <button
                  onClick={onCtaClick}
                  className="w-full relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-indigo-200 focus:outline-none group/cta overflow-hidden"
                  aria-label={`${ctaText} for ${title}`}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {ctaText}
                    <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute top-4 left-4 w-2 h-2 bg-indigo-400 rounded-full transition-all duration-500 ${
        isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
      }`} />
      <div className={`absolute bottom-4 right-4 w-1 h-1 bg-purple-400 rounded-full transition-all duration-700 ${
        isHovered ? 'scale-200 opacity-100' : 'scale-100 opacity-30'
      }`} />
    </div>
  );
};

export default SolutionCard;