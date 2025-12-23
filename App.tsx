import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Gamepad2,
  Users,
  Trophy,
  School,
  ArrowRight,
  Calendar,
  MapPin,
  Facebook,
  Mail,
  Instagram,
  Plus,
  Minus,
  Briefcase
} from 'lucide-react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProgramsPage from './components/Programs';
import Careers from './components/Careers';
import News from './components/News'; // Import News Page
import Campus from './components/Campus'; // Import Campus Page
import Partnerships from './components/Partnerships'; // Import Partnerships Page
import Contents from './components/Contents'; // Import Contents Page
import GeneralAffairs from './components/GeneralAffairs'; // Import General Affairs Page
import SafeSpaces from './components/SafeSpaces'; // Import Safe Spaces Page
import Legal from './components/Legal'; // Import Legal Page
import TrustTicker from './components/TrustTicker';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ComplianceBanner from './components/ComplianceBanner'; // Import Compliance Banner

// --- DATA MOCKS ---

const STATS = [
  { label: "Student Gamers", value: "22K+", icon: Users },
  { label: "Campus Communities", value: "150+", icon: School },
  { label: "Events Sponsored", value: "110+", icon: Trophy },
  { label: "Student Leaders", value: "240+", icon: Gamepad2 },
];

const PROGRAMS_WIDGET_DATA = [
  {
    title: "Campus Tournaments",
    desc: "Intra-school competitions that unite student gamers and strengthen campus pride.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1"
  },
  {
    title: "Inter-school Tournaments",
    desc: "Nationwide clashes where schools face off and champions rise together.",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-2"
  },
  {
    title: "Trainings and Seminars",
    desc: "Workshops that sharpen leadership, esports skills, and community-building know-how.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1"
  },
  {
    title: "Event Sponsorships",
    desc: "Partner-backed opportunities that elevate student-led initiatives across campuses.",
    image: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-2"
  },
  {
    title: "MLBB Campaigns",
    desc: "Creative activations and nationwide drives that celebrate the spirit of Mobile Legends.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-2"
  }
];

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'programs':
        return <ProgramsPage />;
      case 'careers':
        return <Careers />;
      case 'news':
        return <News />;
      case 'campus':
        return <Campus onNavigate={setCurrentPage} />;
      case 'partnerships':
        return <Partnerships onNavigate={setCurrentPage} />;
      case 'contents':
        return <Contents onNavigate={setCurrentPage} />;
      case 'general':
        return <GeneralAffairs onNavigate={setCurrentPage} />;
      case 'safespaces':
        return <SafeSpaces />;
      case 'privacy':
        return <Legal type="privacy" onBack={() => setCurrentPage('home')} />;
      case 'tos':
        return <Legal type="tos" onBack={() => setCurrentPage('home')} />;
      case 'accessibility':
        return <Legal type="accessibility" onBack={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return (
          <>
            {/* --- SECTION 1: HERO --- */}
            <Hero onNavigate={setCurrentPage} />

            {/* --- SECTION 2: TRUST TICKER (Dark) --- */}
            <TrustTicker />

            {/* --- SECTION 3: PROOF OF IMPACT (Surface) --- */}
            <section className="py-20 bg-msl-surface relative overflow-hidden border-t border-white/10" aria-label="Our Impact">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">About MSL Philippines</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    We are the official student leader body of Mobile Legends: Bang Bang in the Philippines. Guided by Moonton, we create inclusive campus initiatives that unite players, boost school pride, and prove that gaming passion goes hand-in-hand with academic success.
                  </p>
                  <button
                    onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
                    className="w-full sm:w-auto py-4 sm:py-2 text-msl-gold hover:text-white font-bold flex items-center justify-center gap-2 mx-auto transition-colors group border border-white/10 sm:border-none rounded-xl bg-white/5 sm:bg-transparent"
                  >
                    Learn More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {STATS.map((stat, idx) => (
                    <div key={idx} className="bg-msl-card border border-white/5 p-6 rounded-2xl text-center hover:bg-msl-cardHover transition-colors group">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-msl-gold/20 to-yellow-600/20 rounded-full flex items-center justify-center text-msl-gold mb-4 group-hover:scale-110 transition-transform">
                        <stat.icon size={24} aria-hidden="true" />
                      </div>
                      <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                      <div className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- SECTION 4: PROGRAMS (Black) --- */}
            <section className="py-24 bg-msl-black border-t border-white/10" aria-label="Our Programs">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">Our Programs</h2>
                    <p className="text-gray-400 max-w-xl text-lg">Building opportunities for student leaders through events, training, and nationwide esports initiatives.</p>
                  </div>
                  <button
                    onClick={() => { setCurrentPage('programs'); window.scrollTo(0, 0); }}
                    className="w-full md:w-auto px-6 py-4 bg-white/5 border border-white/10 md:border-transparent rounded-xl text-msl-gold hover:text-white font-bold flex items-center justify-center gap-2 transition-colors active:bg-white/10"
                  >
                    View All Programs <ArrowRight size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[280px]">
                  {PROGRAMS_WIDGET_DATA.map((prog, idx) => (
                    <div
                      key={idx}
                      className={`${prog.colSpan} relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-white/10 h-[280px] md:h-auto`}
                      onClick={() => { setCurrentPage('programs'); window.scrollTo(0, 0); }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setCurrentPage('programs');
                          window.scrollTo(0, 0);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 transition-opacity" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-10 h-10 bg-msl-gold rounded-lg flex items-center justify-center mb-4 text-black opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity delay-100 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 duration-300">
                          <ArrowRight size={20} aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 shadow-sm leading-tight">{prog.title}</h3>
                        <p className="text-gray-300 text-sm line-clamp-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-75 font-medium">
                          {prog.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- SECTION 5: TESTIMONIALS (Surface) --- */}
            <Testimonials />

            {/* --- SECTION 6: FAQ (Black) --- */}
            <FAQ />

            {/* --- SECTION 7: FINAL CTA (Surface) --- */}
            <section className="py-24 bg-msl-surface relative border-t border-white/10" aria-label="Get Involved">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Choose Your Path</h2>
                  <p className="text-gray-400 mt-4 text-lg">Select how you want to get involved with MSL Philippines.</p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Student Path */}
                  <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-msl-gold/50 transition-all duration-300 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-msl-gold/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="w-16 h-16 bg-msl-gold/20 rounded-2xl flex items-center justify-center text-msl-gold mb-8 group-hover:scale-110 transition-transform">
                      <Gamepad2 size={32} aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">For Students</h3>
                    <p className="text-gray-400 mb-10 leading-relaxed text-lg flex-grow">
                      Establish an MSL community in your school. Gain access to official tournaments, leadership grants, and mentorship programs.
                    </p>
                    <button
                      onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); }}
                      className="w-full py-4 bg-msl-gold hover:bg-msl-goldHover text-black rounded-xl font-bold text-lg transition-all shadow-lg shadow-msl-gold/20 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
                    >
                      Be A Member <ArrowRight size={20} />
                    </button>
                  </div>

                  {/* Partner Path */}
                  <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
                      <Briefcase size={32} aria-hidden="true" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">For Partners</h3>
                    <p className="text-gray-400 mb-10 leading-relaxed text-lg flex-grow">
                      Empower the next generation. Collaborate with us for campus activations, brand integration, and student-led events.
                    </p>
                    <button
                      onClick={() => { setCurrentPage('partnerships'); window.scrollTo(0, 0); }}
                      className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group-hover:border-white/40 hover:translate-y-[-2px]"
                    >
                      Partner With Us <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-msl-black text-white font-sans selection:bg-msl-gold selection:text-black">
      {/* WCAG: Skip Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="fixed top-0 left-0 z-[100] bg-msl-gold text-black px-4 py-2 font-bold transform -translate-y-full focus:translate-y-0 transition-transform"
      >
        Skip to main content
      </a>

      {/* Compliance Banner - Always mounted */}
      <ComplianceBanner />

      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      {/* CSS for custom animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.7s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;