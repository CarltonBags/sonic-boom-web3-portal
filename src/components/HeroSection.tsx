
import React from 'react';
import SonicLogo from './SonicLogo';
import SonicButton from './SonicButton';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center">
      <div className="sonic-container">
        <div className="border-box max-w-3xl mx-auto flex flex-col items-center">
          {/* Logo in top right */}
          <div className="absolute -top-6 -right-6">
            <SonicLogo size="md" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">Sonic Boom DAO</h1>
          
          <p className="text-lg md:text-xl mb-6 opacity-80 max-w-2xl text-center">
            Growing the SONIC ecosystem long term. Join and grow with us. Boom!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
