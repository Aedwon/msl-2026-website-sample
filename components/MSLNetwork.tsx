import React, { useState, useEffect } from 'react';
import {
    Network,
    Zap,
    Trophy,
    Target,
    Users,
    TrendingUp,
    Shield,
    Star,
    CheckCircle,
    ArrowRight,
    Lock,
    Gem,
    Crown,
    ChevronRight,
    Play,
    Building2,
    MonitorPlay,
    Gift,
    Server,
    Gamepad2,
    Medal,
    Calendar,
    FileText
} from 'lucide-react';

interface MSLNetworkProps {
    onNavigate: (page: string) => void;
}

const TIERS = [
    {
        id: 'tier-c',
        name: 'Tier C',
        label: 'Tier C',
        color: 'text-gray-400',
        borderColor: 'border-white/10',
        bg: 'bg-white/5',
        diamonds: '50,000',
        reqs: { turnouts: '40+', members: '< 100', participation: '≤ 5%' },
        compliance: { accreditation: false, endorsement: false },
        perks: { activations: 'Low', creative: 'N/A', monetary: false }
    },
    {
        id: 'tier-b',
        name: 'Tier B',
        label: 'Tier B',
        color: 'text-blue-400',
        borderColor: 'border-blue-500/30',
        bg: 'bg-blue-900/10',
        diamonds: '70,000',
        reqs: { turnouts: '80+', members: '100+', participation: '5%+' },
        compliance: { accreditation: false, endorsement: false },
        perks: { activations: 'Moderate', creative: 'Basic Access', monetary: false }
    },
    {
        id: 'tier-a',
        name: 'Tier A',
        label: 'Tier A',
        color: 'text-purple-400',
        borderColor: 'border-purple-500/30',
        bg: 'bg-purple-900/10',
        diamonds: '100,000',
        reqs: { turnouts: '120+', members: '250+', participation: '15%+' },
        compliance: { accreditation: true, endorsement: true },
        perks: { activations: 'High', creative: 'Full Access', monetary: true }
    },
    {
        id: 'tier-ss',
        name: 'Super School',
        label: 'Tier SS',
        color: 'text-msl-gold',
        borderColor: 'border-msl-gold/50',
        bg: 'bg-yellow-900/10',
        diamonds: '150,000',
        reqs: { turnouts: 'N/A', members: 'N/A', participation: 'N/A' },
        compliance: { accreditation: true, endorsement: true },
        perks: { activations: 'First Priority', creative: 'Full Access', monetary: true },
        isSpecial: true
    }
];

const AWARDS_DATA = {
    major: [
        {
            title: "Organization of the Year",
            desc: "The grand award presented to the most outstanding MSL chapter that demonstrated excellence across leadership, execution, creativity, and community impact through MLBB initiatives.",
            grant: "₱15,000",
            receivables: ["Trophy", "Certificate", "Cash"],
            highlight: true
        },
        {
            title: "Rising Organization Award",
            desc: "Presented to a new or growing MSL chapter that showed remarkable development, initiative, and promise within its first year of active participation.",
            grant: "₱10,000",
            receivables: ["Trophy", "Certificate", "Cash"]
        },
        {
            title: "Best Event of the Year",
            desc: "Recognizes the most exceptional MLBB-related event distinguished by strong organization, innovation, and engagement both on-site and online.",
            receivables: ["Trophy", "Certificate"]
        },
        {
            title: "Student Community Impact Award",
            desc: "Given to an organization that made a significant positive difference within its campus community through MLBB events, partnerships, and student-led initiatives.",
            receivables: ["Trophy", "Certificate"]
        }
    ],
    community: [
        {
            title: "Service Through Esports",
            desc: "Awarded to organizations that used MLBB-related initiatives to create meaningful social impact, community service, or educational advocacy.",
            grant: "₱10,000",
            receivables: ["Trophy", "Certificate", "Cash"],
            icon: <Shield size={24} />
        },
        {
            title: "Collaboration of the Year",
            desc: "Recognizes the best joint project or event between multiple schools or organizations that strengthened community ties within the MSL Network.",
            receivables: ["Trophy", "Certificate"],
            icon: <Users size={24} />
        },
        {
            title: "Organization Partner of the Year",
            desc: "Given to a brand, institution, or organization that provided outstanding support and collaboration, contributing significantly to the success and growth of MSL and MLBB campus initiatives.",
            receivables: ["Trophy", "Certificate"],
            icon: <Building2 size={24} />
        }
    ],
    individual: [
        {
            title: "Esports Advocate of the Year",
            desc: "Given to a student leader who exemplifies passion, leadership, and dedication in advancing MLBB esports and its positive influence on students.",
            grant: "₱5,000",
            receivables: ["Certificate", "Trophy", "Cash"]
        },
        {
            title: "Student Talent of the Year",
            desc: "Honors outstanding individual performance in areas such as shoutcasting, hosting, or other MLBB-related talents that uplifted the MSL community.",
            grant: "₱5,000",
            receivables: ["Certificate", "Trophy", "Cash"]
        },
        {
            title: "Student Creator of the Year",
            desc: "Recognizes a student who demonstrated exceptional creativity and influence through MLBB-centered digital content or storytelling.",
            grant: "₱5,000",
            receivables: ["Certificate", "Trophy", "Cash"]
        }
    ]
};

