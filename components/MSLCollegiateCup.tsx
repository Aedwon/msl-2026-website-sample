import React, { useState, useEffect } from 'react';
import {
    Trophy,
    Calendar,
    Users,
    Swords,
    MonitorPlay,
    ChevronRight,
    MapPin,
    Clock,
    Info,
    Shield,
    FileText,
    Target,
    Award,
    ExternalLink
} from 'lucide-react';

interface MSLCollegiateCupProps {
    onNavigate: (page: string) => void;
}

// --- MOCK DATA ---
const UPCOMING_MATCHES = [
    {
        id: 1,
        team1: { name: 'Teletigers', code: 'UST', logo: 'T', color: 'text-msl-gold' },
        team2: { name: 'Viridis Arcus', code: 'DLSU', logo: 'V', color: 'text-green-500' },
        time: 'LIVE NOW',
        isLive: true,
        series: 'BO3'
    },
    {
        id: 2,
        team1: { name: 'LG Esports', code: 'ADMU', logo: 'L', color: 'text-blue-500' },
        team2: { name: 'Tams FX', code: 'FEU', logo: 'F', color: 'text-yellow-500' },
        time: '3:00 PM',
        isLive: false,
        series: 'BO3'
    },
    {
        id: 3,
        team1: { name: 'Mechic', code: 'TIP', logo: 'M', color: 'text-gray-400' },
        team2: { name: 'Paradigm', code: 'NEU', logo: 'P', color: 'text-red-500' },
        time: '5:30 PM',
        isLive: false,
        series: 'BO3'
    }
];

const SCHEDULE_WEEKS = [
    { id: 'w1', label: 'Week 1', date: 'Feb 12-14' },
    { id: 'w2', label: 'Week 2', date: 'Feb 19-21' },
    { id: 'w3', label: 'Week 3', date: 'Feb 26-28' },
    { id: 'po', label: 'Playoffs', date: 'Mar 15-17' },
];

const MATCH_SCHEDULE = [
    {
        date: 'Wednesday, Feb 12',
        matches: [
            { team1: 'UST', team2: 'DLSU', time: '1:00 PM', score: '2 - 1' },
            { team1: 'ADMU', team2: 'UP', time: '3:30 PM', score: '0 - 2' },
        ]
    },
    {
        date: 'Thursday, Feb 13',
        matches: [
            { team1: 'FEU', team2: 'UE', time: '1:00 PM', score: '-' },
            { team1: 'NU', team2: 'AdU', time: '3:30 PM', score: '-' },
        ]
    }
];

const STANDINGS = [
    { rank: 1, team: 'Teletigers', code: 'UST', w: 3, l: 0, pts: 9 },
    { rank: 2, team: 'Viridis Arcus', code: 'DLSU', w: 2, l: 1, pts: 6 },
    { rank: 3, team: 'LG Esports', code: 'ADMU', w: 1, l: 2, pts: 3 },
    { rank: 4, team: 'Maroons', code: 'UP', w: 0, l: 3, pts: 0 },
];

const TEAMS = [
    'UST Teletigers', 'DLSU Viridis Arcus', 'ADMU LG Esports', 'UP Maroons',
    'FEU Tams FX', 'UE Zenith', 'NU Bulldogs', 'AdU Falcons',
    'SBU Red Lions', 'LPU Pirates', 'CSB Blazers', 'Mapua Cardinals'
];

