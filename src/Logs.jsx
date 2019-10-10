import React, {Component} from 'react';
import {Link} from 'react-router';
import Header from './Header.jsx';
import {LogForm} from './LogForm.jsx';
import {LogsTable} from './LogsTable.jsx';
import {LogDisplay} from './LogDisplay.jsx';

export default class Logs extends React.Component {
    constructor() {
        super();
        this.state ={
            logs: [],
            filteredLogs: [],
            mostRecentLog: '',
            numberOfLogs: 7
        };
        this.addLog = this.addLog.bind(this);
    }
    componentDidMount(){
        this.loadTable();
    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) {
            console.log("didnt update");
            return;
        }
        this.loadTable();
    }
    
    loadTable() {
        fetch(`/api/logs`).then(response => {
                if(response.ok){
                    response.json().then(data => {
                        this.setState({logs: data.records});
                        this.setState({mostRecentLog: this.state.logs[this.state.logs.length - 1]});
                        console.log(this.state.logs);
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

    addLog(newLog) {
        console.log(newLog + "being added");
        fetch('/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLog),
        }).then(res => {
            if(res.ok){
                res.json().then(updatedLog => {
                    const updatedLogs = this.state.logs.concat(updatedLog);
                    this.setState({ logs: updatedLogs });
                });
            }
            else{
                res.json().then(error => {
                    alert('Failed to load log: ' + error.message);
                });
            }
        })
    }

    filterLogs() {
        if(this.state.numberOfLogs == 7){
            let end = this.state.logs.length;
            let begin = end - 7;
            this.state.filteredLogs = this.state.logs.slice(begin, end);
        }
        else{
            this.state.filteredLogs = this.state.logs;
        }
    }

    render() {
        this.filterLogs();
        
        return(
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col">
                        <LogsTable logs={this.state.filteredLogs}/>
                    </div>
                    <div className="col">
                        <LogDisplay mostRecentLog={this.state.mostRecentLog}/>
                    </div>
                </div>
                <div className="row">
                    <LogForm addLog={this.addLog}/>
                </div>
            </div>
        );
    }
}
