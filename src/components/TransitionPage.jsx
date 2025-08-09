import React from 'react';
import { motion } from 'framer-motion';
import './TransitionPage.css';

const TransitionPage = ({ text = "Hi I'm Kevin Babu", onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-start pt-50 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="text-center px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.8, opacity: 1 }}
        exit={{ scale: 3, opacity: 0 }} 
        transition={{ 
          duration: 0.6, 
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        onAnimationComplete={(definition) => {
          // Call onComplete when exit animation finishes
          if (definition.opacity === 0 && onComplete) {
            onComplete();
          }
        }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-12xl font-bold text-white tracking-wider leading-none transition-text"
          style={{ fontFamily: 'gilroy, sans-serif' }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0, 
            ease: [0.43, 0.13, 0.23, 0.96] 
          }}
        >
          {text}
        </motion.h1>
        
        {/* Animated underline */}
        <motion.div
          className="w-24 sm:w-32 md:w-40 h-0.5 sm:h-1 bg-white mx-auto mt-4 sm:mt-6 md:mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5, 
            ease: [0.43, 0.13, 0.23, 0.96] 
          }}
        /> */

        {/* Optional loading dots */}
        /* <motion.div
          className="flex justify-center space-x-2 mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TransitionPage;
