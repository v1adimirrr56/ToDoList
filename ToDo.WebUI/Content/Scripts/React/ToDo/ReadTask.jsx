class TaskMain extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return  <div className="taskMain">
                    <TaskHeader taskId={this.props.taskId} />
                    <TaskBody url={this.props.url} taskId={this.props.taskId} allManager={this.props.allManager} />
                </div>
    }
}

class TaskHeader extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return  <div className="taskHeader">
                    Задача {this.props.taskId}
                </div>
    }
}

class TaskBody extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { task : [],  managerView:false };
        this.toggleManagerList = this.toggleManagerList.bind(this);
    }
    toggleManagerList()
    {
        this.setState({managerView : (this.state.managerView) ? false: true});
    }
    componentDidMount()
    {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',this.props.url + "/" +this.props.taskId, true);
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
            return  <ChooseManager  toggleManagerList={this.toggleManagerList} {...this.props} />

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
class ChooseManager extends React.Component {
    constructor(props){
        super(props)
        this.toggleManagerList = this.toggleManagerList.bind(this);
    }
    toggleManagerList()
    {
        this.props.toggleManagerList();
    }
    render(){
        return <ChoosingTable 
        toggleManagerList={this.toggleManagerList} 
        tableHeader={ToDoManager.header} 
        fieldObject={ToDoManager.fieldObject} 
        url={this.props.allManager} 
        urlOneObj="#" 
        taskId={this.props.taskId} />;
    }
}

class ToDoMain extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <div className="toDoMain">
                    <TaskMain {...this.props} />
               </div>
    }
}

const ToDoManager = {
    header:["Номер","Фамилия", "Имя","Отчество", "Должность"],
    fieldObject:["Id", "LastName","FirstName", "MiddleName", "Position"]
};
