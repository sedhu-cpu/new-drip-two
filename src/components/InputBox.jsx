function InputBox() {
  return (
    <div className="inline-block p-[3px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <input
        type="text"
        placeholder="Ask me anything..."
        className="w-[45rem] h-16 px-4 py-3 rounded-lg bg-[#1a1f2e] text-white text-base
             border-none outline-none
             shadow-[0_0_10px_rgba(99,102,241,0.1)]
             transition-all duration-300
             hover:shadow-[0_0_15px_rgba(163,94,255,0.3)]
             focus:shadow-[0_0_20px_rgba(163,94,255,0.5)]"
      />

    </div>
  );
}

export default InputBox;
