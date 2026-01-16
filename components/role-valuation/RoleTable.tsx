import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { RawRoleScores, CalculatedRole } from './types';
import { TIER_COLORS } from './constants';
import { ArrowUpDown, Edit3, Plus, Trash2, Gem } from 'lucide-react';

interface RoleTableProps {
    roles: CalculatedRole[];
    onRoleUpdate: (id: string, field: keyof RawRoleScores, value: number) => void;
    onRoleNameUpdate: (id: string, name: string) => void;
    onAddRole: () => void;
    onDeleteRole: (id: string) => void;
}

// Rubric tooltips for each category
const RUBRIC_TOOLTIPS: Record<string, { title: string; low: string; mid: string; high: string }> = {
    impact: {
        title: 'IMPACT & RISK',
        low: '1-3: Internal tasks. Mistakes easily fixed.',
        mid: '4-6: External facing. Small budget.',
        high: '7-10: Critical. Financial/legal consequences.'
    },
    intensity: {
        title: 'OPERATIONAL INTENSITY',
        low: '1-3: Async work. Flexible deadlines.',
        mid: '4-6: Weekly deadlines. Moderate pressure.',
        high: '7-10: Live environment. High stress.'
    },
    skill: {
        title: 'TECHNICAL SKILL',
        low: '1-3: General soft skills.',
        mid: '4-6: Basic tools (Canva, Sheets).',
        high: '7-10: Advanced (Programming, etc).'
    },
    leadership: {
        title: 'LEADERSHIP SCOPE',
        low: '1-3: Individual contributor.',
        mid: '4-6: Team Lead. 3-5 reports.',
        high: '7-10: Dept Head. Multiple teams.'
    },
    volume: {
        title: 'VOLUME & FREQUENCY',
        low: '1-3: <5 hours/week.',
        mid: '4-6: 5-10 hours/week.',
        high: '7-10: 15+ hours/week. Always on.'
    }
};

// Score input with tooltip
interface ScoreInputProps {
    value: number;
    category: string;
    onChange: (value: string) => void;
}

const ScoreInput: React.FC<ScoreInputProps> = ({ value, category, onChange }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, above: false });
    const inputRef = React.useRef<HTMLInputElement>(null);
    const rubric = RUBRIC_TOOLTIPS[category];

    const handleShowTooltip = () => {
        if (inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const above = spaceBelow < 120;

            setTooltipPos({
                x: rect.left + rect.width / 2,
                y: above ? rect.top - 8 : rect.bottom + 8,
                above
            });
        }
        setShowTooltip(true);
    };

    return (
        <>
            <input
                ref={inputRef}
                type="number"
                min="0"
                max="10"
                step="0.5"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={handleShowTooltip}
                onBlur={() => setShowTooltip(false)}
                onMouseEnter={handleShowTooltip}
                onMouseLeave={() => setShowTooltip(false)}
                className="w-12 h-8 text-center bg-msl-card border border-white/10 rounded text-gray-200 focus:border-msl-gold focus:ring-1 focus:ring-msl-gold transition-all text-sm font-mono appearance-none"
            />
            {showTooltip && rubric && ReactDOM.createPortal(
                <div
                    className="fixed z-[99999] w-48 p-2 bg-gray-900 border border-white/20 rounded-lg shadow-xl text-left pointer-events-none"
                    style={{
                        left: tooltipPos.x,
                        top: tooltipPos.above ? 'auto' : tooltipPos.y,
                        bottom: tooltipPos.above ? `${window.innerHeight - tooltipPos.y}px` : 'auto',
                        transform: 'translateX(-50%)'
                    }}
                >
                    {tooltipPos.above ? (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900" />
                    ) : (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-b-4 border-b-gray-900" />
                    )}
                    <div className="text-xs font-bold text-msl-gold mb-1">{rubric.title}</div>
                    <div className="text-[10px] text-green-400">{rubric.low}</div>
                    <div className="text-[10px] text-yellow-400">{rubric.mid}</div>
                    <div className="text-[10px] text-red-400">{rubric.high}</div>
                </div>,
                document.body
            )}
        </>
    );
};

