import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);



  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mousedown', handleMouseDown);    // Add this
        window.removeEventListener('mouseup', handleMouseUp);  
    };
  }, []);


  return (
    <>
        <motion.div
        className="fixed -top-3.5 bg-white/20 backdrop-blur-[2px] -left-4  pointer-events-none z-[9999]"
        style={{
          width: '50px',
          height: '50px',
          border: '1px solid rgba(0, 0, 0, 0.8)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 2px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 255, 255, 0.2)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 2,
        }}
      />
      
      {/* Inner circle - smaller, more opaque */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: isClicked? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
          borderRadius: '50%',
          border: '3px solid rgba(0, 0, 0, 0.8)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 16px rgba(255, 255, 55, 0.8)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 5000,
          damping: 30,
          mass: 0.2,
        }}
      />
          
      {/* Outer circle - larger, less opaque */}
      
    </>
  );
};

export default CustomCursor;