const MSLCollegiateCup: React.FC<MSLCollegiateCupProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'bracket' | 'teams' | 'schedule'>('overview');
    const [activeInfoSection, setActiveInfoSection] = useState<'format' | 'schedule' | 'prizing' | 'rules'>('format');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-msl-black text-white font-sans selection:bg-msl-gold selection:text-black">

            {/* --- HERO IMAGE: CHAMPIONS SHOWCASE --- */}
            <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
                    alt="Season 2 Champions"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-msl-black"></div>

                {/* Overlay Text positioned at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-center pb-24 md:pb-32">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-msl-gold/50 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <Trophy size={14} className="text-msl-gold" />
                        <span className="text-gray-400">Season 2 Champions:</span>
                        <span className="text-white">UST Teletigers</span>
                    </div>
                </div>
            </section>

            {/* --- TOURNAMENT TITLE & REGISTRATION --- */}
            <section className="relative -mt-20 z-10 px-4 pb-20">
                <div className="max-w-7xl mx-auto text-center">

                    {/* Season Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msl-gold/10 border border-msl-gold/30 text-msl-gold text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        Season 3 (2026)
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter drop-shadow-2xl animate-fade-in-up delay-100 uppercase">
                        MSL Collegiate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-msl-gold via-yellow-200 to-msl-gold">Cup</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200 font-medium">
                        The Philippines' biggest collegiate esports tournament. <br />
                        <span className="text-msl-gold">1000+ Teams. One Champion.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <button className="w-full sm:w-auto px-10 py-4 bg-msl-gold hover:bg-yellow-400 text-black rounded-xl font-black text-xl uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] hover:-translate-y-1">
                            Register Now
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-xl uppercase tracking-wider transition-all backdrop-blur-md flex items-center justify-center gap-2">
                            <MonitorPlay size={20} /> Watch Trailer
                        </button>
                    </div>

                    {/* Quick Stats (Redesigned - Frameless/HUD Style) */}
                    <div className="mt-20 max-w-6xl mx-auto animate-fade-in-up delay-500">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative">
                            {/* Glow Effect behind stats */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-msl-gold/5 via-blue-500/5 to-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

                            <div className="pb-8 md:pb-0 md:px-8 text-center relative group">
                                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2">
                                    <Trophy size={14} className="text-msl-gold group-hover:scale-110 transition-transform" /> Prize Pool
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-msl-gold to-yellow-600 drop-shadow-sm">₱500,000</div>
                                <div className="mt-2 text-xs text-gray-400 font-medium">Season 3 Total Cash Prize</div>
                            </div>

                            <div className="py-8 md:py-0 md:px-8 text-center relative group">
                                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2">
                                    <MapPin size={14} className="text-blue-500 group-hover:scale-110 transition-transform" /> Venue
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">TBA</div>
                                <div className="mt-2 text-xs text-gray-400 font-medium">Live LAN Grand Finals</div>
                            </div>

                            <div className="pt-8 md:pt-0 md:px-8 text-center relative group">
                                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2">
                                    <Target size={14} className="text-purple-500 group-hover:scale-110 transition-transform" /> Pathway
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-700">MDL PH</div>
                                <div className="mt-2 text-xs text-gray-400 font-medium">Official Pro League Qualifier</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MATCH CENTER (Compact & Sticky) --- */}
            <section className="py-3 bg-[#050505]/90 border-y border-white/5 overflow-hidden backdrop-blur-xl sticky top-20 z-40 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto scrollbar-hide">
                    {/* Label */}
                    <div className="hidden md:flex items-center gap-3 shrink-0 pr-6 border-r border-white/10">
                        <div className="relative">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse absolute top-0 right-0"></div>
                            <MonitorPlay size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">Match Center</h3>
                            <div className="text-[9px] text-gray-500 font-bold uppercase">Live & Upcoming</div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        {/* MATCH CARDS */}
                        {UPCOMING_MATCHES.map((match) => (
                            <div key={match.id} className={`shrink-0 w-[260px] rounded-lg border px-3 py-2.5 relative group transition-all flex items-center justify-between gap-3 ${match.isLive ? 'bg-gradient-to-r from-red-900/20 to-black border-red-500/30' : 'bg-[#121212] border-white/5 hover:border-white/10'}`}>
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                                        <div className={`font-black text-xs truncate ${match.team1.color}`}>{match.team1.code}</div>
                                        <div className="text-[9px] text-gray-600 font-black">vs</div>
                                        <div className={`font-black text-xs truncate ${match.team2.color}`}>{match.team2.code}</div>
                                    </div>
                                    {match.isLive ? (
                                        <div className="flex gap-1 shrink-0">
                                            {/* Social Mock Icons */}
                                            <div className="w-5 h-5 rounded bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" title="Watch on Facebook">
                                                <svg viewBox="0 0 24 24" fill="white" width="10" height="10"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.742-2.971 2.28v1.692h3.945l-1.008 3.667h-2.937v7.98H9.101z"></path></svg>
                                            </div>
                                            <div className="w-5 h-5 rounded bg-[#FF0000] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" title="Watch on YouTube">
                                                <svg viewBox="0 0 24 24" fill="white" width="10" height="10"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                                            </div>
                                            <div className="w-5 h-5 rounded bg-black border border-white/20 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" title="Watch on TikTok">
                                                <svg viewBox="0 0 24 24" fill="white" width="10" height="10"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                                            {match.time}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- THE TOURNAMENT BRAIN (Robust Toggles) --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-msl-black relative">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Tournament Info</h2>
                        <div className="w-24 h-1 bg-msl-gold mx-auto rounded-full"></div>
                    </div>

                    {/* TOGGLE NAVIGATION (Segmented Control) */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/5 p-2 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm border border-white/5">
                        {[
                            { id: 'format', icon: Award, label: 'Format' },
                            { id: 'schedule', icon: Calendar, label: 'Schedule' },
                            { id: 'prizing', icon: Trophy, label: 'Prize Pool' },
                            { id: 'rules', icon: FileText, label: 'Rules' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveInfoSection(item.id as any)}
                                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2
                                    ${activeInfoSection === item.id
                                        ? 'bg-msl-gold text-black shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'}
                                `}
                            >
                                <item.icon size={16} /> {item.label}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT AREA */}
                    <div className="min-h-[400px]">

                        {/* FORMAT VIEW */}
                        {activeInfoSection === 'format' && (
                            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
                                {[
                                    { title: 'Open Qualifiers', date: 'Jan 15 - Feb 5', desc: '4 Regions. Single Elimination. Top 2 from each region advance.' },
                                    { title: 'Group Stage', date: 'Feb 12 - Mar 10', desc: '16 Teams. 4 Groups. Round Robin BO3. Top 2 advance.' },
                                    { title: 'Playoffs', date: 'Mar 15 - Mar 17', desc: '8 Teams. Double Elimination. Live LAN Event.', highlight: true }
                                ].map((stage, i) => (
                                    <div key={i} className={`p-8 rounded-3xl border flex flex-col relative overflow-hidden group ${stage.highlight ? 'bg-gradient-to-br from-msl-gold/10 to-transparent border-msl-gold/30' : 'bg-[#121212] border-white/10'}`}>
                                        <div className="text-6xl font-black text-white/5 absolute -right-4 -top-4">{i + 1}</div>
                                        <h3 className={`text-2xl font-black uppercase mb-2 ${stage.highlight ? 'text-msl-gold' : 'text-white'}`}>{stage.title}</h3>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                            <Calendar size={12} /> {stage.date}
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">{stage.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* SCHEDULE VIEW */}
                        {activeInfoSection === 'schedule' && (
                            <div className="animate-fade-in">
                                {/* Week Toggles */}
                                <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
                                    {SCHEDULE_WEEKS.map(week => (
                                        <button key={week.id} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:border-msl-gold/50 text-gray-300 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all">
                                            {week.label} <span className="opacity-50 text-[10px] ml-1">({week.date})</span>
                                        </button>
                                    ))}
                                </div>
                                {/* Matches List */}
                                <div className="space-y-4">
                                    {MATCH_SCHEDULE.map((day, i) => (
                                        <div key={i}>
                                            <h4 className="text-msl-gold font-bold uppercase tracking-widest text-xs mb-4 pl-2 border-l-2 border-msl-gold">{day.date}</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {day.matches.map((match, j) => (
                                                    <div key={j} className="bg-[#121212] border border-white/5 p-4 rounded-xl flex justify-between items-center hover:border-white/20 transition-all">
                                                        <div className="font-bold text-white w-24 text-right">{match.team1}</div>
                                                        <div className="px-4 py-1 bg-white/5 rounded text-sm font-mono text-gray-400">{match.score}</div>
                                                        <div className="font-bold text-white w-24 text-left">{match.team2}</div>
                                                        <div className="text-xs text-gray-500 uppercase font-bold ml-4">{match.time}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* PRIZE POOL VIEW */}
                        {activeInfoSection === 'prizing' && (
                            <div className="animate-fade-in max-w-4xl mx-auto">
                                <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-msl-gold/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mb-8">
                                    <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={120} /></div>
                                    <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Total Prize Pool</h3>
                                    <div className="text-6xl md:text-8xl font-black text-msl-gold mb-8 drop-shadow-md">₱1,000,000</div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                                        {[
                                            { place: 'Champion', prize: '₱500,000', color: 'text-msl-gold' },
                                            { place: '2nd Place', prize: '₱250,000', color: 'text-gray-300' },
                                            { place: '3rd Place', prize: '₱100,000', color: 'text-orange-700' },
                                            { place: '4th Place', prize: '₱50,000', color: 'text-gray-500' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5">
                                                <div className="text-[10px] uppercase font-bold text-gray-500 mb-1">{item.place}</div>
                                                <div className={`text-xl md:text-2xl font-black ${item.color}`}>{item.prize}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* RULES VIEW */}
                        {activeInfoSection === 'rules' && (
                            <div className="animate-fade-in w-full h-[600px] bg-[#121212] rounded-2xl border border-white/10 overflow-hidden relative group">
                                <div className="absolute top-4 right-4 z-10">
                                    <a
                                        href="https://msl-philippines.notion.site/ebd/2a66a35bd22f80ca9183d186718ae814"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-black/80 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 flex items-center gap-2 transition-all hover:scale-105 shadow-xl"
                                    >
                                        <ExternalLink size={12} /> Open in Notion
                                    </a>
                                </div>
                                <iframe
                                    src="https://msl-philippines.notion.site/ebd/2a66a35bd22f80ca9183d186718ae814"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allowFullScreen
                                    className="w-full h-full"
                                    title="Tournament Rules"
                                />
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* --- STANDINGS --- */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2 uppercase">Group Standings</h2>
                            <p className="text-gray-400 text-sm">Top 2 from each group advance to Playoffs.</p>
                        </div>
                        <div className="flex gap-2">
                            {['A', 'B', 'C', 'D'].map(g => (
                                <button key={g} className={`w-10 h-10 rounded-lg font-bold border ${g === 'A' ? 'bg-msl-gold text-black border-msl-gold' : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'}`}>
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Responsive Table */}
                    <div className="bg-[#121212] rounded-3xl border border-white/10 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-gray-500 bg-white/[0.02]">
                                        <th className="p-6 font-bold w-16">#</th>
                                        <th className="p-6 font-bold">Team</th>
                                        <th className="p-6 font-bold text-center">W</th>
                                        <th className="p-6 font-bold text-center">L</th>
                                        <th className="p-6 font-bold text-center">Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {STANDINGS.map((row) => (
                                        <tr key={row.code} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                            <td className="p-6 font-bold text-gray-600 group-hover:text-white">{row.rank}</td>
                                            <td className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">{row.code[0]}</div>
                                                    <div>
                                                        <div className="font-bold text-white text-lg">{row.team}</div>
                                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">{row.code}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 font-bold text-white text-center">{row.w}</td>
                                            <td className="p-6 font-bold text-gray-500 text-center">{row.l}</td>
                                            <td className="p-6 font-black text-msl-gold text-center text-xl">{row.pts}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PARTICIPATING TEAMS --- */}
            <section className="py-24 bg-msl-black border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase">The Challengers</h2>
                        <p className="text-gray-400">Representing the best universities across the archipelago.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {TEAMS.map((team, i) => (
                            <div key={i} className="aspect-square bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 transition-all hover:-translate-y-1 cursor-pointer group">
                                <div className="w-16 h-16 rounded-full bg-black border-2 border-white/10 mb-3 group-hover:border-msl-gold/50 transition-colors flex items-center justify-center text-2xl font-black text-gray-700 group-hover:text-msl-gold">
                                    {team.charAt(0)}
                                </div>
                                <div className="text-xs font-bold text-gray-400 text-center uppercase leading-tight group-hover:text-white transition-colors">{team}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MSLCollegiateCup;
