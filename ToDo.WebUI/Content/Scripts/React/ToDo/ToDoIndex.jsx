import React, { Component } from 'react';
import { DisplayTable } from './ToDoTable';
import { ToDoTask } from './MappingTable';
import { PaginationBlock } from './Layout';

class ToDoIndex extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return <div className="toDoMain">
                    <DisplayTable tableHeader={ToDoTask.header} fieldObject={ToDoTask.fieldObject} url={this.props.url} urlOneObj={this.props.urlOneObj} />
                    <PaginationBlock/>
               </div>
    }
}

export default ToDoIndex;