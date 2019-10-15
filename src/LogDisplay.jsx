import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class LogDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let selectedLog = this.props.mostRecentLog;
        return(
            <div>
                <h3 className="healthDisplayTitle">Health Report: {selectedLog.date}</h3>
                <br/>
                <h5>How you felt: {starGenerator(selectedLog.overall)}</h5>
                <p>Morning Medication: {medsIconGenerator(selectedLog.morning)} Evening Medication: {medsIconGenerator(selectedLog.evening)}</p>
                <h5>How you ate: {starGenerator(selectedLog.food)}</h5>
                <p>Breakfast: {selectedLog.breakfast} Lunch: {selectedLog.lunch} Dinner: {selectedLog.dinner}</p>
                <h5>How active: {starGenerator(selectedLog.activity)}</h5>
                <p>{workTranslate(selectedLog.timeFrom, selectedLog.timeTo)}</p>
                <p>Activity done: {selectedLog.exercise}</p>
                <div className="btn-group">
                    <button className="btn btn-primary" type="button">Previous</button>
                    <button className="btn btn-primary" type="button">Next</button>
                </div>
            </div>
        )
    }
}

function starGenerator(numStars){
    let output = [];
    let halfStar = false;
    numStars = numStars / 2;
    if(numStars % 1 != 0){
        halfStar = true;
    }
    for(let i = 0; i < 5; i++){
        if(i < Math.floor(numStars)){
            output.push(<FontAwesomeIcon icon="star" color="gold"/>)
        }
        else if(i == Math.floor(numStars) && halfStar == true){
            output.push(<FontAwesomeIcon icon="star-half-alt" color="gold"/>)
        }
        else{
            output.push(<FontAwesomeIcon icon={['far', 'star']} color="gold"/>)
        }
    }
    return output;
}

function medsIconGenerator(yOrN){
    if(yOrN === 'yes'){
        return <FontAwesomeIcon icon="check-square" color="green"/>
    }
    else if(yOrN === 'no'){
        return <i class="far fa-times-circle"></i>
    }
}

function workTranslate(begin, end){
    if(begin == end){
        return "No work shift"
    }
    else{
        return "Worked from " + begin + " to " + end;
    }
}