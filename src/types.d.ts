export interface Task {
    title: string;
    isDone: boolean;
}

export interface TaskListProps {
    [taskId:string]: Task;
}