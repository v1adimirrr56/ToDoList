import React, { Component, Fragment } from 'react';
import { ToDoManagerTable } from './MappingTable'

class ToDoReadManagerHeader extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return  <div className="taskHeader">
                    Менеджер {this.props.id}
                </div>
    }
}

class ToDoReadManagerBody extends Component {
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.loadAllManager()
    }
    loadAllManager(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET',this.props.url + "/" +this.props.id, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ task : JSON.parse(data) });
        };
        xhr.send();
    }
    render() {
        return  <div className="taskBody">
                    <div>{task.Title}</div>
                    <div>{task.CreateTime}</div>
                    <div>{task.NormResolutionTime}</div>
                    <div>{task.Manager}</div>
                </div>
    }
}

class ToDoReadManager extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return  <Fragment>
                    <ToDoReadManagerHeader {...this.props} />
                    <ToDoReadManagerBody {...this.props} />
                </Fragment>
    }
}

export {
    ToDoReadManager
}
