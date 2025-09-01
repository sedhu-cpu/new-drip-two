import SuggestionCard from "../components/SuggestionCard.jsx";
import "../styles/SuggestionsGrid.css";
import { FaFileAlt, FaFileSignature, FaBriefcase, FaFileContract } from 'react-icons/fa';

const row1 = [
  { text: "Resume Matcher", icon: FaFileAlt },
  { text: "Resume Formatter", icon: FaFileSignature },
  { text: "Job Description Improver", icon: FaBriefcase },
];

const row2 = [
  { text: "Contract Summary", icon: FaFileContract },
  { text: "Policy QA", icon: null }, // Use null for no icon
];

function SuggestionsGrid() {
  return (
    <div className="suggestions-wrapper">
      {/* First Row */}
      <div className="suggestions-row">
        {row1.map((item, index) => (
          <SuggestionCard key={`row1-${index}`} text={item.text} icon={item.icon} />
        ))}
      </div>

      {/* Second Row */}
      <div className="suggestions-row second-row">
        {row2.map((item, index) => (
          <SuggestionCard key={`row2-${index}`} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default SuggestionsGrid;