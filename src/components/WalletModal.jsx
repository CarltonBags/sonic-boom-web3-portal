
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useWallet } from '@/context/WalletContext';
import { toast } from '@/hooks/use-toast';

const WalletModal = ({ isOpen, onClose }) => {
  const { connectWallet } = useWallet();

  const wallets = [
    { id: 'metamask', name: 'MetaMask' },
    { id: 'walletconnect', name: 'WalletConnect' },
    { id: 'coinbase', name: 'Coinbase Wallet' },
    { id: 'phantom', name: 'Phantom' },
  ];

  const handleConnect = async (walletName) => {
    try {
      await connectWallet();
      toast({
        title: "Wallet connected",
        description: `Successfully connected to ${walletName}`,
      });
      onClose();
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sonic-primary border border-sonic-secondary p-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Connect Wallet</h2>
          <button onClick={onClose} className="text-sonic-secondary opacity-70 hover:opacity-100">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              className="w-full border border-sonic-secondary p-4 hover:bg-sonic-secondary hover:text-sonic-primary transition-all duration-300"
              onClick={() => handleConnect(wallet.name)}
            >
              {wallet.name}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
