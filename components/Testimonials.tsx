import React from 'react';
import { MapPin } from 'lucide-react';
import { TestimonialItem } from '../types';

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Leslie Alexander",
    role: "Student Leader",
    school: "University of Santo Tomas",
    quote: "MSL gave us the platform to prove that gaming and academics can coexist.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "Michael Foster",
    role: "Campus Partner",
    school: "De La Salle University",
    quote: "The structural support from Moonton transformed our small club into a major org.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250"
  },
  {
    name: "Lindsay Walton",
    role: "Event Organizer",
    school: "Ateneo de Manila",
    quote: "Managing tournaments through MSL taught me real-world project management skills.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250"
  }
];

interface PlayerCardProps {
  data: TestimonialItem;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ data }) => (
    <div className="flex-shrink-0 w-[300px] h-[400px] bg-msl-card rounded-xl overflow-hidden relative group border border-white/5 hover:border-msl-gold/50 transition-all duration-300 hover:-translate-y-2">
        <div className="h-1/2 w-full overflow-hidden">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-msl-card" />
        </div>
        <div className="p-6 relative">
            <div className="absolute -top-10 right-6 w-12 h-12 bg-msl-gold rounded-lg flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform">
                <span className="text-2xl text-black font-serif">❝</span>
            </div>
            <h4 className="text-xl font-bold text-white">{data.name}</h4>
            <p className="text-msl-gold text-sm font-medium mb-1">{data.role}</p>
            <p className="text-gray-400 text-xs mb-4 flex items-center gap-1"><MapPin size={10} /> {data.school}</p>
            <p className="text-gray-300 text-sm italic leading-relaxed">
                "{data.quote}"
            </p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-msl-surface border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Community Voices</h2>
          <p className="text-gray-400 max-w-2xl">
            Hear from the student leaders, campus organizers, and partners who are driving the MSL Philippines movement forward.
          </p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
           {TESTIMONIALS.map((t, i) => (
               <PlayerCard key={i} data={t} />
           ))}
           {/* Duplicate for visual length in demo */}
           {TESTIMONIALS.map((t, i) => (
               <PlayerCard key={`dup-${i}`} data={{...t, name: t.name + ' II'}} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;