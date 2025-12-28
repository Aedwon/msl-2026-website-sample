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
    ExternalLink,
    Settings,
    Play
} from 'lucide-react';

const Svgs = {
    Gear: ({ className, size }: { className?: string, size?: number }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12.29 3.012a.997.997 0 0 1 .71.3l.7.7c.43.43.43 1.13 0 1.56a2 2 0 1 0 2.83 2.83c.43-.43 1.13-.43 1.56 0l.7.7a.997.997 0 0 1 .3.71c0 .54.43.99.98.98h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1a.997.997 0 0 1-.98.98c0 .54.43.99.98.98h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1a.997.997 0 0 1-.98.98c0 .54-.43.99-.98.98h-1c-.55 0-1-.45-1-1v-1a.997.997 0 0 1-.98-.98 2 2 0 1 0-2.83-2.83.997.997 0 0 1-.98-.98v-1c0-.55-.45-1-1-1h-1a.997.997 0 0 1-.98-.98 2 2 0 1 0-2.83-2.83.997.997 0 0 1-.98-.98v-1c0-.55.45-1 1-1h1c.55 0 .99.43.98.98z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
};

interface MSLCollegiateCupProps {
    onNavigate: (page: string) => void;
}

// --- MOCK DATA ---
const TOURNAMENT_STAGES = [
    {
        id: 'stage-1',
        title: 'Community Rivals (Phase 1)',
        subtitle: 'The Beginning',
        date: 'Month 1',
        format: 'Open Qualifier',
        eligibility: 'All Amateur Teams',
        prize: 'Diamonds',
        desc: 'The first wave of challengers. Open to all aspiring amateur teams across the 4 major regions.',
        progression: '4 Winners (1 per Region) advance to Group Stage',
        brackets: ['Luzon A', 'Luzon B', 'Visayas', 'Mindanao'],
        winners: [
            { region: 'Luzon A', team: 'Tigers Esports', code: 'UST', logo: '🐯' },
            { region: 'Luzon B', team: 'Bravehearts', code: 'LPU', logo: '⚔️' },
            { region: 'Visayas', team: 'Cebu Tamaraws', code: 'USC', logo: '🐂' },
            { region: 'Mindanao', team: 'Davao Eagles', code: 'AdDU', logo: '🦅' }
        ]
    },
    {
        id: 'stage-2',
        title: 'Community Rivals (Phase 2)',
        subtitle: 'The Second Wave',
        date: 'Month 2',
        format: 'Open Qualifier',
        eligibility: 'All Amateur Teams',
        prize: 'Diamonds',
        desc: 'A second chance for glory. Another set of qualifiers for those who missed the first cut.',
        progression: '4 Winners (1 per Region) advance to Group Stage',
        brackets: ['Luzon A', 'Luzon B', 'Visayas', 'Mindanao'],
        winners: [
            { region: 'Luzon A', team: 'Spartans Main', code: 'AU', logo: '🛡️' },
            { region: 'Luzon B', team: 'Iron Legion', code: 'MAPUA', logo: '⛪' },
            { region: 'Visayas', team: 'Iloilo Warriors', code: 'CPU', logo: '⚔️' },
            { region: 'Mindanao', team: 'Gensan Generals', code: 'MSU', logo: '⭐' }
        ]
    },
    {
        id: 'stage-3',
        title: 'University Rivals',
        subtitle: 'School Pride',
        date: 'Month 3',
        format: 'Inter-School Qualifier',
        eligibility: 'University Representative Teams',
        prize: 'Diamonds',
        desc: 'Battle for campus supremacy. Only officially endorsed university teams may enter.',
        progression: '4 Winners (1 per Region) advance to Group Stage',
        brackets: ['Luzon A', 'Luzon B', 'Visayas', 'Mindanao'],
        winners: [
            { region: 'Luzon A', team: 'Ateneo Blue Eagles', code: 'ADMU', logo: '🦅' },
            { region: 'Luzon B', team: 'DLSU Archers', code: 'DLSU', logo: '🏹' },
            { region: 'Visayas', team: 'USC Warriors', code: 'USC', logo: '⚔️' },
            { region: 'Mindanao', team: 'MSU Titans', code: 'MSU', logo: '⚡' }
        ]
    },
    {
        id: 'stage-4',
        title: 'Wildcards & BOTG',
        subtitle: 'Last Stand',
        date: 'Month 3',
        format: 'Invitational / Qualifier',
        eligibility: 'Runner-ups & Invited Teams',
        prize: 'Diamonds',
        desc: 'The Battle of the Greats. The final 4 slots are filled by the best of the rest.',
        progression: '4 Winners (1 per Region) advance to Group Stage',
        brackets: ['Luzon A', 'Luzon B', 'Visayas', 'Mindanao']
    },
    {
        id: 'stage-5',
        title: 'Group Stage',
        subtitle: 'The Top 16',
        date: 'Month 4',
        format: 'GSL / Round Robin',
        eligibility: '16 Qualified Teams',
        prize: 'Diamonds & Finals Slot',
        desc: 'The 16 strongest teams are divided into 4 Groups based on their region of origin.',
        progression: 'Top 2 per Group advance to Championships',
        brackets: ['Group A (Luzon A)', 'Group B (Luzon B)', 'Group C (Visayas)', 'Group D (Mindanao)']
    },
    {
        id: 'stage-6',
        title: 'Championships',
        subtitle: 'Grand Finals',
        date: 'Month 5',
        format: 'Single Elimination',
        eligibility: 'Top 8 Teams',
        prize: '₱500,000 + MDL Slot',
        desc: 'The ultimate showdown. 8 Teams battle on the main stage for the title of National Champion.',
        progression: 'Champion crowned as Kings of Collegiate MLBB',
        brackets: ['Quarterfinals', 'Semifinals', 'Grand Finals']
    }
];

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

// --- CALENDAR DATA (Jan - July 2026) ---
const CALENDAR_MONTHS = [
    { id: 0, name: 'January', days: 31, startDay: 4, stages: [{ name: 'Community Rivals Ph1', start: 10, end: 25, color: 'bg-gray-600', textColor: 'text-gray-300' }] },
    { id: 1, name: 'February', days: 28, startDay: 0, stages: [{ name: 'Community Rivals Ph2', start: 5, end: 20, color: 'bg-gray-600', textColor: 'text-gray-300' }] },
    { id: 2, name: 'March', days: 31, startDay: 0, stages: [{ name: 'University Rivals', start: 1, end: 15, color: 'bg-indigo-600', textColor: 'text-indigo-200' }, { name: 'Wildcards', start: 20, end: 31, color: 'bg-indigo-900', textColor: 'text-indigo-300' }] },
    { id: 3, name: 'April', days: 30, startDay: 3, stages: [{ name: 'Group Stage Draw', start: 5, end: 5, color: 'bg-blue-600', textColor: 'text-white' }, { name: 'Media Day', start: 12, end: 12, color: 'bg-blue-500', textColor: 'text-white' }] },
    { id: 4, name: 'May', days: 31, startDay: 5, stages: [{ name: 'Group Stage: Wk 1', start: 2, end: 3, color: 'bg-blue-600', textColor: 'text-blue-100' }, { name: 'Group Stage: Wk 2', start: 9, end: 10, color: 'bg-blue-600', textColor: 'text-blue-100' }, { name: 'Group Stage: Wk 3', start: 16, end: 17, color: 'bg-blue-600', textColor: 'text-blue-100' }, { name: 'Group Stage: Wk 4', start: 23, end: 24, color: 'bg-blue-600', textColor: 'text-blue-100' }] },
    { id: 5, name: 'June', days: 30, startDay: 1, stages: [{ name: 'Playoffs', start: 15, end: 20, color: 'bg-purple-600', textColor: 'text-purple-100' }] },
    { id: 6, name: 'July', days: 31, startDay: 3, stages: [{ name: 'GRAND FINALS', start: 24, end: 26, color: 'bg-msl-gold', textColor: 'text-black font-black' }] },
];

const CALENDAR_MATCHES: Record<string, any[]> = {
    '4-2': [{ team1: 'UST', team2: 'DLSU', time: '1:00 PM' }, { team1: 'ADMU', team2: 'UP', time: '3:30 PM' }],
    '4-3': [{ team1: 'FEU', team2: 'UE', time: '1:00 PM' }, { team1: 'NU', team2: 'AdU', time: '3:30 PM' }],
    '6-26': [{ team1: 'TBD', team2: 'TBD', time: '5:00 PM', label: 'Grand Finals' }]
};

const STANDINGS = [
    { rank: 1, team: 'Teletigers', code: 'UST', w: 3, l: 0, pts: 9 },
    { rank: 2, team: 'Viridis Arcus', code: 'DLSU', w: 2, l: 1, pts: 6 },
    { rank: 3, team: 'LG Esports', code: 'ADMU', w: 1, l: 2, pts: 3 },
    { rank: 4, team: 'Maroons', code: 'UP', w: 0, l: 3, pts: 0 },
];

// --- TEAM DATA ---
const TEAMS_DATA = [
    { id: 'ust', name: 'UST Teletigers', code: 'UST', logo: '🐯', color: 'from-yellow-400 to-black', isFinalist: true, stats: { wins: 12, losses: 2, winRate: '86%', heroes: ['Fanny', 'Ling', 'Chou'], kda: '4.5' } },
    { id: 'dlsu', name: 'DLSU Viridis Arcus', code: 'DLSU', logo: '🏹', color: 'from-green-600 to-black', isFinalist: true, stats: { wins: 11, losses: 3, winRate: '79%', heroes: ['Gusion', 'Franco', 'Beatrix'], kda: '4.2' } },
    { id: 'admu', name: 'ADMU LG Esports', code: 'ADMU', logo: '🦅', color: 'from-blue-600 to-black', isFinalist: true, stats: { wins: 9, losses: 5, winRate: '64%', heroes: ['Lunox', 'Ruby', 'Pharsa'], kda: '3.8' } },
    { id: 'up', name: 'UP Fighting Maroons', code: 'UP', logo: '✊', color: 'from-red-700 to-black', isFinalist: true, stats: { wins: 8, losses: 6, winRate: '57%', heroes: ['Benedetta', 'Lapu-Lapu', 'Yu Zhong'], kda: '3.5' } },
    { id: 'feu', name: 'FEU Tams FX', code: 'FEU', logo: '🐃', color: 'from-yellow-600 to-green-800', isFinalist: true, stats: { wins: 8, losses: 6, winRate: '57%', heroes: ['Faramis', 'Gloo', 'Karrie'], kda: '3.4' } },
    { id: 'nu', name: 'NU Bulldogs', code: 'NU', logo: 'bulldog', color: 'from-blue-800 to-yellow-500', isFinalist: true, stats: { wins: 7, losses: 7, winRate: '50%', heroes: ['Akai', 'Yve', 'Claude'], kda: '3.1' } },
    { id: 'adu', name: 'AdU Falcons', code: 'AdU', logo: 'falcon', color: 'from-blue-900 to-white', isFinalist: true, stats: { wins: 6, losses: 8, winRate: '43%', heroes: ['Hayabusa', 'Kaja', 'Harith'], kda: '3.0' } },
    { id: 'ue', name: 'UE Zenith', code: 'UE', logo: 'warrior', color: 'from-red-600 to-white', isFinalist: true, stats: { wins: 5, losses: 9, winRate: '36%', heroes: ['Fredrinn', 'Pharsa', 'Brody'], kda: '2.8' } },
    // Non-finalists (for reference logic, but won't be displayed)
    { id: 'sbu', name: 'SBU Red Lions', code: 'SBU', logo: 'lion', color: 'from-red-600 to-black', isFinalist: false, stats: { wins: 4, losses: 10, winRate: '29%', heroes: [], kda: '2.5' } },
];

const HERO_STATS = [
    { rank: 1, hero: 'Yi Sun-shin', matches: 93, wins: 41, losses: 52, winRate: '44.09%', pickRate: '52.84%', blue: { matches: 45, w: 23, l: 22, wr: '51.11%' }, red: { matches: 48, w: 18, l: 30, wr: '37.50%' }, bans: 46, banRate: '26.14%' },
    { rank: 2, hero: 'Gatotkaca', matches: 90, wins: 45, losses: 45, winRate: '50.00%', pickRate: '51.14%', blue: { matches: 42, w: 22, l: 20, wr: '52.38%' }, red: { matches: 48, w: 23, l: 25, wr: '47.92%' }, bans: 27, banRate: '15.34%' },
    { rank: 3, hero: 'Lancelot', matches: 84, wins: 49, losses: 35, winRate: '58.33%', pickRate: '47.73%', blue: { matches: 53, w: 31, l: 22, wr: '58.49%' }, red: { matches: 31, w: 18, l: 13, wr: '58.06%' }, bans: 79, banRate: '44.89%' },
    { rank: 4, hero: 'Lapu-Lapu', matches: 84, wins: 44, losses: 40, winRate: '52.38%', pickRate: '47.73%', blue: { matches: 40, w: 24, l: 16, wr: '60.00%' }, red: { matches: 44, w: 20, l: 24, wr: '45.45%' }, bans: 37, banRate: '21.02%' },
    { rank: 5, hero: 'Harith', matches: 76, wins: 42, losses: 34, winRate: '55.26%', pickRate: '43.18%', blue: { matches: 32, w: 18, l: 14, wr: '56.25%' }, red: { matches: 44, w: 24, l: 20, wr: '54.55%' }, bans: 75, banRate: '42.61%' },
    { rank: 6, hero: 'Kimmy', matches: 70, wins: 35, losses: 35, winRate: '50.00%', pickRate: '39.77%', blue: { matches: 36, w: 19, l: 17, wr: '52.78%' }, red: { matches: 34, w: 16, l: 18, wr: '47.06%' }, bans: 36, banRate: '20.45%' },
    { rank: 7, hero: 'Granger', matches: 69, wins: 30, losses: 39, winRate: '43.48%', pickRate: '39.20%', blue: { matches: 41, w: 20, l: 21, wr: '48.78%' }, red: { matches: 28, w: 10, l: 18, wr: '35.71%' }, bans: 41, banRate: '23.30%' },
    { rank: 8, hero: 'Zhuxin', matches: 61, wins: 31, losses: 30, winRate: '50.82%', pickRate: '34.66%', blue: { matches: 31, w: 17, l: 14, wr: '54.84%' }, red: { matches: 30, w: 14, l: 16, wr: '46.67%' }, bans: 107, banRate: '60.80%' },
    { rank: 9, hero: 'Pharsa', matches: 57, wins: 36, losses: 21, winRate: '63.16%', pickRate: '32.39%', blue: { matches: 31, w: 23, l: 8, wr: '74.19%' }, red: { matches: 26, w: 13, l: 13, wr: '50.00%' }, bans: 44, banRate: '25.00%' },
    { rank: 10, hero: 'Arlott', matches: 56, wins: 27, losses: 29, winRate: '48.21%', pickRate: '31.82%', blue: { matches: 33, w: 17, l: 16, wr: '51.52%' }, red: { matches: 23, w: 10, l: 13, wr: '43.48%' }, bans: 67, banRate: '38.07%' },
];

const PLAYER_STATS = [
    { id: 1, name: 'Hatsune', teamId: 'ust', role: 'Gold Laner', kda: 6.4, gold: 850, dmg: 4500, heroes: ['Claude', 'Wanwan', 'Beatrix'] },
    { id: 2, name: 'Sora', teamId: 'dlsu', role: 'Jungler', kda: 5.8, gold: 780, dmg: 4100, heroes: ['Fanny', 'Ling', 'Hayabusa'] },
    { id: 3, name: 'Yuki', teamId: 'admu', role: 'Mid Laner', kda: 5.2, gold: 690, dmg: 5200, heroes: ['Pharsa', 'Yve', 'Valentina'] },
    { id: 4, name: 'Riku', teamId: 'up', role: 'Roamer', kda: 4.9, gold: 450, dmg: 1200, heroes: ['Khufra', 'Atlas', 'Chou'] },
    { id: 5, name: 'Kaito', teamId: 'feu', role: 'Exp Laner', kda: 4.1, gold: 620, dmg: 3800, heroes: ['Lapu-Lapu', 'Yu Zhong', 'Arlott'] },
    { id: 6, name: 'Ren', teamId: 'nu', role: 'Jungler', kda: 3.9, gold: 750, dmg: 3900, heroes: ['Akai', 'Fredrinn', 'Baxia'] },
    { id: 7, name: 'Haru', teamId: 'adu', role: 'Gold Laner', kda: 3.5, gold: 800, dmg: 4200, heroes: ['Brody', 'Clint', 'Lesley'] },
    { id: 8, name: 'Makoto', teamId: 'ue', role: 'Mid Laner', kda: 3.2, gold: 670, dmg: 4800, heroes: ['Lylia', 'Cecilion', 'Xavier'] },
];

const MSLCollegiateCup: React.FC<MSLCollegiateCupProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'stats' | 'vs' | 'bracket' | 'teams' | 'schedule'>('overview');
    const [activeInfoSection, setActiveInfoSection] = useState<'format' | 'schedule' | 'prizing' | 'rules'>('format');
    const [statsTab, setStatsTab] = useState<'overall' | 'teams' | 'players'>('overall');
    // Stats Hub Filters
    const [overallSubTab, setOverallSubTab] = useState<'picks' | 'blue' | 'red' | 'bans'>('picks');
    const [statsTeamFilter, setStatsTeamFilter] = useState<string>('all');
    const [statsPlayerTeamFilter, setStatsPlayerTeamFilter] = useState<string>('all');
    const [statsPlayerFilter, setStatsPlayerFilter] = useState<string>('all');

    const [vsMode, setVsMode] = useState<'team' | 'player'>('team');
    const [vsSelection, setVsSelection] = useState<{ left: string | null, right: string | null }>({ left: null, right: null });
    const [selectedStage, setSelectedStage] = useState(TOURNAMENT_STAGES[0]);
    const [activeMonth, setActiveMonth] = useState(0);
    const [selectedDate, setSelectedDate] = useState<{ month: number, day: number } | null>(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-msl-black text-white font-sans selection:bg-msl-gold selection:text-black">

            {/* --- HERO IMAGE: CHAMPIONS SHOWCASE --- */}
            {/* --- HERO IMAGE: CHAMPIONS SHOWCASE (The Past) --- */}
            <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b border-white/10 group">
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
                    alt="Season 2 Champions"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700"></div>

                {/* Hall of Fame Label */}
                <div className="absolute bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 py-6">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-msl-gold/10 rounded-lg border border-msl-gold/20">
                                <Trophy size={20} className="text-msl-gold" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Reigning Champions (Season 2)</div>
                                <div className="text-xl font-black text-white uppercase tracking-tight">UST Teletigers</div>
                            </div>
                        </div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden md:block">Defending the Throne</div>
                    </div>
                </div>
            </section>

            {/* --- TOURNAMENT TITLE & REGISTRATION (The Future) --- */}
            <section className="relative z-10 px-4 py-24 md:py-32">
                <div className="max-w-7xl mx-auto text-center">

                    {/* Season Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msl-gold/10 border border-msl-gold/30 text-msl-gold text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        Season 3 (2026)
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffeebb] via-[#eab308] to-[#a16207] leading-[0.9] mb-6 tracking-tighter drop-shadow-2xl animate-fade-in-up delay-100 uppercase whitespace-nowrap">
                        MSL Collegiate Cup
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200 font-medium">
                        The Official Collegiate League of MLBB in the Philippines. <br />
                        <span className="text-msl-gold">1000+ Teams. One Champion.</span>
                    </p>

                    <div className="flex flex-col items-center gap-6 animate-fade-in-up delay-300">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-4 bg-msl-gold hover:bg-yellow-400 text-black rounded-xl font-black text-xl uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] hover:-translate-y-1">
                                Register Now
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-xl uppercase tracking-wider transition-all backdrop-blur-md flex items-center justify-center gap-2">
                                <Info size={20} /> Learn More
                            </button>
                        </div>

                        {/* Tertiary Action: Watch Trailer */}
                        <button className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-msl-gold group-hover:text-black group-hover:border-msl-gold transition-all duration-300">
                                <Play size={14} className="ml-0.5 fill-current" />
                            </div>
                            <span>Watch Trailer</span>
                        </button>
                    </div>

                    {/* Quick Stats (Redesigned - Frameless/HUD Style) */}
                    <div className="mt-20 max-w-6xl mx-auto animate-fade-in-up delay-500 relative">
                        {/* Glow Effect behind stats */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-msl-gold/5 via-blue-500/5 to-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 relative z-10">

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

                    {/* MAIN NAVIGATION TABS (Moved here for better UX) */}
                    <nav className="flex justify-between w-full md:w-auto md:gap-12 ml-auto md:ml-0 md:mr-auto">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'stats', label: 'Stats Hub' },
                            { id: 'vs', label: 'VS Mode' },
                            { id: 'teams', label: 'Teams' },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all
                                    ${activeTab === tab.id ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>

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

            {/* --- STATS HUB (DEEP DIVE) --- */}
            {activeTab === 'stats' && (
                <section className="py-24 px-4 bg-msl-black min-h-screen">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Tournament Data</h2>
                            <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10">
                                {['overall', 'teams', 'players'].map(t => (
                                    <button
                                        key={t}
                                        onClick={() => setStatsTab(t as any)}
                                        className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all ${statsTab === t ? 'bg-white text-black shadow-lg shadow-white/10' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* OVERALL STATS */}
                        {statsTab === 'overall' && (
                            <div className="animate-fade-in space-y-6">
                                {/* Sub Toggles */}
                                <div className="flex justify-center gap-4 mb-8">
                                    {['picks', 'blue', 'red', 'bans'].map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setOverallSubTab(t as any)}
                                            className={`text-xs font-bold uppercase tracking-widest py-1 border-b-2 transition-all ${overallSubTab === t ? 'text-msl-gold border-msl-gold' : 'text-gray-600 border-transparent hover:text-white'}`}
                                        >
                                            {t === 'blue' ? 'Blue Side' : t === 'red' ? 'Red Side' : t}
                                        </button>
                                    ))}
                                </div>

                                {/* Deep Stats Table */}
                                <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden overflow-x-auto">
                                    <table className="w-full text-left text-sm whitespace-nowrap">
                                        <thead>
                                            <tr className="bg-white/[0.03] text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                                                <th className="p-4 pl-6">#</th>
                                                <th className="p-4">Hero</th>
                                                <th className="p-4 text-center">Matches</th>
                                                <th className="p-4 text-center">Win Rate</th>
                                                <th className="p-4 text-center">Pick Rate</th>
                                                <th className="p-4 text-center border-l border-white/5 text-blue-400">Blue WR</th>
                                                <th className="p-4 text-center border-r border-white/5 text-red-400">Red WR</th>
                                                <th className="p-4 text-center">Ban Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {HERO_STATS.map((stat, idx) => (
                                                <tr key={stat.hero} className="hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-4 pl-6 font-mono text-gray-600">{(idx + 1).toString().padStart(2, '0')}</td>
                                                    <td className="p-4 font-bold text-white text-base">{stat.hero}</td>
                                                    <td className="p-4 text-center font-mono text-white">{stat.matches}</td>
                                                    <td className="p-4 text-center font-black text-msl-gold">{stat.winRate}</td>
                                                    <td className="p-4 text-center font-mono text-gray-400">{stat.pickRate}</td>
                                                    <td className="p-4 text-center border-l border-white/5 font-mono text-blue-400">{stat.blue.wr}</td>
                                                    <td className="p-4 text-center border-r border-white/5 font-mono text-red-400">{stat.red.wr}</td>
                                                    <td className="p-4 text-center font-mono text-gray-500">{stat.banRate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* TEAM STATS */}
                        {statsTab === 'teams' && (
                            <div className="animate-fade-in space-y-8">
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <button
                                        onClick={() => setStatsTeamFilter('all')}
                                        className={`px-4 py-2 rounded-lg border text-xs font-bold uppercase transition-all ${statsTeamFilter === 'all' ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'}`}
                                    >
                                        All Teams
                                    </button>
                                    {TEAMS_DATA.filter(t => t.isFinalist).map(team => (
                                        <button
                                            key={team.id}
                                            onClick={() => setStatsTeamFilter(team.id)}
                                            className={`px-4 py-2 rounded-lg border text-xs font-bold uppercase transition-all flex items-center gap-2 ${statsTeamFilter === team.id ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'}`}
                                        >
                                            <span>{team.logo}</span> {team.code}
                                        </button>
                                    ))}
                                </div>

                                {statsTeamFilter === 'all' ? (
                                    <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-gray-500 bg-white/[0.02]">
                                                    <th className="p-4 font-bold pl-8">Team</th>
                                                    <th className="p-4 font-bold text-center">Win Rate</th>
                                                    <th className="p-4 font-bold text-center">KDA</th>
                                                    <th className="p-4 font-bold text-center">Wins</th>
                                                    <th className="p-4 font-bold text-center">Losses</th>
                                                    <th className="p-4 font-bold text-left pl-8">Signature Picks</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {TEAMS_DATA.slice(0, 8).sort((a, b) => parseFloat(b.stats.winRate) - parseFloat(a.stats.winRate)).map((team) => (
                                                    <tr key={team.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                                                        <td className="p-4 pl-8 flex items-center gap-3">
                                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center text-lg shadow-lg`}>
                                                                {team.logo}
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-white text-sm">{team.name}</div>
                                                                <div className="text-[9px] font-bold text-gray-500">{team.code}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 text-center font-black text-msl-gold text-lg">{team.stats.winRate}</td>
                                                        <td className="p-4 text-center font-mono text-gray-400">{team.stats.kda}</td>
                                                        <td className="p-4 text-center font-bold text-green-400">{team.stats.wins}</td>
                                                        <td className="p-4 text-center font-bold text-red-400">{team.stats.losses}</td>
                                                        <td className="p-4 pl-8">
                                                            <div className="flex gap-1.5">
                                                                {team.stats.heroes.map(h => (
                                                                    <span key={h} className="px-2 py-0.5 bg-white/5 rounded text-[9px] uppercase font-bold text-gray-400 border border-white/5">{h}</span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Team Specific Dashboard Mockup */}
                                        <div className="md:col-span-1 bg-[#121212] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                                            {(() => {
                                                const t = TEAMS_DATA.find(x => x.id === statsTeamFilter);
                                                return t ? (
                                                    <>
                                                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-6xl shadow-2xl mb-6`}>
                                                            {t.logo}
                                                        </div>
                                                        <h3 className="text-3xl font-black text-white uppercase leading-none">{t.name}</h3>
                                                        <div className="text-xl font-bold text-gray-500 mb-8">{t.code}</div>
                                                        <div className="grid grid-cols-2 gap-4 w-full">
                                                            <div className="p-4 bg-white/5 rounded-xl">
                                                                <div className="text-2xl font-black text-green-400">{t.stats.wins}</div>
                                                                <div className="text-[9px] uppercase font-bold text-gray-500">Wins</div>
                                                            </div>
                                                            <div className="p-4 bg-white/5 rounded-xl">
                                                                <div className="text-2xl font-black text-red-500">{t.stats.losses}</div>
                                                                <div className="text-[9px] uppercase font-bold text-gray-500">Losses</div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : null;
                                            })()}
                                        </div>
                                        <div className="md:col-span-2 bg-[#121212] border border-white/10 rounded-3xl p-8">
                                            <h4 className="text-lg font-bold text-white uppercase mb-6 flex items-center gap-2"><Trophy size={18} className="text-msl-gold" /> Performance Metrics</h4>
                                            <div className="space-y-4">
                                                {/* Mock Metrics */}
                                                <div>
                                                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500 mb-2"><span>Team Fight Participation</span> <span className="text-white">78%</span></div>
                                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[78%] bg-blue-500"></div></div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500 mb-2"><span>Major Objective Control</span> <span className="text-white">65%</span></div>
                                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[65%] bg-purple-500"></div></div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500 mb-2"><span>First Blood Rate</span> <span className="text-white">45%</span></div>
                                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[45%] bg-red-500"></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* PLAYER STATS */}
                        {statsTab === 'players' && (
                            <div className="animate-fade-in space-y-8">
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <select
                                        className="bg-[#121212] border border-white/10 rounded-lg px-4 py-2 text-sm font-bold text-white focus:outline-none focus:border-msl-gold uppercase"
                                        value={statsPlayerTeamFilter}
                                        onChange={(e) => setStatsPlayerTeamFilter(e.target.value)}
                                    >
                                        <option value="all">All Teams</option>
                                        {TEAMS_DATA.filter(t => t.isFinalist).map(t => <option key={t.id} value={t.id}>{t.code}</option>)}
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {(statsPlayerTeamFilter === 'all' ? PLAYER_STATS : PLAYER_STATS.filter(p => p.teamId === statsPlayerTeamFilter)).map(player => (
                                        <div key={player.id} className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-msl-gold/50 transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">👤</div>
                                                <div>
                                                    <div className="font-black text-white text-lg leading-none group-hover:text-msl-gold transition-colors">{player.name}</div>
                                                    <div className="text-[10px] uppercase font-bold text-gray-500">{player.role}</div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 mb-4">
                                                <div className="text-center p-2 bg-white/5 rounded-lg">
                                                    <div className="text-xs font-black text-white">{player.kda}</div>
                                                    <div className="text-[8px] uppercase font-bold text-gray-600">KDA</div>
                                                </div>
                                                <div className="text-center p-2 bg-white/5 rounded-lg">
                                                    <div className="text-xs font-black text-msl-gold">{player.gold}</div>
                                                    <div className="text-[8px] uppercase font-bold text-gray-600">GPM</div>
                                                </div>
                                                <div className="text-center p-2 bg-white/5 rounded-lg">
                                                    <div className="text-xs font-black text-red-500">{player.dmg}</div>
                                                    <div className="text-[8px] uppercase font-bold text-gray-600">DPM</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-1 justify-center">
                                                {player.heroes.map(h => (
                                                    <span key={h} className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded text-gray-500">{h}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div >
                </section >
            )}

            {/* --- VS MODE --- */}
            {
                activeTab === 'vs' && (
                    <section className="py-24 px-4 bg-msl-black min-h-screen">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-black text-white mb-4 uppercase">VS Mode</h2>
                                <p className="text-gray-400">Compare Teams, Players, and Heroes head-to-head.</p>

                                <div className="inline-flex bg-white/5 p-1 rounded-xl mt-8">
                                    <button onClick={() => setVsMode('team')} className={`px-6 py-2 rounded-lg text-sm font-bold uppercase transition-all ${vsMode === 'team' ? 'bg-msl-gold text-black' : 'text-gray-400 hover:text-white'}`}>Teams</button>
                                    <button onClick={() => setVsMode('player')} className={`px-6 py-2 rounded-lg text-sm font-bold uppercase transition-all ${vsMode === 'player' ? 'bg-msl-gold text-black' : 'text-gray-400 hover:text-white'}`}>Players</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                {/* LEFT SELECTION */}
                                <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 min-h-[400px]">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Select Team A</h3>
                                    <div className="space-y-2">
                                        {TEAMS_DATA.slice(0, 4).map(team => (
                                            <button
                                                key={team.id}
                                                onClick={() => setVsSelection(prev => ({ ...prev, left: team.id }))}
                                                className={`w-full p-4 rounded-xl border flex items-center gap-3 transition-all ${vsSelection.left === team.id ? 'bg-white/10 border-msl-gold text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:bg-white/5'}`}
                                            >
                                                <span className="text-xl">{team.logo}</span>
                                                <span className="font-bold">{team.code}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* CENTER STATS COMPARISON */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-msl-gold flex items-center justify-center font-black text-black text-xl shadow-[0_0_30px_rgba(234,179,8,0.5)] z-10">VS</div>
                                    {vsSelection.left && vsSelection.right && (
                                        <div className="w-full space-y-4 animate-fade-in-up">
                                            <div className="bg-[#121212] border border-white/10 p-4 rounded-xl text-center">
                                                <div className="text-[10px] uppercase font-bold text-gray-500">Win Rate</div>
                                                <div className="flex justify-between items-end mt-2 h-16 gap-4">
                                                    <div className="w-1/2 bg-gray-800 rounded-t-lg relative group">
                                                        <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-1000" style={{ height: TEAMS_DATA.find(t => t.id === vsSelection.left)?.stats.winRate }}></div>
                                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-400">{TEAMS_DATA.find(t => t.id === vsSelection.left)?.stats.winRate}</span>
                                                    </div>
                                                    <div className="w-1/2 bg-gray-800 rounded-t-lg relative">
                                                        <div className="absolute bottom-0 w-full bg-red-500 rounded-t-lg transition-all duration-1000" style={{ height: TEAMS_DATA.find(t => t.id === vsSelection.right)?.stats.winRate }}></div>
                                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-400">{TEAMS_DATA.find(t => t.id === vsSelection.right)?.stats.winRate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT SELECTION */}
                                <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 min-h-[400px]">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Select Team B</h3>
                                    <div className="space-y-2">
                                        {TEAMS_DATA.slice(4, 8).map(team => (
                                            <button
                                                key={team.id}
                                                onClick={() => setVsSelection(prev => ({ ...prev, right: team.id }))}
                                                className={`w-full p-4 rounded-xl border flex items-center gap-3 transition-all ${vsSelection.right === team.id ? 'bg-white/10 border-red-500 text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:bg-white/5'}`}
                                            >
                                                <span className="text-xl">{team.logo}</span>
                                                <span className="font-bold">{team.code}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {
                activeTab === 'overview' && (
                    <div className="animate-fade-in">
                        {/* --- THE TOURNAMENT BRAIN (Robust Toggles) --- */}
                        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-msl-black relative overflow-hidden transition-all duration-1000"
                            style={{
                                boxShadow: selectedStage.id.includes('stage-6')
                                    ? 'inset 0 0 150px rgba(234, 179, 8, 0.15)' // Gold Inset
                                    : selectedStage.id.includes('stage-5')
                                        ? 'inset 0 0 100px rgba(168, 85, 247, 0.1)' // Purple Inset
                                        : 'none'
                            }}
                        >
                            {/* Global Ambient Effects (The "Vibe" Shift) */}
                            <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${selectedStage.id.includes('stage-6') ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-msl-gold/10 blur-[150px] rounded-full mix-blend-screen"></div>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay animate-pulse"></div>
                            </div>

                            <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${selectedStage.id.includes('stage-5') ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen"></div>
                                <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
                            </div>

                            <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${!selectedStage.id.includes('stage-5') && !selectedStage.id.includes('stage-6') ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 blur-[120px] rounded-full mix-blend-screen"></div>
                            </div>

                            <div className="max-w-7xl mx-auto relative z-10">

                                {/* Section Header */}
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight relative inline-block">
                                        Tournament Info
                                        {/* Header Accent Line that changes color */}
                                        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full transition-colors duration-500
                                            ${selectedStage.id.includes('stage-6') ? 'bg-msl-gold shadow-[0_0_10px_#eab308]'
                                                : selectedStage.id.includes('stage-5') ? 'bg-purple-500 shadow-[0_0_10px_#a855f7]'
                                                    : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'}
                                        `}></div>
                                    </h2>
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

                                    {/* FORMAT VIEW (ENHANCED VISUAL FUNNEL) */}
                                    {activeInfoSection === 'format' && (
                                        <div className="animate-fade-in flex flex-col lg:flex-row gap-8">

                                            {/* THE FUNNEL (Visual Selection) */}
                                            <div className="lg:w-1/2 flex flex-col items-center py-8">

                                                {/* Layer 1: Qualifiers (THE FORGE - Blue/Tech) */}
                                                <div className="w-full grid grid-cols-2 gap-2">
                                                    {TOURNAMENT_STAGES.slice(0, 4).map((stage) => (
                                                        <button
                                                            key={stage.id}
                                                            onClick={() => setSelectedStage(stage)}
                                                            className={`
                                                    bg-[#0a0f1c] border rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all relative overflow-hidden group h-20
                                                    ${selectedStage.id === stage.id ? 'border-cyan-400 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'border-blue-900/30 text-blue-400/60 hover:border-cyan-500/50 hover:text-cyan-200'}
                                                `}
                                                        >
                                                            {selectedStage.id === stage.id && (
                                                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
                                                            )}
                                                            <div className="relative z-10">
                                                                <div className="font-black text-xs md:text-sm leading-tight uppercase font-mono">{stage.title}</div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Connector: Blue to Purple */}
                                                <div className="h-6 w-1 bg-gradient-to-b from-cyan-900 to-purple-900 shadow-[0_0_10px_rgba(59,130,246,0.4)] relative z-0"></div>

                                                {/* Layer 2: Group Stage (THE MATRIX - Purple/Neon) */}
                                                <div className="w-11/12 md:w-5/6 relative group z-10">
                                                    {/* Purple Glow */}
                                                    <div className="absolute -inset-4 bg-purple-600/10 blur-2xl rounded-full"></div>

                                                    {TOURNAMENT_STAGES.slice(4, 5).map((stage) => (
                                                        <button
                                                            key={stage.id}
                                                            onClick={() => setSelectedStage(stage)}
                                                            className={`w-full p-[1px] rounded-xl relative overflow-hidden transition-all group-hover:scale-[1.01]
                                                    ${selectedStage.id === stage.id ? 'scale-[1.02]' : ''}
                                                `}
                                                        >
                                                            {/* Thinner Border Gradient */}
                                                            <div className={`absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 ${selectedStage.id === stage.id ? 'opacity-100' : 'opacity-40'}`}></div>

                                                            <div className="bg-[#0f0518] relative rounded-[11px] p-4 flex flex-col items-center justify-center h-20 overflow-hidden">
                                                                {/* Grid Background */}
                                                                <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-[#0f0518]"></div>

                                                                <div className="relative z-10 text-center">
                                                                    <div className={`font-black text-xl md:text-2xl uppercase tracking-tighter ${selectedStage.id === stage.id ? 'text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'text-purple-400/60'}`}>{stage.title}</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Connector: Purple to Gold */}
                                                <div className="h-6 w-1.5 bg-gradient-to-b from-purple-600 to-msl-gold shadow-[0_0_15px_rgba(147,51,234,0.6)] relative z-0"></div>

                                                {/* Layer 3: Championship (THE THRONE - Prestige Gold) */}
                                                <div className="w-4/5 md:w-3/4 relative group z-20">
                                                    <div className="absolute -inset-10 bg-msl-gold/10 blur-3xl rounded-full"></div>

                                                    {TOURNAMENT_STAGES.slice(5, 6).map((stage) => (
                                                        <button
                                                            key={stage.id}
                                                            onClick={() => setSelectedStage(stage)}
                                                            className={`w-full p-0.5 rounded-2xl relative overflow-hidden transition-all
                                                    ${selectedStage.id === stage.id ? 'scale-[1.05] shadow-[0_0_50px_rgba(234,179,8,0.3)]' : 'hover:scale-105'}
                                                `}
                                                        >
                                                            {/* Gold Border Gradient */}
                                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#685214] via-[#FDE047] to-[#685214] animate-shine"></div>

                                                            <div className="bg-gradient-to-b from-[#1a1200] to-black rounded-[14px] px-6 h-24 flex flex-row items-center justify-center gap-4 relative overflow-hidden">

                                                                {/* Gold Dust Particles */}
                                                                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                                                                {/* Radial Burst */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-msl-gold/10 via-transparent to-transparent opacity-50"></div>

                                                                <Trophy size={28} className={`${selectedStage.id === stage.id ? 'text-msl-gold drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]' : 'text-yellow-800'}`} />

                                                                <div className={`font-black text-xl md:text-2xl uppercase tracking-widest leading-none ${selectedStage.id === stage.id ? 'text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-msl-gold to-yellow-700' : 'text-yellow-900'}`}>
                                                                    {stage.title}
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>

                                            </div>

                                            {/* DETAILS PANEL (Adaptive Theme) */}
                                            <div className="lg:w-1/2 flex items-center">
                                                <div className={`w-full border rounded-3xl p-8 relative overflow-hidden transition-all duration-500
                                        ${selectedStage.id.includes('stage-6')
                                                        ? 'bg-gradient-to-br from-[#1a1200] to-black border-msl-gold/30 shadow-[0_0_50px_rgba(234,179,8,0.15)] ring-1 ring-msl-gold/20'
                                                        : selectedStage.id.includes('stage-5')
                                                            ? 'bg-[#0f0518] border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20'
                                                            : 'bg-[#0a0f1c] border-cyan-800/30 shadow-[0_0_30px_rgba(34,211,238,0.1)]'
                                                    }
                                    `}>
                                                    {/* Dynamic Backgrounds & Grandeur Effects */}
                                                    {/* Championships: Gold Glow + Stars */}
                                                    {selectedStage.id.includes('stage-6') && (
                                                        <>
                                                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-msl-gold/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
                                                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
                                                        </>
                                                    )}

                                                    {/* Group Stage: Purple Glow + Cyber Grid */}
                                                    {selectedStage.id.includes('stage-5') && (
                                                        <>
                                                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
                                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                                                        </>
                                                    )}

                                                    {/* Qualifiers: Cyan Glow */}
                                                    {!selectedStage.id.includes('stage-5') && !selectedStage.id.includes('stage-6') && (
                                                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>
                                                    )}

                                                    <div className="relative z-10">
                                                        <div className="mb-8 pb-6 border-b border-white/5">
                                                            <div>
                                                                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${selectedStage.id.includes('stage-5') ? 'text-cyan-400' : 'text-gray-500'}`}>{selectedStage.date}</div>
                                                                <h3 className="text-2xl md:text-5xl font-black text-white uppercase leading-[0.9]">{selectedStage.title}</h3>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-8 mb-8">
                                                            <div>
                                                                <div className="text-[10px] uppercase font-bold text-gray-600 mb-1">Format</div>
                                                                <div className="text-white font-bold text-lg">{selectedStage.format}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] uppercase font-bold text-gray-600 mb-1">Prize</div>
                                                                <div className={`text-lg font-black ${selectedStage.id.includes('stage-6') ? 'text-msl-gold' : 'text-white'}`}>{selectedStage.prize}</div>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <div className="text-[10px] uppercase font-bold text-gray-600 mb-2">Description</div>
                                                                <p className="text-gray-300 text-base leading-relaxed">{selectedStage.desc}</p>
                                                            </div>

                                                            {/* Regional Winners Section */}
                                                            {selectedStage.winners ? (
                                                                <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/5">
                                                                    <div className="text-[10px] uppercase font-bold text-gray-500 mb-3 flex items-center gap-2">
                                                                        <Award size={12} className="text-msl-gold" /> Regional Winners
                                                                    </div>
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                        {selectedStage.winners.map((w: any) => (
                                                                            <div key={w.region} className="bg-black/20 rounded p-3 border border-white/5 flex items-center gap-3">
                                                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-lg shrink-0">{w.logo || '🏆'}</div>
                                                                                <div className="min-w-0 flex-1">
                                                                                    <div className="text-[10px] uppercase font-bold text-gray-500 mb-0.5">{w.region}</div>
                                                                                    <div className="text-sm font-bold text-white leading-tight truncate">{w.team}</div>
                                                                                    {w.code && <div className="text-[10px] uppercase font-bold text-msl-gold mt-1 bg-white/5 inline-block px-1.5 py-0.5 rounded border border-white/5">{w.code}</div>}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/5 border-dashed flex items-center justify-center">
                                                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Winners To Be Determined</div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className={`p-4 rounded-xl border flex items-center gap-4
                                                ${selectedStage.id.includes('stage-6') ? 'bg-msl-gold/10 border-msl-gold/30'
                                                                : selectedStage.id.includes('stage-5') ? 'bg-blue-900/20 border-blue-500/30'
                                                                    : 'bg-white/5 border-white/5'}
                                            `}>
                                                            <div className="shrink-0 p-2 bg-white/5 rounded-lg"><Target size={16} className="text-white" /></div>
                                                            <div>
                                                                <div className="text-[10px] uppercase font-bold text-gray-500 mb-0.5">Progression</div>
                                                                <div className={`font-bold text-sm ${selectedStage.id.includes('stage-6') ? 'text-msl-gold' : 'text-white'}`}>
                                                                    {selectedStage.progression}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* SCHEDULE VIEW (CALENDAR) */}
                                    {activeInfoSection === 'schedule' && (
                                        <div className="animate-fade-in">
                                            {/* Month Selector */}
                                            <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
                                                {CALENDAR_MONTHS.map((month) => (
                                                    <button
                                                        key={month.id}
                                                        onClick={() => { setActiveMonth(month.id); setSelectedDate(null); }}
                                                        className={`px-6 py-3 rounded-xl border whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all
                                                ${activeMonth === month.id
                                                                ? 'bg-white text-black border-white shadow-lg scale-105'
                                                                : 'bg-[#121212] border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/30'}
                                            `}
                                                    >
                                                        {month.name} <span className="opacity-40 ml-1">2026</span>
                                                    </button>
                                                ))}
                                            </div>


                                            <div className="grid lg:grid-cols-3 gap-8">
                                                {/* CALENDAR GRID */}
                                                <div className="lg:col-span-2">
                                                    <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 md:p-8">
                                                        {/* Days Header */}
                                                        <div className="grid grid-cols-7 mb-4">
                                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                                                <div key={d} className="text-center text-[10px] uppercase font-bold text-gray-600 tracking-widest">{d}</div>
                                                            ))}
                                                        </div>

                                                        {/* Days Grid */}
                                                        <div className="grid grid-cols-7 gap-2 md:gap-4">
                                                            {/* Empty Padding Days */}
                                                            {[...Array(CALENDAR_MONTHS[activeMonth].startDay)].map((_, i) => (
                                                                <div key={`empty-${i}`} className="aspect-square"></div>
                                                            ))}

                                                            {/* Actual Days */}
                                                            {[...Array(CALENDAR_MONTHS[activeMonth].days)].map((_, i) => {
                                                                const day = i + 1;
                                                                const currentMonth = CALENDAR_MONTHS[activeMonth];

                                                                // Check for events/stages covering this day
                                                                const activeStage = currentMonth.stages.find(s => day >= s.start && day <= s.end);
                                                                // Check for matches
                                                                const hasMatches = CALENDAR_MATCHES[`${activeMonth}-${day}`];

                                                                return (
                                                                    <button
                                                                        key={day}
                                                                        onClick={() => setSelectedDate({ month: activeMonth, day })}
                                                                        className={`aspect-square rounded-xl border relative group transition-all flex flex-col items-center justify-start pt-2
                                                                ${selectedDate?.day === day && selectedDate?.month === activeMonth
                                                                                ? 'bg-white/10 border-white text-white z-10 scale-110 shadow-xl'
                                                                                : hasMatches
                                                                                    ? 'bg-[#1a1a1a] border-white/20 text-gray-300 hover:border-white/50 hover:bg-[#252525]'
                                                                                    : 'bg-[#0a0a0a] border-white/5 text-gray-600 hover:border-white/10'}
                                                            `}
                                                                    >
                                                                        <div className="text-sm font-bold">{day}</div>

                                                                        {/* Stage Indicator Bar */}
                                                                        {activeStage && (
                                                                            <div className={`absolute bottom-2 left-1 right-1 h-1.5 rounded-full ${activeStage.color}`}></div>
                                                                        )}

                                                                        {/* Match Dot */}
                                                                        {hasMatches && !activeStage && (
                                                                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-pulse"></div>
                                                                        )}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* DAY DETAILS / LEGEND */}
                                                <div className="lg:col-span-1">
                                                    <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 h-full flex flex-col">

                                                        {selectedDate ? (
                                                            <div className="animate-fade-in">
                                                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                                    {CALENDAR_MONTHS[selectedDate.month].name} {selectedDate.day}, 2026
                                                                </div>
                                                                <h3 className="text-2xl font-black text-white uppercase mb-6">Events</h3>

                                                                {CALENDAR_MONTHS[selectedDate.month].stages.find(s => selectedDate.day >= s.start && selectedDate.day <= s.end) && (
                                                                    <div className={`p-4 rounded-xl mb-4 ${CALENDAR_MONTHS[selectedDate.month].stages.find(s => selectedDate.day >= s.start && selectedDate.day <= s.end)?.color}`}>
                                                                        <div className={`font-black uppercase text-sm ${CALENDAR_MONTHS[selectedDate.month].stages.find(s => selectedDate.day >= s.start && selectedDate.day <= s.end)?.textColor}`}>
                                                                            {CALENDAR_MONTHS[selectedDate.month].stages.find(s => selectedDate.day >= s.start && selectedDate.day <= s.end)?.name}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {CALENDAR_MATCHES[`${selectedDate.month}-${selectedDate.day}`] ? (
                                                                    <div className="space-y-3">
                                                                        {CALENDAR_MATCHES[`${selectedDate.month}-${selectedDate.day}`].map((match, idx) => (
                                                                            <div key={idx} className="bg-black/40 border border-white/10 p-3 rounded-lg">
                                                                                <div className="flex justify-between items-center mb-1">
                                                                                    <div className="text-xs font-bold text-gray-400">{match.time}</div>
                                                                                    {match.label && <div className="text-[9px] font-bold bg-msl-gold text-black px-1.5 py-0.5 rounded">{match.label}</div>}
                                                                                </div>
                                                                                <div className="font-bold text-white text-sm">
                                                                                    {match.team1} <span className="text-gray-600 px-1">vs</span> {match.team2}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    !CALENDAR_MONTHS[selectedDate.month].stages.find(s => selectedDate.day >= s.start && selectedDate.day <= s.end) && (
                                                                        <div className="text-gray-500 italic text-sm">No matches scheduled.</div>
                                                                    )
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div className="flex flex-col h-full justify-center text-center opacity-40">
                                                                <Calendar size={48} className="mx-auto mb-4 text-gray-600" />
                                                                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Select a date to view details</p>
                                                            </div>
                                                        )}

                                                        {/* Legend at bottom */}
                                                        <div className="mt-auto pt-8 border-t border-white/5">
                                                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3">Legend</div>
                                                            <div className="space-y-2">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-3 h-3 rounded-full bg-gray-600"></div><span className="text-xs text-gray-400">Qualifiers</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-3 h-3 rounded-full bg-blue-600"></div><span className="text-xs text-gray-400">Group Stage</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-3 h-3 rounded-full bg-msl-gold"></div><span className="text-xs text-gray-400">Championships</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                        <div className="animate-fade-in w-full h-[600px] bg-[#121212] rounded-2xl border border-white/10 overflow-hidden relative group flex flex-col">
                                            <iframe
                                                src="https://msl-philippines.notion.site/ebd/2a66a35bd22f80ca9183d186718ae814"
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                allowFullScreen
                                                className="w-full flex-1"
                                                title="Tournament Rules"
                                            />
                                            <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex justify-end">
                                                <a
                                                    href="https://msl-philippines.notion.site/ebd/2a66a35bd22f80ca9183d186718ae814"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 flex items-center gap-2 transition-all hover:scale-105"
                                                >
                                                    <ExternalLink size={14} /> Open in Notion
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </section>

                        {/* --- STANDINGS --- */}
                        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-6 text-center md:text-left">
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
                                                    <th className="p-3 md:p-6 font-bold w-12 md:w-16">#</th>
                                                    <th className="p-3 md:p-6 font-bold">Team</th>
                                                    <th className="p-3 md:p-6 font-bold text-center">W</th>
                                                    <th className="p-3 md:p-6 font-bold text-center">L</th>
                                                    <th className="p-3 md:p-6 font-bold text-center">Pts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {STANDINGS.map((row) => (
                                                    <tr key={row.code} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                                        <td className="p-3 md:p-6 font-bold text-gray-600 group-hover:text-white">{row.rank}</td>
                                                        <td className="p-3 md:p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                                                                    {row.code[0]}
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold text-white max-w-[120px] md:max-w-none truncate">{row.team}</div>
                                                                    <div className="text-[10px] font-bold text-gray-500 uppercase">{row.code}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 font-bold text-center text-green-400">{row.w}</td>
                                                        <td className="p-6 font-bold text-center text-red-400">{row.l}</td>
                                                        <td className="p-6 font-bold text-center text-white text-lg">{row.pts}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                )
            }



            {
                activeTab === 'teams' && (
                    <section className="py-24 bg-msl-black min-h-screen">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-black text-white mb-4 uppercase">The Challengers</h2>
                                <p className="text-gray-400">Representing the Top 8 Universities across the archipelago.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {TEAMS_DATA.filter(t => t.isFinalist).map((team) => (
                                    <div key={team.id} className="aspect-square bg-[#121212] border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 transition-all hover:-translate-y-1 hover:border-msl-gold/50 cursor-pointer group relative overflow-hidden">
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                        <div className="w-24 h-24 rounded-full bg-black border-2 border-white/10 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl shadow-xl z-10">
                                            {team.logo}
                                        </div>
                                        <div className="text-xl font-black text-white uppercase leading-none mb-1 z-10">{team.code}</div>
                                        <div className="text-[10px] font-bold text-gray-500 uppercase z-10">{team.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }

        </div >
    );
};

export default MSLCollegiateCup;
