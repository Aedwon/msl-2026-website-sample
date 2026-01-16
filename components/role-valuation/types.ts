export interface CriteriaWeights {
    impact: number;
    intensity: number;
    skill: number;
    leadership: number;
    volume: number;
}

export interface RawRoleScores {
    id: string;
    name: string;
    impact: number;
    intensity: number;
    skill: number;
    leadership: number;
    volume: number;
}

export interface CalculatedRole extends RawRoleScores {
    finalScore: number;
    tier: number;
    tierLabel: string;
    tierColor: string;
    weeklyDiamonds: number;
}

export type TierDiamonds = Record<number, number>;

export enum Tier {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6
}
