var React = require("react");
var TaskTable = require("./TaskTable.jsx");
var AddButton = require("./AddButton.jsx");
var NewModal = require("./NewModal.jsx");
var ReactBootstrap = require("react-bootstrap");
var _ = require('lodash');


var data = [
    { taskId: 1, name: 'Hiking', description: 'Climb a mountain', priority: 'Medium', status: 'Inprogress' },
    { taskId: 2, name: 'Swimming', description: 'Swim in the beach', priority: 'Medium', status: 'Todo' },
    { taskId: 3, name: 'Running', description: 'Run a marathon', priority: 'Medium', status: 'Done' }
];

localStorage.setItem("data", JSON.stringify(data));
var retrievedData = localStorage.getItem("data")

var TaskPanel = React.createClass({
    getInitialState: function(){
        return {
            items: JSON.parse(retrievedData),
            showModal: false,
            name: "",
            desc: "",
            priority: "High",
            status: "To Do"
            
        }
    },
    handleFieldChange: function(event){
        var fieldName = event.target.id
        var value = event.target.value;

        if(fieldName=="name"){this.setState({name: value});}
        if(fieldName=="desc"){this.setState({desc: value});}
        if(fieldName=="priority"){this.setState({priority: value});}
        if(fieldName=="status"){this.setState({status: value});}
    },
    handleModalOpen: function(){
        this.setState({showModal: true});
    },
    handleModalClose: function(){
         this.setState({
             name: "",
             desc: "",
             priority: "High",
             status: "To Do"
         });
        this.setState({showModal: false});
    },
    handleModalSave: function(){
        var itemArray = this.state.items;
        itemArray.push({taskId: this.generateId(), name: this.state.name, description: this.state.desc, priority: this.state.priority, status: this.state.status});
        this.setState({items: itemArray});
        this.handleModalClose();
    },
    generateId: function () {
        var max = _.maxBy(this.state.items, function (d) {
            return d.taskId;
        });

        return max.taskId + 1;
    },
    deleteItem: function(item){
        var itemArray = this.state.items.filter(function(itm){
            return item.taskId !== itm.taskId;
        });
        
         this.setState({items: itemArray});
    },
    render: function(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">Task Master List</div>
                    <div className="panel-body">
                        <TaskTable taskData={this.state.items} 
                                handleRowDelete={this.deleteItem}
                                />
                    </div>
                <div style={{padding:20}}>
                     <AddButton onClick={this.handleModalOpen}/>
                     <NewModal showModal={this.state.showModal} 
                            close={this.handleModalClose} 
                            save={this.handleModalSave} 
                            handleFieldChange={this.handleFieldChange}
                            nameValue={this.state.name}
                            descValue={this.state.desc}
                            priorityValue={this.state.priority}
                            statusValue={this.state.status}/>
                </div>
            </div>
        );
    }
});

module.exports = TaskPanel;