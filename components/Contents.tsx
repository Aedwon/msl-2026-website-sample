import React, { useEffect, useRef, useState } from 'react';
import { 
  PenTool, 
  Video, 
  Share2, 
  ShieldCheck, 
  Users, 
  Feather, 
  ArrowRight, 
  Play, 
  Instagram, 
  Facebook, 
  Youtube,
  Mic2,
  Palette,
  Clapperboard,
  MessageCircle,
  Newspaper,
  Layout,
  Image,
  Type,
  Mic,
  Smile,
  Heart
} from 'lucide-react';

interface ContentsProps {
  onNavigate: (page: string) => void;
}

// --- MOCK DATA: LEADERSHIP ---
const HEAD_OF_CONTENTS = {
  name: "Mary Clarence S. Pasco",
  role: "Department Head",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=600",
  message: "We are the voice and the face of the MSL network. Our mission is to tell the stories of our student leaders, amplify the excitement of our tournaments, and create content that resonates with the collegiate gaming community."
};

const DIVISION_HEADS = [
  { name: "Jamie Rivera", role: "Socials Lead", division: "Social Media", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Mark Corpus", role: "Head Moderator", division: "Moderation", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Leo Valdez", role: "Creative Director", division: "Creatives", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Nina Santos", role: "Editor-in-Chief", division: "Writers", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Kenji Tanaka", role: "Exec. Producer", division: "Production", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Ria Jose", role: "Internal Head", division: "Internal", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400" }
];

