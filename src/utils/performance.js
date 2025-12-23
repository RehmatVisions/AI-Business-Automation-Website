// Performance utilities for optimized website functionality

// Performance monitoring and metrics
export const performanceMonitor = {
  // Track page load performance
  trackPageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
      });
    }
  },

  // Track component render performance
  trackComponentRender: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    console.log(`${componentName} render time: ${end - start}ms`);
    return result;
  }
};

// Intersection Observer utility with performance optimizations
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce utility for performance optimization
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle utility for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading utility
export const lazyLoad = (target, callback, options = {}) => {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '100px', ...options }
  );

  if (target) {
    observer.observe(target);
  }

  return observer;
};

// Preload critical resources
export const preloadResource = (href, as = 'script', crossorigin = null) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (crossorigin) link.crossOrigin = crossorigin;
  document.head.appendChild(link);
};

// Image optimization utility
export const optimizeImage = (src, width, height, quality = 85) => {
  // For production, you would integrate with image optimization services
  // This is a placeholder for the optimization logic
  return src;
};

// Memory cleanup utility
export const cleanup = (...cleanupFunctions) => {
  return () => {
    cleanupFunctions.forEach(fn => {
      if (typeof fn === 'function') {
        try {
          fn();
        } catch (error) {
          console.warn('Cleanup function failed:', error);
        }
      }
    });
  };
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

// Viewport detection
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Reduce motion preference detection
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};