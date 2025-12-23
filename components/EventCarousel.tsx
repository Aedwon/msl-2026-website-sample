import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { CarouselItem } from '../types';

export const EVENTS: CarouselItem[] = [
  {
    id: 1,
    title: "MCC Season 4: Collegiate Clash",
    status: "LIVE NOW",
    date: "Aug 15 - Oct 30",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670",
    description: "The biggest inter-school MLBB tournament is back. Watch the regionals live."
  },
  {
    id: 2,
    title: "Student Leader Summit '25",
    status: "REGISTRATION OPEN",
    date: "Nov 12, 2025",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2671",
    description: "Leadership training for the next gen of esports managers."
  },
  {
    id: 3,
    title: "Campus Promo Tour: Davao",
    status: "COMING SOON",
    date: "Dec 05, 2025",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2670",
    description: "MSL is coming to your university. Get ready for giveaways and showmatches."
  }
];

const EventCarousel: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % EVENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
        className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-msl-card"
        role="region"
        aria-roledescription="carousel"
        aria-label="Upcoming Events"
    >
      {/* Background Image of Active Slide */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <img 
          src={EVENTS[active].image} 
          alt={`Event Highlight: ${EVENTS[active].title}`} 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
        />
        {/* Stronger gradient for better text visibility on large cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
        <div className="flex gap-2 mb-6" role="tablist" aria-label="Slides">
            {EVENTS.map((_, idx) => (
                <button 
                    key={idx} 
                    onClick={() => setActive(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === active ? 'w-12 bg-yellow-400' : 'w-3 bg-white/30 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-selected={idx === active}
                    role="tab"
                />
            ))}
        </div>
        
        <span className={`inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-bold mb-4 tracking-wide ${
            EVENTS[active].status === 'LIVE NOW' ? 'bg-red-600 text-white animate-pulse' : 'bg-blue-600 text-white'
        }`}>
            {EVENTS[active].status}
        </span>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg max-w-3xl">
          {EVENTS[active].title}
        </h3>
        <p className="text-gray-200 text-lg md:text-xl mb-6 line-clamp-2 max-w-2xl font-light">
          {EVENTS[active].description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <Calendar size={18} className="text-yellow-400" aria-hidden="true"/>
                <span className="font-medium">{EVENTS[active].date}</span>
            </div>

            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 hover:scale-105 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group/btn">
              View Event Details <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;