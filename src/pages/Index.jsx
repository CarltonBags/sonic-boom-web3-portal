
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallToAction from '@/components/CallToAction';
import Treasury from '@/components/Treasury';
import ActionButtons from '@/components/ActionButtons';
import Footer from '@/components/Footer';
import WalletModal from '@/components/WalletModal';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  // Example of how to use the toast (using imported toast function, not hook)
  const showToast = () => {
    toast({
      title: "Action performed",
      description: "Your request has been processed",
    });
  };

  return (
    <div className="min-h-screen bg-sonic-primary">
      <Navbar />
      <main>
        <HeroSection />
        <div id="features-section">
          <FeaturesSection />
        </div>
        <CallToAction />
        <Treasury />
        <ActionButtons />
      </main>
      <Footer />
      
      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={closeWalletModal} 
      />
    </div>
  );
};

export default Index;
