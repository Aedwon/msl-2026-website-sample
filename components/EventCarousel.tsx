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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Swipe Logic
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActive((prev) => (prev + 1) % EVENTS.length);
    }
    if (isRightSwipe) {
      setActive((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % EVENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-msl-card touch-pan-y"
      role="region"
      aria-roledescription="carousel"
      aria-label="Upcoming Events"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 pb-16">

        <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold mb-3 tracking-wide ${EVENTS[active].status === 'LIVE NOW' ? 'bg-red-600 text-white animate-pulse' : 'bg-blue-600 text-white'
          }`}>
          {EVENTS[active].status}
        </span>

        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg max-w-3xl">
          {EVENTS[active].title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 max-w-xl font-medium shadow-black drop-shadow-md">
          {EVENTS[active].description}
        </p>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 text-gray-200 bg-black/40 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10 text-xs sm:text-sm whitespace-nowrap shrink-0">
            <Calendar size={16} className="text-yellow-400" aria-hidden="true" />
            <span className="font-bold">{EVENTS[active].date}</span>
          </div>

          <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] active:scale-95 whitespace-nowrap shrink-0">
            View Details <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Indicators - Bottom Center - Adjusted spacing */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20" role="tablist" aria-label="Slides">
          {EVENTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${idx === active ? 'w-8 bg-yellow-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === active}
              role="tab"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;