const MSLNetwork: React.FC<MSLNetworkProps> = ({ onNavigate }) => {
    const [activeTier, setActiveTier] = useState(TIERS[3]); // Default to Super School

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white font-sans selection:bg-msl-gold selection:text-black">

            {/* --- HERO: THE MAIN SERVER --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Harmonized Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000"
                        alt="Esports Crowd Cheering"
                        className="w-full h-full object-cover opacity-50"
                    />
                    {/* Consistent Dark Overlay like BuffsAndSupport */}
                    <div className="absolute inset-0 bg-gradient-to-t from-msl-black via-msl-black/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

                    {/* OFFICIAL HUB BADGE */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-msl-gold text-sm font-bold uppercase mb-8 shadow-lg hover:border-msl-gold/50 transition-colors cursor-default animate-fade-in-up">
                        <Network size={14} fill="currentColor" /> The MSL Network
                    </div>

                    <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl animate-fade-in-up delay-100">
                        Turn Your Esports Org <br />
                        Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200 drop-shadow-[0_0_20px_rgba(242,194,26,0.3)]">Powerhouse.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                        Unlock the full ecosystem. Secure official resources and funding, access Industry Masterclasses, and join Exclusive Campaigns to professionalize your campus organization.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                        <button
                            onClick={() => onNavigate('careers')}
                            className="w-full sm:w-auto px-8 py-4 bg-msl-gold hover:bg-yellow-400 text-black rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_-5px_rgba(242,194,26,0.4)] hover:shadow-[0_0_35px_-5px_rgba(242,194,26,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        >
                            Apply for Membership <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => onNavigate('buffs-support')}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                        >
                            <Zap size={20} className="text-msl-gold" fill="currentColor" />
                            <span>Already a Partner?</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- PARTNER SHOWCASE (Alliance Members) --- */}
            <section className="py-8 bg-black/40 border-y border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-msl-black via-transparent to-msl-black z-10 pointer-events-none"></div>
                <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center">
                    {/* Placeholder Logos repeated for marquee effect */}
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 text-gray-500 font-bold text-xl uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity hover:text-msl-gold cursor-default">
                            <Building2 size={24} /> Alliance Member
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FEATURED PARTNER SPOTLIGHT (Image-First Redesign) --- */}
            <section className="relative py-24 overflow-hidden bg-black">
                {/* Subtle Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-msl-gold/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msl-gold text-black text-sm font-black uppercase shadow-[0_0_20px_rgba(242,194,26,0.4)] animate-pulse">
                            <Star size={16} fill="currentColor" /> MVP Spotlight
                        </div>
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Partner of the Month</span>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                        {/* PRIMARY VISUAL: Event Photo (Prominent) */}
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <div className="group relative aspect-video lg:h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
                                    alt="Teletigers Event"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                                {/* Image Caption/Overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-md">
                                        Paskuhan Cup '24 Grand Finals
                                    </h3>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Powered by The MSL Network • Live at UST Quadricentennial Pavilion
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SECONDARY INFO: Org Details & Buffs (Sidebar) */}
                        <div className="contents lg:col-span-4 lg:order-2 lg:flex lg:flex-col lg:gap-6 lg:h-full">

                            {/* Org Header Card */}
                            <div className="order-1 lg:order-none bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-center">
                                <h2 className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tighter mb-2">
                                    UST TELETIGERS ESPORTS CLUB
                                </h2>
                                <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200 mb-6">
                                    UNIVERSITY OF SANTO TOMAS
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-msl-gold pl-4 italic">
                                    "The MSL Network didn't just sponsor us; they upgraded our entire event infrastructure."
                                </p>
                            </div>

                            {/* Buffs Card */}
                            <div className="order-3 lg:order-none bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-center">
                                <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                    <Zap size={14} className="text-msl-gold" /> Equipped Buffs
                                </h4>

                                <div className="space-y-4">
                                    {/* Buff Item 1 */}
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-blue-900/20 rounded-xl border border-blue-500/30 flex items-center justify-center shrink-0">
                                            <MonitorPlay size={20} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">Tournament Lobby</div>
                                            <div className="text-blue-500 text-[10px] font-mono uppercase">+ Pro Production</div>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-white/5"></div>

                                    {/* Buff Item 2 */}
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-yellow-900/20 rounded-xl border border-msl-gold/30 flex items-center justify-center shrink-0">
                                            <Gem size={20} className="text-msl-gold" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">Prize Pool Support</div>
                                            <div className="text-msl-gold text-[10px] font-mono uppercase">+ Cash & Diamonds</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* --- VISUAL PERKS (Organization Buffs) --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Organization Buffs</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            More than just a logo placement. We provide the fuel to level up your organization's engine.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Perk 1 - Funds */}
                        <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-msl-card hover:border-msl-gold/30 transition-all duration-300">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Sponsorship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="absolute top-6 right-6 p-2 bg-blue-500/20 backdrop-blur-md rounded-lg border border-blue-500/30 text-blue-400">
                                <Gem size={20} />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Financial Fuel</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Access up to 150,000 diamonds per semester, cash grants for major events, and official merchandise loot drops for your community.
                                </p>
                                <div className="h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>

                        {/* Perk 2 - Activations */}
                        <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-msl-card hover:border-purple-500/50 transition-all duration-300">
                            <img src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800" alt="Activations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="absolute top-6 right-6 p-2 bg-purple-500/20 backdrop-blur-md rounded-lg border border-purple-500/30 text-purple-400">
                                <Gamepad2 size={20} />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Pro-Tier Ecosystem</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Unlock the restricted Tournament Lobby client used by pros. Full hero access, spectator tools, and developer-grade support.
                                </p>
                                <div className="h-1 w-12 bg-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>

                        {/* Perk 3 - Career */}
                        <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-msl-card hover:border-msl-gold/50 transition-all duration-300">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Mentorship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="absolute top-6 right-6 p-2 bg-msl-gold/20 backdrop-blur-md rounded-lg border border-msl-gold/30 text-msl-gold">
                                <Trophy size={20} />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Industry Access</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Direct line to Moonton via the MSL Summit. Exclusive masterclasses, internship priority, and official campaign hosting rights.
                                </p>
                                <div className="h-1 w-12 bg-msl-gold rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TIER SYSTEMS (Ladder of Ascension) --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-msl-surface border-t border-white/10 relative overflow-hidden transition-colors duration-1000"
                style={{
                    boxShadow: `inset 0 0 100px ${activeTier.isSpecial ? 'rgba(234, 179, 8, 0.1)' : 'rgba(0,0,0,0)'}`
                }}
            >
                {/* Dynamic Background Element */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${activeTier.isSpecial ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000 ${activeTier.bg.replace('bg-', 'bg-').replace('/10', '/20')}`}></div>
                    <div className={`absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-screen transition-colors duration-1000 ${activeTier.bg.replace('bg-', 'bg-').replace('/10', '/10')}`}></div>
                </div>

                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Ascension Protocol</h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                            Start your journey. Prove your worth. <br />
                            <span className="text-msl-gold">Climb the ranks</span> to unlock greater power.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                        {/* LEFT: THE LADDER (Navigation) */}
                        <div className="lg:col-span-3 flex lg:flex-col-reverse justify-between items-center lg:items-end relative py-4 lg:py-0 lg:h-[600px]">
                            {/* Connecting Line - Fixed to reach centers - Right Aligned for Desktop */}
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-800 lg:left-auto lg:right-10 lg:top-10 lg:bottom-10 lg:w-1 lg:h-auto lg:translate-x-1/2 lg:translate-y-0 z-0 rounded-full overflow-hidden">
                                {/* Progress Line Overlay */}
                                <div
                                    className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-blue-600 via-purple-500 to-msl-gold transition-all duration-1000 ease-in-out"
                                    style={{
                                        height: `${(TIERS.findIndex(t => t.id === activeTier.id) / (TIERS.length - 1)) * 100}%`
                                    }}
                                >
                                    {/* Moving Glow Head */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-md shadow-[0_0_20px_white]"></div>
                                </div>
                            </div>

                            {TIERS.map((tier, index) => {
                                const isActive = activeTier.id === tier.id;
                                const activeIndex = TIERS.findIndex(t => t.id === activeTier.id);
                                const isPassed = index <= activeIndex;

                                return (
                                    <button
                                        key={tier.id}
                                        onClick={() => setActiveTier(tier)}
                                        className={`relative z-10 group transition-all duration-300 outline-none focus:outline-none ring-0 focus:ring-0 focus:scale-95 active:scale-90 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                                    >
                                        {/* Node Circle */}
                                        <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-[#0a0a0a] relative
                                            ${isActive
                                                ? `${tier.borderColor} shadow-[0_0_30px_-5px_currentColor] text-white`
                                                : isPassed
                                                    ? 'border-gray-700 text-gray-500 shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]' // Subtly lit path
                                                    : 'border-gray-800 text-gray-700 hover:border-gray-600 hover:text-gray-500'}
                                            ${isActive ? tier.color : ''}
                                        `}>
                                            {/* Solar Pulse Effect for Active */}
                                            {isActive && (
                                                <div className={`absolute -inset-1 rounded-full border-2 ${tier.borderColor} opacity-40 animate-ping`}></div>
                                            )}

                                            <div className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full transition-all duration-500
                                                ${isActive ? 'bg-current shadow-[0_0_10px_currentColor] scale-100' : isPassed ? 'bg-gray-600 scale-90' : 'bg-gray-800 scale-75'}
                                            `}></div>
                                        </div>

                                        {/* Label (Desktop Only - Moved to Left to prevent overlap) */}
                                        <div className={`absolute right-full mr-8 top-1/2 -translate-y-1/2 w-48 text-right hidden lg:block transition-all duration-500
                                            ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4 group-hover:opacity-60 group-hover:translate-x-2'}
                                        `}>
                                            <div className={`text-lg font-black uppercase tracking-wider leading-none mb-1 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                                {tier.label}
                                            </div>
                                        </div>

                                        {/* Mobile Label (Active Only) */}
                                        <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap lg:hidden transition-all duration-300
                                            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                                        `}>
                                            <div className={`text-[10px] font-bold uppercase tracking-widest ${tier.color}`}>{tier.label}</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* RIGHT: THE DASHBOARD (Content) */}
                        <div className="lg:col-span-9">
                            <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-500 min-h-[500px] flex flex-col">
                                {/* Header Bar */}
                                <div className={`p-1.5 w-full ${activeTier.bg} border-b ${activeTier.borderColor} transition-colors duration-500`}></div>

                                <div className="p-8 md:p-12 flex-grow flex flex-col">
                                    {/* Tier Identity */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                                        <div>

                                            <h3 className={`text-5xl md:text-7xl font-black text-white tracking-tighter ${activeTier.isSpecial ? 'text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200 drop-shadow-[0_0_25px_rgba(242,194,26,0.3)]' : ''}`}>
                                                {activeTier.name}
                                            </h3>
                                        </div>

                                        {/* Requirements Summary */}
                                        <div className="flex flex-col items-end gap-6 text-right">
                                            <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-gray-400">
                                                {activeTier.isSpecial ? <Crown size={32} className="text-msl-gold animate-pulse" /> : <Target size={32} />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 1: Stats & Requirements */}
                                    <div className="grid md:grid-cols-12 gap-6 mb-6">
                                        {/* Big Diamond Stat */}
                                        <div className="md:col-span-5 bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group">
                                            <div className={`absolute top-0 right-0 p-3 opacity-20 ${activeTier.color}`}><Gem size={64} /></div>
                                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Max Allocation</p>
                                            <p className="text-4xl md:text-5xl font-black text-white">{activeTier.diamonds}</p>
                                            <p className="text-xs text-gray-500 mt-2 font-mono">Diamonds / Sem</p>
                                        </div>

                                        {/* Community Requirements Detail */}
                                        <div className="md:col-span-7 bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center">
                                            <div className="flex items-center justify-between mb-4">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Community Requirements</p>
                                                <div className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-gray-400">via Campus Dept</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                <div>
                                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Members</p>
                                                    <p className={`font-black uppercase tracking-tight ${activeTier.id === 'tier-ss' ? 'text-msl-gold drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'text-white'} text-lg sm:text-2xl`}>{activeTier.reqs.members}</p>
                                                </div>
                                                <div className="border-x border-white/5">
                                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Active %</p>
                                                    <p className={`font-black uppercase tracking-tight ${activeTier.id === 'tier-ss' ? 'text-msl-gold drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'text-white'} text-lg sm:text-2xl`}>{activeTier.reqs.participation}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Turnout</p>
                                                    <p className={`font-black uppercase tracking-tight ${activeTier.id === 'tier-ss' ? 'text-msl-gold drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'text-white'} text-lg sm:text-2xl`}>
                                                        {activeTier.id === 'tier-ss' ? 'N/A' : activeTier.reqs.turnouts}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: Perks & Privileges (NEW) */}
                                    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors mb-8 relative overflow-hidden">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-2 rounded-lg bg-gray-800 ${activeTier.color}`}><Star size={20} /></div>
                                            <p className="text-xs font-bold text-gray-500 uppercase">Perks & Privileges</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 text-gray-400">Event Activation Priority</p>
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-2 w-2 rounded-full ${activeTier.perks.activations.includes('High') || activeTier.perks.activations.includes('First') ? 'bg-green-500 shadow-[0_0_10px_lime]' : 'bg-gray-600'}`}></div>
                                                    <p className="text-xl md:text-2xl font-black text-white leading-none">{activeTier.perks.activations}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1 text-gray-400">
                                                    Creative Space <span className="text-gray-600">*</span>
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-2 w-2 rounded-full ${activeTier.perks.creative === 'Full Access' ? 'bg-purple-500 shadow-[0_0_10px_magenta]' : 'bg-gray-600'}`}></div>
                                                    <p className="text-xl md:text-2xl font-black text-white leading-none">{activeTier.perks.creative}</p>
                                                </div>
                                                <p className="text-[9px] text-gray-600 italic mt-1">* Subject to availability</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1 text-gray-400">
                                                    Monetary Sponsorship {!activeTier.perks.monetary && <span className="text-gray-600">*</span>}
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-2 w-2 rounded-full ${activeTier.perks.monetary ? 'bg-msl-gold shadow-[0_0_10px_orange]' : 'bg-gray-600'}`}></div>
                                                    <p className={`text-xl md:text-2xl font-black leading-none ${activeTier.perks.monetary ? 'text-msl-gold' : 'text-gray-500'}`}>
                                                        {activeTier.perks.monetary ? 'Eligible' : 'Locked'}
                                                    </p>
                                                </div>
                                                {!activeTier.perks.monetary && (
                                                    <p className="text-[9px] text-gray-600 italic mt-1">
                                                        * Limited. Pitch Deck required.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Compliance Footer */}
                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Shield size={14} /> Compliance Gate
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${activeTier.compliance.accreditation ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/5 text-gray-600 opacity-60'}`}>
                                                <CheckCircle size={18} />
                                                <span className="text-sm font-bold">Recognized by School</span>
                                            </div>
                                            <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${activeTier.compliance.endorsement ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-white/5 border-white/5 text-gray-600 opacity-60'}`}>
                                                <CheckCircle size={18} />
                                                <span className="text-sm font-bold">Endorsed by Adviser</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- PARTNER LEADERBOARD --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-2">Partner Leaderboard</h2>
                        <p className="text-gray-400">Top performing organizations of Season 2025</p>
                    </div>
                    {/* PODIUM (Top 3) */}
                    <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mb-12">
                        {/* Rank 2 */}
                        <div className="order-2 md:order-1 w-full md:w-1/3 flex flex-col items-center">
                            <div className="w-full bg-gray-900/80 border border-gray-700/50 rounded-t-2xl p-6 relative group overflow-hidden hover:border-gray-500 transition-all cursor-pointer">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gray-400 shadow-[0_0_15px_gray]"></div>
                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border border-gray-600 text-gray-400 font-bold mb-3 shadow-lg absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">2</div>

                                    {/* Logo Placeholder */}
                                    <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 mx-auto mb-3 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                                        <span className="text-xl font-bold text-gray-500">LG</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1">LG Esports</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Ateneo</p>
                                    <p className="text-2xl font-black text-white">11,200 <span className="text-xs text-gray-600 font-normal">pts</span></p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="w-full h-24 bg-gradient-to-t from-gray-900 to-gray-800/50 border-x border-gray-800 hidden md:block opacity-50"></div>
                        </div>

                        {/* Rank 1 (Champion) */}
                        <div className="order-1 md:order-2 w-full md:w-1/3 flex flex-col items-center z-10 -mt-8 md:mt-0">
                            <div className="absolute md:relative -top-12 md:top-auto flex flex-col items-center">
                                <Crown className="text-msl-gold drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-bounce" size={40} />
                            </div>
                            <div className="w-full bg-gradient-to-b from-yellow-900/20 to-black border border-msl-gold/30 rounded-t-2xl p-8 relative group overflow-hidden hover:border-msl-gold/60 transition-all cursor-pointer shadow-[0_0_50px_-20px_rgba(234,179,8,0.3)]">
                                <div className="absolute top-0 left-0 w-full h-1 bg-msl-gold shadow-[0_0_20px_orange]"></div>
                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-msl-gold text-msl-gold font-bold mb-4 shadow-[0_0_20px_rgba(234,179,8,0.3)] text-lg absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">1</div>

                                    {/* Logo Placeholder */}
                                    <div className="w-24 h-24 rounded-full bg-black border-2 border-msl-gold mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.2)] group-hover:scale-105 transition-transform">
                                        <span className="text-3xl font-black text-msl-gold">UST</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">Teletigers Esports</h3>
                                    <p className="text-sm text-msl-gold uppercase tracking-widest mb-6 font-bold">UST</p>
                                    <div className="bg-msl-gold/10 border border-msl-gold/20 rounded-xl py-2 px-6 inline-block">
                                        <p className="text-3xl font-black text-msl-gold">12,450 <span className="text-xs text-yellow-600 font-normal">pts</span></p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-msl-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="w-full h-32 bg-gradient-to-t from-yellow-900/10 to-gray-900 border-x border-msl-gold/10 hidden md:block relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            </div>
                        </div>

                        {/* Rank 3 */}
                        <div className="order-3 w-full md:w-1/3 flex flex-col items-center">
                            <div className="w-full bg-gray-900/80 border border-orange-900/30 rounded-t-2xl p-6 relative group overflow-hidden hover:border-orange-700/50 transition-all cursor-pointer">
                                <div className="absolute top-0 left-0 w-full h-1 bg-orange-700 shadow-[0_0_15px_brown]"></div>
                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border border-orange-800 text-orange-700 font-bold mb-3 shadow-lg absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">3</div>

                                    {/* Logo Placeholder */}
                                    <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-orange-800 mx-auto mb-3 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                                        <span className="text-xl font-bold text-orange-700">VA</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1">Viridis Arcus</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">DLSU</p>
                                    <p className="text-2xl font-black text-white">10,850 <span className="text-xs text-gray-600 font-normal">pts</span></p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="w-full h-16 bg-gradient-to-t from-gray-900 to-gray-800/50 border-x border-gray-800 hidden md:block opacity-50"></div>
                        </div>
                    </div>

                    {/* RUNNERS UP (List) */}
                    <div className="max-w-2xl mx-auto space-y-3">
                        {/* Rank 4 */}
                        <div className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600 bg-black rounded-lg border border-white/10 group-hover:text-white group-hover:border-white/30 transition-colors">4</div>
                                {/* Logo Placeholder */}
                                <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">P</div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Paradigm</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">New Era</p>
                                </div>
                            </div>
                            <p className="font-bold text-gray-400 group-hover:text-white transition-colors">9,500 pts</p>
                        </div>

                        {/* Rank 5 */}
                        <div className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600 bg-black rounded-lg border border-white/10 group-hover:text-white group-hover:border-white/30 transition-colors">5</div>
                                {/* Logo Placeholder */}
                                <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500">G</div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Gearharts</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">TIP</p>
                                </div>
                            </div>
                            <p className="font-bold text-gray-400 group-hover:text-white transition-colors">9,100 pts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MSL NETWORK AWARDS --- */}
            {/* --- MSL NETWORK AWARDS --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-msl-gold/5 to-black border-t border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-msl-gold/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-msl-gold/20 border border-msl-gold/30 text-msl-gold text-xs font-bold uppercase mb-4">
                            <Crown size={12} /> Hall of Legends
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">The MSL Network Awards</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Honoring the outstanding achievements of student organizations and leaders who have elevated the campus esports experience.
                        </p>
                    </div>

                    {/* MAJOR AWARDS GRID */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Trophy className="text-msl-gold" /> Major Awards
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {AWARDS_DATA.major.map((award, i) => (
                                <div key={i} className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between
                                    ${award.highlight
                                        ? 'bg-gradient-to-br from-msl-gold/20 to-black border-msl-gold/50 shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]'
                                        : 'bg-black/40 border-white/10 hover:border-white/20'}`
                                }>
                                    <div>
                                        <div className="flex w-full justify-between items-start mb-6">
                                            {award.highlight ? <Crown size={32} className="text-msl-gold mb-4" /> : <div></div>}
                                            {award.grant && (
                                                <div className="px-4 py-2 rounded-xl bg-msl-gold text-black font-black text-sm shadow-lg ml-auto">
                                                    {award.grant} Grant
                                                </div>
                                            )}
                                        </div>
                                        <h4 className={`font-black uppercase tracking-tight mb-2 ${award.highlight ? 'text-3xl text-white' : 'text-2xl text-gray-200'}`}>
                                            {award.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed mb-8">{award.desc}</p>
                                    </div>

                                    {/* Receivables Footer */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                        {award.receivables.map((item, idx) => (
                                            <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COMMUNITY & INDIVIDUAL SPLIT */}
                    {/* COMMUNITY & INDIVIDUAL SPLIT (Row-Aligned Grid) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* HEADERS */}
                        {/* Community Header (Mobile Order: 1, Desktop: Row 1 Col 1) */}
                        <div className="lg:col-span-6 order-1 lg:order-none flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Users className="text-blue-400" /> Community Awards
                            </h3>
                        </div>

                        {/* Individual Header (Mobile Order: 3, Desktop: Row 1 Col 2) */}
                        <div className="lg:col-span-6 order-3 lg:order-none flex flex-col gap-4 mt-8 lg:mt-0">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Star className="text-purple-400" /> Individual Awards
                            </h3>
                        </div>

                        {/* CARDS LOOP */}
                        {AWARDS_DATA.community.map((commAward, i) => {
                            const indivAward = AWARDS_DATA.individual[i];
                            return (
                                <React.Fragment key={i}>
                                    {/* Community Card (Mobile Order: 2, Desktop: Row X Col 1) */}
                                    <div className="lg:col-span-6 order-2 lg:order-none h-full">
                                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group h-full flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start gap-4 mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-lg bg-blue-900/20 text-blue-400 border border-blue-500/20 shrink-0">{commAward.icon}</div>
                                                        <h4 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">{commAward.title}</h4>
                                                    </div>
                                                    {commAward.grant && (
                                                        <span className="shrink-0 px-3 py-1 rounded-xl bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30 whitespace-nowrap shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                                            {commAward.grant} Grant
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-gray-400 leading-relaxed mb-8 pl-[52px]">{commAward.desc}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                                {commAward.receivables.map((item, idx) => (
                                                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Individual Card (Mobile Order: 4, Desktop: Row X Col 2) */}
                                    <div className="lg:col-span-6 order-4 lg:order-none h-full">
                                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all h-full flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-2xl font-black uppercase tracking-tight text-white">{indivAward.title}</h4>
                                                    {indivAward.grant && (
                                                        <span className="text-msl-gold font-bold text-xs bg-msl-gold/10 px-3 py-1 rounded-xl border border-msl-gold/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]">{indivAward.grant}</span>
                                                    )}
                                                </div>
                                                <p className="text-gray-400 leading-relaxed mb-8">{indivAward.desc}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                                {indivAward.receivables.map((item, idx) => (
                                                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 hover:border-white/10 transition-colors">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}

                    </div>

                    {/* Call to action - Full Width */}
                    <div className="mt-12 w-full animate-fade-in-up delay-200">
                        <button
                            onClick={() => onNavigate('nominations')}
                            className="w-full p-8 rounded-3xl relative overflow-hidden group cursor-pointer flex flex-col items-center justify-center text-center border border-msl-gold/30 hover:border-msl-gold/60 transition-all shadow-[0_0_20px_rgba(234,179,8,0.05)] hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] bg-gradient-to-br from-msl-gold/10 via-black to-black"
                        >
                            <div className="absolute inset-0 bg-msl-gold/5 blur-xl group-hover:bg-msl-gold/10 transition-colors"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="p-4 rounded-full bg-msl-gold text-black mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                                    <ArrowRight size={28} strokeWidth={3} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Make a Nomination</h4>
                                <p className="text-msl-gold/80 text-sm font-bold uppercase tracking-widest">Season 2026 Entries Open</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- MSL NETWORK DISCORD --- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#5865F2]/10 border-t border-white/10 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Showcase Your Org. Connect with the Nation.</h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
                        The official platform for our partners to showcase their organization and connect with the general MLBB community of student-gamers all over the Philippines.
                    </p>
                    <button className="px-10 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 transition-all flex items-center justify-center gap-3 mx-auto">
                        <img src="/discord-white-icon.webp" alt="Discord" className="w-6 h-6" /> Join the Discord Server
                    </button>
                </div>
            </section>

            {/* --- COMMUNITY GALLERY (Masonry remains, but headers harmonized) --- */}
            <section className="py-24 bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase mb-4">
                        <Users size={12} /> Community
                    </div>
                    <h2 className="text-4xl font-extrabold text-white">Life in the Network</h2>
                </div>
                {/* Masonry-ish Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 opacity-80 hover:opacity-100 transition-opacity duration-700">
                    <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" />
                        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="space-y-4 pt-12">
                        <img src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-500" />
                        <img src="https://images.unsplash.com/photo-1560439514-e960a3ef5019?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-72 object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500" />
                        <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-40 object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <div className="space-y-4 pt-8">
                        <img src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" />
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                </div>
            </section>

            {/* --- FOMO CTA (Harmonized) --- */}
            {/* --- FOMO CTA (Revamped) --- */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 relative overflow-hidden text-center">
                {/* Spotlight Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-msl-gold/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-msl-gold/10 border border-msl-gold/20 text-msl-gold text-xs font-bold uppercase mb-8 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-msl-gold"></span> Applications Open for Season 2026
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Build A Dynasty.</h2>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Join the elite network of student organizations redefining collegiate esports. Secure funding, mentorship, and your legacy.
                    </p>

                    <button
                        onClick={() => onNavigate('careers')}
                        className="px-12 py-6 bg-msl-gold hover:bg-yellow-400 text-black rounded-full font-black text-xl shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                    >
                        Apply for Membership <ArrowRight size={24} />
                    </button>

                </div>
            </section>

        </div>
    );
};

export default MSLNetwork;
