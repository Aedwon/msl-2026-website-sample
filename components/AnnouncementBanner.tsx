import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AnnouncementBannerProps {
    onLearnMore?: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onLearnMore }) => {
    return (
        <div className="w-full bg-[#1c1c1e] text-center py-3 px-4 flex items-center justify-center gap-1 mt-20 sm:mt-[72px] lg:mt-20 animate-fade-in border-b border-white/5">
            <span className="text-[13px] md:text-sm text-white font-medium">
                National University Bulldogs crowned as kings in collegiate MLBB.
            </span>
            <button
                onClick={onLearnMore}
                className="text-[13px] md:text-sm text-blue-500 hover:text-blue-400 font-medium flex items-center gap-0.5 hover:underline transition-all"
                aria-label="Read more about NU Bulldogs victory"
            >
                See more <ChevronRight size={12} className="mt-[1px]" />
            </button>
        </div>
    );
};

export default AnnouncementBanner;
