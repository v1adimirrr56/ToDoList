class ToDoMain extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return <div className="toDoMain">
                    <ToDoTable tableHeader={ToDoTask.header} fieldObject={ToDoTask.fieldObject} url={this.props.url} />
                    <PaginationBlock/>
               </div>
    }
}

const ToDoTask = {
    header:["Номер","Заголовок", "Дата создания","Нормативное время устранения", "Менеджер"],
    fieldObject:["Id", "Title","CreateTime", "NormResolutionTime", "Manager"]
};