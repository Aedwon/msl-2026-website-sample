import { RawRoleScores, CriteriaWeights } from './types';

export const INITIAL_WEIGHTS: CriteriaWeights = {
    impact: 30,
    intensity: 25,
    skill: 20,
    leadership: 15,
    volume: 10
};

export const INITIAL_ROLES: RawRoleScores[] = [
    { id: '1', name: 'Head of Partnerships', impact: 10, intensity: 8, skill: 7, leadership: 10, volume: 6 },
    { id: '2', name: 'Head of Campus Dept', impact: 9, intensity: 8, skill: 6, leadership: 10, volume: 7 },
    { id: '3', name: 'Head of Finance', impact: 10, intensity: 6, skill: 9, leadership: 5, volume: 5 },
    { id: '4', name: 'Head of Product', impact: 8, intensity: 5, skill: 10, leadership: 6, volume: 4 },
    { id: '5', name: 'Exec Producer', impact: 8, intensity: 10, skill: 8, leadership: 4, volume: 3 },
    { id: '6', name: 'Regional Admins', impact: 7, intensity: 9, skill: 5, leadership: 7, volume: 8 },
    { id: '7', name: 'Head of Network Dev', impact: 8, intensity: 8, skill: 6, leadership: 6, volume: 7 },
    { id: '8', name: 'Socials Lead', impact: 6, intensity: 7, skill: 6, leadership: 5, volume: 10 },
    { id: '9', name: 'Backend Developer', impact: 5, intensity: 3, skill: 10, leadership: 1, volume: 4 },
    { id: '10', name: 'Campus MSL', impact: 5, intensity: 5, skill: 3, leadership: 2, volume: 6 },
    { id: '11', name: 'General Affairs Head', impact: 5, intensity: 3, skill: 5, leadership: 4, volume: 5 },
    { id: '12', name: 'Sponsorship Officer', impact: 4, intensity: 3, skill: 4, leadership: 1, volume: 6 },
];

export const TIER_COLORS = {
    1: 'text-purple-400 border-purple-400 bg-purple-400/10', // Strategic Pillars
    2: 'text-red-400 border-red-400 bg-red-400/10',       // High Ops/Risk
    3: 'text-orange-400 border-orange-400 bg-orange-400/10',    // Specialist/Lead
    4: 'text-yellow-400 border-yellow-400 bg-yellow-400/10',    // Skilled Execution
    5: 'text-blue-400 border-blue-400 bg-blue-400/10',      // Standard Ops
    6: 'text-gray-400 border-gray-400 bg-gray-400/10',     // Support/Entry
};

// Weekly Diamond Compensation by Tier (baseline: 1 banner = 1,000 diamonds)
export const TIER_DIAMONDS: Record<number, number> = {
    1: 10000, // T1 Strategic: Department Heads, highest accountability
    2: 7500,  // T2 High Ops: Live operations, high-risk roles
    3: 5000,  // T3 Specialist: Division heads, specialized leads
    4: 3000,  // T4 Skilled: Key creatives, developers, officers
    5: 1500,  // T5 Standard: Associate roles, consistent weekly work
    6: 1000,  // T6 Entry: ~1 banner/week baseline
};

export const RUBRIC_DATA = [
    {
        category: "Impact & Risk",
        description: "Consequence of error, financial responsibility, and reputation management.",
        low: "Internal tasks only. Mistakes are easily fixed. No budget handling.",
        mid: "External facing role. Mistakes cause confusion but not ruin. Small budget.",
        high: "Critical to org survival. Mistakes cause financial loss or legal issues. Large budget."
    },
    {
        category: "Operational Intensity",
        description: "Stress factors, live environment pressure, and split-second decision making.",
        low: "Asynchronous work. Deadlines are flexible. Low stress.",
        mid: "Weekly deadlines. Some coordination required. Moderate pressure.",
        high: "Live broadcast/tournament environment. Immediate reaction required. High stress."
    },
    {
        category: "Technical Skill",
        description: "Barrier to entry regarding specialized hard skills.",
        low: "General soft skills. No specialized software/knowledge needed.",
        mid: "Basic proficiency in specific tools (Canva, Spreadsheets, Discord Admin).",
        high: "Advanced specialized skills (Programming, Video Engineering, CPA Accounting)."
    },
    {
        category: "Leadership Scope",
        description: "Span of control and number of direct reports.",
        low: "Individual contributor. No direct reports.",
        mid: "Team Lead. Manages 3-5 people or a specific sub-project.",
        high: "Department Head. Manages multiple teams, budgets, and strategic direction."
    },
    {
        category: "Volume & Frequency",
        description: "The daily grind versus episodic projects.",
        low: "Occasional work. < 5 hours a week.",
        mid: "Consistent weekly tasks. 5-10 hours a week.",
        high: "Daily requirement. 'Always on' communication. 15+ hours a week."
    }
];
