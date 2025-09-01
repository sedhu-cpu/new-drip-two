import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SuggestionsGrid from './components/SuggestionsGrid';
import InputBox from './components/InputBox';
import './App.css';

function App() {
  const [sidebarPinned, setSidebarPinned] = useState(false);

  const handleSidebarPinToggle = () => {
    const newPinnedState = !sidebarPinned;
    console.log("Sidebar pin toggled to:", newPinnedState);
    setSidebarPinned(newPinnedState);
  };

  return (
    <div className="app-container">
      <Sidebar 
        isPinned={sidebarPinned}
        onPinToggle={handleSidebarPinToggle}
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