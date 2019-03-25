import React, { Component } from 'react';
import { render } from 'react-dom';

import ToDoIndex from './ToDoIndex';
import { ToDoManager } from './ToDoManager';
import { ToDoRead } from './ToDoRead';
import { ToDoReadTask } from './ToDoReadTask';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class PaginationBlock extends Component {
    render() {

        return <div className="paginationBlock">
            <div>1, 2, 3,4 5,</div>
        </div>;
    }
}

class Menu extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return <ul className="menu">
            <li className="menu__item"><Link to="/">Список задач</Link></li>
            <li className="menu__item"><Link to="/filtered">Задачи с истекающим сроком</Link></li>
            <li className="menu__item"><Link to="/managers">Менеджеры</Link></li>
        </ul>;
    }
}

class LeftBlock extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return <div className="leftBlock">
            <Menu  />
        </div>
    }
}

class RightBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const BlockData = this.props.children;
        return <div className="rightBlock">
            {BlockData}
        </div>
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="main">
            <LeftBlock />
            <RightBlock {...this.props} />
        </div>
    }
}
class Root extends Component {
    constructor(props)
    {
        super(props)
    }
    render(){
        return  <BrowserRouter basename="/">
                    <Main>
                        <Switch>
                            <Route exact path="/" component={() => <ToDoIndex url="/task/GetTasks" urlOneObj="/task/getTask" />}  />
                            <Route path="/task/getTask/:id" 
                            component={(props) => <ToDoRead><ToDoReadTask postTask="/task/AddManagerTask" url="/task/GetTask" id={props.match.params.id} relatedObjUrl="/manager/GetManagers" /></ToDoRead>}  
                            />
                            <Route path="/managers" component={() => <ToDoManager url="/manager/GetManagers" urlOneObj="/manager/GetManager" />}  />
                            <Route path="/filtered" component={() => <ToDoIndex url="/task/getTask/Filtered" urlOneObj="/task/getTask" />}  />
                        </Switch>
                    </Main>
                </BrowserRouter>
    }
}


render(<Root />,
    document.getElementById('root')
);

export {
    PaginationBlock
}