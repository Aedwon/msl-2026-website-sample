import React from 'react';
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
        <div className="bg-msl-surface border border-white/10 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-msl-card">
                <div>
                    <h3 className="text-lg font-semibold text-white">Role Data Editor</h3>
                    <p className="text-sm text-gray-400">Edit raw scores (1-10) to recalculate tiers instantly.</p>
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

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-msl-black text-gray-400 font-medium border-b border-white/10">
                        <tr>
                            <th className="px-4 py-4 w-[20%]">Role Name</th>
                            {categories.map(cat => (
                                <th key={cat.key} className="px-1 py-4 text-center w-[10%] cursor-help" title={`Edit ${cat.label} Score`}>
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
                            <th className="px-4 py-4 text-right w-[10%]">💎/Week</th>
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
                                        <input
                                            type="number"
                                            min="0"
                                            max="10"
                                            step="0.5"
                                            value={role[cat.key]}
                                            onChange={(e) => handleInputChange(role.id, cat.key, e.target.value)}
                                            className="w-12 h-8 text-center bg-msl-card border border-white/10 rounded text-gray-200 focus:border-msl-gold focus:ring-1 focus:ring-msl-gold transition-all text-sm font-mono appearance-none"
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
                                    <div className="flex items-center justify-end gap-1 text-cyan-400">
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
