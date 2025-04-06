
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Send } from "lucide-react";
import { toast } from '@/hooks/use-toast';

const ProposalModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleViewProposals = () => {
    navigate('/proposals');
    onClose();
  };

  const handleSubmitProposal = () => {
    navigate('/submit-proposal');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sonic-primary border border-sonic-secondary text-sonic-secondary max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Proposals</DialogTitle>
          <DialogDescription className="text-center text-sonic-secondary opacity-80">
            Choose an option below
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Button 
            onClick={handleViewProposals}
            className="flex items-center justify-center gap-2 border border-sonic-secondary hover:bg-sonic-secondary hover:text-sonic-primary transition-all"
            variant="outline"
          >
            <Eye size={18} />
            View Active & Past Proposals
          </Button>
          <Button 
            onClick={handleSubmitProposal}
            className="flex items-center justify-center gap-2 border border-sonic-secondary hover:bg-sonic-secondary hover:text-sonic-primary transition-all"
            variant="outline"
          >
            <Send size={18} />
            Submit New Proposal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProposalModal;
