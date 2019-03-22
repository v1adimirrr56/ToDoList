class ToDoTable extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        if(this.props.choosingTable)
        {
            return <ChoosingTable {...this.props} />
        }
        else
        {
            return <DisplayTable {...this.props} />
        }
    }
}

class DisplayTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { toDoItems : []};
    }
    componentDidMount()
    {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ toDoItems : JSON.parse(data) });
        };
        xhr.send();
    }
    render() {
        const { tableHeader, fieldObject, urlOneObj} = this.props;
        const { toDoItems } = this.state;
        const items = toDoItems.map((row, index) => {
            const fields = fieldObject.map((field, subindex) => {
                            if(row[field] instanceof Date)
                            {
                                return <td key={subindex} className="toDoList__row__item">{GetDateStr(row[field])}</td>
                            }
                            else if(field === "Id")
                            {
                                return <td key={subindex} className="toDoList__row__item"> <CommonLink href={`${urlOneObj}/${row[field]}`} ><IDTask Id={row[field]} /></CommonLink>  </td>
                            }
                            else
                            {
                                return <td key={subindex} className="toDoList__row__item">{row[field]}</td>
                            }
                            
                        });
            return <tr className="toDoList__row" key={index}>
                        {fields}
                    </tr>
        });
        const header = tableHeader.map((val, index) => {
            return <th key={index} className="toDoList__header__item">{val}</th>
        });
        return (
            <table className="toDoList">
                <thead>
                    <tr className="toDoList__header">
                        {header}     
                    </tr>
                </thead>
                <tbody className="toDoList__body">
                    {items}
                </tbody>
            </table>
        );
    }
}
class ChoosingTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { toDoItems : []};
        this.handleClick = this.handleClick.bind(this);
        console.log(props)
    }
    handleClick(managerRow, e)
    {
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/task/AddManagerTask/?id=' + this.props.taskId + '&manager=' + managerRow.FirstName, true);
        xhr.send(managerRow);
        this.props.toggleManagerList();
    }
    componentDidMount()
    {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ toDoItems : JSON.parse(data) });
        };
        xhr.send();
    }
    render() {
        const { tableHeader, fieldObject, urlOneObj} = this.props;
        const { toDoItems } = this.state;
        const items = toDoItems.map((row, index) => {
            const fields = fieldObject.map((field, subindex) => {
                            if(field === "Id")
                            {
                                return <td key={subindex} className="toDoList__row__item"> <IDTask Id={row[field]} /></td>
                            }
                            else
                            {
                                return <td key={subindex} className="toDoList__row__item">{row[field]}</td>
                            }
                            
                        });
            return <tr className="toDoList__row" key={index}  onClick={(e) => this.handleClick(row, e)} >
                        {fields}
                    </tr>
        });
        const header = tableHeader.map((val, index) => {
            return <th key={index} className="toDoList__header__item">{val}</th>
        });
        return (
            <table className="toDoList">
                <thead>
                    <tr className="toDoList__header">
                        {header}     
                    </tr>
                </thead>
                <tbody className="toDoList__body">
                    {items}
                </tbody>
            </table>
        );
    }
}