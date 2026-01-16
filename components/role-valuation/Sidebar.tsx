import React from 'react';
import { Settings, AlertTriangle, CheckCircle2, Gem } from 'lucide-react';
import { CriteriaWeights, TierDiamonds } from './types';

interface SidebarProps {
    weights: CriteriaWeights;
    onWeightChange: (key: keyof CriteriaWeights, value: number) => void;
    isValid: boolean;
    totalWeight: number;
    tierDiamonds: TierDiamonds;
    onTierDiamondsChange: (tier: number, value: number) => void;
}

const TIER_LABELS: Record<number, { label: string; color: string }> = {
    1: { label: 'T1 Strategic', color: 'text-purple-400' },
    2: { label: 'T2 High Ops', color: 'text-red-400' },
    3: { label: 'T3 Specialist', color: 'text-orange-400' },
    4: { label: 'T4 Skilled', color: 'text-yellow-400' },
    5: { label: 'T5 Standard', color: 'text-blue-400' },
    6: { label: 'T6 Entry', color: 'text-gray-400' },
};

const Sidebar: React.FC<SidebarProps> = ({ weights, onWeightChange, isValid, totalWeight, tierDiamonds, onTierDiamondsChange }) => {
    const criteriaList: { key: keyof CriteriaWeights; label: string; color: string }[] = [
        { key: 'impact', label: 'Impact & Risk', color: 'accent-rose-500' },
        { key: 'intensity', label: 'Operational Intensity', color: 'accent-orange-500' },
        { key: 'skill', label: 'Technical Skill', color: 'accent-blue-500' },
        { key: 'leadership', label: 'Leadership Scope', color: 'accent-purple-500' },
        { key: 'volume', label: 'Volume & Frequency', color: 'accent-emerald-500' },
    ];

    return (
        <aside className="w-full lg:w-80 bg-msl-surface border-r border-white/10 flex-shrink-0 flex flex-col lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-5 h-5 text-msl-gold" />
                    <h2 className="text-lg font-bold text-white">Config Panel</h2>
                </div>
                <p className="text-gray-400 text-sm">
                    Adjust criteria weights and tier compensation.
                </p>
            </div>

            {/* Criteria Weights Section */}
            <div className="p-6 space-y-6 border-b border-white/10">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Criteria Weights</h3>
                {criteriaList.map((criteria) => (
                    <div key={criteria.key} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-200">
                                {criteria.label}
                            </label>
                            <span className="text-xs font-mono bg-msl-card px-2 py-1 rounded text-gray-300 border border-white/10">
                                {weights[criteria.key]}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={weights[criteria.key]}
                            onChange={(e) => onWeightChange(criteria.key, parseInt(e.target.value, 10))}
                            className={`w-full h-2 bg-msl-card rounded-lg appearance-none cursor-pointer ${criteria.color}`}
                        />
                    </div>
                ))}
            </div>

            {/* Tier Diamonds Section */}
            <div className="p-6 space-y-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <Gem className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Weekly 💎 by Tier</h3>
                </div>
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((tier) => (
                        <div key={tier} className="flex items-center justify-between gap-3">
                            <span className={`text-sm font-medium ${TIER_LABELS[tier].color}`}>
                                {TIER_LABELS[tier].label}
                            </span>
                            <input
                                type="number"
                                min="0"
                                step="100"
                                value={tierDiamonds[tier] || 0}
                                onChange={(e) => onTierDiamondsChange(tier, parseInt(e.target.value, 10) || 0)}
                                className="w-24 h-8 text-right bg-msl-card border border-white/10 rounded text-cyan-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-mono px-2"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-500 italic">Values auto-save to browser.</p>
            </div>

            {/* Validation Footer */}
            <div className="p-6 border-t border-white/10 bg-msl-card mt-auto">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-300">Total Weight</span>
                    <span className={`text-lg font-bold font-mono ${isValid ? 'text-green-400' : 'text-red-400'}`}>
                        {totalWeight}%
                    </span>
                </div>

                {isValid ? (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <p className="text-xs font-medium">Configuration valid.</p>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <p className="text-xs font-medium">Total must equal 100%.</p>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;

