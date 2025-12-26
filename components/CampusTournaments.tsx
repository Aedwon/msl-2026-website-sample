import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ExternalLink, ArrowRight, Filter, Swords, Trophy, Users, School } from 'lucide-react';

interface CampusTournamentsProps {
    onNavigate: (page: string) => void;
}

// --- MOCK DATA ---
const TOURNAMENTS = [
    {
        id: 1,
        school: "University of Santo Tomas",
        org: "Teletigers Esports",
        tournamentName: "Paskuhan Cup 2024",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 18, 5:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1565514020176-db7040449575?auto=format&fit=crop&q=80&w=800",
        prizePool: "5,000 Diamonds"
    },
    {
        id: 2,
        school: "De La Salle University",
        org: "Viridis Arcus",
        tournamentName: "Green Archers Showdown",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 12, 6:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        prizePool: "10,000 Diamonds"
    },
    {
        id: 3,
        school: "Univ. of San Carlos",
        org: "Warrior's Arena",
        tournamentName: "Cebu Collegiate League",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 20, 1:00 PM",
        region: "Visayas",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
        prizePool: "3,000 Diamonds"
    },
    {
        id: 4,
        school: "Jose Rizal University",
        org: "Campus MSL",
        tournamentName: "JRU Monthly Cup",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Jan 05, 3:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
        prizePool: "2,000 Diamonds"
    },
    {
        id: 5,
        school: "PUP Sta. Mesa",
        org: "PUP Esports",
        tournamentName: "Iskolar ng Bayan Cup",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 14, 7:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
        prizePool: "5,000 Diamonds"
    },
    {
        id: 6,
        school: "Ateneo de Davao",
        org: "Campus MSL",
        tournamentName: "Blue Knights Rift",
        status: "Completed",
        statusColor: "text-gray-400 bg-gray-500/10 border-gray-500/20",
        date: "Dec 14, 4:30 PM",
        region: "Mindanao",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        prizePool: "3,000 Diamonds"
    },
    {
        id: 7,
        school: "Far Eastern University",
        org: "Tams FX",
        tournamentName: "Tamaraw Brawl",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 15, 2:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1592280771800-bcf9de2312b4?auto=format&fit=crop&q=80&w=800",
        prizePool: "8,000 Diamonds"
    },
    {
        id: 8,
        school: "UP Diliman",
        org: "Oblation Esports",
        tournamentName: "Diliman Games",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Dec 22, 12:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
        prizePool: "10,000 Diamonds"
    },
    {
        id: 9,
        school: "Central Phil. Univ",
        org: "Campus MSL",
        tournamentName: "CPU Gold Fest",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 16, 6:00 PM",
        region: "Visayas",
        image: "https://images.unsplash.com/photo-1590012314607-6caf56725359?auto=format&fit=crop&q=80&w=800",
        prizePool: "2,000 Diamonds"
    },
    {
        id: 10,
        school: "Adamson University",
        org: "AdU Esports",
        tournamentName: "Falcon's Dive",
        status: "Completed",
        statusColor: "text-gray-400 bg-gray-500/10 border-gray-500/20",
        date: "Dec 13, 8:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
        prizePool: "4,000 Diamonds"
    },
    {
        id: 11,
        school: "Mapúa University",
        org: "MGS",
        tournamentName: "Cardinal's Cup",
        status: "Registration Open",
        statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
        date: "Jan 10, 5:00 PM",
        region: "Luzon",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        prizePool: "3,000 Diamonds"
    },
    {
        id: 12,
        school: "Xavier Univ. (Ateneo)",
        org: "Crusaders",
        tournamentName: "XU Esports League",
        status: "Ongoing",
        statusColor: "text-red-500 bg-red-500/10 border-red-500/20 animate-pulse",
        date: "Dec 14, 3:00 PM",
        region: "Mindanao",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
        prizePool: "5,000 Diamonds"
    }
];

