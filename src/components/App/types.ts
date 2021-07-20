import {todoTask} from "../task/types";

export interface PropsForApp {
    todolst: todoTask[],
    setTodolst: (todolst: (todoTask)[]) => void;
}