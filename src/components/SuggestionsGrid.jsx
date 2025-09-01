import SuggestionCard from "../components/SuggestionCard.jsx";
import "../styles/SuggestionsGrid.css";

const row1 = [
  "Write a todo list for my day",
  "Generate an image of Elon hugging Xi Jinping",
  "Generate an image of Elon hugging Xi Jinping",
];

const row2 = [
  "Generate an image of Elon hugging Xi Jinping",
  "Generate an image of Elon hugging Xi Jinping",
];

function SuggestionsGrid() {
  return (
    <div className="suggestions-wrapper">
      {/* First Row */}
      <div className="suggestions-row">
        {row1.map((text, index) => (
          <SuggestionCard key={`row1-${index}`} text={text} />
        ))}
      </div>

      {/* Second Row */}
      <div className="suggestions-row second-row">
        {row2.map((text, index) => (
          <SuggestionCard key={`row2-${index}`} text={text} />
        ))}
      </div>
    </div>
  );
}

export default SuggestionsGrid;
