import React from 'react';
import './App.css';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = ({ toggleSidebar, activeTab, handleTabChange }) => {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar}>
        <i className="ai-three-line-horizontal"></i>
      </button>
      
      {/* Left-side navigation items */}
      <ul className="nav-left">
        <li className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabChange('Home')}>
          Home
        </li>
        <li className={activeTab === 'Browse' ? 'active' : ''} onClick={() => handleTabChange('Browse')}>
          Browse
        </li>
      </ul>

      {/* Right-side Profile icon */}
      <div className="profile-icon" onClick={() => handleTabChange('Profile')}>
        <AiOutlineUser className="profile-icon-style" />
      </div>
    </nav>
  );
};

export default Navbar;
