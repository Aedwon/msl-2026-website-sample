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
    Server
} from 'lucide-react';

interface MSLNetworkProps {
    onNavigate: (page: string) => void;
}

const TIERS = [
    {
        id: 'tier-c',
        name: 'Tier C',
        label: 'The Rising Star',
        color: 'text-gray-400',
        borderColor: 'border-white/10',
        bg: 'bg-white/5',
        diamonds: '50,000',
        reqs: { turnouts: '8 - 15 Teams', members: '≤ 100', participation: '≤ 5%' },
        compliance: { accreditation: false, adviser: false, monetary: false }
    },
    {
        id: 'tier-b',
        name: 'Tier B',
        label: 'Community Pillar',
        color: 'text-blue-400',
        borderColor: 'border-blue-500/30',
        bg: 'bg-blue-900/10',
        diamonds: '70,000',
        reqs: { turnouts: '16 - 31 Teams', members: '100 - 250', participation: '5% - 15%' },
        compliance: { accreditation: false, adviser: false, monetary: false }
    },
    {
        id: 'tier-a',
        name: 'Tier A',
        label: 'Region Leader',
        color: 'text-purple-400',
        borderColor: 'border-purple-500/30',
        bg: 'bg-purple-900/10',
        diamonds: '100,000',
        reqs: { turnouts: '> 31 Teams', members: '> 250', participation: '> 15%' },
        compliance: { accreditation: true, adviser: true, monetary: true }
    },
    {
        id: 'super-school',
        name: 'Super School',
        label: 'The Dynasty',
        color: 'text-msl-gold',
        borderColor: 'border-msl-gold/50',
        bg: 'bg-yellow-900/10',
        diamonds: '150,000',
        reqs: { turnouts: 'Top 1%', members: 'Top 1%', participation: 'Top 1%' },
        compliance: { accreditation: true, adviser: true, monetary: true },
        isSpecial: true
    }
];

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
                        Turn Your Campus Club <br />
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

                    <div className="flex items-center gap-3 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msl-gold text-black text-sm font-black uppercase shadow-[0_0_20px_rgba(242,194,26,0.4)] animate-pulse">
                            <Star size={16} fill="currentColor" /> MVP Spotlight
                        </div>
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Partner of the Month</span>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* PRIMARY VISUAL: Event Photo (Prominent) */}
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <div className="group relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
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
                        <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col gap-6">

                            {/* Org Header Card */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-xl">
                                <h2 className="text-4xl font-black text-white leading-none tracking-tighter mb-2">
                                    TELETIGERS
                                </h2>
                                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200 mb-6">
                                    UST • ESPORTS
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-msl-gold pl-4 italic">
                                    "The MSL Network didn't just sponsor us; they upgraded our entire event infrastructure."
                                </p>
                            </div>

                            {/* Buffs Card */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-xl">
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
                                            <div className="text-white font-bold text-sm">Broadcast Rig</div>
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
                                            <div className="text-white font-bold text-sm">Prize Injection</div>
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
                                <h3 className="text-2xl font-bold text-white mb-2">Resource Unlocks</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Annual budget allocation for your events. Stop worrying about prize pools and focus on the experience.
                                </p>
                                <div className="h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>

                        {/* Perk 2 - Activations */}
                        <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-msl-card hover:border-purple-500/50 transition-all duration-300">
                            <img src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800" alt="Activations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="absolute top-6 right-6 p-2 bg-purple-500/20 backdrop-blur-md rounded-lg border border-purple-500/30 text-purple-400">
                                <Trophy size={20} />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Event Activations</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Host official qualifiers and watch parties. We bring the national stage to your local campus.
                                </p>
                                <div className="h-1 w-12 bg-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>

                        {/* Perk 3 - Career */}
                        <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-msl-card hover:border-msl-gold/50 transition-all duration-300">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Mentorship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="absolute top-6 right-6 p-2 bg-msl-gold/20 backdrop-blur-md rounded-lg border border-msl-gold/30 text-msl-gold">
                                <TrendingUp size={20} />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Path to Pro</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Direct access to industry mentorship, internships, and the career meta for your best players.
                                </p>
                                <div className="h-1 w-12 bg-msl-gold rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TIER SYSTEMS (Ascension Tiers) --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-msl-surface border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Ascension Tiers</h2>
                            <p className="text-gray-400 max-w-lg">Scale your organization's support based on your reach and impact.</p>
                        </div>
                        {/* Styled Tabs */}
                        <div className="flex bg-black/40 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
                            {TIERS.map((tier) => (
                                <button
                                    key={tier.id}
                                    onClick={() => setActiveTier(tier)}
                                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeTier.id === tier.id
                                        ? `bg-white/10 text-white shadow-sm border border-white/10`
                                        : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {tier.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Tier Dashboard (Configurator Style) */}
                    <div className="bg-msl-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-500 min-h-[400px]">
                        {/* Header Bar */}
                        <div className={`p-1 w-full ${activeTier.bg} border-b ${activeTier.borderColor}`}></div>

                        <div className="p-8 md:p-12 grid md:grid-cols-12 gap-12">

                            {/* Left: Identity */}
                            <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-center">
                                <div className={`inline-block px-3 py-1 rounded-lg border ${activeTier.borderColor} ${activeTier.color} ${activeTier.bg} text-xs font-bold uppercase tracking-wider mb-6 w-fit`}>
                                    {activeTier.label}
                                </div>
                                <h3 className={`text-6xl font-black text-white mb-6 tracking-tight ${activeTier.isSpecial ? 'text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200' : ''}`}>
                                    {activeTier.name}
                                </h3>
                                <p className="text-gray-400 text-lg mb-8">
                                    The standard for {activeTier.label} organizations. Unlock specific resource allocations designed for your scale.
                                </p>

                                {/* MOA & Application Check (Constant for all) */}
                                <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Signed MOU</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Application</div>
                                </div>
                            </div>

                            {/* Right: Specs Matrix (Grid) */}
                            <div className="md:col-span-12 lg:col-span-7 grid sm:grid-cols-2 gap-4">
                                {/* Diamonds Card */}
                                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gray-800 ${activeTier.color}`}><Gem size={20} /></div>
                                        <p className="text-xs font-bold text-gray-500 uppercase">Max Gold Cap</p>
                                    </div>
                                    <p className="text-3xl font-bold text-white mb-1">{activeTier.diamonds}</p>
                                    <p className="text-sm text-gray-500">Diamonds per Semester</p>
                                </div>

                                {/* Requirements Card (Table B) */}
                                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gray-800 ${activeTier.color}`}><Target size={20} /></div>
                                        <p className="text-xs font-bold text-gray-500 uppercase">Stat Requirements</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                            <span className="text-gray-400">Turnout</span>
                                            <span className="text-white font-bold">{activeTier.reqs.turnouts}</span>
                                        </div>
                                        <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                            <span className="text-gray-400">Members</span>
                                            <span className="text-white font-bold">{activeTier.reqs.members}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Participation</span>
                                            <span className="text-white font-bold">{activeTier.reqs.participation}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Compliance Card (Table C - New) */}
                                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors sm:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gray-800 ${activeTier.color}`}><Shield size={20} /></div>
                                        <p className="text-xs font-bold text-gray-500 uppercase">Compliance Gate</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className={`p-3 rounded-xl border text-center transition-colors ${activeTier.compliance.accreditation ? 'bg-green-500/10 border-green-500/30' : 'bg-gray-800/50 border-white/5 opacity-50'}`}>
                                            <div className="text-xs font-bold text-gray-400 uppercase mb-1">Accredited</div>
                                            {activeTier.compliance.accreditation ? <CheckCircle size={16} className="text-green-400 mx-auto" /> : <span className="text-xs text-gray-600">Not Required</span>}
                                        </div>
                                        <div className={`p-3 rounded-xl border text-center transition-colors ${activeTier.compliance.adviser ? 'bg-blue-500/10 border-blue-500/30' : 'bg-gray-800/50 border-white/5 opacity-50'}`}>
                                            <div className="text-xs font-bold text-gray-400 uppercase mb-1">Faculty Adv.</div>
                                            {activeTier.compliance.adviser ? <CheckCircle size={16} className="text-blue-400 mx-auto" /> : <span className="text-xs text-gray-600">Not Required</span>}
                                        </div>
                                        <div className={`p-3 rounded-xl border text-center transition-colors ${activeTier.compliance.monetary ? 'bg-msl-gold/10 border-msl-gold/30' : 'bg-gray-800/50 border-white/5 opacity-50'}`}>
                                            <div className="text-xs font-bold text-gray-400 uppercase mb-1">Cash Eligible</div>
                                            {activeTier.compliance.monetary ? <CheckCircle size={16} className="text-msl-gold mx-auto" /> : <span className="text-xs text-gray-600">No</span>}
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
                    {/* Leaderboard Table mockup */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                        {[
                            { rank: 1, name: "Teletigers Esports", school: "UST", points: "12,450", trend: "up" },
                            { rank: 2, name: "LG Esports", school: "Ateneo", points: "11,200", trend: "same" },
                            { rank: 3, name: "Viridis Arcus", school: "DLSU", points: "10,850", trend: "up" },
                            { rank: 4, name: "Paradigm", school: "New Era", points: "9,500", trend: "down" },
                            { rank: 5, name: "Gearharts", school: "TIP", points: "9,100", trend: "same" },
                        ].map((team, idx) => (
                            <div key={idx} className="flex items-center p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                <div className="w-12 font-bold text-2xl text-gray-500 font-mono">#{team.rank}</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white text-lg">{team.name}</h4>
                                    <p className="text-xs text-gray-400">{team.school}</p>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-msl-gold text-xl">{team.points} pts</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MSL NETWORK AWARDS --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-msl-gold/10 to-black border-t border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-msl-gold/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-msl-gold/20 border border-msl-gold/30 text-msl-gold text-xs font-bold uppercase mb-6">
                            <Crown size={12} /> Hall of Legends
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">The MSL Network Awards</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Our annual gala recognizing the best of the best. From "Organization of the Year" to "Breakout Student Leader", we immortalize those who define the meta.
                        </p>
                        <button className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center gap-2">
                            View Hall of Fame <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {['Org of the Year', 'Best Production', 'Student Leader', 'Event of the Year'].map((award, i) => (
                            <div key={i} className="aspect-square bg-black/40 border border-msl-gold/20 rounded-2xl flex flex-col items-center justify-center text-center p-4 hover:border-msl-gold/50 transition-colors">
                                <Trophy size={32} className="text-msl-gold mb-3" />
                                <span className="text-white font-bold text-sm">{award}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MSL NETWORK DISCORD --- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#5865F2]/10 border-t border-white/10 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Hub of Collegiate Esports</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                        Join the official MSL Network Discord. Connect with other leaders, get direct support from admins, and find scrim partners instantly.
                    </p>
                    <button className="px-10 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 transition-all flex items-center justify-center gap-3 mx-auto">
                        <Users size={20} /> Join the Discord
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
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gray-900 to-black border-t border-white/10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-black text-white mb-6">Start Your Run.</h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Slots for <span className="text-msl-gold font-bold">Super School</span> status are limited per region. The sooner you start your journey, the faster you climb the ranks.
                    </p>
                    <button
                        onClick={() => onNavigate('careers')}
                        className="px-12 py-6 bg-white text-black hover:bg-msl-gold rounded-full font-black text-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(242,194,26,0.5)] hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                    >
                        Join The Network <ArrowRight size={24} />
                    </button>
                    <div className="mt-10 flex justify-center gap-8 text-gray-500">
                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Fast-Track Review</div>
                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Full Support</div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MSLNetwork;
