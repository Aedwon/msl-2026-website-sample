import React, { useEffect } from 'react';
import { 
  Briefcase, 
  Gem, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Search,
  PenTool,
  HeartHandshake,
  MonitorPlay
} from 'lucide-react';

// --- DATA: PERKS ---
const PERKS = [
  {
    title: "Diamond Compensation",
    desc: "Earn monthly Mobile Legends diamonds based on your performance tier and contribution level.",
    icon: Gem,
    color: "text-blue-400"
  },
  {
    title: "Official Certification",
    desc: "Receive certificates of volunteer service from Moonton Games, valuable for your professional CV.",
    icon: Award,
    color: "text-msl-gold"
  },
  {
    title: "Mentorship Access",
    desc: "Direct guidance from industry professionals in esports management, marketing, and production.",
    icon: Users,
    color: "text-purple-400"
  },
  {
    title: "Exclusive Merch",
    desc: "Get access to limited edition MSL and MLBB merchandise reserved for internal staff.",
    icon: Briefcase,
    color: "text-green-400"
  }
];

// --- DATA: OPEN POSITIONS ---
const OPEN_POSITIONS = [
  {
    department: "Campus Department",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    roles: [
      {
        title: "Regional Student Manager",
        type: "Volunteer",
        location: "Remote / NCR",
        desc: "Oversee multiple campus chapters, ensuring monthly tournament compliance and community growth."
      },
      {
        title: "Campus Ambassador",
        type: "Volunteer",
        location: "Remote / Any Campus",
        desc: "The face of MSL in your school. Establish the community and lead local events."
      }
    ]
  },
  {
    department: "Contents & Social Media Department",
    icon: PenTool,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    roles: [
      {
        title: "Graphic Designer",
        type: "Volunteer",
        location: "Remote",
        desc: "Create high-quality publicity materials for tournaments, announcements, and social media content."
      },
      {
        title: "Livestream Producer",
        type: "Volunteer",
        location: "Remote",
        desc: "Manage the broadcast production for the MSL Collegiate Cup and other major streams."
      }
    ]
  },
  {
    department: "Partnerships",
    icon: Briefcase,
    color: "text-msl-gold",
    bg: "bg-msl-gold/10",
    roles: [
      {
        title: "Sponsorship Associate",
        type: "Volunteer",
        location: "Hybrid / NCR",
        desc: "Assist in crafting proposals and communicating with potential brand partners for student events."
      },
      {
        title: "Web Developer",
        type: "Volunteer",
        location: "Remote",
        desc: "Help maintain and improve the MSL Philippines website and registration portals."
      }
    ]
  },
  {
    department: "General Affairs",
    icon: HeartHandshake,
    color: "text-green-500",
    bg: "bg-green-500/10",
    roles: [
      {
        title: "HR & Recruitment Officer",
        type: "Volunteer",
        location: "Remote",
        desc: "Handle the screening, interviewing, and onboarding of new student leaders."
      }
    ]
  }
];

const STEPS = [
    { title: "Apply", desc: "Submit your CV and Portfolio via the form." },
    { title: "Screening", desc: "Our General Affairs team reviews your profile." },
    { title: "Interview", desc: "A chat with the Department Head." },
    { title: "Onboarding", desc: "Welcome to the team! Start your journey." }
];

const Careers: React.FC = () => {
  // Ensure page starts at the top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPositions = () => {
    const element = document.getElementById('open-roles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative py-24 px-4 overflow-hidden border-b border-white/10">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-msl-gold/5 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <span className="text-msl-gold font-bold tracking-widest uppercase text-sm mb-4 inline-block">Join the Team</span>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                    Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-msl-gold to-yellow-600">Esports Career</span> Here.
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    We aren't just playing games. We are building the future infrastructure of collegiate esports. 
                    Gain real-world experience, earn rewards, and lead the movement.
                </p>
                <button 
                  onClick={scrollToPositions}
                  className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold text-lg transition-all flex items-center gap-2 mx-auto"
                >
                    View Open Positions <ArrowRight size={20} />
                </button>
            </div>
        </section>

        {/* --- PERKS SECTION --- */}
        <section className="py-20 bg-msl-surface px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Why Join MSL?</h2>
                    <p className="text-gray-400">The loot is worth the grind.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PERKS.map((perk, idx) => (
                        <div key={idx} className="bg-msl-card border border-white/5 p-8 rounded-2xl hover:bg-msl-cardHover transition-all group hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${perk.color}`}>
                                <perk.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-20 bg-msl-black border-y border-white/10 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">How to Join</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-white/10 z-0" />
                    
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-msl-surface border-2 border-msl-gold text-msl-gold font-bold flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(242,194,26,0.2)]">
                                {idx + 1}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- JOBS LIST --- */}
        <section id="open-roles" className="py-24 bg-msl-surface px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white mb-2">Open Roles</h2>
                    <p className="text-gray-400">Find your place in the Land of Dawn.</p>
                </div>

                <div className="space-y-12">
                    {OPEN_POSITIONS.map((dept, idx) => (
                        <div key={idx}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg ${dept.bg} ${dept.color}`}>
                                    <dept.icon size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{dept.department}</h3>
                            </div>

                            <div className="grid gap-4">
                                {dept.roles.map((role, rIdx) => (
                                    <div key={rIdx} className="bg-msl-card border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className="text-xl font-bold text-white group-hover:text-msl-gold transition-colors">{role.title}</h4>
                                                <span className="px-2 py-0.5 rounded text-xs font-bold bg-white/10 text-gray-300 border border-white/10">
                                                    {role.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-2">{role.desc}</p>
                                            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium uppercase tracking-wider">
                                                <span className="flex items-center gap-1"><MonitorPlay size={12} /> {role.location}</span>
                                                <span className="flex items-center gap-1"><Clock size={12} /> Flexible Hours</span>
                                            </div>
                                        </div>
                                        <button className="w-full md:w-auto px-6 py-3 bg-msl-gold hover:bg-msl-goldHover text-black rounded-lg font-bold text-sm transition-all whitespace-nowrap justify-center flex items-center">
                                            Apply Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* General Application CTA */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">Don't see a role for you?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        We are always looking for passionate student leaders. Send us a general application and tell us how you can contribute to the General Affairs team.
                    </p>
                    <button className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-xl font-bold transition-all">
                        Send General Application
                    </button>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Careers;