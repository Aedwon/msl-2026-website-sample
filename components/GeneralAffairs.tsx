import React, { useEffect, useRef, useState } from 'react';
import { 
  HeartHandshake, 
  Users, 
  UserPlus, 
  Gift, 
  FileText, 
  Smile, 
  Clock, 
  Award, 
  CheckCircle2, 
  ClipboardCheck, 
  Coffee,
  Heart,
  ArrowRight,
  UserCheck,
  Briefcase,
  Gem
} from 'lucide-react';

interface GeneralAffairsProps {
  onNavigate: (page: string) => void;
}

// --- MOCK DATA ---
const HEAD_OF_GA = {
  name: "Gabriel C. Matawaran",
  role: "Department Head",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600",
  message: "Our department is the heartbeat of the organization. While others focus on external output, we focus on the people who make it all possible. We ensure that every student leader is valued, compensated, and supported. We don't just recruit volunteers; we build a family."
};

const DIVISION_HEADS = [
  {
    name: "Elena Gomez",
    role: "Head of Recruitment",
    division: "Talent Acquisition",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Rajiv Patel",
    role: "Head of Welfare",
    division: "People & Culture",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Liza Santos",
    role: "Head of Benefits",
    division: "Compensation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "John Lloyd",
    role: "Head of Secretariat",
    division: "Admin & Records",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const DIVISIONS = [
  {
    title: "Talent Acquisition",
    mission: "The gatekeepers of MSL. We handle the end-to-end recruitment process, screening hundreds of student applications to find the next generation of leaders.",
    icon: UserPlus,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/50"
  },
  {
    title: "People & Culture",
    mission: "The morale boosters. We organize town halls, game nights, and welfare checks to ensure our volunteers stay happy, motivated, and burnout-free.",
    icon: Smile, // Focusing on happiness/culture
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/50"
  },
  {
    title: "Compensation & Benefits",
    mission: "The reward specialists. We manage the 'Diamond Salary' system, ensuring every volunteer is compensated fairly and on time for their contributions.",
    icon: Gift,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/50"
  },
  {
    title: "Secretariat & Admin",
    mission: "The backbone of operations. We handle documentation, official issuances, certificates, and ensuring inter-departmental workflows run smoothly.",
    icon: FileText,
    color: "text-lime-400",
    bg: "bg-lime-400/10",
    border: "border-lime-400/50"
  }
];

const CORE_FUNCTIONS = [
    {
        title: "Recruitment",
        desc: "We find the best talent.",
        icon: UserCheck
    },
    {
        title: "Onboarding",
        desc: "We train and integrate.",
        icon: ClipboardCheck
    },
    {
        title: "Evaluation",
        desc: "We track performance.",
        icon: CheckCircle2
    },
    {
        title: "Rewards",
        desc: "We distribute diamonds.",
        icon: Award
    }
];

const GeneralAffairs: React.FC<GeneralAffairsProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-msl-black border-b border-white/10">
         {/* Background gradients */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md mx-auto lg:mx-0">
                  <HeartHandshake className="text-green-400" size={14} />
                  <span className="text-xs md:text-sm font-bold text-green-300 uppercase tracking-wider">General Affairs Department</span>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                  The Heart of the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Organization.</span>
               </h1>
               
               <p className="text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  We are the Human Resources of MSL Philippines. We complement every other department by taking care of what matters most: <strong className="text-white">Our People.</strong>
               </p>

               <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => onNavigate('careers')}
                    className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] flex items-center justify-center gap-2"
                  >
                    Join The Team <UserPlus size={20} />
                  </button>
                  <button 
                     onClick={() => {
                        const el = document.getElementById('structure');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all"
                  >
                    How We Work
                  </button>
               </div>
            </div>

            {/* Right Visual - HR/People Collage */}
            <div className="relative hidden lg:block h-[500px]">
               <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Center Card - Recruitment */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-msl-card rounded-2xl border border-white/10 shadow-2xl z-20 flex flex-col overflow-hidden">
                      <div className="h-2/3 bg-gray-800 relative">
                          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay" />
                      </div>
                      <div className="p-4 bg-msl-card flex-grow flex flex-col justify-center text-center">
                          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-2">
                              <Users size={20} />
                          </div>
                          <h3 className="text-white font-bold">New Recruits</h3>
                          <p className="text-xs text-gray-400">Onboarding in progress...</p>
                      </div>
                  </div>

                  {/* Left Floating Card - Compensation */}
                  <div className="absolute top-20 left-10 w-48 p-4 bg-gray-900/90 backdrop-blur-md rounded-xl border border-green-500/30 shadow-xl transform -rotate-6 animate-float-slow z-10">
                      <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Gift size={16} /></div>
                          <span className="text-xs font-bold text-gray-300 uppercase">Rewards</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full mb-2 overflow-hidden">
                          <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm font-bold text-white">Diamond Payouts</div>
                  </div>

                  {/* Right Floating Card - Admin */}
                  <div className="absolute bottom-20 right-10 w-48 p-4 bg-gray-900/90 backdrop-blur-md rounded-xl border border-teal-500/30 shadow-xl transform rotate-6 animate-float-medium z-30">
                      <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400"><CheckCircle2 size={16} /></div>
                          <span className="text-xs font-bold text-gray-300 uppercase">Tasks</span>
                      </div>
                      <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-3 h-3 border border-green-500 bg-green-500 rounded-sm flex items-center justify-center text-black text-[8px]">✓</div>
                              <span>Performance Review</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-3 h-3 border border-green-500 bg-green-500 rounded-sm flex items-center justify-center text-black text-[8px]">✓</div>
                              <span>Volunteer Audit</span>
                          </div>
                      </div>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* --- 2. CORE FUNCTIONS GRID --- */}
      <section className="py-20 bg-msl-surface px-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {CORE_FUNCTIONS.map((func, idx) => (
                      <div key={idx} className="bg-msl-card border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors group">
                          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                              <func.icon size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1">{func.title}</h3>
                          <p className="text-sm text-gray-400">{func.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* --- 3. DEPARTMENT STRUCTURE --- */}
      <section id="structure" className="py-24 bg-msl-black px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest border border-green-500/30 px-3 py-1 rounded-full bg-green-500/10">Internal Structure</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">The Support System</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                   Everything that other departments don't do, we do. We fill the gaps to create a seamless organization.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {DIVISIONS.map((div, idx) => (
                    <div key={idx} className="bg-msl-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                        {/* Gradient Background on Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${div.bg.replace('/10', '/30')}`} />
                        
                        {/* Colored Top Bar */}
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

      {/* --- 4. FEATURE: THE DIAMOND COMPENSATION --- */}
      <section className="py-24 bg-gradient-to-r from-green-900/20 to-teal-900/20 border-b border-white/10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase mb-6">
                      <Gift size={12} /> Exclusive Perk
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Diamond Economy</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      At MSL Philippines, passion pays off. General Affairs manages a proprietary compensation system where student leaders and volunteers earn <strong>Mobile Legends Diamonds</strong> for their contributions.
                  </p>
                  
                  <div className="space-y-4">
                      <div className="flex items-start gap-4">
                          <div className="p-2 bg-green-500/10 rounded-lg text-green-400 mt-1"><Clock size={18} /></div>
                          <div>
                              <h4 className="text-white font-bold">Performance-Based</h4>
                              <p className="text-sm text-gray-400">Rewards scale with your activity level and role complexity.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="p-2 bg-green-500/10 rounded-lg text-green-400 mt-1"><Award size={18} /></div>
                          <div>
                              <h4 className="text-white font-bold">Monthly Payouts</h4>
                              <p className="text-sm text-gray-400">Consistent rewards distributed directly to your game account.</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />
                  <div className="relative bg-msl-card border border-white/10 rounded-3xl p-8 shadow-2xl">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                          <div>
                              <p className="text-sm text-gray-400">Estimated Monthly Pool</p>
                              <h3 className="text-3xl font-bold text-white">500,000+ <span className="text-base text-blue-300">💎</span></h3>
                          </div>
                          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                              <Gem size={24} />
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-gray-700" />
                                  <div className="h-2 w-24 bg-gray-600 rounded"></div>
                              </div>
                              <div className="text-green-400 font-bold">+5,000 💎</div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-gray-700" />
                                  <div className="h-2 w-24 bg-gray-600 rounded"></div>
                              </div>
                              <div className="text-green-400 font-bold">+3,500 💎</div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-gray-700" />
                                  <div className="h-2 w-24 bg-gray-600 rounded"></div>
                              </div>
                              <div className="text-green-400 font-bold">+1,500 💎</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- 5. FEATURE: REFERRAL PROGRAM --- */}
      <section className="py-24 bg-msl-black px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase mb-6">
                      <UserPlus size={12} /> Growth Initiative
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Referral Program</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      We believe the best way to grow is through our own people. The Referral Program empowers every MSL member to become a recruiter, helping us discover hidden gems—whether <strong>Student Leaders</strong> or <strong>Partner Organizations</strong>—in campuses across the country.
                  </p>
                  
                  <div className="bg-msl-card border border-white/10 rounded-2xl p-6 mb-8">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                          <Gift size={18} className="text-green-400"/> Referral Rewards
                      </h4>
                      <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-sm text-gray-400">
                              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xs">1</div>
                              <span>Refer a Student Leader or Partner Organization</span>
                          </li>
                          <li className="flex items-center gap-3 text-sm text-gray-400">
                              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xs">2</div>
                              <span>Candidate/Partner passes screening & onboarding</span>
                          </li>
                          <li className="flex items-center gap-3 text-sm text-gray-400">
                              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xs">3</div>
                              <span>Receive <span className="text-white font-bold">500+ Diamonds</span> bounty</span>
                          </li>
                      </ul>
                  </div>

                  <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                      Start Referring <ArrowRight size={20} />
                  </button>
              </div>
              
              <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full pointer-events-none" />
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                       <img 
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                          alt="Team Collaboration" 
                          className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-transparent to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                           <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                               <div className="flex items-center justify-between mb-2">
                                   <span className="text-xs text-gray-400 uppercase font-bold">Total Referrals</span>
                                   <span className="text-green-400 font-bold">+12% this month</span>
                               </div>
                               <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                   <div className="bg-green-500 w-3/4 h-full" />
                               </div>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- 6. LEADERSHIP --- */}
      <section className="py-20 bg-msl-surface border-y border-white/10">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Leadership</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                    The people taking care of the people.
                </p>
            </div>

            <div className="flex justify-center mb-16">
                <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-green-500/30 transition-all max-w-4xl w-full">
                    <div className="md:w-5/12 relative min-h-[300px]">
                        <img 
                            src={HEAD_OF_GA.image} 
                            alt={HEAD_OF_GA.name} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-msl-card via-transparent to-transparent opacity-90 md:opacity-60"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center md:w-7/12">
                        <div className="mb-4">
                            <span className="text-green-400 font-bold uppercase tracking-widest text-xs">{HEAD_OF_GA.role}</span>
                            <h3 className="text-3xl font-bold text-white mt-1 leading-tight">{HEAD_OF_GA.name}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed italic border-l-2 border-green-500 pl-4">
                            "{HEAD_OF_GA.message}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Division Heads Grid */}
            <div className="relative pt-8 border-t border-white/10">
                 <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider text-center md:text-left">Functional Division Heads</h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {DIVISION_HEADS.map((head, idx) => (
                        <div key={idx} className="bg-msl-card border border-white/5 rounded-xl overflow-hidden group hover:border-green-500/30 transition-all hover:-translate-y-1">
                            <div className="aspect-square relative overflow-hidden bg-gray-800">
                                <img 
                                    src={head.image} 
                                    alt={head.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                     <p className="text-[10px] text-green-400 font-bold uppercase truncate leading-none mb-1">{head.division}</p>
                                     <h3 className="font-bold text-white text-lg leading-tight">{head.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
         </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-24 bg-msl-card px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Want to Build Culture?</h2>
            <p className="text-gray-400 text-lg mb-10">
                If you love helping people, organizing teams, and building a positive environment, General Affairs is the place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => onNavigate('careers')}
                    className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-600/20"
                >
                    Apply for General Affairs
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold text-lg transition-all">
                    Contact HR
                </button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralAffairs;