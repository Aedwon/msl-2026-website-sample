import React from 'react';
import { School } from 'lucide-react';

const TrustTicker: React.FC = () => {
  return (
    <div 
      className="w-full bg-msl-dark border-y border-white/10 py-6 overflow-hidden relative group"
      role="region" 
      aria-label="Partner Universities Ticker"
    >
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-msl-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-msl-dark to-transparent z-10 pointer-events-none" />
        
        {/* Pause animation on hover or focus-within for WCAG Compliance */}
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300 w-max pause-on-hover">
            {/* Repeating the logos to create the loop effect. Rendered twice to ensure smooth looping */}
            {[...Array(20)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold text-gray-500" aria-hidden={i > 9 ? "true" : "false"}>
                    <School size={24} aria-hidden="true" />
                    <span>UNIVERSITY PARTNER {i + 1}</span>
                </div>
            ))}
        </div>
        
        {/* Screen Reader Only Text indicating how to pause */}
        <span className="sr-only">Ticker of partner universities. Hover or focus to pause scrolling.</span>
    </div>
  );
};

export default TrustTicker;