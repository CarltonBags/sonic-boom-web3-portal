
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SonicButton = ({ 
  children, 
  onClick, 
  showArrow = true,
  className = ''
}) => {
  return (
    <button 
      onClick={onClick} 
      className={`action-button ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="right-arrow" size={32} strokeWidth={2} />}
    </button>
  );
};

export default SonicButton;
