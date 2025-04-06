
import React from 'react';
import SonicButton from './SonicButton';

const CallToAction: React.FC = () => {
  return (
    <section className="py-8">
      <div className="sonic-container">
        <SonicButton className="w-full md:w-auto">
          Get involved now!
        </SonicButton>
      </div>
    </section>
  );
};

export default CallToAction;
