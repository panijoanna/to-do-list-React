export interface Tasks {
    id: number | string;
    content: string;
    done: boolean;
}

export interface TasksState {
    tasks: Tasks[];
    hideDoneTasks: boolean;
    loading: boolean;
}