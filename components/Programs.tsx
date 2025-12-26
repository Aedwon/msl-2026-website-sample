import React, { useState } from 'react';
import {
    ArrowRight,
    Users,
    Gift,
    UserPlus,
    Award,
    FileText,
    Repeat,
    Zap,
    Swords,
    MapPin,
    Search,
    RotateCcw,
    ExternalLink,
    Shield,
    Network,
    Gem,
    Gamepad2,
    Presentation,
    Mic2
} from 'lucide-react';

// --- DATA: CORE PROGRAMS (Synced with Departments) ---
const CORE_PROGRAMS = [
    {
        title: "Campus Tournaments",
        description: "Monthly online and onsite competitive circuits exclusively for student members. Compete for school pride and national rankings.",
        icon: Swords,
        color: "text-blue-500", // Campus
        bg: "bg-blue-500/10",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The MSL Network",
        description: "Our flagship ecosystem managing official relations with collegiate esports organizations. We bridge the gap between student leaders and Moonton Games.",
        icon: Network,
        color: "text-msl-gold", // Partnerships
        bg: "bg-msl-gold/10",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Buffs & Support",
        description: "The official sponsorship arm providing diamond funding, merchandise, and event resources to empower partner organizations.",
        icon: Gift,
        color: "text-msl-gold", // Partnerships
        bg: "bg-msl-gold/10",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Phil. Collegiate Training Grounds",
        description: "Grants access to the professional Tournament Lobby client for universities preparing for official athletic leagues.",
        icon: Gamepad2,
        color: "text-msl-gold", // Partnerships
        bg: "bg-msl-gold/10",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Esports Management Masterclass",
        description: "Comprehensive educational modules teaching end-to-end esports organization management, production, and leadership.",
        icon: Presentation,
        color: "text-msl-gold", // Partnerships
        bg: "bg-msl-gold/10",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The MSL Summit",
        description: "The annual onsite convergence of all stakeholders to connect, strategize, and celebrate the year's achievements.",
        icon: Mic2,
        color: "text-msl-gold", // Partnerships
        bg: "bg-msl-gold/10",
        image: "https://images.unsplash.com/photo-1475721027767-f42402781300?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Referral Program",
        description: "Empowering student leaders as recruiters. Refer new members and organizations to grow the community and earn bounty rewards.",
        icon: UserPlus,
        color: "text-green-500", // General Affairs
        bg: "bg-green-500/10",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    }
];

// --- DATA: CAMPUS TOURNAMENTS (EXPANDED MOCK DATA WITH REGIONS) ---
const CAMPUS_TOURNAMENTS = [
    {
        school: "University of Santo Tomas",
        org: "Teletigers Esports",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 18, 5:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1565514020176-db7040449575?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "De La Salle University",
        org: "Viridis Arcus",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 12, 6:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Univ. of San Carlos",
        org: "Warrior's Arena",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 20, 1:00 PM",
        region: "Visayas",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Jose Rizal University",
        org: "Campus MSL",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Jan 05, 3:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "PUP Sta. Mesa",
        org: "PUP Esports",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 14, 7:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Ateneo de Davao",
        org: "Campus MSL",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 14, 4:30 PM",
        region: "Mindanao",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Far Eastern University",
        org: "Tams FX",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 15, 2:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1592280771800-bcf9de2312b4?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "UP Diliman",
        org: "Oblation Esports",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 22, 12:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Central Phil. Univ",
        org: "Campus MSL",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 16, 6:00 PM",
        region: "Visayas",
        image: "https://images.unsplash.com/photo-1590012314607-6caf56725359?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Adamson University",
        org: "AdU Esports",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 13, 8:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Mapúa University",
        org: "MGS",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Jan 10, 5:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "Xavier Univ. (Ateneo)",
        org: "Crusaders",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 14, 3:00 PM",
        region: "Mindanao",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
        school: "San Beda University",
        org: "Red Lions Esports",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 15, 4:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1590012314607-6caf56725359?auto=format&fit=crop&q=80&w=800"
    }
];

// --- DATA: EVENTS ---
const FLAGSHIP_EVENT = {
    title: "MSL Collegiate Cup",
    subtitle: "The Official Collegiate League of MLBB in the Philippines",
    status: "ONGOING",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600",
    description: "The pinnacle of collegiate esports. Schools from Luzon, Visayas, and Mindanao clash for the title of National Champion and the chance to represent the country on the international stage."
};

const ONGOING_CAMPAIGNS = [
    {
        title: "MPL Watch Fest",
        type: "Ongoing",
        description: "Bring the arena atmosphere to school. Official watch parties for the MPL Philippines Regular Season and Playoffs.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "M-series Watch Fest",
        type: "Ongoing",
        description: "Support Pinas on the world stage. Campus gatherings for the M-Series World Championship.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600"
    }
];

