// Navbar.js
import React, {useState} from 'react';
import './App.css';


const Navbar = ({ toggleSidebar, activeTab, handleTabChange }) => {
  
  
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar}>
        <i className="ai-three-line-horizontal"></i>
      </button>
      <ul>
        <li className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabChange('Home')}>
          Home
        </li>
        <li className={activeTab === 'Browse' ? 'active' : ''} onClick={() => handleTabChange('Browse')}>
          Browse
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
