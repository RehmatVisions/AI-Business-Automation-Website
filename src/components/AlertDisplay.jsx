import React, { useState, useEffect } from 'react';
import { useAlert } from '../contexts/AlertContext';

// Alert types with their configurations
const ALERT_TYPES = {
  success: {
    bgColor: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-400',
    icon: (
      <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  error: {
    bgColor: 'from-red-500 to-red-600',
    borderColor: 'border-red-400',
    icon: (
      <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    )
  },
  warning: {
    bgColor: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-400',
    icon: (
      <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    )
  },
  info: {
    bgColor: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-400',
    icon: (
      <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  loading: {
    bgColor: 'from-indigo-500 to-purple-500',
    borderColor: 'border-indigo-400',
    icon: (
      <svg className="w-6 h-6 flex-shrink-0 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
};

// Alert positions
const POSITIONS = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
};

// Individual Alert Component
const AlertItem = ({ alert, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  const alertConfig = ALERT_TYPES[alert.type] || ALERT_TYPES.info;
  const positionClass = POSITIONS[alert.position] || POSITIONS['top-right'];

  useEffect(() => {
    // Show alert with animation
    const showTimer = setTimeout(() => setIsVisible(true), 100);

    // Progress bar animation
    let progressTimer;
    if (alert.showProgress && alert.duration > 0) {
      const interval = 50; // Update every 50ms
      const decrement = (interval / alert.duration) * 100;
      
      progressTimer = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev - decrement;
          return newProgress <= 0 ? 0 : newProgress;
        });
      }, interval);
    }

    return () => {
      clearTimeout(showTimer);
      clearInterval(progressTimer);
    };
  }, [alert.duration, alert.showProgress]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose(alert.id);
    }, 300);
  };

  return (
    <div 
      className={`fixed ${positionClass} z-50 transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
      }`}
      style={{ maxWidth: '400px', minWidth: '320px' }}
    >
      <div className={`bg-gradient-to-r ${alertConfig.bgColor} text-white rounded-xl shadow-2xl overflow-hidden border-l-4 ${alertConfig.borderColor}`}>
        {/* Progress bar */}
        {alert.showProgress && alert.duration > 0 && (
          <div className="h-1 bg-white/20">
            <div 
              className="h-full bg-white/60 transition-all duration-50 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        
        {/* Alert content */}
        <div className="p-4">
          <div className="flex items-start space-x-3">
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
              {alertConfig.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              {alert.title && (
                <p className="font-semibold text-white mb-1 text-sm">
                  {alert.title}
                </p>
              )}
              {alert.message && (
                <p className="text-sm text-white/90 leading-relaxed">
                  {alert.message}
                </p>
              )}
            </div>
            
            {/* Close button */}
            {alert.allowClose && (
              <button
                onClick={handleClose}
                className="flex-shrink-0 ml-2 text-white/70 hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
                aria-label="Close alert"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Alert Display Component
const AlertDisplay = () => {
  const { alerts, removeAlert } = useAlert();

  return (
    <>
      {alerts.map(alert => (
        <AlertItem
          key={alert.id}
          alert={alert}
          onClose={removeAlert}
        />
      ))}
    </>
  );
};

export default AlertDisplay;