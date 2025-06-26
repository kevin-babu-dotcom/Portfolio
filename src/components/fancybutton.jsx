import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FancyButton = ({ text, to, href,icon, onClick, className = "", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
      
  }
  const handleMouseLeave = () => {setIsHovered(false);
  }

  // Extract base text color from className
  const match = className.match(/\btext-[\w\-]+\b/);
  const baseTextColor = match ? match[0] : "text-black"; // fallback to text-black
  const currentBgColor = className.includes('bg-') ? className.match(/\bbg-[\w\-]+\b/)[0] : 'bg-white'; // fallback to bg-white
  // If the button has a background color, ensure text color contrasts well
  
  // Remove the original text color from className to prevent conflicts
  const cleanedClassName = match ? className.replace(baseTextColor, '') : className;
  

  // Ensure the button has a background color
 

  // Determine the current color based on hover state
  const currentColor = isHovered 
    ? (baseTextColor === "text-white" ? "text-black" : "text-white") 
    : baseTextColor;
 
  // Base button classes
  const baseClasses = `
  flex items-center justify-center border border-black rounded-full font-gilroy
  transition-colors no-underline cursor-pointer
  inline-block overflow-hidden
  ${currentColor}
  ${cleanedClassName}

`.trim().replace(/\s+/g, ' '); // Cleans up extra spaces

  // Ripple animation styles
  
  const rippleStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    width: '100%',
    height: '0',
    backgroundColor: currentBgColor === 'bg-black' ? 'white' : 'black',
    borderRadius: '50%',
    
    transform: 'translateX(-50%)',
    transition: isHovered
      ? 'all 1.2s ease-out'
      : 'all 0.5s ease-in',
    zIndex: 0,
    ...(isHovered && {
      width: '150%',
      height: '350%',
      bottom: '-70%'
    })
  };
  

  const commonProps = {
    className: baseClasses,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: { position: 'relative' },
    ...props
  };

  const buttonContent = (
    <>
      <div style={rippleStyle}></div>
      <span style={{ position: 'relative', zIndex: 1 }} className="flex items-center justify-center w-full h-full">
        {icon && <span className="">{icon}</span>}
        {text}
        {props.children}
      </span>
    </>
  );

  // For external links
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {buttonContent}
      </a>
    );
  }

  // For internal routing
  if (to) {
    return (
      <Link
        to={to}
        {...commonProps}
      >
        {buttonContent}
      </Link>
    );
  }

  // For custom onClick handlers
  return (
    <button
      onClick={onClick}
      {...commonProps}
    >
      {buttonContent}
    </button>
  );
};

export default FancyButton;