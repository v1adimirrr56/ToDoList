const toDoItems = [
    {Id : 1, LastName : "Loream ipsam", 
    FirstName : "Loream ipsam", 
    MiddleName : "Loream ipsam", 
    Position : "Position"}
];

class ToDoMain extends React.Component {
    render() {
        return <div className="toDoMain">
                    <ToDoTable tableHeader={ToDoManager.header} fieldObject={ToDoManager.fieldObject}/>
                    <PaginationBlock/>
               </div>
    }
}

const ToDoManager = {
    header:["Номер","Фамилия", "Имя","Отчество", "Должность"],
    fieldObject:["Id", "LastName","FirstName", "MiddleName", "Position"]
};

ReactDOM.render(<Main />, document.getElementById('root'));