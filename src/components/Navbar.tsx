
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SonicLogo from './SonicLogo';
import { useWallet } from '@/context/WalletContext';
import WalletModal from './WalletModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const { isConnected, walletAddress, disconnectWallet } = useWallet();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const handleWalletClick = () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      openWalletModal();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sonic-primary border-b border-sonic-secondary">
      <div className="sonic-container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <SonicLogo size="sm" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/docs" className="text-sonic-secondary hover:text-opacity-80 transition-colors">Docs</Link>
          <Link to="/proposals" className="text-sonic-secondary hover:text-opacity-80 transition-colors">Proposals</Link>
          <Link to="/token" className="text-sonic-secondary hover:text-opacity-80 transition-colors">$BOOM</Link>
        </div>

        {/* Connect Button */}
        <div className="hidden md:flex">
          <button 
            onClick={handleWalletClick}
            className="border border-sonic-secondary px-4 py-2 text-sonic-secondary hover:bg-sonic-secondary hover:text-sonic-primary transition-all duration-300"
          >
            {isConnected ? walletAddress?.substring(0, 6) + '...' + walletAddress?.substring(walletAddress.length - 4) : 'CONNECT'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-sonic-secondary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-sonic-primary border-t border-sonic-secondary animate-fade-in">
          <div className="sonic-container py-4 flex flex-col space-y-4">
            <Link to="/docs" className="text-sonic-secondary py-2 hover:text-opacity-80 transition-colors">Docs</Link>
            <Link to="/proposals" className="text-sonic-secondary py-2 hover:text-opacity-80 transition-colors">Proposals</Link>
            <Link to="/token" className="text-sonic-secondary py-2 hover:text-opacity-80 transition-colors">$BOOM</Link>
            <button 
              onClick={handleWalletClick}
              className="border border-sonic-secondary py-2 text-sonic-secondary hover:bg-sonic-secondary hover:text-sonic-primary transition-all duration-300"
            >
              {isConnected ? walletAddress?.substring(0, 6) + '...' + walletAddress?.substring(walletAddress.length - 4) : 'CONNECT'}
            </button>
          </div>
        </div>
      )}

      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={closeWalletModal} 
      />
    </nav>
  );
};

export default Navbar;
