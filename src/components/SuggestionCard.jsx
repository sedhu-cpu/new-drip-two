import "../styles/SuggestionCard.css";

function SuggestionCard({ text }) {
  return (
    <div className="suggestion-card">
      <p>{text}</p>
    </div>
  );
}

export default SuggestionCard;
