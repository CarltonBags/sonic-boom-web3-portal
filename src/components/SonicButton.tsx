
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

const SonicButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  showArrow = true,
  className = ''
}) => {
  return (
    <button 
      onClick={onClick} 
      className={`sonic-button ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-4" size={24} />}
    </button>
  );
};

export default SonicButton;
