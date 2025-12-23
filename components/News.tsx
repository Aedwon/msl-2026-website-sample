import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Search, Filter, ChevronLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// --- MOCK DATA ---
const CATEGORIES = ["All", "Esports", "Community", "Events", "Game Updates"];

const NEWS_ARTICLES = [
  {
    id: 1,
    title: "MSL Collegiate Cup Season 4: The Road to Nationals Begins",
    category: "Esports",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    author: "Tournament Admin",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Registration is officially open! Check out the new format, increased prize pool, and region-locking mechanics for this season. Teams from Luzon, Visayas, and Mindanao will battle for supremacy.",
    content: `
      <p>The wait is finally over. The <strong>MSL Collegiate Cup Season 4</strong> is here, and it's bigger than ever. Moonton Student Leaders Philippines is proud to announce the commencement of the nationwide qualifiers, set to begin this January 2025.</p>
      
      <h3>What's New This Season?</h3>
      <p>Based on community feedback from Season 3, we have revamped the tournament structure to ensure fair play and wider representation. The biggest change is the introduction of <strong>Region-Locked Qualifiers</strong>. Instead of a massive open bracket, schools will first compete within their major island groups (Luzon, Visayas, Mindanao).</p>
      
      <ul>
        <li><strong>Luzon Qualifier:</strong> Jan 15 - 20</li>
        <li><strong>Visayas Qualifier:</strong> Jan 22 - 27</li>
        <li><strong>Mindanao Qualifier:</strong> Jan 29 - Feb 3</li>
      </ul>

      <h3>Increased Prize Pool</h3>
      <p>Thanks to our partners, the total prize pool has been increased to <strong>150,000 Diamonds</strong> plus cash prizes for the Top 4 teams. The National Champion will also secure a slot in the upcoming localized MDL draft exhibition.</p>

      <h3>How to Register</h3>
      <p>Registration is open to all accredited MSL partner organizations. If your school does not have an MSL chapter yet, you may register as an independent collegiate team, provided you submit valid enrollment forms.</p>
    `,
    featured: true
  },
  {
    id: 2,
    title: "Student Leader Summit 2024 Recap",
    category: "Events",
    date: "Nov 28, 2024",
    readTime: "3 min read",
    author: "General Affairs",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Over 200 student leaders gathered in Manila for a weekend of workshops, networking, and showmatches.",
    content: `
      <p>The energy was electric at the SMX Convention Center last weekend as over 200 student leaders from 50+ universities converged for the annual <strong>Student Leader Summit</strong>.</p>
      
      <p>The two-day event featured keynote speakers from the esports industry, including shoutcasters, project managers, and community builders. Workshops focused on:</p>
      <ul>
        <li><strong>Community Management 101:</strong> How to handle toxicity and build inclusive spaces.</li>
        <li><strong>Event Production:</strong> Running a tournament with zero budget.</li>
        <li><strong>Career Pathways:</strong> Turning passion into a profession.</li>
      </ul>
      
      <p>"This summit opened my eyes to the reality that esports isn't just about playing," said Mark, a student leader from Cebu. "It's about leadership and responsibility."</p>
    `,
    featured: false
  },
  {
    id: 3,
    title: "Project NEXT: What It Means for Collegiate Meta",
    category: "Game Updates",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    author: "Meta Analyst",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800",
    excerpt: "Analyzing the latest patch notes and how the emblem revamp changes the draft strategy for school teams.",
    content: `
      <p>With the arrival of the latest Project NEXT update, the collegiate meta is set for a massive shake-up. The emblem system overhaul allows for more flexible playstyles, and collegiate teams need to adapt fast.</p>
      
      <h3>The Rise of Tank Junglers?</h3>
      <p>While assassins have dominated the collegiate scene for the last two seasons, the new emblem talents favor sustainability. We expect to see more utility junglers like Fredrinn and Akai making a comeback in the upcoming MCC Season 4.</p>
      
      <p>Check out our full tier list analysis in the next article.</p>
    `,
    featured: false
  },
  {
    id: 4,
    title: "Partner Spotlight: Logitech G enters the Chat",
    category: "Community",
    date: "Nov 10, 2024",
    readTime: "2 min read",
    author: "Partnerships",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
    excerpt: "We are thrilled to announce Logitech G as the official peripheral partner for MSL Philippines 2025.",
    content: `
      <p>Gaming just got better. MSL Philippines is proud to welcome <strong>Logitech G</strong> as our official peripheral partner for the 2025 calendar year.</p>
      
      <p>This partnership means:</p>
      <ul>
        <li>Exclusive discounts for MSL members.</li>
        <li>Logitech G gear giveaways during campus tours.</li>
        <li>Professional equipment for the MCC Season 4 Grand Finals stage.</li>
      </ul>
    `,
    featured: false
  },
  {
    id: 5,
    title: "How to Establish an Esports Org in Your University",
    category: "Community",
    date: "Oct 22, 2024",
    readTime: "8 min read",
    author: "Campus Dept",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    excerpt: "A step-by-step guide to getting accreditation, finding members, and securing your first sponsorship.",
    content: `
      <p>Starting an esports organization on campus can be daunting, but it's the most rewarding way to leave a legacy. Here is the MSL guide to building your empire.</p>
      
      <h3>Step 1: Find Your Core Team</h3>
      <p>You can't do it alone. Find a Treasurer, a Secretary, and a Creatives Head. You need a team that shares your vision.</p>
      
      <h3>Step 2: Draft a Constitution</h3>
      <p>School admins love paperwork. Create a clear constitution and bylaws. Define your purpose: are you competitive? recreational? educational?</p>
      
      <h3>Step 3: Apply for Accreditation</h3>
      <p>Submit your papers to your Office of Student Affairs (OSA). Be patient, and be professional. Show them that esports brings value to the university.</p>
    `,
    featured: false
  },
  {
    id: 6,
    title: "Campus Promo Tour: Visayas Leg Announced",
    category: "Events",
    date: "Oct 15, 2024",
    readTime: "4 min read",
    author: "Events Team",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    excerpt: "We are visiting 10 campuses in Cebu and Iloilo. Find out if your school is on the list!",
    content: `
      <p>Pack your bags! The MSL Bus is heading to the Queen City of the South. We are bringing the hype to Cebu and Iloilo this October.</p>
      
      <p>Activities include:</p>
      <ul>
        <li>1v1 Mirror Matches</li>
        <li>Skin Giveaways</li>
        <li>Meet & Greet with MPL Casters</li>
      </ul>
      
      <p>Stay tuned to our Facebook page for the specific dates and venues.</p>
    `,
    featured: false
  }
];

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleId, setActiveArticleId] = useState<number | null>(null);

  const featuredArticle = NEWS_ARTICLES.find(article => article.featured);
  const otherArticles = NEWS_ARTICLES.filter(article => !article.featured);

  const filteredArticles = otherArticles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleArticleClick = (id: number) => {
    setActiveArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToNews = () => {
    setActiveArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- ARTICLE DETAIL VIEW ---
  if (activeArticleId) {
    const article = NEWS_ARTICLES.find(a => a.id === activeArticleId);
    if (!article) return null;

    return (
        <div className="pt-24 min-h-screen bg-msl-black animate-fade-in text-white pb-20">
            {/* Nav Back */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <button 
                    onClick={handleBackToNews}
                    className="flex items-center gap-2 text-gray-400 hover:text-msl-gold transition-colors font-bold text-sm"
                >
                    <ChevronLeft size={20} /> Back to News
                </button>
            </div>

            {/* Article Header Image */}
            <div className="w-full h-[300px] md:h-[500px] relative mb-12">
                <div className="absolute inset-0 bg-msl-card animate-pulse" /> {/* Placeholder while loading */}
                <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msl-black via-transparent to-transparent opacity-80" />
            </div>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32 z-10">
                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-msl-gold text-black text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                        {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <Calendar size={14} aria-hidden="true" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <Clock size={14} aria-hidden="true" /> {article.readTime}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight drop-shadow-xl">
                    {article.title}
                </h1>

                {/* Author Block */}
                <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-msl-gold">
                            <User size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Written by</p>
                            <p className="font-bold text-white">{article.author}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="Share article">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <div 
                    className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed mb-16"
                    dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
                
                {/* Share Footer */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <h4 className="font-bold text-white">Share this article</h4>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166fe5] rounded-lg text-white font-bold text-sm transition-colors">
                            <Facebook size={16} aria-hidden="true" /> Facebook
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1a91da] rounded-lg text-white font-bold text-sm transition-colors">
                            <Twitter size={16} aria-hidden="true" /> Twitter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#0958a8] rounded-lg text-white font-bold text-sm transition-colors">
                            <Linkedin size={16} aria-hidden="true" /> LinkedIn
                        </button>
                    </div>
                </div>
            </article>

            {/* Read Next */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Read Next</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherArticles.slice(0, 3).map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => handleArticleClick(item.id)}
                            className="bg-msl-card border border-white/10 rounded-xl overflow-hidden hover:border-white/30 cursor-pointer transition-all group"
                        >
                            <div className="h-40 overflow-hidden relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-5">
                                <span className="text-xs font-bold text-msl-gold mb-2 block">{item.category}</span>
                                <h4 className="font-bold text-white leading-snug group-hover:underline decoration-msl-gold underline-offset-4">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
  }

  // --- MAIN NEWS FEED VIEW ---
  return (
    <div className="pt-20 min-h-screen bg-msl-black animate-fade-in text-white">
        
        {/* --- PAGE HEADER --- */}
        <section className="relative py-20 px-4 text-center border-b border-white/10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
            <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold mb-4">
                News <span className="text-msl-gold">&</span> Updates
            </h1>
            <p className="relative z-10 text-xl text-gray-400 max-w-2xl mx-auto">
                Stay ahead of the meta. The latest stories, tournament results, and community highlights from MSL Philippines.
            </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* --- FEATURED ARTICLE --- */}
            {/* Improved Mobile Spacing: Changed aspect ratio to be taller on mobile (aspect-[4/5]) */}
            {featuredArticle && activeCategory === 'All' && !searchQuery && (
                <div 
                    onClick={() => handleArticleClick(featuredArticle.id)}
                    className="mb-16 group cursor-pointer"
                >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9]">
                        <img 
                            src={featuredArticle.image} 
                            alt={featuredArticle.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-60" />
                        
                        <div className="absolute bottom-0 left-0 p-6 pb-8 md:p-12 max-w-4xl z-10">
                            <span className="inline-block px-3 py-1 bg-msl-gold text-black text-xs font-bold uppercase tracking-wider rounded-md mb-4 shadow-lg">
                                Featured
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-msl-gold transition-colors drop-shadow-lg">
                                {featuredArticle.title}
                            </h2>
                            <p className="text-gray-200 text-lg mb-6 line-clamp-3 md:line-clamp-none drop-shadow-md hidden sm:block">
                                {featuredArticle.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-6 text-sm text-gray-300 font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-msl-gold" aria-hidden="true" />
                                    <span>{featuredArticle.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-msl-gold" aria-hidden="true" />
                                    <span>{featuredArticle.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- CONTROLS: SEARCH & FILTER --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-msl-black/95 backdrop-blur-md py-4 border-y border-white/10 md:border-none md:bg-transparent md:backdrop-blur-none md:static">
                
                {/* Horizontal Scroll Categories */}
                <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    <div className="flex gap-2" role="tablist" aria-label="News Categories">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${
                                    activeCategory === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                                role="tab"
                                aria-selected={activeCategory === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-auto relative">
                    <label htmlFor="article-search" className="sr-only">Search articles</label>
                    <input 
                        id="article-search"
                        type="text" 
                        placeholder="Search articles..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-80 bg-msl-card border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-msl-gold/50 transition-colors"
                    />
                    <Search className="absolute left-3 top-3.5 text-gray-500" size={18} aria-hidden="true" />
                </div>
            </div>

            {/* --- NEWS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <div 
                            key={article.id} 
                            onClick={() => handleArticleClick(article.id)}
                            className="group bg-msl-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col h-full cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-video overflow-hidden relative">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-md flex items-center gap-1">
                                        <Tag size={10} className="text-msl-gold" aria-hidden="true" />
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" /> {article.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {article.readTime}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-msl-gold transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                                    {article.excerpt}
                                </p>

                                <button className="text-msl-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                    Read Article <ArrowRight size={16} aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
                        <Filter className="mx-auto text-gray-500 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                        <p className="text-gray-400">Try adjusting your search or category filter.</p>
                        <button 
                            onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                            className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>

            {/* --- NEWSLETTER CTA --- */}
            <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-msl-gold/5 blur-[100px] rounded-full pointer-events-none" />
                
                <h2 className="relative z-10 text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
                <p className="relative z-10 text-gray-400 mb-8 max-w-xl mx-auto">
                    Subscribe to our <strong>monthly digest</strong> for the latest tournament announcements, community spotlights, and game updates directly to your inbox.
                </p>
                
                <div className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                    <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                    <input 
                        id="newsletter-email"
                        type="email" 
                        placeholder="Enter your email address" 
                        className="flex-grow px-5 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-msl-gold transition-colors"
                    />
                    <button className="px-6 py-3 bg-msl-gold hover:bg-msl-goldHover text-black font-bold rounded-xl transition-all shadow-lg whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
                <p className="relative z-10 text-gray-500 text-xs mt-4">
                    By subscribing, you consent to our collection of your email for newsletter purposes in compliance with the Data Privacy Act of 2012. Unsubscribe at any time.
                </p>
            </div>

        </div>
    </div>
  );
};

export default News;