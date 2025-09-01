// ...existing code...
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SuggestionsGrid from './components/SuggestionsGrid';
import InputBox from './components/InputBox';
import './App.css';
import { Header } from './components/Header';

function App() {
  const [sidebarPinned, setSidebarPinned] = useState(false);

  const handleSidebarPinToggle = () => {
    setSidebarPinned(prev => !prev);
  };

  return (
    <div className="flex h-screen relative font-sans overflow-hidden">
      <Sidebar
        isPinned={sidebarPinned}
        onPinToggle={handleSidebarPinToggle}
      />

      <div
        className={`flex-1 flex flex-col items-center justify-center p-10 min-h-screen transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${sidebarPinned ? 'ml-[280px] max-md:ml-[260px]' : ''
          }`}
      >
        <div className="w-full max-w-[800px] flex flex-col items-center mb-12">
          <Header />
        </div>

        <div className="w-full max-w-[800px] flex flex-col items-center mb-12">
          <SuggestionsGrid />
        </div>

        <div className="w-full max-w-[800px] flex flex-col items-center">
          <InputBox />
        </div>
      </div>
    </div>
  );
}

export default App;
// ...existing code...