import React from 'react';
import { ChevronRight, Crown } from 'lucide-react';

interface AnnouncementBannerProps {
    onLearnMore?: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onLearnMore }) => {
    return (
        <div className="w-full bg-gradient-to-r from-[#1c1c1e] via-[#2a2a2e] to-[#1c1c1e] text-center py-3 px-4 mt-20 sm:mt-[72px] lg:mt-20 animate-fade-in border-b border-white/10 relative overflow-hidden group">
            {/* Subtle Shine Effect */}
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:animate-shimmer pointer-events-none"></div>

            <p className="text-[13px] md:text-sm text-white font-medium text-center leading-relaxed relative z-10 max-w-screen-xl mx-auto">
                <span className="inline-flex items-center gap-1.5 align-middle mr-1.5">
                    <Crown size={14} className="text-msl-gold animate-pulse -mt-0.5" fill="currentColor" />
                    <span className="text-msl-gold font-bold tracking-wide">The NU Era:</span>
                </span>
                <span className="align-middle">National University Bulldogs Reign Supreme</span>
                <button
                    onClick={onLearnMore}
                    className="text-blue-400 hover:text-white font-bold inline-flex items-center gap-0.5 hover:underline transition-all ml-2 align-middle whitespace-nowrap"
                    aria-label="Read more about NU Bulldogs victory"
                >
                    See more <ChevronRight size={12} className="relative top-[1px]" />
                </button>
            </p>
        </div>
    );
};

export default AnnouncementBanner;
