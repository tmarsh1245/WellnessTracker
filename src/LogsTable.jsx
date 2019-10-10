import React from 'react';

export class LogsTable extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <table className="table-hover" id="WellnessTable">
                    <thead>
                        <th scope="col">Date</th>
                        <th scope="col">Overall</th>
                        <th scope="col">Food</th>
                        <th scope="col">Activity</th>
                    </thead>
                    <tbody>
                        {this.props.logs.map((data, key) => {
                            return(
                            <tr key={key}>
                                <td scope="row"><a href={"/log.html"}>{data.date}</a></td>
                                <td>{data.overall}</td>
                                <td>{data.food}</td>
                                <td>{data.activity}</td>
                            </tr>
                            )}
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}