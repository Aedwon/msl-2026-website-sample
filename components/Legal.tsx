import React, { useEffect } from 'react';
import { Shield, Book, Scale, ArrowLeft, Accessibility, Eye, MousePointer2, Zap } from 'lucide-react';

interface LegalProps {
  type: 'privacy' | 'tos' | 'accessibility';
  onBack: () => void;
}

const Legal: React.FC<LegalProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const renderToS = () => (
    <div className="space-y-12 animate-fade-in">
        <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last Updated: December 2024</p>
        </div>

        {/* Section 1 */}
        <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-msl-gold">01.</span> Intellectual Property & Assets
            </h3>
            <div className="bg-msl-card p-6 rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    <strong>Moonton Ownership:</strong> All game assets, characters, logos, and trademarks associated with Mobile Legends: Bang Bang (MLBB) are the exclusive property of Moonton Games. MSL Philippines operates under a limited license to use these assets for community building.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    <strong>Community Content:</strong> Content created by student chapters (posters, streams) must adhere to the <em>MSL Brand Guidelines</em>. Unauthorized use of Moonton IP for commercial gain outside of approved sponsorship deals is strictly prohibited.
                </p>
            </div>
        </section>

        {/* Section 2 */}
        <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-msl-gold">02.</span> Student Code of Conduct
            </h3>
            <div className="bg-msl-card p-6 rounded-2xl border border-white/5 space-y-4">
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                    <li><strong>Academic Standing:</strong> Student leaders must maintain good academic standing. MSL reserves the right to suspend leaders who are on academic probation.</li>
                    <li><strong>RA 11313 Compliance:</strong> We strictly enforce the Safe Spaces Act. Any form of sexual harassment, whether offline or online (Discord/In-Game), will result in an immediate ban and referral to school authorities.</li>
                    <li><strong>Representation:</strong> You represent your University. Misconduct reflects on your school. MSL will cooperate with University Offices (OSA) for disciplinary actions.</li>
                </ul>
            </div>
        </section>

        {/* Section 3 */}
        <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-msl-gold">03.</span> Tournament Integrity
            </h3>
            <div className="bg-msl-card p-6 rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    <strong>Smurfing & Piloting:</strong> Strictly prohibited. Players must use their own accounts linked to their Student ID.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    <strong>Region Locking:</strong> Teams must compete in the region (Luzon/Visayas/Mindanao) where their physical campus is located.
                </p>
            </div>
        </section>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-12 animate-fade-in">
        <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Effective Date: January 1, 2025</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-900/20 border border-blue-500/20 p-6 rounded-2xl flex gap-4">
            <Shield className="text-blue-400 flex-shrink-0" size={24} />
            <p className="text-sm text-gray-300">
                MSL Philippines acts as a <strong>Personal Information Controller (PIC)</strong> under the Data Privacy Act of 2012 (RA 10173). We collect data solely for the purpose of collegiate esports management.
            </p>
        </div>

        {/* Section 1 */}
        <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-msl-gold">01.</span> Data Collection for Collegiate Leagues
            </h3>
            <div className="bg-msl-card p-6 rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    We collect specific sensitive personal information to verify student status:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li><strong>Proof of Enrollment:</strong> School ID, Registration Form (COR).</li>
                    <li><strong>Gaming Credentials:</strong> MLBB Game ID, Server ID (linked to Moonton API).</li>
                    <li><strong>Contact Details:</strong> University Email Address, Mobile Number.</li>
                </ul>
            </div>
        </section>

        {/* Section 2 */}
        <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-msl-gold">02.</span> Child Protection (Minors)
            </h3>
            <div className="bg-msl-card p-6 rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    In compliance with <strong>RA 7610</strong> and global data standards:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li><strong>Age Verification:</strong> Users under 18 (Senior High School) must provide a signed <em>Parental Consent Form</em> to participate in tournaments.</li>
                    <li><strong>Data Minimization:</strong> We do not publish the full names or locations of minors on public leaderboards, using In-Game Names (IGNs) instead.</li>
                </ul>
            </div>
        </section>

        {/* Section 3 */}
        <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-msl-gold">03.</span> Data Sharing
            </h3>
            <div className="bg-msl-card p-6 rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Your data is shared <strong>only</strong> with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li><strong>Moonton Games:</strong> For the processing of diamond rewards and account verification.</li>
                    <li><strong>University Partners:</strong> Verification of student status with Office of Student Affairs (upon request).</li>
                </ul>
                <p className="text-gray-300 mt-4">We do <strong>not</strong> sell student data to third-party advertisers.</p>
            </div>
        </section>
    </div>
  );

  const renderAccessibility = () => (
    <div className="space-y-12 animate-fade-in">
        <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Accessibility Statement</h1>
            <p className="text-gray-400">Conformance Status: WCAG 2.1 Level AA</p>
        </div>

        {/* Intro */}
        <div className="bg-msl-card p-6 rounded-2xl border border-white/5">
             <p className="text-gray-300 leading-relaxed text-lg">
                 MSL Philippines is committed to ensuring digital accessibility for all student gamers, including those with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
             </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-msl-gold/20 rounded-lg text-msl-gold"><Eye size={20} /></div>
                    <h3 className="font-bold text-white text-xl">Visual Accessibility</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Our "Dark Mode" design adheres to strict contrast ratios (4.5:1) for text readability. We use relative sizing for fonts to support browser zooming without breaking layouts.
                </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><MousePointer2 size={20} /></div>
                    <h3 className="font-bold text-white text-xl">Keyboard Navigation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    The entire site is navigable without a mouse. Dropdowns activate on focus, and we provide visual focus indicators (gold outlines) for all interactive elements.
                </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Zap size={20} /></div>
                    <h3 className="font-bold text-white text-xl">Reduced Motion</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We respect your device settings. If you have "prefers-reduced-motion" enabled, all animations (including the ticker and entrance fades) are automatically disabled.
                </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Accessibility size={20} /></div>
                    <h3 className="font-bold text-white text-xl">Screen Readers</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We use semantic HTML5 (ARIA landmarks, roles, and alt texts) to ensure screen readers can accurately interpret the site's content and navigation structure.
                </p>
            </div>
        </div>

        {/* Feedback */}
        <div className="bg-blue-900/20 border border-blue-500/20 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Feedback & Support</h3>
            <p className="text-gray-300 mb-6">
                We welcome your feedback on the accessibility of the MSL Philippines website. Please let us know if you encounter accessibility barriers:
            </p>
            <a href="mailto:accessibility@moontonslph.org" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors inline-block">
                Report an Issue
            </a>
        </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-msl-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </button>

            {type === 'tos' && renderToS()}
            {type === 'privacy' && renderPrivacy()}
            {type === 'accessibility' && renderAccessibility()}
        </div>
    </div>
  );
};

export default Legal;