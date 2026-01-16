import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { CalculatedRole } from './types';

interface RoleChartProps {
    data: CalculatedRole[];
}

const RoleChart: React.FC<RoleChartProps> = ({ data }) => {
    // Sort data for chart visualization (Highest score first)
    const chartData = [...data].sort((a, b) => b.finalScore - a.finalScore);

    const getBarColor = (score: number) => {
        if (score > 8.5) return '#a78bfa'; // Violet
        if (score >= 7.0) return '#f87171'; // Red
        if (score >= 6.0) return '#fb923c'; // Orange
        if (score >= 5.0) return '#facc15'; // Yellow
        if (score >= 4.0) return '#60a5fa'; // Blue
        return '#94a3b8'; // Slate
    };

    return (
        <div className="bg-msl-surface border border-white/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-6">Role Complexity Ranking</h3>
            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#333" />
                        <XAxis type="number" domain={[0, 10]} stroke="#94a3b8" tick={{ fontSize: 12 }} />
                        <YAxis
                            type="category"
                            dataKey="name"
                            stroke="#e2e8f0"
                            width={150}
                            tick={{ fontSize: 11, fill: '#cbd5e1' }}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f0f0f', borderColor: '#333', color: '#f1f5f9' }}
                            itemStyle={{ color: '#f1f5f9' }}
                            cursor={{ fill: '#1a1a1a', opacity: 0.8 }}
                            formatter={(value: number | undefined) => [value !== undefined ? value.toFixed(2) : 'N/A', 'Score']}
                        />
                        <Bar dataKey="finalScore" radius={[0, 4, 4, 0]} barSize={20}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getBarColor(entry.finalScore)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RoleChart;
