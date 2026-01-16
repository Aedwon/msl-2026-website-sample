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
    1: { label: 'T1', color: 'text-purple-400' },
    2: { label: 'T2', color: 'text-red-400' },
    3: { label: 'T3', color: 'text-orange-400' },
    4: { label: 'T4', color: 'text-yellow-400' },
    5: { label: 'T5', color: 'text-blue-400' },
    6: { label: 'T6', color: 'text-gray-400' },
};

const Sidebar: React.FC<SidebarProps> = ({ weights, onWeightChange, isValid, totalWeight, tierDiamonds, onTierDiamondsChange }) => {
    const criteriaList: { key: keyof CriteriaWeights; label: string; color: string }[] = [
        { key: 'impact', label: 'Impact', color: 'accent-rose-500' },
        { key: 'intensity', label: 'Intensity', color: 'accent-orange-500' },
        { key: 'skill', label: 'Skill', color: 'accent-blue-500' },
        { key: 'leadership', label: 'Leadership', color: 'accent-purple-500' },
        { key: 'volume', label: 'Volume', color: 'accent-emerald-500' },
    ];

    return (
        <aside className="w-full lg:w-72 bg-msl-surface border-r border-white/10 flex-shrink-0 flex flex-col lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto">
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-msl-gold" />
                    <h2 className="text-sm font-bold text-white">Config Panel</h2>
                </div>
            </div>

            {/* Criteria Weights Section */}
            <div className="px-4 py-3 space-y-3 border-b border-white/10">
                <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Weights</h3>
                    <span className={`text-xs font-mono ${isValid ? 'text-green-400' : 'text-red-400'}`}>
                        {totalWeight}%
                    </span>
                </div>
                {criteriaList.map((criteria) => (
                    <div key={criteria.key} className="space-y-1">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-medium text-gray-300">
                                {criteria.label}
                            </label>
                            <span className="text-xs font-mono text-gray-400">
                                {weights[criteria.key]}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={weights[criteria.key]}
                            onChange={(e) => onWeightChange(criteria.key, parseInt(e.target.value, 10))}
                            className={`w-full h-1.5 bg-msl-card rounded-lg appearance-none cursor-pointer ${criteria.color}`}
                        />
                    </div>
                ))}
            </div>

            {/* Tier Diamonds Section */}
            <div className="px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2 mb-3">
                    <Gem className="w-3 h-3 text-cyan-400" />
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">💎/Month</h3>
                </div>
                <div className="space-y-2">
                    {[1, 2, 3, 4, 5, 6].map((tier) => (
                        <div key={tier} className="flex items-center justify-between">
                            <span className={`text-xs font-bold ${TIER_LABELS[tier].color}`}>
                                {TIER_LABELS[tier].label}
                            </span>
                            <input
                                type="number"
                                min="0"
                                step="100"
                                value={tierDiamonds[tier] || 0}
                                onChange={(e) => onTierDiamondsChange(tier, parseInt(e.target.value, 10) || 0)}
                                className="w-20 h-6 text-right bg-msl-card border border-white/10 rounded text-cyan-400 focus:border-cyan-400 text-xs font-mono px-2"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-gray-500 mt-2">Auto-saves to browser</p>
            </div>

            {/* Validation Footer */}
            <div className="px-4 py-3 bg-msl-card">
                {isValid ? (
                    <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <p className="text-xs font-medium">Config valid</p>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-red-400">
                        <AlertTriangle className="w-3 h-3" />
                        <p className="text-xs font-medium">Weights ≠ 100%</p>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;


