export interface PropsForTodoList {
    todolst: todoTask[],
    setTodolst: (todolst: (todoTask)[]) => void;
}

export interface todoTask {

    id: number,
    task: string,
    labels: string,
    finished: boolean

}

export interface PropsForAddTask{
    todolst: todoTask[],
    setTodolst: (todolst: (todoTask)[]) => void,
    setIsEmpty:()=>void,
    setIsAddTaskOpen:(someVar:boolean)=>void
}

export interface PropsForAddButton{

    isAddTaskOpen:boolean,
    setIsAddTaskOpen:(someVar:boolean)=>void

}