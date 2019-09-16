var logsTableNode = document.getElementById("logs");

class Logs extends React.Component {
    constructor() {
        super();
        this.state ={
            logs: []
        }
    }

    componentDidMount(){
        this.loadTable();
    }
    
    loadTable() {
        fetch(`/api/logs`).then(response => 
            {
                if(response.ok){
                    response.json().then(data => {
                        this.setState({logs: data.records})
                        console.log("Total number of logs: ", data._rowsOfLogs.totalLogs)
                        console.log(data.records)
                    });
                }
                else{
                    response.json().then(error => {
                        alert("Failed to load table:" + error.message)
                    })
                }
            })
    }

    render() {
        return(
            <div className="row">
                <table id="WellnessTable">
                    <thead>
                        <th>Date</th>
                        <th>Overall</th>
                        <th>Food</th>
                        <th>Activity</th>
                    </thead>
                    <tbody>
                        {this.state.logs.map((data, key) => {
                            return(
                                <tr key={key}>
                                    <td>{data.date}</td>
                                    <td>{data.overall}</td>
                                    <td>{data.food}</td>
                                    <td>{data.activity}</td>
                                </tr>
                            )}
                            )}
                    </tbody>
                </table>
            </div>
        );
    }
}

function addRow() {
    let table = document.getElementById("WellnessTable");
    let tr = table.insertRow(1);
    let form = document.getElementById("newLogForm");
    for(let i = 0; i < 8; i++){
        tr.insertCell(0).appendChild(form.elements[i].value);
    }
}

ReactDOM.render(<Logs />, logsTableNode);