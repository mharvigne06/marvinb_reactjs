import React, { Component } from "react";
import ReactBootstrap, { Well, Row, Col, Tab, Nav, NavItem } from "react-bootstrap";
import _ from "lodash";

import TimerStore from "../../stores/timerStore.js";
import TimerConfigStore from "../../stores/timerConfigStore.js";
import AddButton from "../tasks/AddButton.jsx";
import TimerConfig from "./TimerConfig.jsx"
import * as TasksActions from "../../actions/taskActions";
import TimerConfigDefault from "../../constants/timerConfigDefault.js";

class TimerMaster extends Component{
    constructor(){
        super();
        this.state = {
             timers: [],
             currTime: _.find(TimerConfigStore.getTimerConfigTimers(), {selected: true}).time,
             intervalId: 0,
             showTimerConfig: false
        };

        this.handleOnclickPomodoro = this.handleOnclickPomodoro.bind(this);
        this.handleOnclickShortBreak = this.handleOnclickShortBreak.bind(this);
        this.handleOnclickLongBreak = this.handleOnclickLongBreak.bind(this);
        this.handleOnclickTimerConfig = this.handleOnclickTimerConfig.bind(this);
        this.closeTimerConfig = this.closeTimerConfig.bind(this);
        this.resetTimerConfig = this.resetTimerConfig.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.timer = this.timer.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.setTimers = this.setTimers.bind(this);

    }
    componentWillMount(){
        clearInterval(this.state.intervalId);
        this.setTimers();
        TimerConfigStore.on('change', this.setTimers);
    }
    setTimers(){
        this.setState({timers: TimerConfigStore.getTimerConfigTimers(),
                    currTime: _.find(TimerConfigStore.getTimerConfigTimers(), {selected: true}).time
                 });
    }
    timer(){
        let newTime = this.state.currTime - 1;
        if(newTime >=0){
            this.setState({currTime: newTime})
        }
        else{
            clearInterval(this.state.intervalId);
            alert("Time is up!");
        }
        
    }
    handleOnclickTimerConfig(){
        clearInterval(this.state.intervalId);
        let time = _.find(TimerConfigStore.getTimerConfigTimers(), {selected: true}).time;
        this.setState({currTime: time, showTimerConfig: true});
    }

    handleOnclickPomodoro(){
        clearInterval(this.state.intervalId);
        this.setState({currTime: this.state.timers[0].time });
        TimerStore.setSelectedTimer(1);
    }

    handleOnclickShortBreak(){
        clearInterval(this.state.intervalId);
       this.setState({currTime: this.state.timers[1].time }); 
       TimerStore.setSelectedTimer(2);
    }

    handleOnclickLongBreak(){
        clearInterval(this.state.intervalId);
        this.setState({currTime: this.state.timers[2].time });
        TimerStore.setSelectedTimer(3);
    }

    handleStart(){
        let intervalId = setInterval(this.timer, 1000);
        this.setState({intervalId: intervalId});
    }
    handleStop(){
        clearInterval(this.state.intervalId);
    }
    handleReset(){
         clearInterval(this.state.intervalId);
         let time = _.find(TimerConfigStore.getTimerConfigTimers(), {selected: true}).time;
         this.setState({currTime: time});
    }
    closeTimerConfig(){
        this.setState({showTimerConfig: false });
    }
    resetTimerConfig(){
        
        TasksActions.resetTimer();
       
    }
    render() {
        return (
            <div className="container">
                <Row>
                    <Col sm={12}>
                        <Well className="text-center" style={{ height: "300px" }}>
                            <Tab.Container id="tabs" defaultActiveKey={1}>
                                <Row>
                                    <Col sm={12} >
                                        <Nav bsStyle="pills" style={{display:"inline-block"}} >
                                            <NavItem key={this.state.timers[0].id} 
                                                    eventKey={this.state.timers[0].id} 
                                                    onClick={this.handleOnclickPomodoro}>
                                                    {this.state.timers[0].name}
                                            </NavItem>
                                            <NavItem key={this.state.timers[1].id} 
                                                    eventKey={this.state.timers[1].id} 
                                                    onClick={this.handleOnclickShortBreak}>
                                                    {this.state.timers[1].name}
                                            </NavItem>
                                            <NavItem key={this.state.timers[2].id}
                                                    eventKey={this.state.timers[2].id} 
                                                    onClick={this.handleOnclickLongBreak}>
                                                    {this.state.timers[2].name}
                                            </NavItem>
                                        </Nav>
                                        <button className="glyphicon glyphicon-cog" style={{border: "none", background: "none"}} onClick={this.handleOnclickTimerConfig}/>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content animation>
                                        {this.state.timers.map((timer)=>{
                                            return(
                                                <Tab.Pane key={timer.id} eventKey={timer.id} ><span className="text-danger" style={{fontSize: 100}}>{TimerStore.format(this.state.currTime)}</span></Tab.Pane>
                                            );
                                        })}

                                        <Row style={{display:"inline-block", padding: 30}} >
                                            <Col sm={2}>
                                             <AddButton title="Start" _className="btn btn-success btn-sm" onClick={this.handleStart}/>
                                             </Col>
                                             <Col sm={2}>
                                            <AddButton title="Stop" _className="btn btn-danger btn-sm" onClick={this.handleStop}/>
                                            </Col>
                                            <Col sm={3}>
                                            <AddButton title="Reset" _className="btn btn-warning btn-sm" onClick={this.handleReset}/>
                                            </Col>
                                            <Col sm={1}>
                                            <AddButton title="Complete" _className="btn btn-primary btn-sm"/>
                                            </Col>
                                        </Row>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Well>
                    </Col>
                </Row>
                
                
                <TimerConfig showTimerConfig={this.state.showTimerConfig} 
                        closeTimerConfig={this.closeTimerConfig}
                        resetTimerConfig={this.resetTimerConfig}
                        timers={this.state.timers}
                        title="Timer Configuration"/>
            </div>
        );
    }
}

export default TimerMaster;