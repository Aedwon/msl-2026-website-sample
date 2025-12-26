import React, { useState, useEffect } from 'react';
import {
    Gem,
    Coins,
    Gamepad2,
    Layers,
    Gift,
    School,
    HeartHandshake,
    Banknote,
    Trophy,
    CheckCircle,
    Workflow,
    ArrowRight,
    Shield,
    Star,
    Flag,
    ChevronDown,
    Shirt,
    Zap,
    Users,
    FileText,
    Briefcase
} from 'lucide-react';

interface BuffsAndSupportProps {
    onNavigate: (page: string) => void;
}

// --- LOGIC HELPERS ---
const formatDiamonds = (n: number) => new Intl.NumberFormat('en-US').format(n) + ' Diamonds';
const formatMoney = (n: number) => '₱ ' + new Intl.NumberFormat('en-US').format(n);

const BuffsAndSupport: React.FC<BuffsAndSupportProps> = ({ onNavigate }) => {

    // --- STATE: DIAMONDS ---
    const [diamondType, setDiamondType] = useState('tournament');
    const [diamondScope, setDiamondScope] = useState('department');
    const [diamondTier, setDiamondTier] = useState('I');

    const getDiamondBudget = () => {
        const matrix: any = {
            department: { I: { tournament: 10000, non: 7000 }, II: { tournament: 10000, non: 7000 }, III: { tournament: 10000, non: 7000 }, super: { tournament: 10000, non: 7000 } },
            college: { I: { tournament: 10000, non: 5000 }, II: { tournament: 12000, non: 6000 }, III: { tournament: 13500, non: 7000 }, super: { tournament: 15000, non: 7500 } },
            university: { I: { tournament: 12000, non: 6000 }, II: { tournament: 13500, non: 7000 }, III: { tournament: 15000, non: 7500 }, super: { tournament: 16500, non: 8500 } },
            system: { I: { tournament: 15000, non: 7500 }, II: { tournament: 16500, non: 8500 }, III: { tournament: 18000, non: 9500 }, super: { tournament: 19500, non: 10500 } },
            nationwide: { I: { tournament: 20000, non: 10000 }, II: { tournament: 25000, non: 12500 }, III: { tournament: 30000, non: 15000 }, super: { tournament: 32000, non: 16000 } }
        };

        const base = matrix[diamondScope][diamondTier][diamondType];
        // Note: The original logic had a specific clamp for department, but the matrix values for department are already maxed at 10000. 
        // Keeping it consistent with matrix values.
        return formatDiamonds(base);
    };

    // --- STATE: SHS EVENTS ---
    const [shsIntramurals, setShsIntramurals] = useState(false);
    const [shsType, setShsType] = useState('tournament');
    const [shsSetup, setShsSetup] = useState('on-ground');
    const [shsLivestream, setShsLivestream] = useState('with');

    const getShsBudget = () => {
        if (shsIntramurals) return formatDiamonds(25000);

        if (shsType === 'tournament') {
            if (shsSetup === 'on-ground') return formatDiamonds(8000);
            if (shsSetup === 'online') return shsLivestream === 'with' ? formatDiamonds(7000) : formatDiamonds(5000);
        } else {
            return formatDiamonds(4000);
        }
        return formatDiamonds(0);
    };

    // --- STATE: CAUSE ---
    const [causeSetup, setCauseSetup] = useState('on-ground');
    const [causeTeamsIdx, setCauseTeamsIdx] = useState(1); // 1, 2, 3

    const getCauseBudget = () => {
        const bands = ['4-7', '8-15', '>16'];
        const band = bands[causeTeamsIdx - 1];
        const matrix: any = {
            'on-ground': { '4-7': 5000, '8-15': 7000, '>16': 10000 },
            'online': { '4-7': 4000, '8-15': 5000, '>16': 7000 },
            'other': { '4-7': 2000, '8-15': 3000, '>16': 4000 }
        };
        return formatDiamonds(matrix[causeSetup][band]);
    };

    // --- STATE: MONETARY ---
    const [moneyScope, setMoneyScope] = useState('college');
    const [moneyType, setMoneyType] = useState('tournament');
    // const [moneySetup, setMoneySetup] = useState('on-ground'); // Not strictly used in calculation logic provided but present in UI

    const getMoneyBudget = () => {
        if (moneyScope === 'nationwide') return 'Varies — Pitch Deck Required';

        if (moneyType === 'tournament') {
            if (moneyScope === 'college') return formatMoney(5000);
            if (moneyScope === 'university') return formatMoney(10000);
            if (moneyScope === 'system') return formatMoney(15000);
        }
        return formatMoney(3000);
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white font-sans selection:bg-msl-gold selection:text-black">
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 8s ease-in-out infinite;
                    animation-delay: 2s;
                }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>

            {/* HERO SECTION */}
            <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden bg-grid-pattern">
                {/* Background Atmosphere */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-msl-gold/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Floating Elements (Decorations) */}
                <div className="absolute top-20 left-[10%] opacity-10 blur-[2px] animate-float pointer-events-none hidden lg:block">
                    <Gem size={80} className="text-white" />
                </div>
                <div className="absolute bottom-20 right-[10%] opacity-10 blur-[1px] animate-float-delayed pointer-events-none hidden lg:block">
                    <Shield size={120} className="text-msl-gold" />
                </div>
                <div className="absolute top-40 right-[20%] opacity-20 blur-[60px] w-64 h-64 bg-msl-gold rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-msl-gold text-sm font-bold uppercase mb-8 shadow-lg hover:border-msl-gold/50 transition-colors cursor-default">
                            <Zap size={14} fill="currentColor" /> Sponsorship Programs
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                            Power Up <br />
                            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200 drop-shadow-[0_0_20px_rgba(242,194,26,0.3)]">Events</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            The ultimate support system for student esports. Unlock diamonds, funds, and specialized tools to take your campus tournaments to the next level.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-msl-gold hover:bg-yellow-400 text-black rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_-5px_rgba(242,194,26,0.4)] hover:shadow-[0_0_35px_-5px_rgba(242,194,26,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                                Apply for Support <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                                <span className="border-b border-transparent hover:border-white/50 transition-colors">Download Guidelines</span>
                            </button>
                        </div>
                    </div>

                    {/* Hero Feature Architecture - "Mythic Card" */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm aspect-[4/5] group">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-msl-gold/20 blur-[60px] rounded-full pointer-events-none animate-pulse"></div>

                            {/* The Card Itself */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black border border-msl-gold/30 rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl backdrop-blur-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">

                                {/* Animated Background Texture */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-msl-gold via-gray-900 to-black"></div>

                                {/* Rarity Badge */}
                                <div className="relative z-10 px-4 py-1.5 bg-gradient-to-r from-msl-gold to-yellow-400 text-black text-xs font-black tracking-[0.2em] rounded-full uppercase shadow-lg mb-8">
                                    Mythic Item
                                </div>

                                {/* Central Visual */}
                                <div className="relative z-10 w-40 h-40 mb-8 items-center justify-center flex">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-msl-gold/40 to-transparent rounded-full blur-2xl animate-spin-slow"></div>
                                    <Gift size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10" strokeWidth={1.5} />

                                    {/* Orbiting Particles */}
                                    <div className="absolute top-0 right-4 animate-float text-blue-400"><Gem size={20} fill="currentColor" className="opacity-80" /></div>
                                    <div className="absolute bottom-4 left-2 animate-float-delayed text-green-400"><Banknote size={20} fill="currentColor" className="opacity-80" /></div>
                                    <div className="absolute top-[40%] -left-4 animate-bounce text-purple-400"><Gamepad2 size={20} fill="currentColor" className="opacity-80" /></div>
                                    <div className="absolute -bottom-2 right-8 animate-pulse text-orange-400"><Shirt size={20} fill="currentColor" className="opacity-80" /></div>
                                </div>

                                {/* Card Text */}
                                <h3 className="relative z-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
                                    Admin's Blessing
                                </h3>
                                <div className="relative z-10 w-12 h-1 bg-msl-gold/50 rounded-full mb-6"></div>

                                <p className="relative z-10 text-gray-400 text-sm leading-relaxed italic border-t border-b border-white/5 py-4 mx-4">
                                    "Grants the wielder immense resources to host legendary campus events. Increases student engagement by 200%."
                                </p>

                                {/* Stats Footer */}
                                <div className="relative z-10 mt-auto w-full grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <span className="block text-msl-gold text-lg mb-1">SS</span>
                                        Tier
                                    </div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <span className="block text-white text-lg mb-1">∞</span>
                                        Limit
                                    </div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <span className="block text-white text-lg mb-1">0s</span>
                                        CD
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENT TYPES & PROVISIONS */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
                <div className="absolute inset-0 bg-msl-surface/50" />
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
                    {/* Event Types */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/5 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]">
                            <Layers size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Eligible Event Types</h3>
                        <ul className="space-y-4">
                            {[
                                { icon: Trophy, text: "Tournaments", sub: "Onsite & Online", color: "text-blue-400" },
                                { icon: Gamepad2, text: "Community Games", sub: "Non-Tournament Activities", color: "text-purple-400" },
                                { icon: HeartHandshake, text: "Charity Events", sub: "Gaming for a Cause", color: "text-red-400" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <item.icon size={20} className={item.color} />
                                    <div>
                                        <p className="font-bold text-gray-200">{item.text}</p>
                                        <p className="text-xs text-gray-500">{item.sub}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Provisions */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group">
                        <div className="w-14 h-14 bg-gradient-to-br from-msl-gold/20 to-yellow-600/5 rounded-2xl flex items-center justify-center text-msl-gold mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_-10px_rgba(242,194,26,0.5)]">
                            <Gift size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">What We Provide</h3>
                        <div className="grid grid-cols-2 gap-4 h-[calc(100%-8rem)] content-start">
                            {[
                                { label: "Diamonds", sub: "Funding", color: "text-msl-gold", border: "border-msl-gold/20" },
                                { label: "Cash", sub: "Grants", color: "text-green-400", border: "border-green-500/20" },
                                { label: "Platform", sub: "Access", color: "text-blue-400", border: "border-blue-500/20" },
                                { label: "Merch", sub: "Swag", color: "text-orange-400", border: "border-orange-500/20" }
                            ].map((item, idx) => (
                                <div key={idx} className={`bg-black/40 p-5 rounded-xl text-center border ${item.border} hover:bg-white/5 transition-all flex flex-col justify-center items-center h-full min-h-[100px]`}>
                                    <p className={`text-2xl font-extrabold ${item.color} mb-1`}>{item.label}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CALCULATORS SECTION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Support Calculator</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Estimate the max support you can unlock. Select your parameters below.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* 1. DIAMONDS CALCULATOR */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-blue-500/30 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]">
                                    <Gem size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Diamonds Support</h3>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Scope of Event</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['department', 'college', 'university', 'system', 'nationwide'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setDiamondScope(opt)}
                                                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all border ${diamondScope === opt ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-900/40 transform scale-105' : 'bg-black/40 text-gray-400 border-white/10 hover:bg-white/5 hover:border-white/20'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Event Type</label>
                                        <div className="absolute right-3 top-[2.2rem] pointer-events-none text-gray-500"><ChevronDown size={16} /></div>
                                        <select
                                            value={diamondType}
                                            onChange={(e) => setDiamondType(e.target.value)}
                                            className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                        >
                                            <option value="tournament">Tournament</option>
                                            <option value="non">Non-Tournament</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Accreditation</label>
                                        <div className="absolute right-3 top-[2.2rem] pointer-events-none text-gray-500"><ChevronDown size={16} /></div>
                                        <select
                                            value={diamondTier}
                                            onChange={(e) => setDiamondTier(e.target.value)}
                                            className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                        >
                                            <option value="I">Level I</option>
                                            <option value="II">Level II</option>
                                            <option value="III">Level III</option>
                                            <option value="super">Super School</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex items-center justify-between">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Total Allocation</span>
                                        <span className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                            {getDiamondBudget()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. SHS EVENTS */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)]">
                                    <School size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Senior High School</h3>
                            </div>

                            <div className="space-y-8">
                                <label className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/10 cursor-pointer hover:border-indigo-500/50 transition-all group/check">
                                    <span className="font-bold text-white group-hover/check:text-indigo-400 transition-colors">High School Intramurals</span>
                                    <div className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${shsIntramurals ? 'bg-indigo-600 border-indigo-600' : 'border-gray-600 bg-transparent'}`}>
                                        {shsIntramurals && <CheckCircle size={14} className="text-white" />}
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={shsIntramurals}
                                        onChange={(e) => setShsIntramurals(e.target.checked)}
                                        className="hidden"
                                    />
                                </label>

                                <div className={`grid grid-cols-2 gap-6 transition-all duration-300 ${shsIntramurals ? 'opacity-30 pointer-events-none blur-sm' : 'opacity-100'}`}>
                                    <div className="col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Event Type</label>
                                        <div className="flex bg-black/60 p-1.5 rounded-xl border border-white/10">
                                            {['tournament', 'non'].map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setShsType(opt)}
                                                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold capitalize transition-all ${shsType === opt ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                                >
                                                    {opt === 'non' ? 'Non-Tournament' : opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Setup</label>
                                        <div className="absolute right-3 top-[2.2rem] pointer-events-none text-gray-500"><ChevronDown size={16} /></div>
                                        <select
                                            value={shsSetup}
                                            onChange={(e) => setShsSetup(e.target.value)}
                                            disabled={shsType !== 'tournament'}
                                            className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-indigo-500 transition-all opacity-100 disabled:opacity-50"
                                        >
                                            <option value="on-ground">Onsite</option>
                                            <option value="online">Online</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mode</label>
                                        <div className="absolute right-3 top-[2.2rem] pointer-events-none text-gray-500"><ChevronDown size={16} /></div>
                                        <select
                                            value={shsLivestream}
                                            onChange={(e) => setShsLivestream(e.target.value)}
                                            disabled={shsType !== 'tournament'}
                                            className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-indigo-500 transition-all opacity-100 disabled:opacity-50"
                                        >
                                            <option value="with">Livestreamed</option>
                                            <option value="without">Off-stream</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex items-center justify-between">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Total Allocation</span>
                                        <span className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                                            {getShsBudget()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. EVENTS FOR A CAUSE */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-red-500/30 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/20 shadow-[0_0_15px_-5px_rgba(239,68,68,0.5)]">
                                    <HeartHandshake size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Events for a Cause</h3>
                            </div>

                            <div className="space-y-8">
                                <div className="relative">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Setup Type</label>
                                    <div className="absolute right-3 top-[2.2rem] pointer-events-none text-gray-500"><ChevronDown size={16} /></div>
                                    <select
                                        value={causeSetup}
                                        onChange={(e) => setCauseSetup(e.target.value)}
                                        className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-red-500 transition-all"
                                    >
                                        <option value="on-ground">Onsite / Physical</option>
                                        <option value="online">Online / Virtual</option>
                                        <option value="other">Hybrid / Others</option>
                                    </select>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Team Volume</label>
                                        <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                                            {['4-7 Teams (Small)', '8-15 Teams (Medium)', '>16 Teams (Large)'][causeTeamsIdx - 1]}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="3"
                                        step="1"
                                        value={causeTeamsIdx}
                                        onChange={(e) => setCauseTeamsIdx(Number(e.target.value))}
                                        className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-600 mt-2 font-bold uppercase tracking-wider">
                                        <span>Small</span>
                                        <span>Medium</span>
                                        <span>Large</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex items-center justify-between">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Total Allocation</span>
                                        <span className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                                            {getCauseBudget()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. MONETARY GRANTS */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-msl-gold/30 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-msl-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-msl-gold/20 text-msl-gold flex items-center justify-center border border-msl-gold/20 shadow-[0_0_15px_-5px_rgba(242,194,26,0.5)]">
                                    <Banknote size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Monetary Grants</h3>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Target Scope</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['college', 'university', 'system', 'nationwide'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setMoneyScope(opt)}
                                                className={`px-3 py-2.5 rounded-lg text-sm font-bold capitalize transition-all border ${moneyScope === opt ? 'bg-msl-gold text-black border-msl-gold shadow-lg shadow-yellow-900/40' : 'bg-black/40 text-gray-400 border-white/10 hover:bg-white/5 hover:border-white/20'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Activity Base</label>
                                    <div className="absolute right-3 top-[2.2rem] pointer-events-none text-gray-500"><ChevronDown size={16} /></div>
                                    <select
                                        value={moneyType}
                                        onChange={(e) => setMoneyType(e.target.value)}
                                        className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-msl-gold transition-all"
                                    >
                                        <option value="tournament">Tournament</option>
                                        <option value="non">Non-Tournament</option>
                                    </select>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 flex items-center justify-between">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Total Allocation</span>
                                        <span className={`text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-200 ${moneyScope === 'nationwide' ? 'text-xl' : ''}`}>
                                            {getMoneyBudget()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* LIMIT BREAK / PITCH DECK GUIDE */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-msl-surface border-y border-white/10 relative overflow-hidden">
                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-xs font-black tracking-widest uppercase mb-6 border border-red-500/20 shadow-[0_0_15px_-5px_rgba(239,68,68,0.5)]">
                            <Zap size={12} fill="currentColor" /> Overdrive Mode
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Limit Break</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Need more resources than the calculator allows? We support major initiatives that promise high impact. Submit a <span className="text-white font-bold">Pitch Deck</span> to request custom provisioning.
                        </p>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 relative backdrop-blur-sm">

                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            {/* Left: The "Mission" */}
                            <div className="w-full md:w-1/3 shrink-0">
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
                                        <Briefcase size={32} className="text-gray-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Proposal Blueprint</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Your deck must be professional, concise, and impact-focused. Use this structure to guarantee a review.
                                    </p>
                                </div>
                                <button className="w-full py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                                    Submit Proposal <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Right: The List */}
                            <div className="w-full grid gap-4">
                                {[
                                    { title: "1. Executive Summary", desc: "The 'Hook'. One slide summarizing the event, the ask, and the return on investment." },
                                    { title: "2. The Arena (Event Details)", desc: "Venue logistics, dates, platform, tournament format, and tech requirements." },
                                    { title: "3. The Crowd (Audience)", desc: "Expected footfall, student demographics, and reach (online/offline)." },
                                    { title: "4. The Hype (Media Plan)", desc: "How you will promote the event. Social media strategy, streamers, and partners." },
                                    { title: "5. The Trade (Sponsorship)", desc: "Detailed breakdown of mileage/ROI you will provide in exchange for the support." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all cursor-default">
                                        <div className="mt-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:scale-150 transition-transform"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOURNAMENT LOBBY PROMO */}
            <section className="py-24 bg-msl-surface border-y border-white/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 pointer-events-none" />
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase mb-6 border border-purple-500/20">
                            <Star size={12} fill="currentColor" /> Pro Tier
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Access the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tournament Lobby</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-purple-500/30 pl-6">
                            Experience the game like the pros. Unlock the official tournament client used in MPL and M-Series, featuring comprehensive spectator tools and draft modes.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {[
                                "Full Hero/Skin Access", "Cross-Server Matches",
                                "Pro Draft (6/10 Bans)", "Broadcast Quality Spec"
                            ].map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                                        <CheckCircle size={14} />
                                    </div>
                                    {feat}
                                </div>
                            ))}
                        </div>
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 group">
                            Request Access <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="relative order-1 md:order-2 mb-8 md:mb-0">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-[80px] -z-10 animate-pulse"></div>
                        <div className="relative h-[450px] bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-purple-500/30 transition-all">
                            {/* Fake UI Lines */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

                            <Gamepad2 size={100} className="text-white/10 group-hover:text-purple-500/20 transition-colors duration-500 mb-8" />

                            <div className="text-center z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Restricted Access</h3>
                                <p className="text-gray-500 text-sm mb-6">Verified organizers only</p>
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono group-hover:border-purple-500/50 transition-colors">
                                    <Shield size={12} className="text-purple-500" /> CLIENT_VER: 2.1.0_PRO
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPONSORSHIP ROADMAP (Formerly Implementation Framework) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 lg:mb-20">
                        <h2 className="text-3xl font-bold text-white mb-4">Sponsorship Roadmap</h2>
                        <p className="text-gray-400">Step-by-step process to secure your support.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical Timeline Thread */}
                        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-msl-gold via-white/10 to-transparent block" />

                        <div className="space-y-12">
                            {[
                                { title: "Application Process", desc: "Submit proposals and pitch decks (2–3 weeks before for diamonds, 45 days for monetary).", icon: Flag },
                                { title: "Registration", desc: "Participants must pre-register on the MSL website.", icon: Users },
                                { title: "Acknowledgement", desc: "Official confirmation receipt of approved budget and resources.", icon: CheckCircle },
                                { title: "Post-Event Report", desc: "Submission of winner lists, event reports, and media documentation.", icon: FileText },
                                { title: "Release of Rewards", desc: "Diamonds (3–4 weeks after reports) or funds (45 days after approval).", icon: Gift }
                            ].map((step, idx) => (
                                <div key={idx} className="relative flex items-start gap-6 group">

                                    {/* Timeline Node */}
                                    <div className="relative z-10 w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-msl-gold transition-colors shadow-[0_0_0_8px_rgba(0,0,0,1)]">
                                        <span className="text-lg font-bold text-gray-500 group-hover:text-msl-gold transition-colors">{idx + 1}</span>
                                    </div>

                                    {/* Card */}
                                    <div className="flex-grow w-full bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all mt-1">
                                        <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-msl-gold text-msl-gold hover:bg-msl-gold hover:text-black rounded-xl font-bold text-lg transition-all">
                            View Full Documentation
                        </button>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default BuffsAndSupport;
