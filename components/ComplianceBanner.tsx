import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const ComplianceBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('msl_compliance_accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('msl_compliance_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 animate-fade-in-up" role="alert" aria-live="polite">
      <div className="max-w-7xl mx-auto bg-[#1a1a1a]/95 backdrop-blur-md border border-msl-gold/30 rounded-2xl shadow-2xl p-6 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-6">
        
        {/* Icon */}
        <div className="p-3 bg-msl-gold/20 rounded-xl hidden md:block">
            <ShieldCheck className="text-msl-gold" size={32} />
        </div>

        {/* Content */}
        <div className="flex-grow">
            <h4 className="text-white font-bold text-lg mb-1">Your Safety & Privacy Matter</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
                We adhere to the <strong>Data Privacy Act of 2012</strong>, <strong>Safe Spaces Act (RA 11313)</strong>, and strictly enforce <strong>Child Protection Laws</strong>. 
                By using this site, you agree to our Terms of Service and acknowledge our IP rights regarding Moonton assets.
            </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
                onClick={handleAccept}
                className="flex-grow md:flex-grow-0 px-6 py-2.5 bg-msl-gold hover:bg-msl-goldHover text-black font-bold rounded-lg transition-all text-sm whitespace-nowrap"
            >
                I Understand
            </button>
            <button 
                onClick={handleAccept}
                className="p-2.5 text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss compliance banner"
            >
                <X size={20} />
            </button>
        </div>

      </div>
    </div>
  );
};

export default ComplianceBanner;