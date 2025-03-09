import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home'; // Import Home component
import Dashboard from './pages/Dashboard'; // Import Dashboard component
import Navbar from './components/Navbar'; // Import Navbar component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* This will render the Navbar on every page */}
      <Routes>
        {/* Define your routes using the new API in React Router v6 */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
};

export default App;
