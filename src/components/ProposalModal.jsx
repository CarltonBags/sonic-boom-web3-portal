
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import SonicButton from './SonicButton';

const ProposalModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleViewProposals = () => {
    // Here you would implement the logic to view proposals
    console.log("Viewing proposals");
    onClose();
  };

  const handleSubmitProposal = () => {
    // Navigate to the submit proposal page
    navigate('/submit-proposal');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sonic-primary border border-sonic-secondary p-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Proposals</h2>
          <button onClick={onClose} className="text-sonic-secondary opacity-70 hover:opacity-100">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg">What would you like to do?</p>
          
          <SonicButton 
            onClick={handleViewProposals}
            className="w-full"
          >
            View active and past proposals
          </SonicButton>
          
          <SonicButton 
            onClick={handleSubmitProposal}
            className="w-full"
          >
            Submit new proposal
          </SonicButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProposalModal;
