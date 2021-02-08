export interface Training {
    id: string;
    name: string;
    duration: number;
    calories: number;
    finished?: Date;
    state?: 'completed' | 'cancelled' | null;
}