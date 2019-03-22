class ToDoTable extends React.Component {
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
            this.setState({ toDoItems : data });
        };
        xhr.send();
    }
    render() {
        const { tableHeader, fieldObject} = this.props;
        const { toDoItems } = this.state;
        const items = toDoItems.map((row, index) => {
            const fields = fieldObject.map((field, subindex) => {
                            if(row[field] instanceof Date)
                            {
                                return <td key={subindex} className="toDoList__row__item">{GetDateStr(row[field])}</td>
                            }
                            else if(field === "Id")
                            {
                                return <td key={subindex} className="toDoList__row__item"> <CommonLink><IDTask Id={row[field]} /></CommonLink>  </td>
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