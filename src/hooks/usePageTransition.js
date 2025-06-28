import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [transitionText, setTransitionText] = useState('Hi!');
  const location = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Set transition text based on current route
    const getTransitionText = () => {
      switch (location.pathname) {
        case '/projects':
          return 'PROJECTS';
        case '/resume':
          return 'RESUME';
        case '/contact':
          return 'CONTACT';
        case '/':
        default:
          return 'Hi!';
      }
    };

    setTransitionText(getTransitionText());
    
    // Show transition
    setIsTransitioning(true);

    // Different timing for initial load vs navigation
    const transitionDuration = isInitialLoad.current ? 2100 : 1300;
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);

    // Mark that initial load is complete
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    }

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { 
    isTransitioning, 
    transitionText, 
    setIsTransitioning,
    isInitialLoad: isInitialLoad.current 
  };
};
