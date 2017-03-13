import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import TaskActionTypes from "../constants/tasksActionTypes";
import TaskStore from "./taskStore.js";
import _ from "lodash";

class PriorityTaskStore extends EventEmitter{
    constructor(){
        super();
        this._state = {
            priorityTasks: _.filter(TaskStore.getTasks(), {priority: "High"})
        }
    }
    getPriorityTasks(){
        return this._state.priorityTasks;
    }
    handleAction(action){
        //console.log("action", action.type);
        switch(action.type){
            case TaskActionTypes.ADD_TASK:{
                Dispatcher.waitFor([TaskStore.dispatchToken]);
                this._state.priorityTasks = _.filter(TaskStore.getTasks(), {priority: "High"})
                this.emit('change');
                break;
            }
            case TaskActionTypes.DELETE_TASK:
            case TaskActionTypes.EDIT_TASK:{
                Dispatcher.waitFor([TaskStore.dispatchToken]);
                this._state.priorityTasks = _.filter(TaskStore.getTasks(), {priority: "High"})
                this.emit('change');
                break;
            }
        }
    }
}

const priorityTaskStore = new PriorityTaskStore();
Dispatcher.register(priorityTaskStore.handleAction.bind(priorityTaskStore));

Dispatcher.unregister(TaskStore.dispatchToken)
TaskStore.dispatchToken = Dispatcher.register(TaskStore.handleAction.bind(TaskStore));

export default priorityTaskStore;