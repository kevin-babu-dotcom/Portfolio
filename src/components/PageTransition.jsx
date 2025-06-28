import React from 'react';
import { AnimatePresence } from 'framer-motion';
import TransitionPage from './TransitionPage';
import { usePageTransition } from '../hooks/usePageTransition';

const PageTransition = ({ children }) => {
  const { isTransitioning, transitionText, setIsTransitioning } = usePageTransition();

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <TransitionPage 
            key="transition"
            text={transitionText}
            onComplete={() => setIsTransitioning(false)}
          />
        )}
      </AnimatePresence>
      <div 
        className='h-full w-full flex flex-col'
        style={{ 
          opacity: isTransitioning ? 0 : 1, 
          transition: 'opacity 0.1s ease-in-out' 
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
