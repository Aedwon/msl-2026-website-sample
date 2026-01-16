import React from 'react';
import { Gem } from 'lucide-react';

interface MetricCardProps {
    rank: number;
    roleName: string;
    score: number;
    tier: string;
    weeklyDiamonds: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ rank, roleName, score, tier, weeklyDiamonds }) => {
    const getRankColor = (r: number) => {
        switch (r) {
            case 1: return 'text-msl-gold border-msl-gold/30 bg-msl-gold/5';
            case 2: return 'text-gray-300 border-gray-300/30 bg-gray-300/5';
            case 3: return 'text-amber-600 border-amber-600/30 bg-amber-600/5';
            default: return 'text-gray-400 border-white/10 bg-msl-card';
        }
    };

    return (
        <div className={`relative p-5 rounded-xl border ${getRankColor(rank)} transition-all duration-300 hover:scale-[1.02]`}>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-msl-black border border-white/10 flex items-center justify-center font-bold text-sm shadow-lg z-10">
                #{rank}
            </div>
            <div className="space-y-1">
                <h3 className="text-sm uppercase tracking-wider opacity-70 font-semibold">Most Difficult Role</h3>
                <p className="text-lg font-bold truncate pr-4 text-white">{roleName}</p>
            </div>
            <div className="mt-4 flex items-end justify-between gap-2">
                <div>
                    <span className="text-xs text-gray-400 block mb-0.5">RCS Score</span>
                    <span className="text-2xl font-mono font-bold">{score.toFixed(2)}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 text-cyan-400">
                        <Gem className="w-3 h-3" />
                        <span className="text-sm font-bold font-mono">{weeklyDiamonds.toLocaleString()}</span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-msl-card border border-white/10 text-xs font-medium text-gray-300">
                        {tier}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetricCard;

