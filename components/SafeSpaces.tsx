import React, { useState } from 'react';
import { ShieldAlert, Lock, AlertTriangle, Send, FileCheck, Info } from 'lucide-react';

const SafeSpaces: React.FC = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen bg-msl-black flex items-center justify-center px-4">
        <div className="bg-msl-card border border-green-500/30 p-8 rounded-3xl max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileCheck className="text-green-500" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Report Submitted securely</h2>
          <p className="text-gray-300 mb-6">
            Your report has been encrypted and sent directly to the MSL General Affairs Ethics Committee. 
            A case officer will review the details within 48 hours.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-msl-black animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/20 text-red-400 border border-red-900/30 text-sm font-bold uppercase tracking-wider mb-6">
            <ShieldAlert size={16} /> MSL Integrity Portal
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Safe Spaces Reporting
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            In compliance with <strong className="text-white">Republic Act 11313 (Safe Spaces Act)</strong>, 
            MSL Philippines is committed to maintaining a harassment-free environment for all student-gamers.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl mb-10 flex gap-4 items-start">
          <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
          <div className="text-sm text-gray-300">
            <p className="mb-2 font-bold text-white">Zero Tolerance Policy</p>
            <p>
              This form covers incidents of gender-based sexual harassment, bullying, cyber-harassment, and abuse of authority 
              within the MSL ecosystem (Tournaments, Discord, Campus Events). 
              <span className="block mt-2 text-blue-300">
                For Child Protection (Minors under 18), we strictly adhere to RA 7610. Reports involving minors are prioritized immediately.
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="bg-msl-card border border-white/10 rounded-3xl p-8 shadow-2xl space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          
          {/* Anonymity Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <Lock className={isAnonymous ? "text-msl-gold" : "text-gray-500"} size={24} />
              <div>
                <label htmlFor="anon-toggle" className="block text-white font-bold">File Anonymously</label>
                <p className="text-xs text-gray-400">Your identity will be hidden from the accused.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                id="anon-toggle" 
                type="checkbox" 
                className="sr-only peer"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-msl-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-msl-gold"></div>
            </label>
          </div>

          {/* Reporter Details (Conditional) */}
          {!isAnonymous && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Your Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-msl-gold focus:outline-none focus:ring-1 focus:ring-msl-gold transition-all" placeholder="Juan dela Cruz" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">School / Organization</label>
                <input type="text" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-msl-gold focus:outline-none focus:ring-1 focus:ring-msl-gold transition-all" placeholder="University Name" required />
              </div>
            </div>
          )}

          {/* Incident Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Type of Incident</label>
              <select className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-msl-gold focus:outline-none focus:ring-1 focus:ring-msl-gold transition-all">
                <option>Gender-Based Harassment (Bawal Bastos)</option>
                <option>Cyberbullying / Toxicity</option>
                <option>Abuse of Authority (Leader/Admin)</option>
                <option>Smurfing / Piloting / Cheating</option>
                <option>Other Misconduct</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Description of Incident</label>
              <textarea 
                rows={5} 
                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-msl-gold focus:outline-none focus:ring-1 focus:ring-msl-gold transition-all"
                placeholder="Please provide specific details: Who, When, Where, and What happened."
                required
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Evidence (Optional)</label>
              <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                <p className="text-gray-400 text-sm">Paste links to screenshots/videos or drive folders here</p>
                <input type="text" className="mt-4 w-full bg-transparent border-b border-white/20 text-center text-white focus:outline-none focus:border-msl-gold" placeholder="https://" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="flex items-start gap-3 mb-6">
                <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-600 text-msl-gold focus:ring-msl-gold bg-black/50" />
                <p className="text-xs text-gray-400">
                    I attest that the information provided is true to the best of my knowledge. I understand that filing a false report is a violation of the MSL Code of Conduct.
                </p>
            </div>
            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 transition-all flex items-center justify-center gap-2">
                Submit Report <Send size={20} />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SafeSpaces;