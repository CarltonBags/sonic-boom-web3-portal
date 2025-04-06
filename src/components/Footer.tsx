
import React from 'react';
import SonicLogo from './SonicLogo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-sonic-secondary py-12">
      <div className="sonic-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <SonicLogo size="sm" />
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-sonic-secondary hover:text-opacity-80 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sonic-secondary hover:text-opacity-80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sonic-secondary hover:text-opacity-80 transition-colors">
              Discord
            </a>
            <a href="#" className="text-sonic-secondary hover:text-opacity-80 transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center opacity-60">
          <p>&copy; {new Date().getFullYear()} Sonic Boom DAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
