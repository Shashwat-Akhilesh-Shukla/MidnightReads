import React, { useState } from 'react';
import './App.css'; 

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
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
      subMenuItems: ['Article', 'poem', 'novel', 'just something random'],
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
            <button type="button" onClick={() => toggleSubMenu(index)}>
              <i className={item.icon}></i>
              <p>{item.name}</p>
              {item.subMenuItems && (
                <i className={`ai-chevron-down-small ${activeSubMenu === index ? 'rotate-icon' : ''}`}></i>
              )}
            </button>
            {item.subMenuItems && (
              <div className="sub-menu" style={{ maxHeight: activeSubMenu === index ? '500px' : '0', overflow: 'hidden' }}>
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
