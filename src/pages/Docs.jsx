
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Docs = () => {
  return (
    <div className="min-h-screen bg-sonic-primary pt-20">
      <Navbar />
      <main className="sonic-container py-16">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <p className="text-lg mb-4">
          This page will contain comprehensive documentation for Sonic Boom DAO.
        </p>
        <div className="border-box mt-8">
          <p>Documentation content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
