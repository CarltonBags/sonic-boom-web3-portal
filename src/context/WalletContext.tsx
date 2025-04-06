
import React, { createContext, useState, useContext } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Mock wallet connection - in a real app, this would interact with actual blockchain wallets
  const connectWallet = async () => {
    // Simulate connecting to wallet
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsConnected(true);
        setWalletAddress('0x1234...5678'); // Example truncated address
        resolve();
      }, 1000);
    });
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
  };

  return (
    <WalletContext.Provider value={{ isConnected, walletAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
