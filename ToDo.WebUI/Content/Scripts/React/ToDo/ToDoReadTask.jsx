import React, { Component, Fragment } from 'react';
import { BtnPrimary } from './Utils'
import { ChooseManager } from './ReadManager'
import { History } from './History';

class ToDoTaskReadHeader extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return  <div className="taskHeader">
                    Задача {this.props.id}
                </div>
    }
}

class ToDoTaskReadBody extends Component {
    constructor(props)
    {
        super(props);
        this.state = { task : [],  managerView:false };
        this.toggleManagerList = this.toggleManagerList.bind(this);
        this.loadAllManager = this.loadAllManager.bind(this);
    }
    toggleManagerList()
    {
        this.loadAllManager();
        this.setState({managerView : (this.state.managerView) ? false: true});
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
        const { task, managerView } = this.state;
        if (managerView)
        {
            return  <ChooseManager loadAllManager={this.loadAllManager}  toggleManagerList={this.toggleManagerList} {...this.props} />
        }
        else
        return  <div className="taskBody">
                    <div>{task.Title}</div>
                    <div>{task.CreateTime}</div>
                    <div>{task.NormResolutionTime}</div>
                    <div>{task.Manager}</div>
                    <BtnPrimary onClick={this.toggleManagerList}  btnText="Назначить задачу"/>
                </div>
    }
}

class ToDoReadTask extends Component {
    constructor(props){
        super(props)
    }
    render() {
        History.replace('/',{ some: 'state11' });
        return  <Fragment>
                    <ToDoTaskReadHeader {...this.props} />
                    <ToDoTaskReadBody {...this.props} />
                </Fragment>
    }
}

export {
    ToDoReadTask
}
