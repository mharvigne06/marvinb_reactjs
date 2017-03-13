import React, { Component } from "react";
import ReactBootstrap, {Modal} from "react-bootstrap";

import TimerTable from "./TimerTable.jsx";

class TimerConfig extends Component {
    constructor(){
        super();
    }
    componentWillUnmount(){

    }
    render() {
        return (
            <Modal show={this.props.showTimerConfig} >
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <TimerTable timers={this.props.timers}/>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.props.resetTimerConfig}>Reset Default</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.props.closeTimerConfig}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default TimerConfig;