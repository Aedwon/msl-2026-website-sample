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
    ChevronDown
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

            {/* HERO SECTION */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-msl-gold/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-msl-gold/20 text-msl-gold text-xs font-bold uppercase mb-6 border border-msl-gold/20">
                            <Gift size={12} fill="currentColor" /> Sponsorship Programs
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Buffs & <br /><span className="text-msl-gold">Support</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Empowering student esports organizations with diamonds, monetary support, and exclusive tools to elevate events across the Philippines.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-msl-gold hover:bg-msl-goldHover text-black rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(242,194,26,0.2)] flex items-center justify-center gap-2">
                                Apply Now <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all">
                                Download Guidelines
                            </button>
                        </div>
                    </div>

                    {/* Hero Feature Card */}
                    <div className="bg-msl-card border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-msl-gold/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-white mb-6">Program Benefits</h3>
                        <ul className="space-y-4">
                            {[
                                { icon: Gem, text: "Diamonds for Events", sub: "Prize pools and giveaways" },
                                { icon: Banknote, text: "Monetary Support", sub: "Operational funding grants" },
                                { icon: Gamepad2, text: "Tournament Lobby", sub: "Access to pro features" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 transition-colors group-hover:border-msl-gold/20">
                                    <div className="p-2.5 bg-msl-gold/10 rounded-lg text-msl-gold shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{item.text}</p>
                                        <p className="text-xs text-gray-500">{item.sub}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* EVENT TYPES & PROVISIONS */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-msl-surface border-b border-white/10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Event Types */}
                    <div className="bg-msl-card rounded-3xl p-8 border border-white/10 hover:border-msl-gold/30 transition-all">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Eligible Event Types</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                                <Trophy size={16} className="text-blue-500" /> Tournaments (Onsite / Online)
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                                <Gamepad2 size={16} className="text-purple-500" /> Non-Tournament Activities
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                                <HeartHandshake size={16} className="text-red-500" /> Events for a Cause
                            </li>
                        </ul>
                    </div>
                    {/* Provisions */}
                    <div className="bg-msl-card rounded-3xl p-8 border border-white/10 hover:border-msl-gold/30 transition-all">
                        <div className="w-12 h-12 bg-msl-gold/10 rounded-2xl flex items-center justify-center text-msl-gold mb-6">
                            <Gift size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">What We Provide</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-white/5">
                                <p className="text-2xl font-bold text-msl-gold mb-1">Diamonds</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Funding</p>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-white/5">
                                <p className="text-2xl font-bold text-green-500 mb-1">Cash</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Grants</p>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-white/5 col-span-2">
                                <p className="text-xl font-bold text-blue-400 mb-1">Tournament Lobby</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Platform Access</p>
                            </div>
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
                            Estimate the support you can receive based on your event's scope and requirements.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* 1. DIAMONDS CALCULATOR */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Gem size={28} /></div>
                                <h3 className="text-2xl font-bold text-white">Diamonds Support</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Scope of Event</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['department', 'college', 'university', 'system', 'nationwide'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setDiamondScope(opt)}
                                                className={`px-3 py-2 rounded-lg text-sm font-bold capitalize transition-all border ${diamondScope === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-black/40 text-gray-400 border-white/10 hover:bg-white/5'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Event Type</label>
                                        <select
                                            value={diamondType}
                                            onChange={(e) => setDiamondType(e.target.value)}
                                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="tournament">Tournament</option>
                                            <option value="non">Non-Tournament</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Accreditation Tier</label>
                                        <select
                                            value={diamondTier}
                                            onChange={(e) => setDiamondTier(e.target.value)}
                                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="I">Level I</option>
                                            <option value="II">Level II</option>
                                            <option value="III">Level III</option>
                                            <option value="super">Super School</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Max Allowable Budget</p>
                                    <p className="text-4xl font-extrabold text-blue-400">{getDiamondBudget()}</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. SHS EVENTS */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400"><School size={28} /></div>
                                <h3 className="text-2xl font-bold text-white">Senior High School</h3>
                            </div>

                            <div className="space-y-6">
                                <label className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-white/10 cursor-pointer hover:border-indigo-500/50 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={shsIntramurals}
                                        onChange={(e) => setShsIntramurals(e.target.checked)}
                                        className="w-5 h-5 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-gray-900"
                                    />
                                    <span className="font-bold text-white">High School Intramurals</span>
                                </label>

                                <div className={`grid grid-cols-2 gap-4 transition-opacity ${shsIntramurals ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Type</label>
                                        <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                                            {['tournament', 'non'].map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setShsType(opt)}
                                                    className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${shsType === opt ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                                >
                                                    {opt === 'non' ? 'Non-Tourn' : opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Setup</label>
                                        <select
                                            value={shsSetup}
                                            onChange={(e) => setShsSetup(e.target.value)}
                                            disabled={shsType !== 'tournament'}
                                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50"
                                        >
                                            <option value="on-ground">Onsite</option>
                                            <option value="online">Online</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Livestream</label>
                                        <select
                                            value={shsLivestream}
                                            onChange={(e) => setShsLivestream(e.target.value)}
                                            disabled={shsType !== 'tournament'}
                                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50"
                                        >
                                            <option value="with">With Stream</option>
                                            <option value="without">No Stream</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Max Allowable Budget</p>
                                    <p className="text-4xl font-extrabold text-indigo-400">{getShsBudget()}</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. EVENTS FOR A CAUSE */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-red-500/10 rounded-xl text-red-400"><HeartHandshake size={28} /></div>
                                <h3 className="text-2xl font-bold text-white">Events for a Cause</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Setup Type</label>
                                    <select
                                        value={causeSetup}
                                        onChange={(e) => setCauseSetup(e.target.value)}
                                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500"
                                    >
                                        <option value="on-ground">Onsite</option>
                                        <option value="online">Online</option>
                                        <option value="other">Others</option>
                                    </select>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-bold text-gray-400">Team Bracket</label>
                                        <span className="text-sm font-bold text-red-500">{['4-7 Teams', '8-15 Teams', '>16 Teams'][causeTeamsIdx - 1]}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="3"
                                        step="1"
                                        value={causeTeamsIdx}
                                        onChange={(e) => setCauseTeamsIdx(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                                        <span>Small</span>
                                        <span>Medium</span>
                                        <span>Large</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Max Allowable Budget</p>
                                    <p className="text-4xl font-extrabold text-red-400">{getCauseBudget()}</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. MONETARY GRANTS */}
                        <div className="bg-msl-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-msl-gold/10 rounded-xl text-msl-gold"><Banknote size={28} /></div>
                                <h3 className="text-2xl font-bold text-white">Monetary Grants</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Scope</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['college', 'university', 'system', 'nationwide'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setMoneyScope(opt)}
                                                className={`px-3 py-2 rounded-lg text-sm font-bold capitalize transition-all border ${moneyScope === opt ? 'bg-msl-gold text-black border-msl-gold' : 'bg-black/40 text-gray-400 border-white/10 hover:bg-white/5'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Activity Type</label>
                                    <select
                                        value={moneyType}
                                        onChange={(e) => setMoneyType(e.target.value)}
                                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-msl-gold"
                                    >
                                        <option value="tournament">Tournament</option>
                                        <option value="non">Non-Tournament</option>
                                    </select>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Max Allowable Budget</p>
                                    <p className={`text-4xl font-extrabold ${moneyScope === 'nationwide' ? 'text-2xl' : ''} text-msl-gold`}>
                                        {getMoneyBudget()}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* TOURNAMENT LOBBY PROMO */}
            <section className="py-20 bg-msl-surface border-y border-white/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase mb-4">
                            Premium Feature
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Tournament Lobby Access</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Unlock the ultimate competitive experience for your campus. Gain access to the same tools used in the MPL/M-Series stage.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "All Heroes Unlocked", "All Emblems Unlocked",
                                "All Skins Unlocked", "Cross-Server Battles",
                                "6-Ban or 10-Ban Options", "Spectator Slots"
                            ].map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle size={18} className="text-msl-gold shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center gap-2">
                            Request Access <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="relative h-[400px] bg-black/50 rounded-3xl border border-white/10 flex items-center justify-center p-8">
                        {/* Abstract visual of lobby interface */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl" />
                        <Gamepad2 size={120} className="text-white/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-black/80 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl text-white font-bold flex items-center gap-3 shadow-2xl">
                                <Shield className="text-msl-gold" /> Official Tournament Client
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPLEMENTATION FRAMEWORK */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Implementation Framework</h2>
                        <p className="text-gray-400">Step-by-step process to secure your sponsorship.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "Application Process", desc: "Submit proposals and pitch decks (2–3 weeks before for diamonds, 45 days for monetary)." },
                            { title: "Registration", desc: "Participants must pre-register on the MSL website." },
                            { title: "Acknowledgement Receipt", desc: "Official confirmation of approved budget." },
                            { title: "Post-Event Requirements", desc: "Submission of winner lists, event reports, and media documentation." },
                            { title: "Release of Rewards", desc: "Diamonds (3–4 weeks after reports) or funds (45 days after approval)." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 p-6 bg-msl-card border border-white/10 rounded-2xl items-start group hover:border-white/20 transition-all">
                                <div className="w-10 h-10 rounded-full bg-msl-gold/10 text-msl-gold flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-msl-gold group-hover:text-black transition-colors">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-8 py-4 bg-transparent border border-msl-gold text-msl-gold hover:bg-msl-gold hover:text-black rounded-xl font-bold text-lg transition-all">
                            View Full Documentation
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BuffsAndSupport;
