import React from 'react';
import { RawRoleScores, CalculatedRole } from '../types';
import { TIER_COLORS } from '../constants';
import { ArrowUpDown, Edit3, Plus, Trash2 } from 'lucide-react';

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
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
      <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
        <div>
            <h3 className="text-lg font-semibold text-white">Role Data Editor</h3>
            <p className="text-sm text-slate-400">Edit raw scores (1-10) to recalculate tiers instantly.</p>
        </div>
        <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
                <Edit3 className="w-3 h-3" />
                <span>Editable Mode</span>
            </div>
            <button 
                onClick={onAddRole}
                className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors border border-indigo-500"
            >
                <Plus className="w-4 h-4" />
                Add Role
            </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950 text-slate-400 font-medium border-b border-slate-800">
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
              <th className="px-2 py-4 w-[5%]"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-slate-800/50 transition-colors group">
                <td className="px-4 py-3 font-medium text-slate-200">
                  <input 
                    type="text" 
                    value={role.name}
                    onChange={(e) => onRoleNameUpdate(role.id, e.target.value)}
                    className="bg-transparent border-none focus:ring-0 text-slate-200 font-medium w-full p-0 placeholder-slate-600"
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
                      className="w-12 h-8 text-center bg-slate-800 border border-slate-700 rounded text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm font-mono appearance-none"
                    />
                  </td>
                ))}
                <td className="px-4 py-3 text-right">
                  <span className="font-bold font-mono text-white text-base">
                    {role.finalScore.toFixed(2)}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                   <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border whitespace-nowrap ${TIER_COLORS[role.tier as keyof typeof TIER_COLORS] || 'text-slate-400 border-slate-600'}`}>
                      {role.tierLabel}
                   </span>
                </td>
                <td className="px-2 py-3 text-center">
                    <button 
                        onClick={() => onDeleteRole(role.id)}
                        className="p-1.5 text-slate-600 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
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