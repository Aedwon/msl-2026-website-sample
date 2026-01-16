import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { LayoutDashboard, Info, BookOpen, ArrowLeft, Cloud, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import Sidebar from './role-valuation/Sidebar';
import MetricCard from './role-valuation/MetricCard';
import RoleChart from './role-valuation/RoleChart';
import RoleTable from './role-valuation/RoleTable';
import RubricModal from './role-valuation/RubricModal';
import { INITIAL_ROLES, INITIAL_WEIGHTS, TIER_DIAMONDS } from './role-valuation/constants';
import { RawRoleScores, CriteriaWeights, CalculatedRole, TierDiamonds } from './role-valuation/types';

interface ValuationData {
    weights: CriteriaWeights;
    roles: RawRoleScores[];
    tierDiamonds: TierDiamonds;
    lastUpdated?: number;
}

interface RoleValuationProps {
    onNavigate: (page: string) => void;
}

const RoleValuation: React.FC<RoleValuationProps> = ({ onNavigate }) => {
    const [weights, setWeights] = useState<CriteriaWeights>(INITIAL_WEIGHTS);
    const [roles, setRoles] = useState<RawRoleScores[]>(INITIAL_ROLES);
    const [tierDiamonds, setTierDiamonds] = useState<TierDiamonds>(TIER_DIAMONDS);
    const [isRubricOpen, setIsRubricOpen] = useState(false);

    // Sync States
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSynced, setLastSynced] = useState<Date | null>(null);
    const [syncError, setSyncError] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

    // Load data from API on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/valuation-data');
                const contentType = res.headers.get("content-type");

                if (res.ok && contentType && contentType.includes("application/json")) {
                    const data: ValuationData | null = await res.json();
                    if (data) {
                        if (data.weights) setWeights(data.weights);
                        if (data.roles) setRoles(data.roles);
                        if (data.tierDiamonds) setTierDiamonds(data.tierDiamonds);
                        setLastSynced(new Date());
                    }
                } else {
                    // If we get HTML (404/SPA fallback) or non-200, assume backend missing
                    throw new Error("Backend not available");
                }
            } catch (error) {
                console.error('Failed to load valuation data:', error);
                setSyncError(true);
            } finally {
                setIsInitialLoad(false);
            }
        };
        fetchData();
    }, []);

    // Debounced Save
    const saveData = useCallback(async (data: ValuationData) => {
        setIsSyncing(true);
        setSyncError(false);
        try {
            const res = await fetch('/api/valuation-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('Failed to save');
            setLastSynced(new Date());
        } catch (error) {
            console.error('Save failed:', error);
            setSyncError(true);
        } finally {
            setIsSyncing(false);
        }
    }, []);

    // Trigger save on changes
    useEffect(() => {
        if (isInitialLoad) return;

        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }

        saveTimeoutRef.current = setTimeout(() => {
            saveData({ weights, roles, tierDiamonds });
        }, 2000); // 2s debounce

        return () => {
            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
        };
    }, [weights, roles, tierDiamonds, saveData, isInitialLoad]);

    // Calculate Total Weight
    const totalWeight = useMemo(() => {
        return (Object.values(weights) as number[]).reduce((acc, curr) => acc + curr, 0);
    }, [weights]);

    const isValid = totalWeight === 100;

    // Handler for Weight Updates
    const handleWeightChange = (key: keyof CriteriaWeights, value: number) => {
        setWeights(prev => ({ ...prev, [key]: value }));
    };

    // Handler for Tier Diamonds Updates
    const handleTierDiamondsChange = (tier: number, value: number) => {
        setTierDiamonds(prev => ({ ...prev, [tier]: value }));
    };

    // Handler for Role Score Updates
    const handleRoleUpdate = (id: string, field: keyof RawRoleScores, value: number) => {
        setRoles(prev => prev.map(role =>
            role.id === id ? { ...role, [field]: value } : role
        ));
    };

    // Handler for Role Name Updates
    const handleRoleNameUpdate = (id: string, name: string) => {
        setRoles(prev => prev.map(role =>
            role.id === id ? { ...role, name } : role
        ));
    };

    // Handler for Adding New Role
    const handleAddRole = () => {
        const newRole: RawRoleScores = {
            id: Date.now().toString(),
            name: 'New Role',
            impact: 5,
            intensity: 5,
            skill: 5,
            leadership: 1,
            volume: 5
        };
        setRoles(prev => [...prev, newRole]);
    };

    // Handler for Deleting Role
    const handleDeleteRole = (id: string) => {
        if (window.confirm("Are you sure you want to delete this role?")) {
            setRoles(prev => prev.filter(role => role.id !== id));
        }
    };

    // Main Calculation Logic
    const calculatedRoles: CalculatedRole[] = useMemo(() => {
        return roles.map(role => {
            // Logic: (Score * Weight) / 100 for each category
            const rawScore =
                (role.impact * weights.impact) +
                (role.intensity * weights.intensity) +
                (role.skill * weights.skill) +
                (role.leadership * weights.leadership) +
                (role.volume * weights.volume);

            const finalScore = rawScore / 100;

            // Tiering Logic
            let tier = 6;
            let tierLabel = 'T6 Entry';

            if (finalScore > 8.5) { tier = 1; tierLabel = 'T1 Strategic'; }
            else if (finalScore >= 7.0) { tier = 2; tierLabel = 'T2 High Ops'; }
            else if (finalScore >= 6.0) { tier = 3; tierLabel = 'T3 Specialist'; }
            else if (finalScore >= 5.0) { tier = 4; tierLabel = 'T4 Skilled'; }
            else if (finalScore >= 4.0) { tier = 5; tierLabel = 'T5 Standard'; }

            // Get weekly diamonds based on tier (using dynamic state)
            const weeklyDiamonds = tierDiamonds[tier] || 1000;

            return {
                ...role,
                finalScore,
                tier,
                tierLabel,
                tierColor: '',
                weeklyDiamonds
            };
        }).sort((a, b) => b.finalScore - a.finalScore);
    }, [roles, weights, tierDiamonds]);

    const topThree = calculatedRoles.slice(0, 3);

    return (
        <div className="pt-20 min-h-screen bg-msl-black animate-fade-in">
            <RubricModal isOpen={isRubricOpen} onClose={() => setIsRubricOpen(false)} />

            <div className="flex flex-col lg:flex-row">
                {/* Left Sidebar Control Panel */}
                <Sidebar
                    weights={weights}
                    onWeightChange={handleWeightChange}
                    isValid={isValid}
                    totalWeight={totalWeight}
                    tierDiamonds={tierDiamonds}
                    onTierDiamondsChange={handleTierDiamondsChange}
                />

                {/* Main Content Area */}
                <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">

                    {/* Header */}
                    <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <button
                                onClick={() => onNavigate('careers')}
                                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-4 transition-colors"
                            >
                                <ArrowLeft size={16} /> Back to Careers
                            </button>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-msl-gold to-yellow-500 bg-clip-text text-transparent">
                                MSL Dynamic Role Valuation
                            </h1>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-gray-400 text-sm">
                                    Esports Organization Structure & Compensation Calculator
                                </p>

                                {/* Sync Status Indicator */}
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-msl-surface border border-white/5">
                                    {isSyncing ? (
                                        <>
                                            <Loader2 className="w-3 h-3 text-msl-gold animate-spin" />
                                            <span className="text-xs text-msl-gold">Syncing...</span>
                                        </>
                                    ) : syncError ? (
                                        <div className="flex items-center gap-1.5" title="Backend connection failed. Refer to VERCEL_SETUP.md to enable persistence.">
                                            <AlertTriangle className="w-3 h-3 text-red-400" />
                                            <span className="text-xs text-red-400">Sync Error</span>
                                        </div>
                                    ) : (
                                        <>
                                            <Cloud className="w-3 h-3 text-gray-500" />
                                            <span className="text-xs text-gray-500">
                                                {lastSynced ? 'Saved' : 'Local'}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsRubricOpen(true)}
                                className="flex items-center gap-2 bg-msl-card hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-colors text-gray-300 hover:text-white"
                            >
                                <BookOpen className="w-4 h-4" />
                                <span className="text-sm font-medium">View Rubric Guide</span>
                            </button>
                            <div className="flex items-center gap-2 bg-msl-surface border border-white/10 px-4 py-2 rounded-lg">
                                <LayoutDashboard className="w-4 h-4 text-msl-gold" />
                                <span className="text-sm font-medium text-white">{roles.length} Roles Evaluated</span>
                            </div>
                        </div>
                    </header>

                    {/* Global Warning if Config Invalid */}
                    {!isValid && (
                        <div className="mb-8 bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-start gap-3 animate-pulse">
                            <Info className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-red-400">Configuration Error</h4>
                                <p className="text-sm text-red-200">The Criteria Weights do not sum to 100%. Please adjust the sliders in the sidebar to ensure accurate Role Complexity Scores.</p>
                            </div>
                        </div>
                    )}

                    {/* Top Metrics Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {topThree.map((role, index) => (
                            <MetricCard
                                key={role.id}
                                rank={index + 1}
                                roleName={role.name}
                                score={role.finalScore}
                                tier={role.tierLabel}
                                weeklyDiamonds={role.weeklyDiamonds}
                            />
                        ))}
                    </section>

                    {/* Analysis Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">

                        {/* Main Table (Takes 2/3 width on large screens) */}
                        <section className="xl:col-span-2">
                            <RoleTable
                                roles={calculatedRoles}
                                onRoleUpdate={handleRoleUpdate}
                                onRoleNameUpdate={handleRoleNameUpdate}
                                onAddRole={handleAddRole}
                                onDeleteRole={handleDeleteRole}
                            />
                        </section>

                        {/* Chart (Takes 1/3 width on large screens) */}
                        <section className="xl:col-span-1">
                            <RoleChart data={calculatedRoles} />
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default RoleValuation;
