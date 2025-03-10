import React, { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";

// Define the Web3 context type
interface Web3ContextType {
  account: string | null;
  connectMetaMask: () => Promise<void>;
  isConnected: boolean;
  disconnectMetaMask: () => void; 

}

// Create the context
const Web3Context = createContext<Web3ContextType | undefined>(undefined);

// Web3Provider Component
export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Function to connect MetaMask
  const connectMetaMask = async () => {
    if (typeof (window as any).ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      console.error("MetaMask is not installed.");
    }
  };

  // Function to disconnect MetaMask
  const disconnectMetaMask = () => {
    setAccount(null);
    alert("Disconnected! To fully remove connection, go to MetaMask > Connected Sites and remove this site.");  };

  // Auto-connect if previously connected
  useEffect(() => {
    if ((window as any).ethereum?.selectedAddress) {
      setAccount((window as any).ethereum.selectedAddress);
      setIsConnected(true);
    }
  }, []);

  return (
    <Web3Context.Provider value={{ account, connectMetaMask, isConnected, disconnectMetaMask }}>
      {children}
    </Web3Context.Provider>
  );
};

// Custom hook to use Web3Context
export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
};
