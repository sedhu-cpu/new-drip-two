function InputBox() {
  return (
    <div className="inline-block p-[3px] rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500  animate-spin-slow">
      <input
        type="text"
        placeholder="Ask me anything..."
        className="w-[45rem] h-16 px-4 py-3 rounded-lg bg-[#1a1f2e] text-white text-base border-none outline-none shadow-[0_0_10px_rgba(99,102,241,0.1)]"
      />
    </div>
  );
}

export default InputBox;
