function SuggestionCard({ text }) {
  return (
    <div className="bg-dark border border-dark-border rounded-custom p-4 w-full max-w-[260px] text-custom-sm
                    shadow-custom cursor-pointer text-center transition duration-300 ease-in-out
                    hover:border-purple hover:-translate-y-1 hover:shadow-custom-hover">
      <p>{text}</p>
    </div>
  );
}

export default SuggestionCard;
