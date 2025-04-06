
import React from 'react';

const SonicLogo = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
  };

  return (
    <img 
      src="/lovable-uploads/da5f2615-2326-4c09-9c4a-ef96a76ee58b.png" 
      alt="Sonic Boom Logo" 
      className={`sonic-logo ${sizeClasses[size]} ${className}`} 
    />
  );
};

export default SonicLogo;
