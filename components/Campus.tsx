import React, { useState, useEffect } from 'react';
import { Search, MapPin, Users, Trophy, School, ArrowRight, Filter, Target, Flag, BookOpen, Star, Shield, TrendingUp, Globe, Map, Facebook, Briefcase, ChevronDown } from 'lucide-react';

interface CampusProps {
    onNavigate: (page: string) => void;
}

interface Community {
    id: number;
    school: string;
    shortName: string;
    orgName?: string; // Optional: Some schools are managed by individuals/MSL direct
    region: string;
    memberCount: string;
    status: string;
    facebookUrl: string;
}

// --- MOCK DATA: TEAM ---
const NATIONAL_HEAD = {
    name: "Thrice Austine F. Vasquez",
    role: "Department Head",
    region: "National",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800",
    message: "Our goal is to reach every campus in the Philippines. By building strong, independent student communities, we ensure that the passion for esports translates into leadership skills that will last a lifetime. Every tournament, every event, and every community gathering is a stepping stone for our student leaders."
};

const REGIONAL_ADMINS = [
    { name: "Miguel Santos", region: "NCR - North" },
    { name: "Sarah Alcantara", region: "NCR - South" },
    { name: "David Reyes", region: "North Luzon" },
    { name: "Jenny Lim", region: "Central Luzon" },
    { name: "Marco Polo", region: "South Luzon" },
    { name: "Elena Cruz", region: "Bicol Region" },
    { name: "Jake Peralta", region: "West Visayas" },
    { name: "Amy Santiago", region: "Central Visayas" },
    { name: "Rosa Diaz", region: "East Visayas" },
    { name: "Terry Jeffords", region: "North Mindanao" },
    { name: "Charles Boyle", region: "South Mindanao" },
    { name: "Raymond Holt", region: "West Mindanao" },
    { name: "Gina Linetti", region: "BARMM" },
].map(m => ({
    ...m,
    image: `https://ui-avatars.com/api/?name=${m.name.replace(' ', '+')}&background=0D8ABC&color=fff&size=400` // Using placeholder avatars for the 13 regions for visual consistency
}));

// --- MOCK DATA: SCHOOL DIRECTORY ---
const MSL_COMMUNITIES: Community[] = [
    {
        id: 1,
        school: "University of Santo Tomas",
        shortName: "UST",
        orgName: "Teletigers Esports",
        region: "NCR",
        memberCount: "1,200",
        status: "Super School",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 2,
        school: "De La Salle University",
        shortName: "DLSU",
        orgName: "Viridis Arcus",
        region: "NCR",
        memberCount: "950",
        status: "Tier A",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 3,
        school: "University of San Carlos",
        shortName: "USC",
        orgName: "Warrior's Arena",
        region: "Visayas",
        memberCount: "800",
        status: "Tier A",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 4,
        school: "Ateneo de Davao University",
        shortName: "AdDU",
        orgName: "Blue Knights",
        region: "Mindanao",
        memberCount: "600",
        status: "Tier B",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 5,
        school: "Far Eastern University",
        shortName: "FEU",
        orgName: "Tams FX",
        region: "NCR",
        memberCount: "1,100",
        status: "Super School",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 6,
        school: "University of the Philippines Diliman",
        shortName: "UPD",
        orgName: "Oblation Esports",
        region: "NCR",
        memberCount: "850",
        status: "Tier A",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 7,
        school: "Central Philippine University",
        shortName: "CPU",
        orgName: "Golden Lions",
        region: "Visayas",
        memberCount: "500",
        status: "Tier C",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 8,
        school: "Xavier University",
        shortName: "XU",
        orgName: "Crusaders Esports",
        region: "Mindanao",
        memberCount: "450",
        status: "Tier C",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 9,
        school: "Polytechnic University of the Philippines",
        shortName: "PUP",
        orgName: "PUP Esports",
        region: "NCR",
        memberCount: "2,000",
        status: "Super School",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 10,
        school: "Saint Louis University",
        shortName: "SLU",
        orgName: "Navigators",
        region: "North/Central Luzon",
        memberCount: "700",
        status: "Tier A",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 11,
        school: "De La Salle Lipa",
        shortName: "DLSL",
        orgName: "Stallions",
        region: "South Luzon",
        memberCount: "550",
        status: "Tier B",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 12,
        school: "Holy Angel University",
        shortName: "HAU",
        orgName: "Valiant Esports",
        region: "North/Central Luzon",
        memberCount: "620",
        status: "Tier C",
        facebookUrl: "https://facebook.com"
    },
    // --- EXAMPLES OF NO ORG PARTNER (INDIVIDUAL LED) ---
    {
        id: 13,
        school: "Bulacan State University",
        shortName: "BulSU",
        // No orgName provided
        region: "North/Central Luzon",
        memberCount: "350",
        status: "Tier C",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 14,
        school: "Silliman University",
        shortName: "SU",
        // No orgName provided
        region: "Visayas",
        memberCount: "200",
        status: "Tier C",
        facebookUrl: "https://facebook.com"
    },
    {
        id: 15,
        school: "Mindanao State University",
        shortName: "MSU",
        // No orgName provided
        region: "Mindanao",
        memberCount: "400",
        status: "Tier B",
        facebookUrl: "https://facebook.com"
    }
];

