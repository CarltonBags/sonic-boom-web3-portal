
import React from 'react';
import SonicLogo from './SonicLogo';
import SonicButton from './SonicButton';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const featuresSection = document.querySelector('#features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#9b87f5] opacity-5 rounded-full blur-[150px] transform -translate-x-1/4"></div>
      
      <div className="sonic-container z-10">
        <div className="border-box max-w-3xl mx-auto flex flex-col items-center animate-fade-in">
          {/* Logo in top right */}
          <div className="absolute -top-6 -right-6">
            <SonicLogo size="md" className="animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
            Sonic <span className="text-[#9b87f5]">Boom</span> DAO
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-2xl text-center">
            Growing the SONIC ecosystem long term. Join and grow with us. <span className="text-[#9b87f5] font-bold">Boom!</span>
          </p>

          <SonicButton 
            onClick={scrollToNextSection} 
            className="w-full md:w-auto mt-6 hover-scale"
          >
            Explore More
          </SonicButton>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-sonic-secondary" size={32} onClick={scrollToNextSection} />
      </div>
    </section>
  );
};

export default HeroSection;
