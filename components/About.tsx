import React from 'react';
import { Target, Lightbulb, Users, PenTool, Briefcase, HeartHandshake, ArrowRight, ShieldCheck, Clock, Smile, Award, Zap, MessageCircle, BookOpen, Heart, Linkedin, Twitter } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const DEPARTMENTS = [
  {
    id: 'campus',
    name: 'Campus',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    description: 'The largest department responsible for managing school communities and executing monthly tournaments.',
    tasks: [
        'Tournament Registration & Management',
        'Student Leader Coordination',
        'Campus Directory Maintenance',
        'Community Guidelines Enforcement'
    ]
  },
  {
    id: 'contents',
    name: 'Contents & Social Media',
    icon: PenTool,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    description: 'The creative engine driving traffic through news, media galleries, and social integration.',
    tasks: [
        'Social Media Management (FB/TikTok)',
        'Graphic Design & Video Editing',
        'Copywriting & Journalism',
        'Livestream Production'
    ]
  },
  {
    id: 'partnerships',
    name: 'Partnerships',
    icon: Briefcase,
    color: 'text-msl-gold',
    bg: 'bg-msl-gold/10',
    border: 'border-msl-gold/20',
    description: 'Acquires sponsors and manages the organizational infrastructure (Finance & Web).',
    tasks: [
        'Sponsorship Acquisition',
        'Collegiate Org Relations',
        'Finance & Budgeting (Diamonds)',
        'Website & Tech Maintenance'
    ]
  },
  {
    id: 'general',
    name: 'General Affairs',
    icon: HeartHandshake,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    description: 'The HR function handling recruitment, welfare, and the volunteer compensation system.',
    tasks: [
        'Recruitment & Onboarding',
        'Volunteer Compensation (Diamonds)',
        'Internal Team Welfare',
        'Performance Evaluation'
    ]
  }
];

const LEADERS = [
    {
        name: "Thrice Austine F. Vasquez",
        role: "Campus Dept.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600",
        color: "text-blue-500",
    },
    {
        name: "Mary Clarence S. Pasco",
        role: "Contents & Social Media Dept.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=600",
        color: "text-purple-500",
    },
    {
        name: "Aerol Dwayne D. Balayon",
        role: "Partnerships",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
        color: "text-msl-gold",
    },
    {
        name: "Gabriel C. Matawaran",
        role: "General Affairs",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600",
        color: "text-green-500",
    }
];

