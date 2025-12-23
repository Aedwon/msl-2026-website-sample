import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    setMobileSubmenuOpen(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'about', 
      label: 'About',
      dropdown: [
        { label: 'Campus', page: 'campus' },
        { label: 'Contents & Social Media', page: 'contents' },
        { label: 'Partnerships', page: 'partnerships' },
        { label: 'General Affairs', page: 'general' }
      ]
    },
    { id: 'programs', label: 'Programs' },
    { id: 'careers', label: 'Careers' },
    { id: 'news', label: 'News' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Click to go home */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer min-h-[44px] min-w-[44px] outline-none focus-visible:ring-2 focus-visible:ring-msl-gold rounded-lg"
            onClick={() => handleNavClick('home')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavClick('home')}
            role="button"
            tabIndex={0}
            aria-label="MSL Philippines Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-msl-gold to-yellow-600 rounded-lg flex items-center justify-center font-bold text-black text-xl">
              M
            </div>
            <span className="text-white font-bold text-lg tracking-wider">MSL Philippines</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6" role="menubar">
              {navItems.map((item) => (
                <div key={item.id} className="relative group" role="none">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-msl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      currentPage === item.id 
                        ? 'text-msl-gold' 
                        : 'text-gray-300 hover:text-msl-gold'
                    }`}
                    role="menuitem"
                    aria-haspopup={item.dropdown ? "true" : "false"}
                    aria-expanded={false}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" aria-hidden="true" />}
                  </button>
                  
                  {/* Desktop Dropdown */}
                  {item.dropdown && (
                    <div 
                      className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 z-50"
                      role="menu"
                      aria-label={`${item.label} submenu`}
                    >
                      <div className="bg-[#121212] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-md overflow-hidden">
                        {item.dropdown.map((subItem, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavClick(subItem.page);
                            }}
                            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors outline-none focus-visible:bg-white/10 focus-visible:text-white ${
                              currentPage === subItem.page
                                ? 'bg-msl-gold text-black font-bold'
                                : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                            role="menuitem"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button 
                className="bg-msl-gold hover:bg-msl-goldHover text-black px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(242,194,26,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                role="menuitem"
              >
                Log In
              </button>
            </div>
          </div>

          <div className="md:hidden">
            {/* Mobile Touch Target Expansion: min-w/h 44px */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-msl-gold"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-[#050505] border-b border-white/10 h-screen absolute top-20 left-0 w-full z-40 overflow-y-auto"
        >
          <div className="px-4 pt-4 pb-20 space-y-2">
            {navItems.map((item) => (
              <div key={item.id}>
                 <div className="flex items-center">
                    <button
                        onClick={() => handleNavClick(item.id)}
                        className={`flex-grow text-left px-4 py-4 rounded-xl text-lg font-bold border border-transparent active:scale-[0.98] transition-all outline-none focus-visible:border-msl-gold ${
                            currentPage === item.id 
                            ? 'text-msl-gold bg-white/10 border-white/5' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {item.label}
                    </button>
                    {item.dropdown && (
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setMobileSubmenuOpen(mobileSubmenuOpen === item.id ? null : item.id);
                            }}
                            className="p-4 text-gray-400 hover:text-white outline-none focus-visible:text-msl-gold"
                            aria-label={mobileSubmenuOpen === item.id ? `Close ${item.label} submenu` : `Open ${item.label} submenu`}
                            aria-expanded={mobileSubmenuOpen === item.id}
                        >
                            <ChevronDown size={20} className={`transition-transform duration-300 ${mobileSubmenuOpen === item.id ? 'rotate-180' : ''}`} />
                        </button>
                    )}
                 </div>

                 {/* Mobile Submenu */}
                 {item.dropdown && (
                    <div 
                      className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === item.id ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                        {item.dropdown.map((subItem, subIdx) => (
                            <button
                                key={subIdx}
                                onClick={() => handleNavClick(subItem.page)}
                                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors border-l-2 outline-none focus-visible:bg-white/5 ${
                                    currentPage === subItem.page
                                    ? 'border-msl-gold text-msl-gold bg-white/5'
                                    : 'border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                                }`}
                            >
                                {subItem.label}
                            </button>
                        ))}
                    </div>
                 )}
              </div>
            ))}
            {/* Added Log In button to mobile menu for consistency */}
            <button className="block w-full text-center mt-6 px-4 py-4 rounded-xl font-bold text-lg bg-msl-gold text-black shadow-lg">
                Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;