const DIVISIONS = [
  { title: "Content Coordination", mission: "Social media calendar planning & community engagement.", icon: Share2, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/50" },
  { title: "Page Moderation", mission: "Maintaining safe, non-toxic digital spaces.", icon: ShieldCheck, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/50" },
  { title: "Creatives", mission: "Visual storytelling through graphics and video.", icon: Palette, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/50" },
  { title: "Writers", mission: "News, blogs, and narrative building.", icon: Feather, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/50" },
  { title: "Production Team", mission: "Livestreams and technical broadcast execution.", icon: Clapperboard, color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/50" },
  { title: "Internal", mission: "Fostering camaraderie within the department.", icon: Users, color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/50" }
];

// --- NEW MOCK DATA: OUTPUT SHOWCASE ---

const VISUAL_WORKS = [
    { title: "MCC S4 Key Visual", category: "Esports Graphics", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", size: "col-span-2 row-span-2" },
    { title: "Student Life Ep. 4", category: "Comics", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1" },
    { title: "Stream Overlay Pack", category: "Live Stream Assets", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1" },
    { title: "Champion Poster", category: "Graphics", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800", size: "col-span-2 row-span-1" }
];

const BROADCAST_WORKS = [
    { title: "Grand Finals: DLSU vs UST", category: "Live Stream", views: "12k Views", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200" },
    { title: "Top 5 Plays of the Week", category: "Vids / Highlights", views: "5.4k Views", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" }
];

const WRITTEN_WORKS = [
    { type: "News / Article", title: "The Collegiate Meta Shift: Tank Junglers", date: "2 days ago", icon: Newspaper },
    { type: "Blog", title: "Diary of a Student Leader: Balancing Acads & Esports", date: "1 week ago", icon: PenTool },
];

const TALENT_ROSTER = [
    { name: "Caster A", role: "Shoutcaster", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400" },
    { name: "Host B", role: "Live Event Host", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
    { name: "Caster C", role: "Analyst", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Host D", role: "Desk Host", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
];

const Contents: React.FC<ContentsProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-16 overflow-hidden bg-msl-black border-b border-white/10">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mx-auto lg:mx-0">
                  <PenTool className="text-purple-400" size={14} />
                  <span className="text-xs md:text-sm font-bold text-purple-300 uppercase tracking-wider">Contents & Social Media Department</span>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                  Crafting the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Narrative.</span>
               </h1>
               
               <p className="text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  We are the storytellers, the creators, and the voice of MSL Philippines. From pixel-perfect graphics to high-energy broadcasts, we bring the collegiate esports experience to life.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => {
                        const el = document.getElementById('output');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] flex items-center justify-center gap-2"
                  >
                    View Our Work <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => onNavigate('careers')}
                    className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all"
                  >
                    Join Our Team
                  </button>
               </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-10 right-10 w-64 h-40 bg-gray-900 rounded-xl border border-white/10 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 z-10 overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black"></div>
                     <div className="absolute center inset-0 flex items-center justify-center">
                        <Play size={40} className="text-white opacity-80" fill="currentColor"/>
                     </div>
                     <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-white uppercase">Live Now</span>
                     </div>
                  </div>
                  <div className="absolute bottom-20 left-10 w-56 h-72 bg-gray-900 rounded-xl border border-white/10 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 z-20 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" />
                     <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                        <div className="flex items-center gap-2 mb-1">
                            <Palette size={14} className="text-purple-400" />
                            <span className="text-xs text-purple-400 font-bold uppercase">Design</span>
                        </div>
                        <p className="text-white font-bold text-sm">Season 4 Key Visual</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 2. THE CREATIVE OUTPUT (MAIN SHOWCASE) --- */}
      <section id="output" className="py-24 bg-msl-black px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Output</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                     Explore the diverse portfolio produced by our student-led creative teams.
                 </p>
             </div>

             {/* 2.1 VISUAL ARTS */}
             <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Palette size={24} /></div>
                    <h3 className="text-2xl font-bold text-white">Visual Arts & Assets</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">
                    {VISUAL_WORKS.map((work, idx) => (
                        <div key={idx} className={`relative rounded-2xl overflow-hidden group border border-white/10 ${work.size}`}>
                            <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1 block">{work.category}</span>
                                <h4 className="text-lg md:text-2xl font-bold text-white leading-tight">{work.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* 2.2 BROADCAST */}
             <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-red-500/20 rounded-lg text-red-400"><Video size={24} /></div>
                    <h3 className="text-2xl font-bold text-white">Broadcast & Motion</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {BROADCAST_WORKS.map((work, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-gray-900 cursor-pointer">
                            <img src={work.image} alt={work.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                    <Play size={28} fill="white" className="text-white ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-block px-2 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded mb-2">{work.category}</span>
                                <h4 className="text-xl font-bold text-white">{work.title}</h4>
                                <p className="text-xs text-gray-400">{work.views}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* 2.3 EDITORIAL & SOCIAL (Split Section) */}
             <div className="grid lg:grid-cols-2 gap-12 mb-20">
                
                {/* Editorial */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Newspaper size={24} /></div>
                        <h3 className="text-2xl font-bold text-white">Editorial & Blogs</h3>
                    </div>
                    <div className="space-y-4">
                        {WRITTEN_WORKS.map((work, idx) => (
                            <div key={idx} className="bg-msl-card border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors group cursor-pointer">
                                <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-white transition-colors">
                                    <work.icon size={24} />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{work.type}</span>
                                    <h4 className="text-lg font-bold text-white mt-1 mb-1 group-hover:underline decoration-orange-400 underline-offset-4">{work.title}</h4>
                                    <p className="text-sm text-gray-500">{work.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Caption Showcase (Mock UI) */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Type size={24} /></div>
                        <h3 className="text-2xl font-bold text-white">Caption Writing</h3>
                    </div>
                    {/* Mock Social Post */}
                    <div className="bg-[#1e1e1e] border border-white/10 rounded-xl p-4 max-w-md mx-auto shadow-2xl">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-msl-gold flex items-center justify-center font-bold text-black">M</div>
                            <div>
                                <p className="text-sm font-bold text-white">MSL Philippines</p>
                                <p className="text-xs text-gray-500">Just now • 🌏</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                            Victory tastes sweet, but the journey is sweeter. 🏆✨ <br/><br/>
                            Congratulations to <strong>Teletigers Esports</strong> for securing the crown! 🐯👑 To all the teams who fought bravely, GGWP! The collegiate spirit is alive and burning. 🔥 <br/><br/>
                            #MSLPhilippines #CollegiateEsports #MLBBEsports #StudentGamers
                        </p>
                        <div className="w-full h-48 bg-gray-800 rounded-lg mb-3 overflow-hidden relative">
                             <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="flex gap-6 text-gray-400 pt-2 border-t border-white/10">
                            <div className="flex items-center gap-2 text-sm"><Heart size={16} /> Like</div>
                            <div className="flex items-center gap-2 text-sm"><MessageCircle size={16} /> Comment</div>
                            <div className="flex items-center gap-2 text-sm"><Share2 size={16} /> Share</div>
                        </div>
                    </div>
                </div>
             </div>

             {/* 2.4 ON-AIR TALENT */}
             <div className="mb-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400"><Mic2 size={24} /></div>
                    <h3 className="text-2xl font-bold text-white">On-Air Talent</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {TALENT_ROSTER.map((talent, idx) => (
                        <div key={idx} className="bg-msl-card border border-white/10 rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img src={talent.image} alt={talent.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                <div className="absolute bottom-3 left-3">
                                    <h4 className="text-white font-bold text-lg">{talent.name}</h4>
                                    <p className="text-xs text-teal-400 font-bold uppercase tracking-wider">{talent.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

          </div>
      </section>

      {/* --- 3. DEPARTMENT STRUCTURE (Moved Below Output) --- */}
      <section className="py-24 bg-msl-surface px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest border border-purple-500/30 px-3 py-1 rounded-full bg-purple-500/10">The Engine Room</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Functional Divisions</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    How we organize our volunteers to deliver consistent quality.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DIVISIONS.map((div, idx) => (
                    <div key={idx} className="bg-msl-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${div.bg.replace('/10', '/30')}`} />
                        <div className={`h-1 w-full absolute top-0 left-0 ${div.color.replace('text-', 'bg-')}`} />
                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-xl ${div.bg} flex items-center justify-center mb-6 ${div.color} group-hover:scale-110 transition-transform ring-1 ${div.border}`}>
                                <div.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{div.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{div.mission}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- 4. LEADERSHIP --- */}
      <section className="py-20 bg-msl-black border-y border-white/10">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Leadership</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                    The creative minds steering the department.
                </p>
            </div>

            <div className="flex justify-center mb-16">
                <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-purple-500/30 transition-all max-w-4xl w-full">
                    <div className="md:w-5/12 relative min-h-[300px]">
                        <img 
                            src={HEAD_OF_CONTENTS.image} 
                            alt={HEAD_OF_CONTENTS.name} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-msl-card via-transparent to-transparent opacity-90 md:opacity-60"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center md:w-7/12">
                        <div className="mb-4">
                            <span className="text-purple-400 font-bold uppercase tracking-widest text-xs">{HEAD_OF_CONTENTS.role}</span>
                            <h3 className="text-3xl font-bold text-white mt-1 leading-tight">{HEAD_OF_CONTENTS.name}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed italic border-l-2 border-purple-500 pl-4">
                            "{HEAD_OF_CONTENTS.message}"
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative pt-8 border-t border-white/10">
                 <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider text-center md:text-left">Functional Division Heads</h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {DIVISION_HEADS.map((head, idx) => (
                        <div key={idx} className="bg-msl-card border border-white/5 rounded-xl overflow-hidden group hover:border-purple-500/30 transition-all hover:-translate-y-1">
                            <div className="aspect-square relative overflow-hidden bg-gray-800">
                                <img 
                                    src={head.image} 
                                    alt={head.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full p-3">
                                     <p className="text-[10px] text-purple-400 font-bold uppercase truncate leading-none mb-1">{head.division}</p>
                                     <h3 className="font-bold text-white text-sm leading-tight">{head.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
         </div>
      </section>

      {/* --- 5. CTA --- */}
      <section className="py-24 bg-msl-card px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a Story to Tell?</h2>
            <p className="text-gray-400 text-lg mb-10">
                Whether you are a graphic designer, a writer, a streamer, or a community manager, there is a place for you in our creative team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => onNavigate('careers')}
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-purple-600/20"
                >
                    Be a Member of Our Team
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold text-lg transition-all">
                    Submit a Portfolio
                </button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Contents;