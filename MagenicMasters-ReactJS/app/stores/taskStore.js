import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import TaskActionTypes from "../constants/tasksActionTypes";
import _ from "lodash";

class TaskStore extends EventEmitter{
    constructor(){
        super();
        this._state = {
            tasks: [
                { taskId: 1, name: 'Hiking', description: 'Climb a mountain', priority: 'High', status: 'Inprogress' },
                { taskId: 2, name: 'Swimming', description: 'Swim in the beach', priority: 'Medium', status: 'To Do' },
                { taskId: 3, name: 'Running', description: 'Run a marathon', priority: 'Low', status: 'Done' },
            ]
        }
    } 
    getTasks(){
        return this._state.tasks;
    }
    addTask(task){
        const id = this.generateId();
        this._state.tasks.push({
                taskId: id,
                name: task.name,
                description: task.description,
                priority: task.priority,
                status: task.status
        })
    }
    editTask(task){ 
         let index = _.findIndex(this._state.tasks,{taskId: task.taskId});
         if(index > -1)
            this._state.tasks[index].name = task.name;
            this._state.tasks[index].description = task.description;
            this._state.tasks[index].priority = task.priority;
            this._state.tasks[index].status = task.status;
        
    }
    generateId() {
        let max = _.maxBy(this._state.tasks, function (d) {
            return d.taskId;
        });
        return max.taskId + 1;
    }
    deleteTask(id){
        if(id > -1)
            this._state.tasks.splice(_.findIndex(this._state.tasks, {taskId: id}), 1);
    }
    handleAction(action){
        console.log("action", action.type);
        switch(action.type){
            case TaskActionTypes.ADD_TASK:{
                this.addTask(action.task);
                this.emit('change');
                break;
            }
            case TaskActionTypes.DELETE_TASK:{
                this.deleteTask(action.id);
                this.emit('change');
                break;
            }
            case TaskActionTypes.EDIT_TASK:{
                this.editTask(action.task);
                this.emit('change');
                break;
            }
        }

    }
}

const taskStore = new TaskStore();
taskStore.dispatchToken = Dispatcher.register(taskStore.handleAction.bind(taskStore));
window.Dispatcher = Dispatcher;
export default taskStore;