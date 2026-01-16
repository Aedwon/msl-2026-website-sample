import React from 'react';

interface MetricCardProps {
  rank: number;
  roleName: string;
  score: number;
  tier: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ rank, roleName, score, tier }) => {
  const getRankColor = (r: number) => {
    switch(r) {
      case 1: return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5';
      case 2: return 'text-slate-300 border-slate-300/30 bg-slate-300/5';
      case 3: return 'text-amber-600 border-amber-600/30 bg-amber-600/5';
      default: return 'text-slate-400 border-slate-700 bg-slate-800';
    }
  };

  return (
    <div className={`relative p-5 rounded-xl border ${getRankColor(rank)} transition-all duration-300 hover:scale-[1.02]`}>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-sm shadow-lg z-10">
        #{rank}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm uppercase tracking-wider opacity-70 font-semibold">Most Difficult Role</h3>
        <p className="text-lg font-bold truncate pr-4 text-white">{roleName}</p>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
           <span className="text-xs text-slate-400 block mb-0.5">RCS Score</span>
           <span className="text-2xl font-mono font-bold">{score.toFixed(2)}</span>
        </div>
        <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
            {tier}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;