const RoleTable: React.FC<RoleTableProps> = ({ roles, onRoleUpdate, onRoleNameUpdate, onAddRole, onDeleteRole }) => {

    // Helper to handle input changes safely
    const handleInputChange = (id: string, field: keyof RawRoleScores, value: string) => {
        let numVal = parseFloat(value);
        if (isNaN(numVal)) numVal = 0;
        // Clamp between 0 and 10
        numVal = Math.min(Math.max(numVal, 0), 10);
        onRoleUpdate(id, field, numVal);
    };

    const categories = [
        { key: 'impact', label: 'Impact' },
        { key: 'intensity', label: 'Intensity' },
        { key: 'skill', label: 'Skill' },
        { key: 'leadership', label: 'Leader' },
        { key: 'volume', label: 'Volume' },
    ] as const;

    return (
        <div className="bg-msl-surface border border-white/10 rounded-xl shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-msl-card rounded-t-xl">
                <div>
                    <h3 className="text-lg font-semibold text-white">Role Data Editor</h3>
                    <p className="text-sm text-gray-400">Edit scores (1-10). Hover/focus for rubric.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-msl-black px-3 py-1.5 rounded-full border border-white/10">
                        <Edit3 className="w-3 h-3" />
                        <span>Editable Mode</span>
                    </div>
                    <button
                        onClick={onAddRole}
                        className="flex items-center gap-2 px-3 py-1.5 bg-msl-gold hover:bg-msl-goldHover text-black text-xs font-bold rounded-lg transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add Role
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto overflow-y-visible">
                <table className="w-full text-left text-sm">
                    <thead className="bg-msl-black text-gray-400 font-medium border-b border-white/10">
                        <tr>
                            <th className="px-4 py-4 w-[20%]">Role Name</th>
                            {categories.map(cat => (
                                <th key={cat.key} className="px-1 py-4 text-center w-[10%]">
                                    {cat.label}
                                </th>
                            ))}
                            <th className="px-4 py-4 text-right cursor-pointer group hover:text-white transition-colors w-[10%]">
                                <div className="flex items-center justify-end gap-1">
                                    RCS
                                    <ArrowUpDown className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                </div>
                            </th>
                            <th className="px-4 py-4 text-center w-[10%]">Tier</th>
                            <th className="px-4 py-4 text-right w-[10%]">💎/Month</th>
                            <th className="px-2 py-4 w-[5%]"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {roles.map((role) => (
                            <tr key={role.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-4 py-3 font-medium text-gray-200">
                                    <input
                                        type="text"
                                        value={role.name}
                                        onChange={(e) => onRoleNameUpdate(role.id, e.target.value)}
                                        className="bg-transparent border-none focus:ring-0 text-gray-200 font-medium w-full p-0 placeholder-gray-600"
                                        placeholder="Role Name"
                                    />
                                </td>
                                {categories.map((cat) => (
                                    <td key={`${role.id}-${cat.key}`} className="px-1 py-2 text-center">
                                        <ScoreInput
                                            value={role[cat.key]}
                                            category={cat.key}
                                            onChange={(val) => handleInputChange(role.id, cat.key, val)}
                                        />
                                    </td>
                                ))}
                                <td className="px-4 py-3 text-right">
                                    <span className="font-bold font-mono text-white text-base">
                                        {role.finalScore.toFixed(2)}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border whitespace-nowrap ${TIER_COLORS[role.tier as keyof typeof TIER_COLORS] || 'text-gray-400 border-gray-600'}`}>
                                        {role.tierLabel}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <div className="flex items-center justify-end gap-1 text-msl-gold">
                                        <Gem className="w-3 h-3" />
                                        <span className="font-bold font-mono text-sm">{role.weeklyDiamonds.toLocaleString()}</span>
                                    </div>
                                </td>
                                <td className="px-2 py-3 text-center">
                                    <button
                                        onClick={() => onDeleteRole(role.id)}
                                        className="p-1.5 text-gray-600 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
                                        title="Delete Role"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RoleTable;
