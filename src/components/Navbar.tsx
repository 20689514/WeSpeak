// import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3 } from '../context/Web3Context';
// import { useState } from "react";


const Navbar = () => {

  // const [account, setAccount] = useState<string | null>(null);

  // const connectMetaMask = async () => {
  //   if (typeof (window as any).ethereum !== "undefined") {
  //     try {
  //       const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  //       alert("Connected to MetaMask: " + accounts[0]);
  //     } catch (error) {
  //       console.error("Error connecting to MetaMask", error);
  //     }
  //   } else {
  //     console.error("MetaMask is not installed or accessible.");
  //   }
  // };
  const { account, connectMetaMask, isConnected, disconnectMetaMask } = useWeb3();

  return (
    <div>
      <div className="container-fluid bg-dark">
        <nav className="container navbar navbar-expand navbar-dark text-light justify-content-between">
          <div>
            <h2>WeSpeak</h2>
          </div>

          <div className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link> {/* Link to home route */}
            <Link to="/dashboard" className="nav-link">Dashboard</Link> {/* Link to dashboard route */}
          </div>

          <div>
            <button className="btn btn-primary" onClick={connectMetaMask}> {isConnected ? `Connected: ${account?.slice(0, 6)}...${account?.slice(-4)}` : "Connect MetaMask"}</button>
            <button className='btn btn-danger' onClick={disconnectMetaMask}>Disconnect</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
