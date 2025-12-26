import React, { useState } from 'react';
import { Facebook, Youtube, ShieldAlert, Lock, Heart, ShieldCheck, Copyright, Accessibility } from 'lucide-react';

interface FooterProps {
    onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const handleNav = (e: React.MouseEvent, page: string) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <footer className="bg-msl-dark border-t border-white/10 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/msl-logo.png" alt="MSL Logo" className="w-10 h-10 object-contain" />
                            <span className="font-bold text-xl text-white">MSL Philippines</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The official student leader body of Mobile Legends: Bang Bang in the Philippines.
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <img src="/moonton-logo.png" alt="Moonton" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                            <img src="/mlbb-logo.png" alt="Mobile Legends: Bang Bang" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://www.facebook.com/MSLPhilippines" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="https://www.tiktok.com/@moontonstudentleaders.ph" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-white" aria-label="TikTok">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@MSLPhilippines" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors text-white" aria-label="YouTube"><Youtube size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Programs</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" onClick={(e) => handleNav(e, 'msl-network')} className="block py-2 hover:text-msl-gold transition-colors">The MSL Network</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'programs')} className="block py-2 hover:text-msl-gold transition-colors">Campus Tournaments</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'programs')} className="block py-2 hover:text-msl-gold transition-colors">MCC League</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'programs')} className="block py-2 hover:text-msl-gold transition-colors">Leadership Summit</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'programs')} className="block py-2 hover:text-msl-gold transition-colors">Community Grants</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" onClick={(e) => handleNav(e, 'partnerships')} className="block py-2 hover:text-msl-gold transition-colors">Partner With Us</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'careers')} className="block py-2 hover:text-msl-gold transition-colors">Join the Team</a></li>
                            <li><a href="#" onClick={(e) => handleNav(e, 'news')} className="block py-2 hover:text-msl-gold transition-colors">News & Updates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Safe Spaces</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            We are committed to RA 11313 compliance.
                        </p>
                        <button
                            onClick={(e) => handleNav(e, 'safespaces')}
                            className="w-full py-3 bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 text-red-400 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2"
                        >
                            <ShieldAlert size={16} /> Report Violation
                        </button>
                    </div>
                </div>

                {/* Compliance Seals Section - Visual Reassurance */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 border-t border-white/5 pt-12">
                    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <Heart className="text-green-500" size={24} />
                        <div className="text-xs text-gray-400">
                            <strong className="block text-white">Safe Space Zone</strong>
                            <span>RA 11313 Compliant</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <Lock className="text-blue-500" size={24} />
                        <div className="text-xs text-gray-400">
                            <strong className="block text-white">Data Privacy</strong>
                            <span>Encrypted & Secure</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <ShieldCheck className="text-msl-gold" size={24} />
                        <div className="text-xs text-gray-400">
                            <strong className="block text-white">Child Protection</strong>
                            <span>Strictly Enforced</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <Copyright className="text-purple-500" size={24} />
                        <div className="text-xs text-gray-400">
                            <strong className="block text-white">Intellectual Property</strong>
                            <span>Moonton Authorized</span>
                        </div>
                    </div>
                    {/* Accessibility Badge */}
                    <button
                        onClick={(e) => handleNav(e, 'accessibility')}
                        className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity text-left"
                    >
                        <Accessibility className="text-white" size={24} />
                        <div className="text-xs text-gray-400">
                            <strong className="block text-white">Accessibility</strong>
                            <span>WCAG 2.1 Level AA</span>
                        </div>
                    </button>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm text-center md:text-left">© 2025 Moonton Student Leaders Philippines. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-500 text-sm text-center">
                        <button onClick={(e) => handleNav(e, 'privacy')} className="hover:text-white py-2">Privacy Policy</button>
                        <button onClick={(e) => handleNav(e, 'tos')} className="hover:text-white py-2">Terms of Service</button>
                        <button onClick={(e) => handleNav(e, 'accessibility')} className="hover:text-white py-2">Accessibility</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;