import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Settings, AlertTriangle, CheckCircle2, Gem, HelpCircle } from 'lucide-react';
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

// Descriptions for each weight criteria
const WEIGHT_DESCRIPTIONS: Record<string, string> = {
    impact: "How much does this role affect the org if something goes wrong? Consider financial risk, reputation damage, and decision-making authority.",
    intensity: "How stressful is the work? Live events and real-time decisions score higher than async, flexible-deadline work.",
    skill: "What specialized skills are required? Programming, video engineering, and accounting score higher than general soft skills.",
    leadership: "How many people does this role manage? Department heads score higher than individual contributors.",
    volume: "How many hours per week does this role require? 'Always on' roles score higher than occasional 5hr/week roles."
};

// Help tooltip component
const HelpTooltip: React.FC<{ text: string }> = ({ text }) => {
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const ref = React.useRef<HTMLSpanElement>(null);

    const handleMouseEnter = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setPos({ x: rect.right + 8, y: rect.top + rect.height / 2 });
        }
        setShow(true);
    };

    return (
        <>
            <span
                ref={ref}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setShow(false)}
                className="inline-flex items-center justify-center w-3 h-3 text-gray-500 hover:text-gray-300 cursor-help transition-colors"
            >
                <HelpCircle className="w-3 h-3" />
            </span>
            {show && ReactDOM.createPortal(
                <div
                    className="fixed z-[99999] max-w-[200px] p-2 bg-gray-900 border border-white/20 rounded-lg shadow-xl text-left pointer-events-none"
                    style={{
                        left: pos.x,
                        top: pos.y,
                        transform: 'translateY(-50%)'
                    }}
                >
                    <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-gray-900" />
                    <p className="text-[10px] text-gray-300 leading-relaxed">{text}</p>
                </div>,
                document.body
            )}
        </>
    );
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
                            <div className="flex items-center gap-1">
                                <label className="text-xs font-medium text-gray-300">
                                    {criteria.label}
                                </label>
                                <HelpTooltip text={WEIGHT_DESCRIPTIONS[criteria.key]} />
                            </div>
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



