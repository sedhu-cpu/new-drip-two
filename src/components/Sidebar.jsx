import React from 'react';
import { FaThumbtack } from 'react-icons/fa';

const Sidebar = ({ isPinned, onPinToggle }) => {
  const sections = {
    "Recent Chats": ["Today's conversation", "Yesterday's chat", "Code review session", "Project planning"],
    "Tools": ["Resume Matcher", "Resume Formatter", "Job Description Improver", "Contract Summary", "Policy QA"],
    "Settings": ["Preferences", "Help & Support", "Theme"],
  };

  return (
    <div className="sidebar-hover-area">
      <div className={`sidebar ${isPinned ? 'pinned' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Navigation</h2>
            <button 
              className={`pin-button ${isPinned ? 'pinned' : ''}`} 
              onClick={onPinToggle}
              title={isPinned ? "Unpin Sidebar" : "Pin Sidebar"}
            >
              <FaThumbtack />
            </button>
          </div>
          {Object.entries(sections).map(([section, items]) => (
            <div key={section} className="sidebar-section">
              <h3 className="sidebar-section-title">{section}</h3>
              {items.map((item, index) => (
                <div key={index} className={`sidebar-item ${item === "Today's conversation" ? 'active' : ''}`}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;