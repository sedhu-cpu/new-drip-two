import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SuggestionsGrid from './components/SuggestionsGrid';
import InputBox from './components/InputBox';
import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);

  const handleSidebarVisibilityChange = (visible) => {
    setSidebarVisible(visible);
  };

  const handleSidebarPinToggle = () => {
    const newPinnedState = !sidebarPinned;
    setSidebarPinned(newPinnedState);
    
    // If we're pinning, make sure sidebar is visible
    if (newPinnedState) {
      setSidebarVisible(true);
    }
  };

  return (
    <div className="app-container" >
      <Sidebar 
        isVisible={sidebarVisible}
        isPinned={sidebarPinned}
        onPinToggle={handleSidebarPinToggle}
        onVisibilityChange={handleSidebarVisibilityChange}
      />
      
      <div className={`main-content ${sidebarPinned ? 'shifted' : ''}`}>
        <div className="content-section">
          <Header />
        </div>
        
        <div className="content-section">
          <SuggestionsGrid />
        </div>
        
        <div className="content-section">
          <InputBox />
        </div>
      </div>
    </div>
  );
}

export default App;