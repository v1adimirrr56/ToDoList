import React, { Component } from 'react';
import { DisplayTable } from './ToDoTable';
import { ToDoManagerTable } from './MappingTable';
import { PaginationBlock } from './Layout';

class ToDoManager extends Component {
    render() {
        return <div className="toDoMain">
                    <DisplayTable tableHeader={ToDoManagerTable.header} fieldObject={ToDoManagerTable.fieldObject} url={this.props.url} urlOneObj="#"/>
                    <PaginationBlock/>
               </div>
    }
}

export {
    ToDoManager
}