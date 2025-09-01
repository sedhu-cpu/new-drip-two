// ...existing code...
import SuggestionCard from "../components/SuggestionCard.jsx";
// ...existing code...
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
    <div className="w-full max-w-[800px] flex flex-col items-center">
      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4 w-full">
        {row1.map((item, index) => (
          <SuggestionCard key={`row1-${index}`} text={item.text} icon={item.icon} />
        ))}
      </div>
      {/* Second Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full mb-0">
        {row2.map((item, index) => (
          <SuggestionCard key={`row2-${index}`} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
export default SuggestionsGrid;
//