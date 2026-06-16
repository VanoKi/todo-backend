export type TodoList = {
    id: string;
    title: string;
    addedDate: string;
    order: number;
}

export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    status: number;      // 0 = new, 2 = completed
    priority: number;
    startDate: string;
    deadline: string;
    todoListId: string;
    order: number;
    addedDate: string;
}

export type Db = {
    todoLists: TodoList[];
    tasks: Task[];
}

export type ApiResponce<T> = {
    resultCode: 0 | 1
    data: T
    messages: string[]
    fieldsErrors: unknown[]
}