const REGIONS = ['All', 'North/Central Luzon', 'NCR', 'South Luzon', 'Visayas', 'Mindanao'];

const Campus: React.FC<CampusProps> = ({ onNavigate }) => {
    const [activeRegion, setActiveRegion] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Scroll to top on mount to fix navigation issue
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredCommunities = MSL_COMMUNITIES
        .filter(comm => {
            const matchesRegion = activeRegion === 'All' || comm.region === activeRegion;
            const matchesSearch = comm.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (comm.orgName && comm.orgName.toLowerCase().includes(searchQuery.toLowerCase())) ||
                comm.shortName.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesRegion && matchesSearch;
        })
        .sort((a, b) => a.school.localeCompare(b.school)); // Alphabetize by School Name

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Super School': return 'text-msl-gold bg-yellow-900/20 border-yellow-500/20'; // Replaces Diamond
            case 'Tier A': return 'text-purple-400 bg-purple-900/20 border-purple-500/20'; // High Tier
            case 'Tier B': return 'text-cyan-400 bg-cyan-900/20 border-cyan-500/20'; // Mid Tier
            case 'Tier C': return 'text-gray-400 bg-gray-800/50 border-gray-700'; // Entry Tier
            default: return 'text-gray-400 bg-gray-800/50 border-gray-700';
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">

            {/* --- HERO SECTION (REVAMPED) --- */}
            <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-msl-black border-b border-white/10">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto lg:mx-0">
                            <School className="text-blue-400" size={14} aria-hidden="true" />
                            <span className="text-xs md:text-sm font-bold text-blue-300 uppercase tracking-wider">Campus Department</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            United by <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">School Spirit.</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                            We manage the largest network of collegiate gaming communities in the Philippines. From Luzon to Mindanao, we empower student leaders to build thriving esports communities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <button
                                onClick={() => {
                                    const el = document.getElementById('directory');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
                            >
                                Find Your School <Search size={20} aria-hidden="true" />
                            </button>
                            <button
                                onClick={() => onNavigate('careers')}
                                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all"
                            >
                                Start an MSL Community
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center lg:text-left">
                            <div>
                                <h4 className="text-3xl font-bold text-white font-display">150+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Active Communities</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white font-display">22k+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Student Gamers</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white font-display">3,600+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Yearly Events</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Dynamic Composition */}
                    <div className="relative hidden lg:block h-[600px]">
                        <div className="absolute inset-0 flex items-center justify-center">

                            {/* Main Central Card - The Hub */}
                            <div className="relative w-80 h-[450px] bg-msl-card rounded-3xl border border-white/10 shadow-2xl z-10 overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Students gaming at a tournament" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Live Tournament</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-tight">Campus Showdown</h3>
                                    <p className="text-sm text-gray-300 mt-1">Monthly Community Match</p>
                                </div>
                            </div>

                            {/* Floating Card 1 - Verification/Shield (Top Left) */}
                            <div className="absolute top-20 left-0 w-48 p-4 bg-gray-900/90 backdrop-blur-md rounded-xl border border-blue-500/30 shadow-xl transform -rotate-6 animate-float-slow z-20">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Shield size={16} /></div>
                                    <span className="text-xs font-bold text-gray-300 uppercase">Status</span>
                                </div>
                                <div className="text-sm font-bold text-white">Accredited Community</div>
                                <div className="mt-2 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Floating Card 2 - Map/Location (Bottom Right) - REORDERED */}
                            <div className="absolute bottom-32 -right-4 w-56 p-4 bg-gray-900/90 backdrop-blur-md rounded-xl border border-indigo-500/30 shadow-xl transform rotate-3 animate-float-medium z-20">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Coverage</span>
                                    <Globe size={16} className="text-indigo-400" />
                                </div>

                                {/* Main Value */}
                                <div className="mb-2">
                                    <h3 className="text-lg font-bold text-white leading-tight">Nationwide Reach</h3>
                                </div>

                                {/* Footer/Details */}
                                <div className="flex items-center justify-between border-t border-white/10 pt-2">
                                    <span className="text-[10px] text-gray-500 font-medium">Luzon • Visayas • Mindanao</span>
                                    <span className="text-[10px] font-bold text-white bg-indigo-500/20 border border-indigo-500/30 px-1.5 py-0.5 rounded">PH</span>
                                </div>
                            </div>

                            {/* Floating Card 3 - Small Trophy (Top Right - behind) */}
                            <div className="absolute top-40 -right-8 w-20 h-20 bg-msl-gold/10 backdrop-blur-sm rounded-2xl border border-msl-gold/20 flex items-center justify-center animate-float-fast z-0">
                                <Trophy size={32} className="text-msl-gold opacity-50" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- PILLARS OF THE DEPARTMENT --- */}
            <section className="py-20 bg-msl-surface px-4 sm:px-6 lg:px-8 border-b border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The Campus Department operates on three core pillars to ensure sustainability and growth for every community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-msl-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Community Management</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                We monitor the health of 150+ MSL Communities. This involves enforcing community guidelines, conflict resolution, and ensuring every student leader has the resources to run their local hub effectively.
                            </p>
                        </div>

                        <div className="bg-msl-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <Trophy size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Tournament Operations</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                We execute <strong>Campus Tournaments</strong>, a circuit of Online and Onsite events. Our team handles bracket management, ruleset enforcement, and disputes to ensure fair play across Luzon, Visayas, and Mindanao.
                            </p>
                        </div>

                        <div className="bg-msl-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Student Development</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                We don't just build gamers; we build leaders. Through our mentorship programs, we train Community Heads in event management, leadership, and professional communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXCLUSIVE PROGRAMS --- */}
            <section className="py-20 bg-msl-black px-4 sm:px-6 lg:px-8 border-b border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Exclusive Programs</h2>
                            <p className="text-gray-400">Initiatives designed specifically for our accredited campus communities.</p>
                        </div>
                        <button onClick={() => onNavigate('programs')} className="text-blue-500 font-bold hover:text-white transition-colors flex items-center gap-2">
                            View All MSL Programs <ArrowRight size={16} aria-hidden="true" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#0f172a] rounded-3xl p-8 border border-blue-900/30 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
                            <div className="flex-1 relative z-10 flex flex-col justify-center h-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase mb-4 w-max">
                                    Flagship System
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">The Accreditation System</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    A tiered framework <strong>(Tier C, Tier B, Tier A, Super School)</strong> that rewards active communities. The more active your chapter, the more support you receive—from diamond funding to official merchandise and event logistics.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-gray-300"><Shield size={14} className="text-blue-500" aria-hidden="true" /> Official Recognition</li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300"><Star size={14} className="text-blue-500" aria-hidden="true" /> Monthly Diamond Support</li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300"><Flag size={14} className="text-blue-500" aria-hidden="true" /> Tournament Kits</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square bg-blue-950/50 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-lg shrink-0">
                                <Shield size={64} className="text-blue-500 opacity-80" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 h-full">
                            {/* Monthly Campus Tournaments - Merged */}
                            <div className="bg-msl-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all group flex-1 flex flex-col">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <Trophy size={18} className="text-msl-gold" aria-hidden="true" /> Ongoing Campus Tournaments
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    Compete for school pride in our official competitive circuits. Whether it's the <strong>Monthly Online Tournaments</strong> for remote play or the <strong>Onsite Events</strong> held within campus premises.
                                </p>
                                <button
                                    onClick={() => onNavigate('campus-tournaments')}
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 mt-auto"
                                >
                                    Find Your Tournament <ArrowRight size={16} />
                                </button>
                            </div>

                            {/* Leadership Training (Renamed) */}
                            <div className="bg-msl-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all flex-1 flex flex-col">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <TrendingUp size={18} className="text-green-500" aria-hidden="true" /> Leadership Training
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    Comprehensive workshops, seminars, and mentorship programs designed to mold student gamers into capable, professional community leaders.
                                </p>
                                <button
                                    onClick={() => onNavigate('careers')}
                                    className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 mt-auto"
                                >
                                    View Programs <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ACCREDITATION JOURNEY --- */}
            <section className="py-24 bg-msl-surface border-b border-white/10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Journey to Super School</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            How your student community can grow within the MSL ecosystem.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-blue-900 to-msl-gold/50 -translate-y-1/2 rounded-full z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Application", desc: "Submit requirements and pass the interview.", color: "border-gray-600 text-gray-400" },
                                { step: "02", title: "Tier C / B", desc: "Probationary to Development phase.", color: "border-blue-800 text-blue-400" },
                                { step: "03", title: "Tier A", desc: "High performance & consistent events.", color: "border-purple-500 text-purple-400" },
                                { step: "04", title: "Super School", desc: "Top-tier performance. Max funding & exclusive perks.", color: "border-msl-gold text-msl-gold" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-msl-card p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center shadow-xl">
                                    <div className={`w-12 h-12 rounded-full border-2 ${item.color} bg-msl-black flex items-center justify-center font-bold text-lg mb-4`}>
                                        {item.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MEET THE CAMPUS TEAM (Updated Hierarchy) --- */}
            <section className="py-20 bg-msl-black border-b border-white/10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Meet the Campus Team</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Dedicated managers ensuring every school and region gets the support it needs.
                        </p>
                    </div>

                    {/* 1. National Head (Featured Top Center - Refactored Layout) */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-blue-500/30 transition-all max-w-4xl w-full">
                            <div className="md:w-5/12 relative min-h-[300px]">
                                <img
                                    src={NATIONAL_HEAD.image}
                                    alt={NATIONAL_HEAD.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-msl-card via-transparent to-transparent opacity-90 md:opacity-60"></div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center md:w-7/12">
                                <div className="mb-4">
                                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">{NATIONAL_HEAD.role}</span>
                                    <h3 className="text-3xl font-bold text-white mt-1 leading-tight">{NATIONAL_HEAD.name}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                                    "{NATIONAL_HEAD.message}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Regional Managers (Horizontal Scroll) */}
                    <div className="relative">
                        <h3 className="text-xl font-bold text-gray-400 mb-6 pl-2 border-l-4 border-blue-500">Regional Admins</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {REGIONAL_ADMINS.map((member, idx) => (
                                <div key={idx} className="bg-msl-card border border-white/5 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all hover:-translate-y-1">
                                    <div className="aspect-square relative overflow-hidden bg-gray-800">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-0 left-0 w-full p-3">
                                            <p className="text-[10px] text-blue-400 font-bold uppercase truncate leading-none mb-1">{member.region}</p>
                                            <h3 className="font-bold text-white text-sm leading-tight">{member.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DIRECTORY SECTION --- */}
            <section id="directory" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Community Directory</h2>
                        <p className="text-gray-400">Browse our network of official campus communities.</p>
                    </div>

                    {/* Search & Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative">
                            <label htmlFor="school-search" className="sr-only">Search School</label>
                            <input
                                id="school-search"
                                type="text"
                                placeholder="Search school or community..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full sm:w-64 bg-msl-card border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <Search className="absolute left-3 top-3.5 text-gray-500" size={18} aria-hidden="true" />
                        </div>

                        {/* Filter Bar Fix: Added w-max to inner flex to ensure background covers all items */}
                        {/* Filter Dropdown */}
                        <div className="relative min-w-[200px]">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="w-full flex items-center justify-between px-4 py-3 bg-msl-card border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-all focus:outline-none focus:border-blue-500"
                            >
                                <span className="flex items-center gap-2 text-sm">
                                    <Filter size={16} className="text-gray-400" />
                                    {activeRegion === 'All' ? 'All Regions' : activeRegion}
                                </span>
                                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isFilterOpen && (
                                <div className="absolute top-full right-0 mt-2 w-full bg-msl-card border border-white/10 rounded-xl shadow-xl overflow-hidden z-20 flex flex-col p-1 animate-fade-in-up">
                                    {REGIONS.map((region) => (
                                        <button
                                            key={region}
                                            onClick={() => {
                                                setActiveRegion(region);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left text-sm font-bold rounded-lg transition-colors ${activeRegion === region
                                                    ? 'bg-blue-600 text-white'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {region}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Server Browser Style List */}
                <div className="flex flex-col space-y-3">
                    {/* Table Header (Desktop only) */}
                    <div className="hidden md:grid grid-cols-12 px-6 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider" role="rowheader">
                        <div className="col-span-5">School / Community</div>
                        <div className="col-span-2">Region</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-1 text-center">Members</div>
                        <div className="col-span-2 text-right">Join Community</div>
                    </div>

                    {/* Rows */}
                    {filteredCommunities.length > 0 ? (
                        filteredCommunities.map((comm) => (
                            <div
                                key={comm.id}
                                className="bg-msl-card border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/40 hover:bg-[#1a2333] transition-all duration-200 group relative"
                                role="row"
                            >
                                {/* Desktop Row Layout */}
                                <div className="hidden md:grid grid-cols-12 items-center p-4 gap-4">
                                    {/* Community Info */}
                                    <div className="col-span-5 flex items-center gap-4 pl-2">
                                        <div className="flex flex-col justify-center">
                                            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors text-base md:text-lg">{comm.school}</h3>
                                            {/* Conditional Rendering: Org Name or 'Student Community' */}
                                            <p className="text-xs text-gray-500">
                                                {comm.shortName}
                                                {comm.orgName ? (
                                                    <> • {comm.orgName}</>
                                                ) : (
                                                    <> • <span className="italic text-gray-500">Student Community</span></>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Region */}
                                    <div className="col-span-2">
                                        <span className="text-sm text-gray-400 font-medium">{comm.region}</span>
                                    </div>

                                    {/* Status */}
                                    <div className="col-span-2">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(comm.status)}`}>
                                            {comm.status}
                                        </span>
                                    </div>

                                    {/* Members */}
                                    <div className="col-span-1 text-center">
                                        <span className="text-sm text-gray-400 font-medium">{comm.memberCount}</span>
                                    </div>

                                    {/* Action */}
                                    <div className="col-span-2 flex justify-end">
                                        <a
                                            href={comm.facebookUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-600/10"
                                            aria-label={`Join ${comm.school} Facebook Group`}
                                        >
                                            <Facebook size={16} aria-hidden="true" /> Join Group
                                        </a>
                                    </div>
                                </div>

                                {/* Mobile Card Layout (Compact) */}
                                <div className="md:hidden p-5 flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white text-base leading-tight mb-1">{comm.school}</h3>
                                            <p className="text-xs text-gray-500">
                                                {comm.shortName}
                                                {comm.orgName ? ` • ${comm.orgName}` : <span className="italic"> • Student Community</span>}
                                            </p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border flex-shrink-0 ml-4 ${getStatusColor(comm.status)}`}>
                                            {comm.status}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-400 border-t border-white/5 pt-4">
                                        <div className="flex gap-4 flex-wrap">
                                            <span className="flex items-center gap-1"><MapPin size={12} aria-hidden="true" /> {comm.region}</span>
                                            <span className="flex items-center gap-1"><Users size={12} aria-hidden="true" /> {comm.memberCount}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={comm.facebookUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold rounded-lg transition-all"
                                        aria-label={`Join ${comm.school} Facebook Group`}
                                    >
                                        <Facebook size={18} aria-hidden="true" /> Join Facebook Group
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/5">
                            <Filter className="mx-auto text-gray-500 mb-4" size={48} aria-hidden="true" />
                            <h3 className="text-xl font-bold text-white mb-2">No communities found</h3>
                            <p className="text-gray-400">We are currently expanding in this region.</p>
                            <button
                                onClick={() => { setActiveRegion('All'); setSearchQuery(''); }}
                                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-20 bg-msl-surface border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Don't see your school?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Be the one to bring the Moonton Student Leaders program to your campus.
                        Establish a legacy, lead your peers, and unlock exclusive opportunities.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => onNavigate('careers')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center gap-2"
                        >
                            Apply for Accreditation <ArrowRight size={20} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Campus;