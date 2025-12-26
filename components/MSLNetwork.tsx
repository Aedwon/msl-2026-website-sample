import React, { useState, useEffect } from 'react';
import {
    Globe,
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
    Play
} from 'lucide-react';

interface MSLNetworkProps {
    onNavigate: (page: string) => void;
}

const TIERS = [
    {
        id: 'tier-c',
        name: 'Tier C',
        label: 'The Risings Star',
        color: 'text-gray-400',
        borderColor: 'border-gray-600',
        bgGradient: 'from-gray-800 to-gray-900',
        diamonds: '50,000',
        monetary: false,
        merch: false,
        reqs: { turnouts: '8-15 Teams', members: '< 100', participation: '< 5%' }
    },
    {
        id: 'tier-b',
        name: 'Tier B',
        label: 'Community Pillar',
        color: 'text-blue-400',
        borderColor: 'border-blue-500',
        bgGradient: 'from-blue-900 to-slate-900',
        diamonds: '70,000',
        monetary: false,
        merch: true,
        reqs: { turnouts: '16-31 Teams', members: '100-250', participation: '5% - 15%' }
    },
    {
        id: 'tier-a',
        name: 'Tier A',
        label: 'Region Leader',
        color: 'text-purple-400',
        borderColor: 'border-purple-500',
        bgGradient: 'from-purple-900 to-slate-900',
        diamonds: '100,000',
        monetary: true,
        merch: true,
        reqs: { turnouts: '> 23 Teams', members: '> 250', participation: '> 15%' }
    },
    {
        id: 'super-school',
        name: 'Super School',
        label: 'The Dynasty',
        color: 'text-msl-gold',
        borderColor: 'border-msl-gold',
        bgGradient: 'from-yellow-900/50 to-black',
        diamonds: '150,000',
        monetary: true,
        merch: true,
        reqs: { turnouts: 'N/A', members: 'N/A', participation: 'N/A' },
        isSpecial: true
    }
];

