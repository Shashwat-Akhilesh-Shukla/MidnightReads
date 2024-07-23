import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Sidebar from './Sidebar'; // Import the Sidebar component
import './App.css'; // Import the CSS file for the App component
import Slider from './slider'; // Import the Slider component
import Horizontalslider from './horizontalslider'; // Import the Horizontalslider component
import Footer from './Footer'; // Import the Footer component
import PdfViewerModal from './PdfViewerModal'; // Import the PdfViewerModal component

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
  };

  const handlePdfSelect = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  const images1 = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"];
  const images2 = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"];
  const images3 = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"];
  const images4 = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"];
  const images5 = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"];

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} activeTab={activeTab} handleTabChange={handleTabChange} />
      <Sidebar isSidebarOpen={isSidebarOpen}/>
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
            {/* Render your Browse component or content here */}
          </div>
        )}
      </div>
      {selectedPdf && <PdfViewerModal pdfUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />}
    </div>
  );
}

export default App;
