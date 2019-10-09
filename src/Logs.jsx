import React, {Component} from 'react';
import Header from './Header.jsx';
import {LogForm} from './LogForm.jsx';

export default class Logs extends React.Component {
    constructor() {
        super();
        this.state ={
            logs: [],
            numberOfLogs: 7
        }
    }

    componentDidMount(){
        this.loadTable();
    }

    componentDidUpdate(previousProps) {
        if (previousProps === this.props) {
            return;
        }
        this.loadTable();
    }
    
    loadTable() {
        fetch(`/api/logs`).then(response => 
            {
                if(response.ok){
                    response.json().then(data => {
                        this.setState({logs: data.records})
                    });
                }
                else{
                    response.json().then(error => {
                        alert("Failed to load table:" + error.message)
                    })
                }
            }
        )
    }


    addRow() {
        let table = document.getElementById("WellnessTable");
        let tr = table.insertRow(1);
        let form = document.getElementById("newLogForm");
        let plusNewLog = this.state.logs.concat(form);
        this.setState({logs: plusNewLog});
    }

    render() {
        let filteredLogs = [];
        if(this.state.numberOfLogs == 7){
            let end = this.state.logs.length;
            let begin = end - 7;
            filteredLogs= this.state.logs.slice(begin, end);
        }
        else{
            filteredLogs: this.state.logs;
        }
        return(
            <div className="container">
                <Header/>
                <div className="row">
                <table id="WellnessTable">
                    <thead>
                        <th>Date</th>
                        <th>Overall</th>
                        <th>Food</th>
                        <th>Activity</th>
                    </thead>
                    <tbody>
                        {filteredLogs.map((data, key) => {
                            return(
                            <tr key={key}>
                                <td><a href={"/log.html"}>{data.date}</a></td>
                                <td>{data.overall}</td>
                                <td>{data.food}</td>
                                <td>{data.activity}</td>
                            </tr>
                            )}
                        )}
                    </tbody>
                </table>
                </div>
                <LogForm/>
            </div>
        );
    }
}
