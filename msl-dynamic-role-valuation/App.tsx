import React, { useState, useMemo } from 'react';
import { LayoutDashboard, Info, BookOpen } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import RoleChart from './components/RoleChart';
import RoleTable from './components/RoleTable';
import RubricModal from './components/RubricModal';
import { INITIAL_ROLES, INITIAL_WEIGHTS } from './constants';
import { RawRoleScores, CriteriaWeights, CalculatedRole } from './types';

const App: React.FC = () => {
  const [weights, setWeights] = useState<CriteriaWeights>(INITIAL_WEIGHTS);
  const [roles, setRoles] = useState<RawRoleScores[]>(INITIAL_ROLES);
  const [isRubricOpen, setIsRubricOpen] = useState(false);

  // Calculate Total Weight
  const totalWeight = useMemo(() => {
    return (Object.values(weights) as number[]).reduce((acc, curr) => acc + curr, 0);
  }, [weights]);

  const isValid = totalWeight === 100;

  // Handler for Weight Updates
  const handleWeightChange = (key: keyof CriteriaWeights, value: number) => {
    setWeights(prev => ({ ...prev, [key]: value }));
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

      return {
        ...role,
        finalScore,
        tier,
        tierLabel,
        tierColor: '' 
      };
    }).sort((a, b) => b.finalScore - a.finalScore); 
  }, [roles, weights]);

  const topThree = calculatedRoles.slice(0, 3);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-950 text-slate-100">
      
      <RubricModal isOpen={isRubricOpen} onClose={() => setIsRubricOpen(false)} />

      {/* Left Sidebar Control Panel */}
      <Sidebar 
        weights={weights} 
        onWeightChange={handleWeightChange} 
        isValid={isValid} 
        totalWeight={totalWeight} 
      />

      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
        
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              MSL Dynamic Role Valuation
            </h1>
            <p className="text-slate-400 mt-1">
              Esports Organization Structure & Compensation Calculator
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
                onClick={() => setIsRubricOpen(true)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg transition-colors text-slate-300 hover:text-white"
            >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">View Rubric Guide</span>
            </button>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
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
  );
};

export default App;