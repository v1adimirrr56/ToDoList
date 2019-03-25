import React, { Component } from 'react';

class ToDoReadMain extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const BlockData = this.props.children;
        return  <div className="taskMain">
                    {BlockData}
                </div>
    }
}

class ToDoRead extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return <div className="toDoMain">
                    <ToDoReadMain {...this.props} />
               </div>
    }
}

export {
    ToDoRead
}