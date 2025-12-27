import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import EventCarousel from './EventCarousel';
import AnnouncementBanner from './AnnouncementBanner';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <>
      <AnnouncementBanner onLearnMore={() => { onNavigate('news'); window.scrollTo(0, 0); }} />
      <section className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto min-h-[calc(100vh-120px)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">

          {/* Left: Static Identity - Takes up 5/12 columns */}
          <div className="space-y-6 animate-fade-in-up lg:col-span-5 relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">student-gamers</span> <br className="hidden sm:block" />
              to become the next generation leaders
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              We equip student-gamers and esports organizations with recognition, resources, and professional mentorship — everything you need to build a thriving campus community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => { onNavigate('careers'); window.scrollTo(0, 0); }}
                className="w-full sm:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-[#0f172a] rounded-lg font-bold text-base transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center justify-center gap-2"
              >
                Be A Member
              </button>
              <button onClick={() => { onNavigate('partnerships'); window.scrollTo(0, 0); }} className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2">
                Partner With Us <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right: The Mandated Carousel - Takes up 7/12 columns */}
          <div className="w-full lg:col-span-7 animate-fade-in-left relative">
            {/* Header for Carousel */}
            <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Happening Now</h3>
            </div>

            {/* Carousel Component */}
            <EventCarousel />
          </div>

        </div>
      </section >
    </>
  );
};

export default Hero;