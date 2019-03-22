const taskList = [
    {Id : 1, Title : "Loream ipsam", 
    CreateTime : new Date().getTime(), 
    NormResolutionTime : "Norm time", 
    Manager : "Manager"},
];


class TaskMain extends React.Component {
    render() {
        return  <div className="taskMain">
                    <TaskHeader />
                    <TaskBody />
                </div>
    }
}

class TaskHeader extends React.Component {
    render() {
        return  <div className="taskHeader">
                    Задача {taskList.Id}
                </div>
    }
}

class TaskBody extends React.Component {
    render() {
        let inputList = 
        <form onSubmit={this.handleSubmit}>
            <CommonInput label="Заголовок"/>
            <CommonInput label="Дата создания"/>
            <CommonInput label="Нормативное время устранения"/>
            <CommonInput label="Менеджер"/>
        </form>
        return  <div className="taskBody">
                    <BtnPrimary className="btnPrimary_marginRight" btnText="Сохранить" />
                    <BtnPrimary btnText="Назначить" />
                    {inputList}
                </div>
    }
}

class ToDoMain extends React.Component {
    render() {
        return <div className="toDoMain">
                    <TaskMain />
               </div>
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
