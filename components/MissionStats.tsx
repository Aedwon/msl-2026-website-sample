import React from 'react';
import { Users, School, Trophy, Gamepad2, ArrowRight } from 'lucide-react';
import { StatItem } from '../types';

const STATS: StatItem[] = [
  { label: "Student Gamers", value: "22,431", icon: Users }, // Placeholder kept as per [DB] instruction implies DB value
  { label: "Student Leaders", value: "240+", icon: Gamepad2 },
  { label: "Events Sponsored", value: "110+", icon: Trophy },
  { label: "Campus Partners", value: "150+", icon: School },
];

const MissionStats: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative BG elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mission Content from PDF Page 2 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Why We Matter</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 leading-tight">
                    Bridging the worlds of <span className="text-blue-500">gaming</span> and <span className="text-yellow-500">academics</span>.
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    We empower student-gamers to lead vibrant MLBB communities in their schools by fostering integrity, time management, friendliness, adaptability, responsiveness, and academic excellence. Guided by Moonton Philippines, we create initiatives that unite players and boost school pride.
                </p>
                <button className="text-white font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-500 transition-colors flex items-center gap-2">
                    Learn More About Us <ArrowRight size={16} />
                </button>
            </div>
            <div className="bg-[#1e293b]/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 italic leading-relaxed">
                    "To be the leading network of student-gamers in the Philippines who embody integrity, leadership, and community spirit— bridging the worlds of gaming and academics, building strong MLBB communities and inspiring the next generation of responsible esports leaders."
                </p>
            </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-[#1e293b]/50 border border-white/5 p-6 rounded-2xl text-center hover:bg-[#1e293b] transition-colors group">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStats;