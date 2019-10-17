import React, {Component} from 'react';
import Header from './Header.jsx';
import {LogForm} from './LogForm.jsx';
import {LogsTable} from './LogsTable.jsx';
import {LogDisplay} from './LogDisplay.jsx';

export default class Logs extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            logs: [],
            filteredLogs: [],
            mostRecentLog: '',
            selectedLog: '',
            numberOfLogs: 7
        };
        this.addLog = this.addLog.bind(this);
        this.filterLogs = this.filterLogs.bind(this);
        this.nextLog = this.nextLog.bind(this);
        this.prevLog = this.prevLog.bind(this);
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
                        //console.log(typeof data.records);
                        this.setState({logs: data.records});
                        this.setState({mostRecentLog: this.state.logs[0]});
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
        //console.log(newLog + "being added");
        fetch('/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLog),
        }).then(res => {
            if(res.ok){
                res.json().then(updatedLog => {
                    console.log(typeof this.state.logs + " logs");
                    const updatedLogs = this.state.logs.concat(updatedLog);
                    this.setState({ logs: updatedLogs });
                    console.log(typeof this.state.logs + " logs after");
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
        let unsortedLogs = this.state.logs;
        let sortedLogs = unsortedLogs.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        if(this.state.numberOfLogs == 7){
            this.state.filteredLogs = sortedLogs.slice(0, 7);
        }
        else{
            this.state.filteredLogs = sortedLogs;
        }
        if(this.state.selectedLog === ''){
            this.state.selectedLog = this.state.mostRecentLog;
        }
    }

    nextLog() {
        let curIndex = this.state.filteredLogs.indexOf(this.state.selectedLog);
        if(curIndex === 0){
            return;
        }
        else{
            this.setState({selectedLog: this.state.filteredLogs[curIndex - 1]});
        }
    }

    prevLog() {
        let curIndex = this.state.filteredLogs.indexOf(this.state.selectedLog);
        if(curIndex === this.state.filteredLogs.length - 1){
            return;
        }
        else{
            this.setState({selectedLog: this.state.filteredLogs[curIndex + 1]});
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
                        <LogDisplay selectedLog={this.state.selectedLog} nextLog={this.nextLog} prevLog={this.prevLog}/>                 
                    </div>
                </div>
                <br/>
                <hr/>
                <LogForm addLog={this.addLog}/>
            </div>
        );
    }
}
