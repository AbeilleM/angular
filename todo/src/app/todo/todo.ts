export interface Todo{
    id: number;
    userId: number;
    title: string;
    completed : boolean;
    dateCreation : string;
    dateCompleted : string | null;
}