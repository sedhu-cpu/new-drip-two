import React, { useState, useEffect, useRef } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isVisible, isPinned, onPinToggle, onVisibilityChange }) => {
  const sidebarRef = useRef(null);
  const triggerRef = useRef(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const handleTriggerEnter = () => {
      if (!isPinned) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        onVisibilityChange(true);
      }
    };

    const handleSidebarEnter = () => {
      if (!isPinned) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        onVisibilityChange(true);
      }
    };

    const handleTriggerLeave = (e) => {
      if (!isPinned) {
        // Check if mouse is moving into the sidebar
        const sidebarRect = sidebarRef.current?.getBoundingClientRect();
        if (sidebarRect && e.clientX < sidebarRect.right) {
          return; // Don't hide if moving into sidebar
        }
        
        const timeout = setTimeout(() => {
          onVisibilityChange(false);
        }, 150);
        setHoverTimeout(timeout);
      }
    };

    const handleSidebarLeave = (e) => {
      if (!isPinned) {
        // Check if mouse is moving back to trigger area
        if (e.clientX <= 20) {
          return; // Don't hide if moving back to trigger
        }
        
        const timeout = setTimeout(() => {
          onVisibilityChange(false);
        }, 150);
        setHoverTimeout(timeout);
      }
    };

    const triggerElement = triggerRef.current;
    const sidebarElement = sidebarRef.current;

    if (triggerElement) {
      triggerElement.addEventListener('mouseenter', handleTriggerEnter);
      triggerElement.addEventListener('mouseleave', handleTriggerLeave);
    }

    if (sidebarElement) {
      sidebarElement.addEventListener('mouseenter', handleSidebarEnter);
      sidebarElement.addEventListener('mouseleave', handleSidebarLeave);
    }

    return () => {
      if (triggerElement) {
        triggerElement.removeEventListener('mouseenter', handleTriggerEnter);
        triggerElement.removeEventListener('mouseleave', handleTriggerLeave);
      }
      if (sidebarElement) {
        sidebarElement.removeEventListener('mouseenter', handleSidebarEnter);
        sidebarElement.removeEventListener('mouseleave', handleSidebarLeave);
      }
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [isPinned, onVisibilityChange, hoverTimeout]);

  const handlePinClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Clear any pending hide timeouts
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    onPinToggle();
  };

  return (
    <>
      {/* Hover trigger area */}
      <div ref={triggerRef} className="sidebar-trigger" />
      
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`sidebar ${isVisible ? 'show' : ''} ${isPinned ? 'pinned' : ''}`}
      >
        <div className="sidebar-header">
          <div className="sidebar-title">Navigation</div>
          <button 
            className={`pin-button ${isPinned ? 'pinned' : ''}`}
            onClick={handlePinClick}
            title={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
          >
            <PinIcon />
          </button>
        </div>
        
        <div className="sidebar-content">
          <SidebarSection title="Recent Chats">
            <SidebarItem icon={<ChatIcon />} active>
              Today's conversation
            </SidebarItem>
            <SidebarItem icon={<ChatIcon />}>
              Yesterday's chat
            </SidebarItem>
            <SidebarItem icon={<ChatIcon />}>
              Code review session
            </SidebarItem>
            <SidebarItem icon={<ChatIcon />}>
              Project planning
            </SidebarItem>
          </SidebarSection>
          
          <SidebarSection title="Tools">
            <SidebarItem icon={<CodeIcon />}>
              Code Generator
            </SidebarItem>
            <SidebarItem icon={<UploadIcon />}>
              File Upload
            </SidebarItem>
            <SidebarItem icon={<TemplateIcon />}>
              Templates
            </SidebarItem>
            <SidebarItem icon={<SearchIcon />}>
              Search History
            </SidebarItem>
          </SidebarSection>
          
          <SidebarSection title="Settings">
            <SidebarItem icon={<SettingsIcon />}>
              Preferences
            </SidebarItem>
            <SidebarItem icon={<HelpIcon />}>
              Help & Support
            </SidebarItem>
            <SidebarItem icon={<ThemeIcon />}>
              Theme
            </SidebarItem>
          </SidebarSection>
        </div>
      </div>
    </>
  );
};

// Reusable sidebar section component
const SidebarSection = ({ title, children }) => (
  <div className="sidebar-section">
    <div className="sidebar-section-title">{title}</div>
    {children}
  </div>
);

// Reusable sidebar item component
const SidebarItem = ({ icon, children, active = false, onClick }) => (
  <div 
    className={`sidebar-item ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {icon}
    {children}
  </div>
);

// Icon components
const PinIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 12V4a4 4 0 00-8 0v8c0 .55-.45 1-1 1s-1-.45-1-1V4a6 6 0 0112 0v8c0 .55-.45 1-1 1s-1-.45-1-1z"/>
    <path d="M9 12h6l-3 9-3-9z"/>
  </svg>
);

const ChatIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 12h8M8 8h8M8 16h6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
  </svg>
);

const CodeIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 2v20M14 2v20M4 7h16M4 17h16"/>
  </svg>
);

const UploadIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
  </svg>
);

const TemplateIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>
  </svg>
);

const SearchIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const SettingsIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
);

const HelpIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
  </svg>
);

const ThemeIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

export default Sidebar;