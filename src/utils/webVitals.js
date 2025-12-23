// Web Vitals monitoring for performance optimization
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Simple performance metrics without external dependencies
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        onPerfEntry({
          name: 'FCP',
          value: navigation.loadEventEnd - navigation.loadEventStart
        });
      }
    }
  }
};

// Simple performance logger
export const logPerformance = (metric) => {
  console.log(`${metric.name}: ${metric.value}ms`);
};

// Check if the page is loading slowly
export const checkPagePerformance = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      if (loadTime > 3000) {
        console.warn('Page is loading slowly:', loadTime + 'ms');
      }
    }
  }
};