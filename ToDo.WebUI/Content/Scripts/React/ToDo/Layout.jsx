class PaginationBlock extends React.Component {
    render() {

        return <div className="paginationBlock">
            <div>1, 2, 3,4 5,</div>
        </div>;
    }
}

class Menu extends React.Component {
    render() {
        return <ul className="menu">
            <li className="menu__item"><a href="/todo">Список задач</a></li>
            <li className="menu__item"><a href="/todo">Задачи с истекающим сроком</a></li>
            <li className="menu__item"><a href="manager/index">Менеджеры</a></li>
        </ul>;
    }
}

class LeftBlock extends React.Component {
    render() {
        return <div className="leftBlock">
            <Menu />
        </div>
    }
}

class RightBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="rightBlock">
            <ToDoMain url={this.props.url} />
        </div>
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="main">
            <LeftBlock />
            <RightBlock url={this.props.url} />
        </div>
    }
}
