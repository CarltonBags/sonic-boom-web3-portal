
import React, { createContext, useState, useContext } from 'react';
import { toast } from '@/hooks/use-toast';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    try {
      // Simulating wallet connection
      setTimeout(() => {
        setIsConnected(true);
        setWalletAddress("0x1234...5678");
        setBalance("1000");
        
        // Not using toast here since we already use it in WalletModal
      }, 1000);
      
      return true;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return false;
    }
  };
  
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
    setBalance("0");
    
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  return (
    <WalletContext.Provider 
      value={{
        isConnected,
        walletAddress,
        balance,
        connectWallet,
        disconnectWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
