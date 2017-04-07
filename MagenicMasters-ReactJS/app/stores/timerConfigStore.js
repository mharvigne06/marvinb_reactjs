import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import TaskActionTypes from "../constants/tasksActionTypes";
import TimerConfigDefault from "../constants/timerConfigDefault.js";
import _ from "lodash";

class TimerConfigStore extends EventEmitter{
    constructor(){
        super();
        // this._state = {
        //     timerConfigTimers: [
        //         { id: 1, name: 'Pomodoro', time: 120, selected: true},
        //         { id: 2, name: 'Short Break', time: 30, selected: false},
        //         { id: 3, name: 'Long Break', time: 60, selected: false},
        //     ]
        // };
        this._state = this._initialState();
        
    }
    _initialState(){
        return{
            timerConfigTimers: [
                { id: 1, name: 'Pomodoro', time: 120, selected: true},
                { id: 2, name: 'Short Break', time: 30, selected: false},
                { id: 3, name: 'Long Break', time: 60, selected: false},
            ]
        };

    }
    getTimerConfigTimers(){
        return this._state.timerConfigTimers;
    }
    editTimer(timer){ 
         let index = _.findIndex(this._state.timerConfigTimers,{id: timer.id});
         if(index > -1)
            this._state.timerConfigTimers[index].name = timer.name;
            this._state.timerConfigTimers[index].time = timer.time;

    }
    resetTimer(){
        
        let newTimers = this._initialState().timerConfigTimers;
        newTimers[0].selected = false;
        let currSelectedIndex = _.findIndex(this._state.timerConfigTimers, {selected: true}); 
        newTimers[currSelectedIndex].selected = true;

        this._state.timerConfigTimers = newTimers;
    }
    handleAction(action){
        console.log("action", action.type);
        switch(action.type){
            //case TaskActionTypes.ADD_TASK:
            //case TaskActionTypes.DELETE_TASK:
            //case TaskActionTypes.EDIT_TASK:
            case TaskActionTypes.EDIT_TIMER:{
                this.editTimer(action.timer);
                this.emit('change');
                break;
            }
            case TaskActionTypes.RESET_TIMER:{
                this.resetTimer();
                this.emit('change');
                break;
            }
            // case TaskActionTypes.EDIT_TIMER:{
            //     Dispatcher.waitFor([TimerStore.dispatchToken]);
            //     this._state.timerConfigTimers = TimerStore.getTimers();
            //     this.emit('change');
            //     break;
            // }
        }

    }
}

const timerConfigStore = new TimerConfigStore();
timerConfigStore.dispatchToken = Dispatcher.register(timerConfigStore.handleAction.bind(timerConfigStore));
window.Dispatcher = Dispatcher;
export default timerConfigStore;


// const timerConfigStore = new TimerConfigStore();
// Dispatcher.register(timerConfigStore.handleAction.bind(timerConfigStore));

// Dispatcher.unregister(TimerStore.dispatchToken)
// TimerStore.dispatchToken = Dispatcher.register(TimerStore.handleAction.bind(TimerStore));

// export default timerConfigStore;