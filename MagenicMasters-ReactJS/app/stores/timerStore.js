import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import TaskActionTypes from "../constants/tasksActionTypes";
import TimerConfigStore from "./timerConfigStore";
import _ from "lodash";

class TimerStore extends EventEmitter{
    constructor(){
        super();
        this._state = {
            timers: TimerConfigStore.getTimerConfigTimers()
        };
    }
    format(seconds){
        let m = Math.floor(seconds % 3600 / 60);
        let s = Math.floor(seconds % 3600 % 60);
        let timeFormatted = (m < 10 ? "0":"") + m + ":" + (s < 10 ? "0":"") + s;
        return timeFormatted;
    }
    setSelectedTimer(id){
        let index = id - 1;
        this._state.timers[index].selected = true;

        for(let i=0, len=this._state.timers.length; i<len;i++){
            if(this._state.timers[i].id !== id){
                this._state.timers[i].selected = false;
            }
        }
    }
    // editTimer(timer){ 
    //      let index = _.findIndex(this._state.timers,{id: timer.id});
    //      if(index > -1)
    //         this._state.timers[index].name = timer.name;
    //         this._state.timers[index].time = timer.time;

    // }
    getTimers(){
        return this._state.timers;
    }
    handleAction(action){
        console.log("action", action.type);
        switch(action.type){
            case TaskActionTypes.ADD_TASK:
            case TaskActionTypes.DELETE_TASK:
            case TaskActionTypes.EDIT_TASK:
             case TaskActionTypes.EDIT_TIMER:{
                Dispatcher.waitFor([TimerConfigStore.dispatchToken]);
                this._state.timers = TimerConfigStore.getTimerConfigTimers();
                this.emit('change');
                break;
            }
            case TaskActionTypes.RESET_TIMER:{
                Dispatcher.waitFor([TimerConfigStore.dispatchToken]);
                this._state.timers = TimerConfigStore.getTimerConfigTimers();
                this.emit('change');
                break;
            }
            // case TaskActionTypes.EDIT_TIMER:{
            //     this.editTimer(action.timer);
            //     this.emit('change');
            //     break;
            // }
        }

    }
}

const timerStore = new TimerStore();
Dispatcher.register(timerStore.handleAction.bind(timerStore));

Dispatcher.unregister(TimerConfigStore.dispatchToken)
TimerConfigStore.dispatchToken = Dispatcher.register(TimerConfigStore.handleAction.bind(TimerConfigStore));

export default timerStore;

// const timerStore = new TimerStore();
// timerStore.dispatchToken = Dispatcher.register(timerStore.handleAction.bind(timerStore));
// window.Dispatcher = Dispatcher;
// export default timerStore;