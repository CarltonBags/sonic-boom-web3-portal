
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProposalModal from '@/components/ProposalModal';
import { Button } from '@/components/ui/button';
import { Eye, Send } from 'lucide-react';

const Proposals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-sonic-primary pt-20">
      <Navbar />
      <main className="sonic-container py-16">
        <h1 className="text-4xl font-bold mb-8">Proposals</h1>
        <p className="text-lg mb-8">
          Sonic Boom DAO uses a community-driven approach to decide on investments. 
          View active proposals, check past investment decisions, or submit your own proposal.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <Button
            onClick={openModal}
            className="flex-1 flex items-center justify-center gap-2 text-lg py-6 border border-sonic-secondary hover:bg-sonic-secondary hover:text-sonic-primary transition-all"
            variant="outline"
          >
            <Eye size={20} />
            View Proposals
          </Button>
          
          <Button
            onClick={openModal} 
            className="flex-1 flex items-center justify-center gap-2 text-lg py-6 border border-sonic-secondary hover:bg-sonic-secondary hover:text-sonic-primary transition-all"
            variant="outline"
          >
            <Send size={20} />
            Submit Proposal
          </Button>
        </div>
        
        <div className="border border-sonic-secondary p-6 mt-12 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">How Proposals Work</h2>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Community members submit project proposals with detailed information</li>
            <li>The DAO council reviews all submissions during a 3-day voting period</li>
            <li>Approved proposals receive funding according to the terms specified</li>
            <li>Funded projects provide regular updates to the community</li>
          </ol>
        </div>
      </main>
      <Footer />
      <ProposalModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Proposals;
