export interface todoTask {
    id: number,
    task: string,
    labels: string,
    finished: boolean
}

export interface PropsForTask {
    task: todoTask,
    id: number,
    setChecked: (id: number) => void
}
export interface PropsForConnectedTask {
    id: number,
}