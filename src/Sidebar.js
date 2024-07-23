import React, { useState } from 'react';
import './App.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar, handleTabChange }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const menuItems = [
    { name: 'Home', icon: 'ai-home-alt1' },
    { name: 'Browse', icon: 'ai-dashboard' },
    {
      name: 'Settings',
      icon: 'ai-gear',
      subMenuItems: ['Display', 'Appearance', 'Preferences'],
    },
    {
      name: 'Write',
      icon: 'ai-folder-add',
      subMenuItems: ['Article', 'Poem', 'Novel', 'Just Something Random'],
    },
    {
      name: 'Profile',
      icon: 'ai-person',
      subMenuItems: ['Avatar', 'Theme'],
    },
    { name: 'Notifications', icon: 'ai-bell' },
    { name: 'Book Shelf', icon: 'ai-cart' },
    { name: 'Account', icon: 'ai-lock-on' },
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <header></header>
      <ul>
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <button 
              type="button" 
              onClick={() => item.subMenuItems ? toggleSubMenu(index) : handleTabChange(item.name)}
            >
              <i className={item.icon}></i>
              <p>{item.name}</p>
              {item.subMenuItems && (
                <i className={`ai-chevron-down-small ${activeSubMenu === index ? 'rotate-icon' : ''}`}></i>
              )}
            </button>
            {item.subMenuItems && (
              <div className={`sub-menu ${activeSubMenu === index ? 'open' : ''}`}>
                <ul>
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <button type="button">{subItem}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