const VALUES = [
    { 
        icon: ShieldCheck, 
        title: "Integrity Above All", 
        desc: "We lead with honesty, transparency, and fairness—admitting mistakes, following rules, and doing what’s right even when no one is watching." 
    },
    { 
        icon: Clock, 
        title: "Time as a Resource", 
        desc: "We treat our time like energy in a game—managing it wisely to balance academics, leadership, and personal growth." 
    },
    { 
        icon: Smile, 
        title: "Leadership Through Friendliness", 
        desc: "We build trust and respect by being approachable, empathetic, and genuinely caring for our communities." 
    },
    { 
        icon: Zap, 
        title: "Always Learning, Always Adapting", 
        desc: "We stay updated, embrace change, and learn new skills quickly to meet the evolving needs of our communities and projects." 
    },
    { 
        icon: MessageCircle, 
        title: "Responsiveness is Respect", 
        desc: "We acknowledge, respond, and follow through—showing our peers, teammates, and community that we value their time and trust." 
    },
    { 
        icon: BookOpen, 
        title: "Academic Excellence as a Standard", 
        desc: "We are students first—proving that we can excel academically while being leaders in the MLBB community." 
    },
    { 
        icon: Heart, 
        title: "Passion for MLBB and Community Growth", 
        desc: "We champion MLBB not just as a game, but as a platform for connection, teamwork, and meaningful impact in schools and beyond." 
    }
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 min-h-screen bg-msl-black animate-fade-in">
        
        {/* HERO SECTION (Black) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
            
            <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
                More Than Just <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-600">A Game.</span>
            </h1>
            <p className="relative z-10 text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
                Moonton Student Leaders (MSL) Philippines is the official student body powered by Moonton Games. We bridge the gap between academic life and esports passion.
            </p>
        </section>

        {/* MISSION & VISION (Surface) */}
        <section className="py-16 bg-msl-surface border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                
                {/* Mission */}
                <div className="bg-msl-card p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Target className="text-blue-500" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-gray-400 leading-relaxed text-lg flex-grow">
                        We empower student-gamers to lead vibrant MLBB communities in their schools by fostering integrity, time management, friendliness, adaptability, responsiveness, and academic excellence. Guided by Moonton Philippines, the Moonton Student Leaders create inclusive, exciting, and impactful campus initiatives that unite players, boost school pride, and prove that gaming passion can go together with academic success.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-msl-card p-8 rounded-3xl border border-white/5 hover:border-msl-gold/30 transition-all group flex flex-col">
                    <div className="w-14 h-14 bg-msl-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Lightbulb className="text-msl-gold" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                    <p className="text-gray-400 leading-relaxed text-lg flex-grow">
                        To be the leading network of student-gamers in the Philippines who embody integrity, leadership, and community spirit— bridging the worlds of gaming and academics, building strong MLBB communities and inspiring the next generation of responsible esports leaders.
                    </p>
                </div>
            </div>
        </section>

        {/* CORE VALUES (Black) */}
        <section className="py-24 bg-msl-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every Moonton Student Leader.</p>
                 </div>
                 <div className="flex flex-wrap justify-center gap-6">
                    {VALUES.map((val, idx) => (
                        <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] text-left p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-msl-gold/30 transition-all group">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <val.icon size={24} className="text-msl-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-end">{val.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>

        {/* ORGANIZATIONAL STRUCTURE (Surface) */}
        <section className="py-24 bg-msl-surface border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Organization</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        MSL Philippines operates through four specialized departments, each playing a critical role in our ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {DEPARTMENTS.map((dept) => {
                        return (
                        <button 
                            key={dept.id} 
                            onClick={() => {
                                window.scrollTo(0, 0);
                                onNavigate(dept.id);
                            }}
                            className={`relative w-full text-left overflow-hidden rounded-3xl p-8 border ${dept.border} bg-msl-card hover:bg-msl-cardHover transition-all group cursor-pointer hover:ring-2 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:scale-[1.01] focus-visible:bg-msl-cardHover ${dept.id === 'campus' ? 'ring-blue-500' : dept.id === 'partnerships' ? 'ring-msl-gold' : dept.id === 'contents' ? 'ring-purple-500' : dept.id === 'general' ? 'ring-green-500' : ''}`}
                        >
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${dept.bg} blur-[80px] -mr-16 -mt-16 rounded-full pointer-events-none opacity-50`} />

                            <div className="relative z-10 flex items-start justify-between mb-6">
                                <div className={`p-4 rounded-2xl ${dept.bg} ${dept.color}`}>
                                    <dept.icon size={32} />
                                </div>
                                <div className={`p-2 bg-white/5 rounded-full border border-white/10 transition-colors ${dept.id === 'campus' ? 'group-hover:bg-blue-600 group-hover:border-blue-500 group-focus-visible:bg-blue-600 group-focus-visible:border-blue-500' : dept.id === 'partnerships' ? 'group-hover:bg-msl-gold group-hover:border-msl-gold group-focus-visible:bg-msl-gold group-focus-visible:border-msl-gold' : dept.id === 'contents' ? 'group-hover:bg-purple-600 group-hover:border-purple-500 group-focus-visible:bg-purple-600 group-focus-visible:border-purple-500' : 'group-hover:bg-green-600 group-hover:border-green-500 group-focus-visible:bg-green-600 group-focus-visible:border-green-500'}`}>
                                    <ArrowRight size={20} className={dept.id === 'partnerships' ? 'group-hover:text-black group-focus-visible:text-black text-white' : 'text-white'} />
                                </div>
                            </div>

                            <h3 className="relative z-10 text-2xl font-bold text-white mb-2">{dept.name}</h3>
                            <p className="relative z-10 text-gray-400 mb-6 min-h-[48px]">{dept.description}</p>

                            <div className="relative z-10 space-y-3">
                                {dept.tasks.map((task, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className={`w-1.5 h-1.5 rounded-full ${dept.color.replace('text', 'bg')}`} />
                                        {task}
                                    </div>
                                ))}
                            </div>
                        </button>
                    )})}
                </div>
            </div>
        </section>

        {/* TEAM LEADERSHIP SECTION (Black) */}
        <section className="py-20 bg-msl-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Meet Our National Admins</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The core team dedicated to serving the student-gaming community across the Philippines.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {LEADERS.map((leader, idx) => (
                        <div key={idx} className="group relative rounded-2xl bg-msl-card border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            {/* Image Container */}
                            <div className="aspect-[4/5] w-full relative overflow-hidden">
                                <img 
                                    src={leader.image} 
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-msl-card via-msl-card/40 to-transparent opacity-90"></div>
                            </div>
                            
                            {/* Content Overlap */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <h3 className="text-2xl font-bold text-white mb-1 leading-tight drop-shadow-md">
                                    {leader.name}
                                </h3>
                                <p className={`text-base font-bold ${leader.color} mb-4`}>
                                    {leader.role}
                                </p>
                                
                                <div className="flex gap-3">
                                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-gray-300 hover:text-white transition-colors backdrop-blur-sm border border-white/5">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-gray-300 hover:text-white transition-colors backdrop-blur-sm border border-white/5">
                                        <Twitter size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA (Surface) */}
        <section className="py-20 text-center px-4 bg-msl-surface border-t border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Lead the Game?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => { onNavigate('programs'); window.scrollTo(0,0); }}
                    className="px-8 py-4 bg-msl-gold hover:bg-msl-goldHover text-black rounded-xl font-bold text-lg transition-all shadow-lg shadow-msl-gold/20"
                >
                    View Programs
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                    Contact Us <ArrowRight size={20} />
                </button>
            </div>
        </section>
    </div>
  );
};

export default About;