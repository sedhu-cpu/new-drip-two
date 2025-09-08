import React, { useState } from 'react';

export const ResumeMatcher = () => {
    const [active, setActive] = useState(0);

    const cards = [
        {
            title: 'Resume Match — Basic',
            subtitle: 'Quick match against JD',
            content: 'Fast, lightweight matching that highlights top skills and gaps.',
            accent: 'from-cyan-400 to-blue-500',
            time: '1–2 mins',
        },
        {
            title: 'Resume Match — Pro',
            subtitle: 'Deep semantic matching',
            content: 'Uses advanced heuristics to score relevance and suggest rewrites.',
            accent: 'from-emerald-400 to-green-600',
            time: '3–5 mins',
        },
        {
            title: 'Resume Match — Team',
            subtitle: 'Batch & team reports',
            content: 'Run multi-resume reports and compare candidates side-by-side.',
            accent: 'from-amber-400 to-orange-500',
            time: '5–10 mins',
        },
    ];

    return (
        <div className="w-full flex justify-center p-6 min-h-screen">
            <div className="w-full max-w-[920px] mt-8">
                <h3 className="text-3xl font-bold text-white mb-2">Resume Matcher</h3>
                <p className="text-white/70 mb-8">Choose the matching depth that fits your needs</p>

                <div
                    className="flex gap-5 items-stretch select-none"
                    role="tablist"
                    aria-label="Resume matcher cards"
                >
                    {cards.map((card, idx) => {
                        const isActive = idx === active;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActive(idx)}
                                role="tab"
                                aria-selected={isActive}
                                id={`tab-${idx}`}
                                aria-controls={`panel-${idx}`}
                                className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out
                                    ${isActive
                                        ? 'flex-[3_1_0%] min-h-[300px] shadow-2xl'
                                        : 'flex-[0_1_120px] min-h-[300px] shadow-lg hover:shadow-xl'}
                                    bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border border-white/20
                                    hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 flex items-center justify-center`}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.accent} transition-all duration-700 ${isActive ? 'opacity-10' : 'opacity-5 group-hover:opacity-8'
                                        }`}
                                    aria-hidden="true"
                                />

                                {/* Inner content wrapper */}
                                <div className={`relative z-10 p-6 flex flex-col h-full w-full transition-all duration-500 ${isActive ? 'opacity-100' : 'items-center justify-center opacity-90'}`}>
                                    {/* Collapsed Title (Vertical) */}
                                    {!isActive && (
                                        <div className="transform -rotate-90 origin-center whitespace-nowrap text-lg font-bold text-gray-800 tracking-wide transition-all duration-300">
                                            {card.title}
                                        </div>
                                    )}

                                    {/* Expanded Content */}
                                    {isActive && (
                                        <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                                            <div className="flex items-start justify-between gap-3 mb-4">
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xl font-bold text-gray-800">{card.title}</div>
                                                    <div className="text-sm font-medium text-cyan-700 mt-1">{card.subtitle}</div>
                                                </div>
                                                <div className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">Active</div>
                                            </div>

                                            <div className="text-sm text-gray-700 leading-relaxed flex-1 mb-6">{card.content}</div>

                                            <div className="mt-auto flex items-center justify-between text-xs text-gray-600">
                                                <div className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-1 text-gray-500"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    {card.time}
                                                </div>
                                                <div className="flex gap-2">
                                                    {cards.map((_, dotIdx) => (
                                                        <span
                                                            key={dotIdx}
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${dotIdx === idx ? 'bg-cyan-500 scale-125' : 'bg-gray-400 scale-100'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </button>

                        );
                    })}
                </div>


            </div>
        </div>
    );
};
