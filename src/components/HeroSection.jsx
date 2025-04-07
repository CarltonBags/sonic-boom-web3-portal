
import React from 'react';
import SonicLogo from './SonicLogo';

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] pt-32 pb-16 flex flex-col items-center justify-center">
      <div className="sonic-container">
        <div className="border-box max-w-3xl mx-auto relative">
          {/* Logo in top right */}
          <div className="absolute -top-6 -right-6">
            <SonicLogo size="md" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sonic Boom DAO</h1>
          
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Growing the SONIC ecosystem long term. Join and grow with us. Boom!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