const MSLNetwork: React.FC<MSLNetworkProps> = ({ onNavigate }) => {
    const [activeTier, setActiveTier] = useState(TIERS[3]); // Default to Super School for max impact

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white overflow-hidden">

            {/* --- HERO: DIGITAL CONSTELLATION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background: Digital Node Network */}
                <div className="absolute inset-0 bg-msl-black">
                    {/* CSS-generated starry/node background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px), radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px, 90px 90px'
                        }}
                    ></div>
                    {/* Animated Glow centers */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
                        <Globe size={16} className="text-blue-400" />
                        <span className="text-sm font-bold text-gray-300 tracking-wider uppercase">The MSL Network</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tight animate-fade-in-up delay-100">
                        Connect.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Compete.</span> Conquer.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                        Join the nation's premier esports ecosystem. Unlock funding, elevate your brand, and build a legacy for your student community.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                        <button
                            onClick={() => onNavigate('careers')}
                            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Apply for Accreditation <ArrowRight size={24} />
                        </button>

                        <button
                            onClick={() => onNavigate('buffs-support')}
                            className="w-full sm:w-auto px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 rounded-2xl font-bold text-lg hover:text-white transition-all flex items-center justify-center gap-3 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-msl-gold/20 flex items-center justify-center group-hover:bg-msl-gold/30 transition-colors">
                                <Zap size={16} className="text-msl-gold" fill="currentColor" />
                            </div>
                            <span>Already a Partner?</span>
                        </button>
                    </div>

                    {/* Stats ticker */}
                    <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 animate-fade-in-up delay-500">
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-white">150+</h4>
                            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-1">Partner Schools</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-white">₱5M+</h4>
                            <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mt-1">Grants Awarded</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-white">22k</h4>
                            <p className="text-xs text-msl-gold font-bold uppercase tracking-widest mt-1">Student Leaders</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VALUE PROPOSITION (BENTO GRID) --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Join the Network?</h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            It's not just a logo on your jersey. It's a complete ecosystem designed to accelerate your organization's growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 1. Sponsorship (Large Card) */}
                        <div className="md:col-start-1 md:col-end-3 bg-gradient-to-br from-[#0f172a] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Gem size={32} className="text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Sponsorship & Rewards</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                    Unlock funding, in-game perks, and hardware support through our <strong>Buffs & Support</strong> program. We invest directly in your events.
                                </p>
                            </div>
                        </div>

                        {/* 2. Path to Pro */}
                        <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 group hover:bg-[#1a2333] transition-all">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp size={24} className="text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Path to Pro</h3>
                            <p className="text-gray-400">
                                Build experience and credibility that opens doors to the professional esports industry.
                            </p>
                        </div>

                        {/* 3. Event Activations */}
                        <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 group hover:bg-[#1a2333] transition-all">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Trophy size={24} className="text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Event Activations</h3>
                            <p className="text-gray-400">
                                Take part in nationwide tournaments that bring student communities together.
                            </p>
                        </div>

                        {/* 4. Creative Growth (Large Card) */}
                        <div className="md:col-span-2 bg-gradient-to-br from-[#0f172a] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/50 transition-all">
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Target size={32} className="text-pink-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Creative Growth Space</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                    Access tools, assets, and mentorship to level up your org's content and branding. We help you look like the pros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TIER EXPLORER (INTERACTIVE) --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-msl-surface border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Choose Your Class</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Every organization has a place in the network. Proove your worth and climb the ranks to unlock legendary rewards.
                        </p>
                    </div>

                    {/* Tier Selector Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {TIERS.map((tier) => (
                            <button
                                key={tier.id}
                                onClick={() => setActiveTier(tier)}
                                className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all border-2 ${activeTier.id === tier.id
                                    ? `${tier.borderColor} ${tier.color} bg-white/5 shadow-lg`
                                    : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tier.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Tier Display Card */}
                    <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-500">
                        {/* Background Gradient based on Tier */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${activeTier.bgGradient} opacity-50`}></div>

                        <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">

                            {/* Left: Identity & Loot */}
                            <div>
                                <div className={`inline-block px-3 py-1 rounded-lg border ${activeTier.borderColor} ${activeTier.color} bg-black/50 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-6`}>
                                    {activeTier.label}
                                </div>
                                <h3 className={`text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg`}>
                                    {activeTier.name}
                                </h3>

                                {/* Loot Box Preview */}
                                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                                    <h4 className="text-sm text-gray-400 font-bold uppercase mb-4 flex items-center gap-2">
                                        <Lock size={14} /> Unlocked Loot
                                    </h4>
                                    <div className="space-y-4">
                                        <li className="flex items-center justify-between text-white font-bold p-3 bg-white/5 rounded-lg border border-white/5">
                                            <span className="flex items-center gap-3"><Gem className="text-blue-400" size={20} /> Diamond Allocation</span>
                                            <span className="text-2xl text-white">{activeTier.diamonds}</span>
                                        </li>
                                        {activeTier.monetary && (
                                            <li className="flex items-center gap-3 text-white font-bold p-3 bg-white/5 rounded-lg border border-white/5">
                                                <Users className="text-green-400" size={20} />
                                                <span>Monetary Sponsorship Eligibility</span>
                                            </li>
                                        )}
                                        {activeTier.merch && (
                                            <li className="flex items-center gap-3 text-white font-bold p-3 bg-white/5 rounded-lg border border-white/5">
                                                <Trophy className="text-purple-400" size={20} />
                                                <span>Official Merch & Event Activations</span>
                                            </li>
                                        )}
                                        {activeTier.isSpecial && (
                                            <li className="flex items-center gap-3 text-msl-gold font-bold p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                                                <Crown size={20} />
                                                <span>First Priority All Access</span>
                                            </li>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Requirements */}
                            <div className="bg-black/60 rounded-3xl p-8 border border-white/10">
                                <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                                    Unlock Requirements
                                </h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">Monthly Turnouts</span>
                                            <span className="text-white font-bold">{activeTier.reqs.turnouts}</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-3/4"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">Community Members</span>
                                            <span className="text-white font-bold">{activeTier.reqs.members}</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-1/2"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">Participation Rate</span>
                                            <span className="text-white font-bold">{activeTier.reqs.participation}</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-2/3"></div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10 mt-6">
                                        <p className="text-xs text-gray-500 text-center">
                                            *Requirements are calculated per semester based on performance metrices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHECKLIST TO GREATNESS --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
                        <p className="text-gray-400 mt-2">Before you apply, ensure you have the basics down.</p>
                    </div>

                    <div className="grid gap-4">
                        {[
                            "OSA-Accredited Organization within your Campus",
                            "Endorsement from an Organization Adviser or Moderator",
                            "Willingness to sign a Memorandum of Understanding (MOU)",
                            "Passion for building a student gaming community"
                        ].map((req, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                <CheckCircle className="text-green-500 mr-4" size={24} />
                                <span className="text-gray-300 font-medium text-lg">{req}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOMO CTA --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-900/20 to-black border-t border-white/10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-black text-white mb-6">Don't Get Left Behind.</h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Slots for <span className="text-msl-gold font-bold">Super School</span> status are limited per region. The sooner you start your journey, the faster you climb the ranks.
                    </p>
                    <button
                        onClick={() => onNavigate('careers')}
                        className="px-12 py-6 bg-white text-black hover:bg-gray-200 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                    >
                        Start Your Application <ArrowRight size={24} />
                    </button>
                    <p className="mt-6 text-sm text-gray-600">
                        Applications reviewed on a rolling basis. Next batch closes soon.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default MSLNetwork;
