import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <button className="btn btn-primary">Connect To MetaMask</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
