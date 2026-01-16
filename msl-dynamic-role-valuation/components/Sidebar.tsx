import React from 'react';
import { Settings, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { CriteriaWeights } from '../types';

interface SidebarProps {
  weights: CriteriaWeights;
  onWeightChange: (key: keyof CriteriaWeights, value: number) => void;
  isValid: boolean;
  totalWeight: number;
}

const Sidebar: React.FC<SidebarProps> = ({ weights, onWeightChange, isValid, totalWeight }) => {
  const criteriaList: { key: keyof CriteriaWeights; label: string; color: string }[] = [
    { key: 'impact', label: 'Impact & Risk', color: 'accent-rose-500' },
    { key: 'intensity', label: 'Operational Intensity', color: 'accent-orange-500' },
    { key: 'skill', label: 'Technical Skill', color: 'accent-blue-500' },
    { key: 'leadership', label: 'Leadership Scope', color: 'accent-purple-500' },
    { key: 'volume', label: 'Volume & Frequency', color: 'accent-emerald-500' },
  ];

  return (
    <aside className="w-full lg:w-80 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex flex-col h-screen sticky top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <Settings className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-bold text-white">Config Panel</h2>
        </div>
        <p className="text-slate-400 text-sm">
          Adjust the weighted importance of each evaluation criteria.
        </p>
      </div>

      <div className="flex-1 p-6 space-y-8">
        {criteriaList.map((criteria) => (
          <div key={criteria.key} className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-200">
                {criteria.label}
              </label>
              <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-300">
                {weights[criteria.key]}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={weights[criteria.key]}
              onChange={(e) => onWeightChange(criteria.key, parseInt(e.target.value, 10))}
              className={`w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer ${criteria.color}`}
            />
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-slate-800 bg-slate-900/50">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-slate-300">Total Weight</span>
          <span className={`text-lg font-bold font-mono ${isValid ? 'text-emerald-400' : 'text-red-400'}`}>
            {totalWeight}%
          </span>
        </div>
        
        {isValid ? (
          <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
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