var React = require("react");
var Button = require("./Button.jsx");


var TaskItem = React.createClass({
    getInitialState: function(){
        return{
                editControlsVisible: "none",
                viewControlsVisible: "inline",
                name: this.props.taskItemData.name,
                desc: this.props.taskItemData.description,
                priority: this.props.taskItemData.priority,
                status: this.props.taskItemData.status
        }
    },
    handleRowEdit: function(){
        this.setState({
            editControlsVisible: "inline",
            viewControlsVisible: "none"
        });
    },
    handleRowSave: function(){
        this.setState({
            editControlsVisible: "none",
            viewControlsVisible: "inline"
        });
        this.props.taskItemData.name = this.state.name;
        this.props.taskItemData.description = this.state.desc;
        this.props.taskItemData.priority = this.state.priority;
        this.props.taskItemData.status = this.state.status;
    },
    handleRowCancel: function(){
        this.setState({
            editControlsVisible: "none",
            viewControlsVisible: "inline",
            name: this.props.taskItemData.name,
            desc: this.props.taskItemData.description,
            priority: this.props.taskItemData.priority,
            status: this.props.taskItemData.status
        });
    },
    handleRowDelete: function(item){
        return function(e){
            e.preventDefault();
            return this.props.handleRowDelete(item);
        }.bind(this);
        
    },
    handleFieldChange: function(event){
        var fieldName = event.target.id
        var value = event.target.value;

         if(fieldName=="name"){this.setState({name: value});}
         if(fieldName=="desc"){this.setState({desc: value});}
         if(fieldName=="priority"){this.setState({priority: value});}
         if(fieldName=="status"){this.setState({status: value});}
    },
    render: function(){
        return(
            <tr>
                <td>
                    <div style={{display: this.state.viewControlsVisible}}>
                        <h5>{this.props.taskItemData.name}
                                <div>
                                    <small>{this.props.taskItemData.description}</small>
                                </div>
                        </h5>
                    </div>
                    <div style={{display: this.state.editControlsVisible}}>
                        <input type="text" id="name" onChange={this.handleFieldChange} value={this.state.name}/><br/>
                        <input type="text" id="desc" onChange={this.handleFieldChange} value={this.state.desc}/>
                    </div>
                </td>
                <td>
                    <div style={{display: this.state.viewControlsVisible}}>
                        {this.props.taskItemData.priority}
                    </div>
                    <div style={{display: this.state.editControlsVisible}}>
                        <select id="priority" onChange={this.handleFieldChange} value={this.state.priority}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div style={{display: this.state.viewControlsVisible}}>
                        {this.props.taskItemData.status}
                    </div>
                    <div style={{display: this.state.editControlsVisible}}>
                        <select id="status" onChange={this.handleFieldChange} value={this.state.status}>
                            <option>To Do</option>
                            <option>Inprogress</option>
                            <option>Done</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div>
                        <Button buttonClass="btn btn-primary btn-sm" 
                                icon="glyphicon glyphicon-pencil" 
                                disp={this.state.viewControlsVisible} 
                                onClick={this.handleRowEdit} 
                                btnId={this.props.taskItemData.taskId}/>
                        <Button buttonClass="btn btn-danger btn-sm" 
                                icon="glyphicon glyphicon-trash" 
                                disp={this.state.viewControlsVisible} 
                                onClick={this.handleRowDelete(this.props.taskItemData)} 
                                btnId={this.props.taskItemData.taskId}/>
                        <Button buttonClass="btn btn-success btn-sm" 
                                icon="glyphicon glyphicon-floppy-disk" 
                                disp={this.state.editControlsVisible} 
                                onClick={this.handleRowSave} 
                                btnId={this.props.taskItemData.taskId}/>
                        <Button buttonClass="btn btn-danger btn-sm" 
                                icon="glyphicon glyphicon-remove" 
                                disp={this.state.editControlsVisible} 
                                onClick={this.handleRowCancel} 
                                btnId={this.props.taskItemData.taskId}/>
                    </div>
                </td>
            </tr>             
        );
    }
});

module.exports = TaskItem;
