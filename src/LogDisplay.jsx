import React from 'react';

export class LogDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console
        return(
            <div>
                <h3>{this.props.mostRecentLog.date} Info</h3>
            </div>
        )
    }
}