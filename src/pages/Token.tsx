
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Token = () => {
  return (
    <div className="min-h-screen bg-sonic-primary pt-20">
      <Navbar />
      <main className="sonic-container py-16">
        <h1 className="text-4xl font-bold mb-8">$BOOM Token</h1>
        <p className="text-lg mb-4">
          This page will provide detailed information about the $BOOM token.
        </p>
        <div className="border-box mt-8">
          <p>Token information coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Token;