const REGIONS = ['All', 'Luzon', 'Visayas', 'Mindanao'];
const STATUSES = ['All', 'Registration Open', 'Ongoing', 'Completed'];

const CampusTournaments: React.FC<CampusTournamentsProps> = ({ onNavigate }) => {
    const [activeRegion, setActiveRegion] = useState('All');
    const [activeStatus, setActiveStatus] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredTournaments = TOURNAMENTS.filter(item => {
        const matchRegion = activeRegion === 'All' || item.region === activeRegion;
        const matchStatus = activeStatus === 'All' || item.status === activeStatus;
        const matchSearch = item.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tournamentName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchRegion && matchStatus && matchSearch;
    });

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">

            {/* HERO SECTION */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-b from-blue-900/10 to-msl-black">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Campus <span className="text-blue-500">Tournaments</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                        Compete for school pride. Find your local campus tournament and register today to represent your university.
                    </p>

                    {/* Search Bar in Hero */}
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search by school, org, or tournament name..."
                            className="w-full pl-12 pr-6 py-4 bg-msl-card border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all shadow-lg text-white placeholder-gray-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* FILTERS */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

                        {/* Region Filter */}
                        <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
                                {REGIONS.map(region => (
                                    <button
                                        key={region}
                                        onClick={() => setActiveRegion(region)}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeRegion === region
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {region}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Status Filter */}
                        <div className="w-full md:w-auto flex items-center justify-end gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {STATUSES.map(status => (
                                <button
                                    key={status}
                                    onClick={() => setActiveStatus(status)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${activeStatus === status
                                        ? 'bg-msl-card border-blue-500 text-blue-400'
                                        : 'bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-white/30'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* TOURNAMENT GRID */}
                    {filteredTournaments.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTournaments.map((tourney) => (
                                <div key={tourney.id} className="bg-msl-card border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full">
                                    {/* Image Header */}
                                    <div className="h-48 relative overflow-hidden bg-gray-900">
                                        <img
                                            src={tourney.image}
                                            alt={tourney.school}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${tourney.status === 'Completed' ? 'grayscale opacity-40' : 'opacity-80'}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-msl-card to-transparent" />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${tourney.statusColor}`}>
                                                {tourney.status}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10">
                                            <Trophy size={12} className="text-msl-gold" />
                                            {tourney.prizePool}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{tourney.org}</p>
                                                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                                                    {tourney.tournamentName}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                                <School size={16} className="text-gray-500" />
                                                <span className="truncate">{tourney.school}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                                <Calendar size={16} className="text-gray-500" />
                                                <span>{tourney.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                                <MapPin size={16} className="text-gray-500" />
                                                <span>{tourney.region}</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-5 border-t border-white/5">
                                            {tourney.status === 'Registration Open' ? (
                                                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                                                    Register Now <ArrowRight size={18} />
                                                </button>
                                            ) : tourney.status === 'Ongoing' ? (
                                                <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                                    View Bracket <ExternalLink size={18} />
                                                </button>
                                            ) : (
                                                <button disabled className="w-full py-3 bg-white/5 text-gray-500 border border-white/5 rounded-xl font-bold cursor-not-allowed flex items-center justify-center gap-2">
                                                    Event Concluded
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center border-2 border-dashed border-white/10 rounded-3xl bg-white/5">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                                <Filter size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No tournaments found</h3>
                            <p className="text-gray-400 max-w-md mx-auto mb-8">
                                We couldn't find any tournaments matching your current filters. Try changing your search query or region.
                            </p>
                            <button
                                onClick={() => { setActiveRegion('All'); setActiveStatus('All'); setSearchQuery(''); }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 bg-msl-surface border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Don't see a tournament for your school?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Take the lead. Organize an official MSL-accredited tournament in your campus and we'll support you with prizes and logistics.
                    </p>
                    <button
                        onClick={() => onNavigate('campus')}
                        className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                        Find Your Community Head <ArrowRight size={18} />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default CampusTournaments;
