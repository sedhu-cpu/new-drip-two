// ...existing code...
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SuggestionsGrid from './components/SuggestionsGrid';
import InputBox from './components/InputBox';
import './App.css';
import { Header } from './components/Header';
import { ResumeMatcher } from './components/ResumeMatcher';

function GenericPage({ title }) {
  return (
    <div className="w-full max-w-[800px] flex flex-col items-center">
      <div className="w-full bg-white/5 rounded-lg p-6 text-center text-white/90">
        {title}
      </div>
    </div>
  );
}

function RouteWrapper() {
  // A small helper to render a page based on URL params if needed
  const params = useParams();
  const section = params.section || '';
  const item = params.item || '';
  const title = `${section.replace(/-/g, ' ')} / ${item.replace(/-/g, ' ')}`;
  return <GenericPage title={decodeURIComponent(title)} />;
}

function App() {
  const [sidebarPinned, setSidebarPinned] = useState(false);

  const handleSidebarPinToggle = () => {
    setSidebarPinned(prev => !prev);
  };

  return (
    <BrowserRouter>
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
            <Routes>
              <Route index element={<SuggestionsGrid />} />
              <Route path="/" element={<SuggestionsGrid />} />

              {/* Tools */}
              <Route path="/tools/resume-matcher" element={<ResumeMatcher />} />
              <Route path="/tools/resume-formatter" element={<GenericPage title="Resume Formatter" />} />
              <Route path="/tools/job-description-improver" element={<GenericPage title="Job Description Improver" />} />
              <Route path="/tools/contract-summary" element={<GenericPage title="Contract Summary" />} />
              <Route path="/tools/policy-qa" element={<GenericPage title="Policy QA" />} />

              {/* Recent Chats */}
              <Route path="/recent-chats/todays-conversation" element={<GenericPage title="Today's conversation" />} />
              <Route path="/recent-chats/yesterdays-chat" element={<GenericPage title="Yesterday's chat" />} />
              <Route path="/recent-chats/code-review-session" element={<GenericPage title="Code review session" />} />
              <Route path="/recent-chats/project-planning" element={<GenericPage title="Project planning" />} />

              {/* Settings */}
              <Route path="/settings/preferences" element={<GenericPage title="Preferences" />} />
              <Route path="/settings/help-support" element={<GenericPage title="Help & Support" />} />
              <Route path="/settings/theme" element={<GenericPage title="Theme" />} />

              {/* generic catch-all using params if you add more */}
              <Route path="/:section/:item" element={<RouteWrapper />} />

              {/* fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <div className="w-full max-w-[800px] flex flex-col items-center">
            <InputBox />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
// ...existing code...