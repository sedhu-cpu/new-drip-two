// ...existing code...
import React, { useState } from "react";
import { FaThumbtack } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isPinned, onPinToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  const sections = {
    "Recent Chats": [
      "Today's conversation",
      "Yesterday's chat",
      "Code review session",
      "Project planning",
    ],
    Tools: [
      "Resume Matcher",
      "Resume Formatter",
      "Job Description Improver",
      "Contract Summary",
      "Policy QA",
    ],
    Settings: ["Preferences", "Help & Support", "Theme"],
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <>
      <div
        className="fixed left-0 top-0 w-[20px] h-screen z-[100] bg-transparent"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => !isPinned && setIsVisible(false)}
      />

      <div
        className={`fixed top-0 h-screen w-[280px] max-md:w-[260px] bg-black/90 backdrop-blur-[20px] border-r border-white/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col z-[99] ${isPinned || isVisible
          ? "left-0"
          : "left-[-280px] max-md:left-[-260px]"
          }`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => !isPinned && setIsVisible(false)}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="text-white font-semibold text-lg">Navigation</h2>
          <button
            onClick={onPinToggle}
            className={`p-2 rounded-md transition-all duration-200 flex items-center justify-center ${isPinned
              ? "text-indigo-400 bg-indigo-200/20"
              : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            title={isPinned ? "Unpin Sidebar" : "Pin Sidebar"}
            aria-pressed={isPinned}
          >
            <FaThumbtack />
          </button>
        </div>

        <div className="flex-1 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {Object.entries(sections).map(([section, items]) => (
            <div key={section} className="mb-6">
              <h3 className="text-white/80 uppercase text-xs font-semibold mb-3">
                {section}
              </h3>
              {items.map((item, index) => {
                const to = `/${slugify(section)}/${slugify(item)}`;

                const activeClasses =
                  "bg-indigo-200/20 text-indigo-200 border-l-3 border-indigo-500 pl-[13px] transform";
                const baseClasses =
                  "flex items-center gap-3 px-4 py-3 text-sm rounded-lg mb-1 transition-all duration-200";

                return (
                  <NavLink
                    key={index}
                    to={to}
                    end
                    className={({ isActive }) =>
                      `${baseClasses} ${isActive ? activeClasses : "text-white/70 hover:text-white hover:bg-white/10"}`
                    }
                  >
                    {item}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
// ...existing code...