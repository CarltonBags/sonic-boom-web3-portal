
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Proposals = () => {
  return (
    <div className="min-h-screen bg-sonic-primary pt-20">
      <Navbar />
      <main className="sonic-container py-16">
        <h1 className="text-4xl font-bold mb-8">Proposals</h1>
        <p className="text-lg mb-4">
          This page will display active and past proposals for Sonic Boom DAO.
        </p>
        <div className="border-box mt-8">
          <p>Proposals content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proposals;
