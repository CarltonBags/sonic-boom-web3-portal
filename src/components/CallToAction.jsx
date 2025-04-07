
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-8">
      <div className="sonic-container">
        <div className="action-button">
          <span className="text-xl md:text-2xl font-bold">Get involved now!</span>
          <ArrowRight className="right-arrow" size={32} strokeWidth={2} />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
