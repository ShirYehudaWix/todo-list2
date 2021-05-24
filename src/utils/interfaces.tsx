export interface PropsForTodoList {
    todolst: todoTask[],
    setTodolst: (todolst1: (todoTask)[]) => void;
}

export interface todoTask {

    id: number,
    task: string,
    labels?: string,
    finished: boolean

}