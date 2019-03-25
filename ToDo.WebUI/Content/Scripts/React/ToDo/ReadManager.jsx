import React, { Component } from 'react'
import { ChoosingTable } from './ToDoTable'
import { ToDoManagerTable } from './MappingTable'

class ChooseManager extends Component {
    constructor(props){
        super(props)
        this.toggleManagerList = this.toggleManagerList.bind(this);
        this.loadAllManager = this.loadAllManager.bind(this);
    }
    loadAllManager() {
        this.props.loadAllManager()
    }

    toggleManagerList()
    {
        this.props.toggleManagerList();
    }
    render(){
        return <ChoosingTable 
        toggleManagerList={this.toggleManagerList} 
        loadAllManager={this.loadAllManager}
        tableHeader={ToDoManagerTable.header} 
        fieldObject={ToDoManagerTable.fieldObject} 
        {...this.props} />;
    }
}

export {
    ChooseManager
}