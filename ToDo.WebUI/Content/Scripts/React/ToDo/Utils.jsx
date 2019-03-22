class IDTask extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return "IM" + this.props.Id;
    }
}

class CommonLink extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <a href="task/index" className="commonLink">{this.props.children}</a>
    }
}


class CommonInput extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  <div> 
                    <label className="commonLabel">{this.props.label}</label>
                    <input className="commonInput"/>
                </div>
    }
}

class BtnPrimary extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  <div className={`btnPrimary ${this.props.className}`}> 
                    {this.props.btnText}
                </div>
    }
}
function GetDateStr(dateTime) 
{
    if(dateTime)
    {
        const hours =  parseInt(dateTime.getHours());
        const minutes = parseInt(dateTime.getMinutes());
        const seconds = parseInt(dateTime.getSeconds());

        const day = parseInt(dateTime.getDay()) + 1;
        const month = parseInt(dateTime.getMonth()) + 1;

        const time = `${day<10 ? '0'+day : day}.${month<10 ? '0'+month : month} ${hours<10 ? '0'+hours : hours}:${minutes<10 ? '0'+minutes : minutes}:${seconds<10 ? '0'+seconds : seconds}`;

        return time;
    }
    return;
}