const RECURRING_CAMPAIGNS = [
    {
        title: "MPL Battle Trips",
        type: "Recurring",
        description: "An all-expense paid immersion. Attend backend esports seminars and watch live MPL matches onsite.",
        image: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Golden Month",
        type: "Recurring",
        description: "A festive season of promo diamonds, exclusive skins, and campus-wide challenges to celebrate the community.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "All Star",
        type: "Recurring",
        description: "The biggest pop-culture crossover event. Student leaders host local showmatches and music fests inspired by the stars.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Project NEXT",
        type: "Recurring",
        description: "Experience the next evolution of MLBB. We bring the latest revamps and mechanics to student hubs before anyone else.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Anniversary",
        type: "Recurring",
        description: "A nationwide birthday bash for MLBB. Offline gatherings, cosplay competitions, and massive community giveaways.",
        image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80&w=600"
    }
];

const Programs: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const [activeRegion, setActiveRegion] = useState('All');

    const filteredTournaments = activeRegion === 'All'
        ? CAMPUS_TOURNAMENTS
        : CAMPUS_TOURNAMENTS.filter(t => t.region === activeRegion);

    const handleFilterClick = (region: string) => {
        setActiveRegion(region);
    };

    const handleViewAllClick = () => {
        if (activeRegion !== 'All') {
            setActiveRegion('All');
        } else {
            window.scrollTo(0, 0);
            onNavigate('campus-tournaments');
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative py-24 px-4 text-center border-b border-white/10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-msl-gold/5 blur-[100px] rounded-full pointer-events-none" />
                <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold mb-6">
                    Our <span className="text-msl-gold">Programs</span>
                </h1>
                <p className="relative z-10 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Designed to discover talent, build communities, and recognize excellence.
                    Choose your path in the MSL ecosystem.
                </p>
            </section>

            {/* --- CORE PROGRAMS GRID --- */}
            <section className="py-20 bg-msl-black px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CORE_PROGRAMS.map((prog, idx) => (
                            <div key={idx} className="group relative bg-msl-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                                {/* Image Header */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={prog.image}
                                        alt={prog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-msl-card to-transparent" />

                                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 flex items-center justify-center ${prog.color}`}>
                                        <prog.icon size={24} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-msl-gold transition-colors">
                                        {prog.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                        {prog.description}
                                    </p>
                                    <button
                                        onClick={() => {
                                            if (prog.title === "Campus Tournaments") {
                                                window.scrollTo(0, 0);
                                                onNavigate('campus-tournaments');
                                            } else if (prog.title === "Buffs & Support") {
                                                window.scrollTo(0, 0);
                                                onNavigate('buffs-support');
                                            } else if (prog.title === "The MSL Network") {
                                                window.scrollTo(0, 0);
                                                onNavigate('partnerships');
                                            } else {
                                                // Fallback or future implementation
                                            }
                                        }}
                                        className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                                    >
                                        Learn More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EVENTS HEADER --- */}
            <section className="py-12 bg-msl-surface border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Events & Campaigns</h2>
                    <p className="text-gray-400">What's happening in the Land of Dawn right now.</p>
                </div>
            </section>

            {/* --- FLAGSHIP EVENT --- */}
            <section className="py-16 bg-msl-surface px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0">
                            <img
                                src={FLAGSHIP_EVENT.image}
                                alt={FLAGSHIP_EVENT.title}
                                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                        </div>

                        <div className="relative p-8 md:p-16 max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse flex items-center gap-2">
                                    <span className="w-2 h-2 bg-white rounded-full" /> {FLAGSHIP_EVENT.status}
                                </span>
                                <span className="text-msl-gold font-bold tracking-widest uppercase text-sm">Flagship Event</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                                {FLAGSHIP_EVENT.title}
                            </h2>
                            <h3 className="text-xl md:text-2xl text-msl-gold font-display uppercase tracking-wider mb-6">
                                {FLAGSHIP_EVENT.subtitle}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {FLAGSHIP_EVENT.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-msl-gold hover:bg-msl-goldHover text-black rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(242,194,26,0.2)]">
                                    Register Your Team
                                </button>
                                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg backdrop-blur-md border border-white/20 flex items-center justify-center gap-2">
                                    Learn More <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ONGOING CAMPAIGNS --- */}
            <section className="py-12 bg-msl-surface px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-l-4 border-msl-gold pl-4">
                        Ongoing Campaigns
                    </h3>
                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto pb-6 gap-6 snap-x scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        {ONGOING_CAMPAIGNS.map((event, idx) => (
                            <div key={idx} className="min-w-[320px] max-w-[320px] snap-center bg-msl-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group hover:-translate-y-1 flex flex-col h-full">
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative shrink-0">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-md text-xs font-bold uppercase flex items-center gap-1.5 backdrop-blur-md bg-green-500/20 text-green-500 border border-green-500/20">
                                            <Zap size={12} fill="currentColor" />
                                            {event.type}
                                        </span>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">{event.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                                        {event.description}
                                    </p>
                                    <button className="text-msl-gold text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                        Details <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- RECURRING CAMPAIGNS --- */}
            <section className="py-12 bg-msl-surface px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
                        Recurring Campaigns
                    </h3>
                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto pb-6 gap-6 snap-x scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        {RECURRING_CAMPAIGNS.map((event, idx) => (
                            <div key={idx} className="min-w-[320px] max-w-[320px] snap-center bg-msl-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group hover:-translate-y-1 flex flex-col h-full">
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative shrink-0">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-md text-xs font-bold uppercase flex items-center gap-1.5 backdrop-blur-md bg-blue-500/20 text-blue-500 border border-blue-500/20">
                                            <Repeat size={12} />
                                            {event.type}
                                        </span>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">{event.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                                        {event.description}
                                    </p>
                                    <button className="text-msl-gold text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                        Details <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CAMPUS TOURNAMENTS (HORIZONTAL SCROLL) --- */}
            <section className="py-20 bg-[#0f172a] border-t border-white/10 relative overflow-hidden pb-32">
                {/* Subtle pattern or glow */}
                <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Header & Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Swords className="text-msl-gold" size={28} />
                                <h2 className="text-4xl font-bold text-white">Campus Tournaments</h2>
                            </div>
                            <p className="text-gray-400 max-w-xl">
                                Ongoing tournaments organized by Moonton Student Leaders. Support your school!
                            </p>
                        </div>

                        {/* Functional Filters */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
                            {['All', 'Luzon', 'Visayas', 'Mindanao'].map((region) => (
                                <button
                                    key={region}
                                    onClick={() => handleFilterClick(region)}
                                    className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${activeRegion === region
                                        ? 'bg-msl-gold text-black border-msl-gold'
                                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                                        }`}
                                >
                                    {region === 'All' ? 'All Regions' : region}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Horizontal Scrollable Row */}
                    <div className="flex overflow-x-auto pb-8 gap-5 snap-x scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">

                        {filteredTournaments.length > 0 ? (
                            filteredTournaments.map((tourney, idx) => (
                                <div key={idx} className="min-w-[320px] max-w-[320px] snap-center bg-msl-card border border-white/10 rounded-2xl overflow-hidden hover:border-msl-gold/30 transition-all group hover:-translate-y-1 shadow-lg flex flex-col">
                                    {/* Card Image */}
                                    <div className="h-36 bg-gray-800 relative overflow-hidden">
                                        <img src={tourney.image} alt={tourney.school} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-msl-card to-transparent" />

                                        {/* Floating Status Badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${tourney.statusColor}`}>
                                                {tourney.status}
                                            </span>
                                        </div>
                                        {/* Region badge intentionally hidden for cleaner look as per request, but accessible via data for filtering */}
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="mb-1">
                                            <h3 className="text-xl font-bold text-white leading-tight group-hover:text-msl-gold transition-colors line-clamp-1">{tourney.org}</h3>
                                            <p className="text-sm text-gray-400 flex items-center gap-1.5 font-medium mt-1">
                                                <MapPin size={12} className="text-msl-gold shrink-0" />
                                                <span className="truncate">{tourney.school}</span>
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <span>{tourney.date}</span>
                                            </div>

                                            {/* Dynamic Button based on Status */}
                                            {tourney.status === 'Registration Open' ? (
                                                <button className="text-xs font-bold text-green-400 hover:text-white transition-colors flex items-center gap-1">
                                                    Register <ArrowRight size={10} />
                                                </button>
                                            ) : (
                                                <button className="text-xs font-bold text-msl-gold hover:text-white transition-colors flex items-center gap-1">
                                                    Bracket <ExternalLink size={10} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="min-w-[320px] h-[200px] flex flex-col items-center justify-center text-gray-500 bg-white/5 rounded-2xl border border-white/10">
                                <p>No ongoing tournaments in this region.</p>
                            </div>
                        )}

                        {/* "View All" Functional Card */}
                        <div
                            onClick={handleViewAllClick}
                            className="min-w-[200px] snap-center flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 cursor-pointer transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-white">
                                {activeRegion !== 'All' ? <RotateCcw size={24} /> : <ArrowRight size={24} />}
                            </div>
                            <span className="text-sm font-bold text-gray-300 group-hover:text-white text-center">
                                {activeRegion !== 'All' ? (
                                    <>Reset Filter <br /> View All</>
                                ) : (
                                    <>View All <br /> 40+ Tournaments</>
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Search Community CTA */}
                    <div className="rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                <Search size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Find Your Community</h3>
                                <p className="text-gray-400 text-sm">Don't see your school listed above? Check our directory to join your local MSL Chapter.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => onNavigate('campus')}
                            className="w-full md:w-auto justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                        >
                            Search your school's MSL Community <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Programs;