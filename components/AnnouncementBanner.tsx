import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AnnouncementBannerProps {
    onLearnMore?: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onLearnMore }) => {
    return (
        <div className="w-full bg-[#1c1c1e] text-center py-3 px-4 mt-20 sm:mt-[72px] lg:mt-20 animate-fade-in border-b border-white/5">
            <p className="text-[13px] md:text-sm text-white font-medium inline-block leading-normal">
                The NU Era: National University Bulldogs Reign Supreme
                <button
                    onClick={onLearnMore}
                    className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center gap-0.5 hover:underline transition-all ml-1.5 align-baseline"
                    aria-label="Read more about NU Bulldogs victory"
                >
                    See more <ChevronRight size={12} className="relative top-[1px]" />
                </button>
            </p>
        </div>
    );
};

export default AnnouncementBanner;
