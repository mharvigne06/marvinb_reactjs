import React, { Component } from "react";
import ReactBootstrap, { Nav, NavItem, Popover, OverlayTrigger, ListGroup, ListGroupItem, Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

class FieldGroup extends Component{
    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type="text" value={this.props.value} onChange={this.props.onChange}></FormControl>
            </FormGroup>
  
        );
    }
}

export default FieldGroup;