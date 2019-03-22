class ToDoMain extends React.Component {
    render() {
        return <div className="toDoMain">
                    <ToDoTable tableHeader={ToDoManager.header} fieldObject={ToDoManager.fieldObject} url={this.props.url}/>
                    <PaginationBlock/>
               </div>
    }
}

const ToDoManager = {
    header:["Номер","Фамилия", "Имя","Отчество", "Должность"],
    fieldObject:["Id", "LastName","FirstName", "MiddleName", "Position"]
};