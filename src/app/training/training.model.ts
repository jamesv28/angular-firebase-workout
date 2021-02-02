export interface Training {
    id: string;
    name: string;
    duration: number;
    caloriesBurned: number;
    finished?: Date;
    state?: 'completed' | 'cancelled' | null;
}