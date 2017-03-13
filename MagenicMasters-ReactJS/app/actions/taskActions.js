import Dispatcher from "../dispatcher";
import TaskActiontypes from "../constants/tasksActionTypes";

export function addTask(taskId, name, description, priority, status){
    Dispatcher.dispatch({
        type: TaskActiontypes.ADD_TASK,
        task: {
            taskId,
            name,
            description,
            priority,
            status
        }
    })
}

export function deleteTask(id){
    Dispatcher.dispatch({
    type: TaskActiontypes.DELETE_TASK,
    id
    })
}

export function editTask(taskId, name, description, priority, status){
    Dispatcher.dispatch({
        type: TaskActiontypes.EDIT_TASK,
        task: {
            taskId,
            name,
            description,
            priority,
            status
        }
    })
}

export function editTimer(id, name, time){
    Dispatcher.dispatch({
        type: TaskActiontypes.EDIT_TIMER,
        timer: {
            id,
            name,
            time
        }
    })
}

export function resetTimer(){
    Dispatcher.dispatch({
        type: TaskActiontypes.RESET_TIMER,
        timers: []
    })
}
