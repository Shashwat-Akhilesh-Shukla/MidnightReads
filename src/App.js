import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Sidebar from './Sidebar'; // Import the Sidebar component
import './App.css'; // Import the CSS file for the App component
import Slider from './slider'; // Import the Slider component
import Horizontalslider from './horizontalslider'; // Import the Horizontalslider component
import Footer from './Footer'; // Import the Footer component
import Browse from './Browse';
import LoginSignup from './LoginSignup';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedPdf, setSelectedPdf] = useState(null); // State for selected PDF

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    closeSidebar();
  };

  const handlePdfSelect = (pdfUrl) => {
    window.open(pdfUrl, '_blank'); // Open PDF in a new window
  };

  const handleLoginSuccess = () => {
    setActiveTab('Home'); // Switch to Home tab upon successful login or signup
  };

  const images1 = [process.env.PUBLIC_URL + "/img1.jpeg", process.env.PUBLIC_URL + "/img2.jpeg", process.env.PUBLIC_URL + "/img3.jpeg", process.env.PUBLIC_URL + "/img4.jpeg", process.env.PUBLIC_URL + "/img5.jpeg", process.env.PUBLIC_URL + "/img6.jpeg", process.env.PUBLIC_URL + "/img7.jpeg", process.env.PUBLIC_URL + "/img8.jpeg", process.env.PUBLIC_URL + "/img9.jpeg", process.env.PUBLIC_URL + "/img10.jpeg"];
  const images2 = [process.env.PUBLIC_URL + "/img1.jpeg", process.env.PUBLIC_URL + "/img2.jpeg", process.env.PUBLIC_URL + "/img3.jpeg", process.env.PUBLIC_URL + "/img4.jpeg", process.env.PUBLIC_URL + "/img5.jpeg", process.env.PUBLIC_URL + "/img6.jpeg", process.env.PUBLIC_URL + "/img7.jpeg", process.env.PUBLIC_URL + "/img8.jpeg", process.env.PUBLIC_URL + "/img9.jpeg", process.env.PUBLIC_URL + "/img10.jpeg"];
  const images3 = [process.env.PUBLIC_URL + "/img1.jpeg", process.env.PUBLIC_URL + "/img2.jpeg", process.env.PUBLIC_URL + "/img3.jpeg", process.env.PUBLIC_URL + "/img4.jpeg", process.env.PUBLIC_URL + "/img5.jpeg", process.env.PUBLIC_URL + "/img6.jpeg", process.env.PUBLIC_URL + "/img7.jpeg", process.env.PUBLIC_URL + "/img8.jpeg", process.env.PUBLIC_URL + "/img9.jpeg", process.env.PUBLIC_URL + "/img10.jpeg"];
  const images4 = [process.env.PUBLIC_URL + "/img1.jpeg", process.env.PUBLIC_URL + "/img2.jpeg", process.env.PUBLIC_URL + "/img3.jpeg", process.env.PUBLIC_URL + "/img4.jpeg", process.env.PUBLIC_URL + "/img5.jpeg", process.env.PUBLIC_URL + "/img6.jpeg", process.env.PUBLIC_URL + "/img7.jpeg", process.env.PUBLIC_URL + "/img8.jpeg", process.env.PUBLIC_URL + "/img9.jpeg", process.env.PUBLIC_URL + "/img10.jpeg"];
  const images5 = [process.env.PUBLIC_URL + "/img1.jpeg", process.env.PUBLIC_URL + "/img2.jpeg", process.env.PUBLIC_URL + "/img3.jpeg", process.env.PUBLIC_URL + "/img4.jpeg", process.env.PUBLIC_URL + "/img5.jpeg", process.env.PUBLIC_URL + "/img6.jpeg", process.env.PUBLIC_URL + "/img7.jpeg", process.env.PUBLIC_URL + "/img8.jpeg", process.env.PUBLIC_URL + "/img9.jpeg", process.env.PUBLIC_URL + "/img10.jpeg"];

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} activeTab={activeTab} handleTabChange={handleTabChange} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleTabChange={handleTabChange} />

        {/* Main Content for Home and Browse Tabs */}
        <div className="content">
          {activeTab === 'Home' && (
            <>
              <Slider onPdfSelect={handlePdfSelect} />
              <Horizontalslider images={images1} title="Top from all genre" />
              <Horizontalslider images={images2} title="Top crime" />
              <Horizontalslider images={images3} title="Top mystery" />
              <Horizontalslider images={images4} title="Top thriller"/>
              <Horizontalslider images={images5} title="Top romance"/>
              <Footer />
            </>
          )}
          {activeTab === 'Browse' && (
            <div className="browse-tab">
              <Browse />
            </div>
          )}

          {activeTab === 'Profile' && (
            <div className="profile-tab">
              <LoginSignup handleTabChange={handleTabChange} />
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
