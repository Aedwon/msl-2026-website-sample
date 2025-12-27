import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Handshake,
  Users,
  Building2,
  Gem,
  Trophy,
  Network,
  FileCheck,
  Cpu,
  Rocket,
  Landmark,
  BarChart2,
  School,
  Briefcase,
  Layers,
  GraduationCap,
  Gamepad2,
  Presentation,
  Mic2,
  MessagesSquare,
  Megaphone,
  Sword,
  Mail,
  UserCheck,
  Gift,
  Zap,
  Star,
  Calendar,
  MapPin,
  Flag,
  TrendingUp,
  Tv,
  PartyPopper,
  BookOpen,
  ChevronLeft
} from 'lucide-react';

interface PartnershipsProps {
  onNavigate: (page: string) => void;
}

// --- MOCK DATA ---
const HEAD_OF_PARTNERSHIPS = {
  name: "Aerol Dwayne D. Balayon",
  role: "Department Head",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
  message: "My goal is to equip our partner organizations with the tangible resources, industry knowledge, and operational skills necessary to not just survive, but thrive. We provide a sandbox for student leaders to master real-world event and project management—skills that transcend esports and prepare them for their future careers. We aren't just building tournaments; we are building capable professionals who will influence the industry."
};

const DIVISION_HEADS = [
  {
    name: "Sarah Jenkins",
    role: "Head of Network Dev",
    division: "Network Development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Michael Chen",
    role: "Head of Sponsorships",
    division: "Sponsorships",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Jessica Wu",
    role: "Head of Product",
    division: "Products & Engineering",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "David Miller",
    role: "Head of Activations",
    division: "Activations & Campaigns",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Amanda Low",
    role: "Head of Finance",
    division: "Finance & Treasury",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "James Wilson",
    role: "Head of Analytics",
    division: "Data & Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const DIVISIONS = [
  {
    title: "Network Development",
    mission: "Owns the partner lifecycle—penetrating new schools, onboarding organizations, and fostering long-term engagement.",
    icon: Network,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/50"
  },
  {
    title: "Sponsorships",
    mission: "Processes and audits sponsorship requests, ensuring strict compliance and quality control.",
    icon: FileCheck, // Evaluating requests
    color: "text-msl-gold",
    bg: "bg-msl-gold/10",
    border: "border-msl-gold/50"
  },
  {
    title: "Products & Engineering",
    mission: "Builds and maintains the digital ecosystem powering MSL operations for a seamless user experience.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/50"
  },
  {
    title: "Activations & Campaigns",
    mission: "Manages Moonton campaigns and brand partnerships by mobilizing our network with necessary resources.",
    icon: Rocket,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/50"
  },
  {
    title: "Finance & Treasury",
    mission: "Stewards all assets, managing and auditing both financial funds and in-game resources.",
    icon: Landmark,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/50"
  },
  {
    title: "Data & Analytics",
    mission: "Transforms raw activity data into actionable insights to drive growth and measure impact.",
    icon: BarChart2,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/50"
  }
];

const CAMPAIGN_PREVIEWS = [
  { title: "M-series Watch Fest", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600", icon: Trophy, label: "HOT" },
  { title: "MPL Watch Fest", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600", icon: Tv },
  { title: "Golden Month", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600", icon: Gem },
  { title: "AllStar", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600", icon: Star },
  { title: "Project NEXT", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600", icon: Sword },
  { title: "Anniversary", image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80&w=600", icon: PartyPopper },
];

// --- PROGRAM DATA STRUCTURED FOR HIERARCHY ---

const MAIN_PROGRAM = {
  title: "The MSL Network",
  desc: "Our core ecosystem managing official relations with collegiate esports organizations. We act as the centralized bridge handling accreditation, partnership growth, and exclusive resource distribution.",
  icon: Network,
  color: "text-msl-gold",
  bg: "bg-msl-gold/10"
};

const NETWORK_SUBPROGRAMS = [
  {
    title: "Buffs & Support",
    desc: "The official sponsorship arm providing diamond funding, merch, and resources to empower partner events.",
    icon: Gift,
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  {
    title: "MSL Network Awards",
    desc: "Our annual flagship gala recognizing the best student leaders, top-performing organizations, and most impactful events.",
    icon: Trophy,
    color: "text-msl-gold",
    bg: "bg-msl-gold/10"
  },
  {
    title: "MSL Network Discord",
    desc: "The central hub for partner orgs to connect with the community and host their own events.",
    icon: MessagesSquare,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  }
];

// Consolidating Education and Other Initiatives into one list
const OTHER_INITIATIVES = [
  {
    title: "Beyond The Classroom",
    desc: "A webinar series targeting high school students to promote digital literacy, responsible gaming, and introductory esports careers.",
    icon: GraduationCap,
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    title: "Esports Management Masterclass",
    desc: "Comprehensive modules teaching end-to-end esports organization management and production.",
    icon: Presentation,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "The MSL Summit",
    desc: "The annual onsite convergence of all stakeholders to connect, strategize, and celebrate.",
    icon: Mic2,
    color: "text-red-400",
    bg: "bg-red-400/10"
  },
  {
    title: "Phil. Collegiate Training Grounds",
    desc: "Grants access to the professional Tournament Lobby client for universities preparing for official athletic leagues.",
    icon: Gamepad2,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  }
];

const Partnerships: React.FC<PartnershipsProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const [contactState, setContactState] = useState<'selection' | 'brand' | 'campus'>('selection');

  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll(); // Check initial state
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftFade(scrollLeft > 10); // Show left fade if scrolled more than 10px
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10); // Show right fade if not at the end
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-medium { animation: float 5s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-msl-black border-b border-white/10">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-msl-gold/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md mx-auto lg:mx-0">
              <Handshake className="text-yellow-400" size={14} />
              <span className="text-xs md:text-sm font-bold text-yellow-300 uppercase tracking-wider">Partnerships Department</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Fueling the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-500">Ecosystem.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              We act as the centralized bridge for esports organizations across the Philippines. Our team facilitates impactful brand campaigns, nationwide activations, and corporate sponsorships that elevate the student gaming experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center lg:justify-start">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-msl-gold hover:bg-msl-goldHover text-black rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(242,194,26,0.3)] flex items-center justify-center gap-2 hover:scale-105"
              >
                Partner With Us <ArrowRight size={20} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('divisions');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all hover:scale-105"
              >
                Meet The Team
              </button>
            </div>

            {/* Quick Stats Row - Embedded in Hero */}
            {/* Fixed layout for mobile view (stacking + span) to prevent cramping */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-display">80+</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">Partner Orgs</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-display">2,000+</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">Events Powered</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center justify-center lg:justify-start gap-2">
                  <TrendingUp size={24} className="text-msl-gold" /> ₱7.9M+
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">Community Investment</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract Connection Graph */}
          <div className="relative hidden lg:block h-[600px] w-full">
            {/* Center Node (MSL) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-msl-gold rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(242,194,26,0.2)] z-20 animate-pulse">
              <span className="text-msl-gold font-extrabold text-4xl tracking-tighter">MSL</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Network</span>
            </div>

            {/* Orbiting Nodes (Floating Cards) */}

            {/* Node 1: Schools */}
            <div className="absolute top-[15%] left-[10%] p-4 bg-msl-card/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl animate-float-slow z-20 max-w-[200px]">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 shrink-0"><School size={20} /></div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">University Partners</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Relations</div>
              </div>
            </div>

            {/* Node 2: Corporate Brands */}
            <div className="absolute top-[25%] right-[5%] p-4 bg-msl-card/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl animate-float-medium z-20 max-w-[200px]">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 shrink-0"><Briefcase size={20} /></div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Corporate Brands</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Sponsorships</div>
              </div>
            </div>

            {/* Node 3: Treasury */}
            <div className="absolute bottom-[20%] left-[5%] p-4 bg-msl-card/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl animate-float-fast z-20 max-w-[200px]">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 shrink-0"><Gem size={20} /></div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Asset Treasury</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Resources</div>
              </div>
            </div>

            {/* Node 4: Tech Infrastructure */}
            <div className="absolute bottom-[10%] right-[15%] p-4 bg-msl-card/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl animate-float-slow z-20 max-w-[200px]">
              <div className="w-10 h-10 bg-msl-gold/20 rounded-lg flex items-center justify-center text-msl-gold shrink-0"><Layers size={20} /></div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Infrastructure</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Systems</div>
              </div>
            </div>

            {/* Decorative SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.3 }}>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#F2C21A', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#F2C21A', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              {/* Connecting lines to center */}
              <line x1="50%" y1="50%" x2="18%" y2="20%" stroke="url(#grad1)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="85%" y2="28%" stroke="url(#grad1)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="15%" y2="78%" stroke="url(#grad1)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="75%" y2="85%" stroke="url(#grad1)" strokeWidth="1" />

              {/* Orbits */}
              <circle cx="50%" cy="50%" r="180" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="280" stroke="#222" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- 2. THE ARCHITECTS (IMPACT) - FLIPPED LAYOUT ON DESKTOP --- */}
      <section className="py-24 bg-gradient-to-b from-msl-surface to-black px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-msl-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-msl-gold"></div>
                <span className="text-msl-gold font-bold uppercase tracking-widest text-xs md:text-sm">Spearheading The Action</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                The Architects of <br />
                <span className="text-white">Esports, Events, and Education.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We build more than just tournaments. We design <span className="text-white font-bold">educational programs</span> and <span className="text-white font-bold">immersive activations</span> that empower student organizations to grow, sustain, and lead.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-msl-gold rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-msl-gold/20">
                    <Trophy className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">MSL Collegiate Cup</h3>
                    <p className="text-sm text-gray-400">
                      The official collegiate league of MLBB in the Philippines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                    <Megaphone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Moonton Game Campaigns</h3>
                    <p className="text-sm text-gray-400">
                      We translate global campaigns into grassroots campus activations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT CONTENT (Right on Desktop, Top on Mobile) -> lg:order-1 puts this visual on LEFT on desktop */}
            <div className="relative lg:order-1 w-full overflow-hidden">
              {/* Visual Representation of Tournament/Campaign */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-msl-card">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600"
                  alt="Esports Tournament Stage"
                  className="w-full h-auto min-h-[300px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-transparent to-transparent" />
                <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8">
                  <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-md mb-3 animate-pulse">
                    Flagship Event
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">MCC Season 4</h3>
                  <p className="text-gray-300 text-sm">The road to the nationals starts here. Powered by Partnerships.</p>
                </div>
              </div>

              {/* Compact Campaign Scroll with Conditional Fade */}
              <div className="mt-4 relative group/scroll">
                {/* Left Gradient Fade - Shows when scrolled right */}
                <div className={`absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none transition-opacity duration-300 ${showLeftFade ? 'opacity-100' : 'opacity-0'}`} />

                {/* Right Gradient Fade - Shows when content overflows */}
                <div className={`absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none transition-opacity duration-300 ${showRightFade ? 'opacity-100' : 'opacity-0'}`} />

                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
                >
                  {CAMPAIGN_PREVIEWS.map((camp, cIdx) => (
                    <div key={cIdx} className="min-w-[140px] h-[80px] rounded-xl relative overflow-hidden flex-shrink-0 border border-white/10 group">
                      <img src={camp.image} alt={camp.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                      {/* Label */}
                      {(camp as any).label && (
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-red-600 text-white text-[8px] font-bold uppercase rounded animate-pulse shadow-sm z-10">
                          {(camp as any).label}
                        </div>
                      )}

                      <div className="absolute bottom-2 left-3">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 flex items-center gap-1"><camp.icon size={10} className="text-msl-gold" /> Campaign</p>
                        <p className="text-sm font-bold text-white leading-none">{camp.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE PARTNER ECOSYSTEM (REDESIGNED) --- */}
      <section id="mandates" className="py-24 bg-msl-black px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Partner Ecosystem</h2>
            <p className="text-gray-400 max-w-2xl">
              A comprehensive suite of programs designed to discover talent, recognize excellence, and sustain the collegiate esports industry.
            </p>
          </div>

          {/* A. MAIN PROGRAM: THE MSL NETWORK */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-msl-gold/20 to-black mb-12 group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-msl-gold/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 p-8 md:p-12 items-start">

              {/* LEFT COLUMN (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-msl-gold/20 rounded-lg text-msl-gold"><Network size={24} /></div>
                  <span className="text-msl-gold font-bold uppercase tracking-widest text-xs">Flagship Program</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{MAIN_PROGRAM.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{MAIN_PROGRAM.desc}</p>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8 bg-black/20 p-6 rounded-2xl border border-white/5">
                  <div>
                    <h4 className="text-sm font-bold text-green-400 flex items-center gap-2 mb-3">
                      <Gift size={16} /> Via Buffs & Support
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Up to 150,000 Diamonds / sem",
                        "Monetary Sponsorship",
                        "Tournament Lobby Access"
                      ].map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-msl-gold flex items-center gap-2 mb-3">
                      <Star size={16} /> Network Perks
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Exclusive Campaign Access",
                        "Esports Trainings & Seminars",
                        "Education Modules",
                        "Partner Visibility"
                      ].map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-msl-gold mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full sm:w-auto px-8 py-3 bg-msl-gold hover:bg-msl-goldHover text-black font-bold rounded-xl transition-all shadow-lg shadow-msl-gold/20">
                  Join The Network
                </button>
              </div>

              {/* RIGHT COLUMN (5 cols) - Subprograms */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0 border-b border-white/10 pb-2">Core Pillars</p>
                {NETWORK_SUBPROGRAMS.map((sub, idx) => (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group/card">
                    <div className={`p-3 rounded-xl ${sub.bg} ${sub.color} shrink-0 group-hover/card:scale-110 transition-transform`}>
                      <sub.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{sub.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* B. OTHER INITIATIVES (Merged) */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6">
              Other Initiatives
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {OTHER_INITIATIVES.map((item, idx) => (
                <div key={idx} className="bg-msl-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FUNCTIONAL DIVISIONS (REDESIGNED: The Engine - Colorful Modules) --- */}
      <section id="divisions" className="py-24 bg-msl-surface px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-700 px-3 py-1 rounded-full bg-black/50">Internal Structure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Functional Divisions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The machine behind the magic. Specialized units working in sync to power the ecosystem.
            </p>
          </div>

          {/* Colorful Modular Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((div, idx) => (
              <div key={idx} className="bg-msl-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                {/* Gradient Background on Hover based on color */}
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

                {/* Subtle number identifier */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-700 font-bold opacity-50">0{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. MEET THE LEADERSHIP TEAM --- */}
      <section className="py-20 bg-msl-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              "We build bridges between passion and profession."
            </p>
          </div>

          {/* Leadership Core (Head) - Centered like other pages */}
          <div className="flex justify-center mb-16">
            <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-msl-gold/30 transition-all max-w-4xl w-full">
              <div className="md:w-5/12 relative min-h-[300px]">
                <img
                  src={HEAD_OF_PARTNERSHIPS.image}
                  alt={HEAD_OF_PARTNERSHIPS.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-msl-card via-transparent to-transparent opacity-90 md:opacity-60"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center md:w-7/12">
                <div className="mb-4">
                  <span className="text-msl-gold font-bold uppercase tracking-widest text-xs">{HEAD_OF_PARTNERSHIPS.role}</span>
                  <h3 className="text-3xl font-bold text-white mt-1 leading-tight">{HEAD_OF_PARTNERSHIPS.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed italic border-l-2 border-msl-gold pl-4">
                  "{HEAD_OF_PARTNERSHIPS.message}"
                </p>
              </div>
            </div>
          </div>

          {/* Division Heads Grid (Smaller Cards) */}
          <div className="relative pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider text-center md:text-left">Functional Division Heads</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {DIVISION_HEADS.map((head, idx) => (
                <div key={idx} className="bg-msl-card border border-white/5 rounded-xl overflow-hidden group hover:border-msl-gold/30 transition-all hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden bg-gray-800">
                    <img
                      src={head.image}
                      alt={head.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 w-full p-3">
                      <p className="text-[10px] text-msl-gold font-bold uppercase truncate leading-none mb-1">{head.division}</p>
                      <h3 className="font-bold text-white text-sm leading-tight">{head.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- 6. WORK WITH US (Cards) --- */}
      <section id="contact" className="py-24 bg-msl-card px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-msl-gold/5 blur-[80px] pointer-events-none" />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Work With Us</h2>
            <p className="text-gray-400">
              Whether you represent a student organization looking to join The MSL Network or a brand looking to sponsor, drop us a message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {/* Card 1: Brand / Corporation */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-msl-gold/30 transition-all group flex flex-col items-start text-left">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="text-purple-400" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">I am a Brand / Corporation</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Looking to sponsor events, maximize brand visibility, or invest in the collegiate scene.
              </p>

              <button className="mt-auto text-msl-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Opportunities <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 2: Campus Esports Org */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col items-start text-left">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <School className="text-blue-400" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">I am a Campus Esports Org</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Looking to join The MSL Network, get accredited, and receive diamond funding.
              </p>

              <button className="mt-auto text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Join The Network <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Partnerships;